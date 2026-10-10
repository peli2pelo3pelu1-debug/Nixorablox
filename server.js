// Nixora Blox - servidor multijugador (jugadores reales + chat con filtro)
// Uso:  npm install  &&  node server.js   ->  abre http://localhost:3000
const http=require('http'),fs=require('fs'),path=require('path'),{WebSocketServer}=require('ws');
const crypto=require('crypto');
const PORT=process.env.PORT||3000,T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const BW=['puta','puto','mierda','pendejo','idiota','estupido','estúpido','imbecil','imbécil','cabron','cabrón','verga','coño','joder','carajo','marica','maricon','zorra','fuck','shit','bitch','asshole','dick','cunt'];
const RE=new RegExp('(?<![a-záéíóúñ])('+BW.join('|')+')(?![a-záéíóúñ])','gi');
const clean=m=>String(m).slice(0,200).replace(RE,w=>'#'.repeat(w.length));
const json=(r,status,obj)=>{r.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});r.end(JSON.stringify(obj))};
let economyPool=null,economySchemaPromise=null;
if(process.env.DATABASE_URL){
 try{
  const {Pool}=require('pg');
  economyPool=new Pool({connectionString:process.env.DATABASE_URL,max:5,idleTimeoutMillis:30000,connectionTimeoutMillis:10000});
  economyPool.on('error',e=>console.error('Error PostgreSQL (conexión inactiva):',e.message));
 }catch(e){console.error('No se pudo cargar pg. Comprueba que package.json instala pg:',e.message)}
}
async function initEconomySchema(){
 if(!economyPool)throw new Error('Falta DATABASE_URL o no se pudo iniciar PostgreSQL.');
 if(!economySchemaPromise)economySchemaPromise=(async()=>{
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_wallets (
   username_norm TEXT PRIMARY KEY,
   username TEXT NOT NULL,
   balance BIGINT NOT NULL DEFAULT 0 CHECK (balance >= 0),
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_wallet_transactions (
   id BIGSERIAL PRIMARY KEY,
   actor TEXT NOT NULL,
   target TEXT NOT NULL,
   action TEXT NOT NULL CHECK (action IN ('add','sub','set')),
   amount BIGINT NOT NULL,
   balance_before BIGINT NOT NULL,
   balance_after BIGINT NOT NULL,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
 })().catch(e=>{economySchemaPromise=null;throw e});
 return economySchemaPromise;
}
function adminKeyMatches(req){
 const expected=String(process.env.NIXORA_ADMIN_KEY||''),given=String(req.headers['x-admin-key']||'');
 if(expected.length<24||!given)return false;
 const a=Buffer.from(expected),b=Buffer.from(given);
 return a.length===b.length&&crypto.timingSafeEqual(a,b);
}
function adminAuthorized(req,actor){
 const owner=String(process.env.NIXORA_ADMIN_USER||'ParaCraftero').trim().toLowerCase();
 return !!owner&&String(actor||'').trim().toLowerCase()===owner&&adminKeyMatches(req);
}
function readJson(req,limit=32768){return new Promise((resolve,reject)=>{let body='',tooBig=false;req.on('data',chunk=>{body+=chunk;if(body.length>limit){tooBig=true;req.destroy()}});req.on('end',()=>{if(tooBig)return reject(new Error('Solicitud demasiado grande'));try{resolve(JSON.parse(body||'{}'))}catch{reject(new Error('JSON inválido'))}});req.on('error',reject)})}
function safeUsername(value){const name=String(value||'').trim();return /^[A-Za-z0-9_]{8,15}$/.test(name)?name:null}
async function readWallet(username){await initEconomySchema();const q=await economyPool.query('SELECT username, balance, updated_at FROM nixora_wallets WHERE username_norm=$1',[username.toLowerCase()]);return q.rows[0]||null}
async function sendWalletToName(name,balance){for(const p of P.values())if(p.n.toLowerCase()===String(name).toLowerCase()&&p.ws.readyState===1){p.ws.send(JSON.stringify({t:'wallet',username:p.n,balance:Number(balance)}))}}
const srv=http.createServer(async(q,r)=>{
 const url=new URL(q.url,'http://localhost');
 try{
  if(q.method==='GET'&&url.pathname==='/api/economy/health'){
   if(!economyPool)return json(r,503,{ok:false,configured:false,message:'DATABASE_URL no está configurada en Render.'});
   await initEconomySchema();await economyPool.query('SELECT 1');return json(r,200,{ok:true,configured:true,message:'PostgreSQL conectado.'});
  }
  if(q.method==='GET'&&url.pathname==='/api/economy/wallets'){
   const actor=url.searchParams.get('actor');if(!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Clave administrativa incorrecta o NIXORA_ADMIN_USER no coincide.'});
   await initEconomySchema();const out=await economyPool.query('SELECT username, balance, updated_at FROM nixora_wallets ORDER BY username_norm LIMIT 1000');
   return json(r,200,{ok:true,wallets:out.rows.map(w=>({username:w.username,balance:Number(w.balance),updatedAt:w.updated_at}))});
  }
  if(q.method==='POST'&&url.pathname==='/api/economy/admin-adjust'){
   const d=await readJson(q);const actor=safeUsername(d.actor),target=safeUsername(d.target),action=String(d.action||''),amount=Number(d.amount),initial=Number(d.initialBalance||0);
   if(!actor||!target)return json(r,400,{ok:false,error:'El nombre de usuario debe tener entre 8 y 15 letras, números o guiones bajos.'});
   if(!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Clave administrativa incorrecta, o el usuario no coincide con NIXORA_ADMIN_USER.'});
   if(!['add','sub','set'].includes(action))return json(r,400,{ok:false,error:'Acción económica no válida.'});
   if(!Number.isSafeInteger(amount)||amount<0||amount>1000000000)return json(r,400,{ok:false,error:'La cantidad debe ser un número entero entre 0 y 1.000.000.000.'});
   const initialBalance=Number.isSafeInteger(initial)&&initial>=0&&initial<=1000000000?initial:0;
   await initEconomySchema();const client=await economyPool.connect();let updated;
   try{
    await client.query('BEGIN');
    await client.query('INSERT INTO nixora_wallets(username_norm, username, balance) VALUES($1,$2,$3) ON CONFLICT(username_norm) DO NOTHING',[target.toLowerCase(),target,initialBalance]);
    const prev=await client.query('SELECT username,balance FROM nixora_wallets WHERE username_norm=$1 FOR UPDATE',[target.toLowerCase()]);
    const before=Number(prev.rows[0].balance);let after=before;
    if(action==='add')after=before+amount;else if(action==='sub')after=Math.max(0,before-amount);else after=amount;
    if(!Number.isSafeInteger(after)||after>1000000000)throw new Error('El saldo resultante supera el máximo permitido (1.000.000.000).');
    const upd=await client.query('UPDATE nixora_wallets SET username=$2,balance=$3,updated_at=NOW() WHERE username_norm=$1 RETURNING username,balance,updated_at',[target.toLowerCase(),target,after]);
    updated=upd.rows[0];
    await client.query('INSERT INTO nixora_wallet_transactions(actor,target,action,amount,balance_before,balance_after) VALUES($1,$2,$3,$4,$5,$6)',[actor,target,action,amount,before,after]);
    await client.query('COMMIT');
   }catch(e){await client.query('ROLLBACK').catch(()=>{});throw e}finally{client.release()}
   await sendWalletToName(updated.username,updated.balance);
   return json(r,200,{ok:true,username:updated.username,balance:Number(updated.balance),updatedAt:updated.updated_at,message:'Saldo guardado en PostgreSQL.'});
  }
  if(q.method==='GET'&&url.pathname==='/players'){
   const list=[...P.values()].map(p=>({n:p.n,g:p.room?(p.world+' (sala privada)'):p.world,world:p.world,private:!!p.room,rank:p.rank}));return json(r,200,{players:list});
  }
  if(q.method==='GET'&&url.pathname==='/count'){
   const g=url.searchParams.get('g');return json(r,200,{n:[...P.values()].filter(p=>p.world===g||p.g===g).length});
  }
  let f=url.pathname;if(f==='/')f='/index.html';
  const file=path.resolve(__dirname,'.'+path.normalize(f));if(!file.startsWith(path.resolve(__dirname)+path.sep)){r.writeHead(403);return r.end()}
  fs.readFile(file,(e,b)=>{if(e){r.writeHead(404);return r.end('No encontrado')}r.writeHead(200,{'Content-Type':T[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});r.end(b)});
 }catch(e){console.error('Error API/servidor:',e.message);if(!r.headersSent)json(r,500,{ok:false,error:e.message==='Solicitud demasiado grande'||e.message==='JSON inválido'?e.message:'Error del servidor o de la base de datos. Comprueba DATABASE_URL y los logs de Render.'});}
});
const wss=new WebSocketServer({server:srv}),P=new Map();let nid=1;
const bc=(me,m)=>{const s=JSON.stringify(m);for(const p of P.values())if(p!==me&&p.g==me.g&&p.ws.readyState==1)p.ws.send(s)};
wss.on('connection',ws=>{const id=nid++;
 ws.on('message',raw=>{let d;try{d=JSON.parse(raw)}catch{return}
  if(d.t=='join'){const n=String(d.n||'').replace(/[^\w-]/g,'').slice(0,16),world=String(d.world||d.g||'').slice(0,80),room=String(d.room||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12),g=room?world+'::'+room:world;
   if(!n||!world||[...P.values()].some(p=>p.n.toLowerCase()==n.toLowerCase())){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'Ya hay un jugador conectado con ese nombre, o el mundo no es válido.'}));return ws.close()}
   if(room&&!d.owner&&!([...P.values()].some(p=>p.world===world&&p.room===room))){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No existe una sala privada con ese código. Comprueba el código con tu amigo.'}));return ws.close()}
   const me={ws,n,g,world,room,av:d.av||{},rank:String(d.rank||'').slice(0,40),x:0,y:0,z:0,ry:0,sp:0,cr:0};
   P.set(id,me);
   if(economyPool){readWallet(me.n).then(w=>{if(w&&ws.readyState===1)ws.send(JSON.stringify({t:'wallet',username:me.n,balance:Number(w.balance)}))}).catch(e=>console.error('No se pudo cargar la billetera al entrar:',e.message))}
   for(const [otherId,p] of P){if(otherId!==id&&p.g===me.g&&p.ws.readyState===1){ws.send(JSON.stringify({t:'st',id:otherId,n:p.n,av:p.av,rank:p.rank,x:p.x,y:p.y,z:p.z,ry:p.ry,sp:p.sp,cr:p.cr}));p.ws.send(JSON.stringify({t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,cr:me.cr}));}}
   return}
  const me=P.get(id);if(!me)return;
  if(d.t=='st'){me.x=Number.isFinite(+d.x)?+d.x:me.x;me.y=Number.isFinite(+d.y)?+d.y:me.y;me.z=Number.isFinite(+d.z)?+d.z:me.z;me.ry=Number.isFinite(+d.ry)?+d.ry:me.ry;me.sp=Number.isFinite(+d.sp)?+d.sp:0;me.cr=+d.cr?1:0;bc(me,{t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,g:me.g,cr:me.cr});}
  if(d.t=='chat')bc(me,{t:'chat',n:me.n,m:clean(d.m)})});
 ws.on('close',()=>{const me=P.get(id);if(me){bc(me,{t:'bye',id});P.delete(id)}})});
srv.listen(PORT,()=>console.log('Nixora Blox listo en http://localhost:'+PORT));
