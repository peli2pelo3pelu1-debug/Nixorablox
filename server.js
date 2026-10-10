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

// Seguridad de sesiones y auditoría. Por diseño no se guarda ni se lee la IP.
let authSchemaPromise=null;
async function initAuthSchema(){
 if(!economyPool)throw new Error('Falta DATABASE_URL o no se pudo iniciar PostgreSQL.');
 if(!authSchemaPromise)authSchemaPromise=(async()=>{
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_account_sessions (
   username_norm TEXT PRIMARY KEY, username TEXT NOT NULL, session_id TEXT NOT NULL,
   device_name TEXT NOT NULL DEFAULT 'Dispositivo desconocido',
   location_label TEXT NOT NULL DEFAULT 'No compartida', user_agent TEXT NOT NULL DEFAULT '',
   started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), last_seen TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   expires_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_login_events (
   id BIGSERIAL PRIMARY KEY, username TEXT NOT NULL, username_norm TEXT NOT NULL,
   device_name TEXT NOT NULL DEFAULT 'Dispositivo desconocido',
   location_label TEXT NOT NULL DEFAULT 'No compartida', success BOOLEAN NOT NULL,
   event_type TEXT NOT NULL DEFAULT 'login', detail TEXT NOT NULL DEFAULT '',
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_credentials (
   username_norm TEXT PRIMARY KEY, username TEXT NOT NULL, pass_salt TEXT NOT NULL,
   pass_hash TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
  await economyPool.query(`CREATE INDEX IF NOT EXISTS nixora_login_events_user_date ON nixora_login_events(username_norm, created_at DESC)`);
 })().catch(e=>{authSchemaPromise=null;throw e});
 return authSchemaPromise;
}
let promoSchemaPromise=null;
async function initPromoSchema(){
 if(!economyPool)throw new Error('Falta DATABASE_URL o no se pudo iniciar PostgreSQL.');
 await initEconomySchema();await initAuthSchema();
 if(!promoSchemaPromise)promoSchemaPromise=(async()=>{
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_promo_codes (
   code TEXT PRIMARY KEY, reward BIGINT NOT NULL CHECK (reward > 0),
   max_redemptions INTEGER NOT NULL DEFAULT 0 CHECK (max_redemptions >= 0),
   used_count INTEGER NOT NULL DEFAULT 0 CHECK (used_count >= 0), active BOOLEAN NOT NULL DEFAULT TRUE,
   created_by TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), expires_at TIMESTAMPTZ NULL
  )`);
  await economyPool.query(`CREATE TABLE IF NOT EXISTS nixora_promo_redemptions (
   code TEXT NOT NULL REFERENCES nixora_promo_codes(code) ON DELETE CASCADE,
   username_norm TEXT NOT NULL, username TEXT NOT NULL, reward BIGINT NOT NULL,
   redeemed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), PRIMARY KEY(code,username_norm)
  )`);
  await economyPool.query('CREATE INDEX IF NOT EXISTS nixora_promo_codes_created ON nixora_promo_codes(created_at DESC)');
 })().catch(e=>{promoSchemaPromise=null;throw e});
 return promoSchemaPromise;
}
function scryptKey(password,salt){return new Promise((resolve,reject)=>crypto.scrypt(String(password),String(salt),64,(err,key)=>err?reject(err):resolve(key)))}
async function verifyOrEnrollCredential(name,password,register,claimLegacy){
 const pass=String(password||'');
 if(pass.length<8||pass.length>15)return {ok:false,status:401,error:'Usuario o contraseña incorrectos.'};
 const norm=name.toLowerCase();
 let out=await economyPool.query('SELECT username,pass_salt,pass_hash FROM nixora_credentials WHERE username_norm=$1',[norm]);
 if(!out.rowCount){
  if(!register&&!claimLegacy)return {ok:false,status:401,error:'Esta cuenta aún no se ha sincronizado con el servidor. Inicia sesión en el dispositivo donde la creaste para registrar sus credenciales, o regístrala si es una cuenta nueva.'};
  const salt=crypto.randomBytes(16).toString('hex'),hash=(await scryptKey(pass,salt)).toString('hex');
  try{
   await economyPool.query('INSERT INTO nixora_credentials(username_norm,username,pass_salt,pass_hash) VALUES($1,$2,$3,$4)',[norm,name,salt,hash]);
   return {ok:true,enrolled:true};
  }catch(err){if(err.code!=='23505')throw err;out=await economyPool.query('SELECT username,pass_salt,pass_hash FROM nixora_credentials WHERE username_norm=$1',[norm]);}
 }
 if(register)return {ok:false,status:409,error:'Ese nombre de cuenta ya está registrado en Nixora Blox.'};
 if(!out.rowCount)return {ok:false,status:401,error:'Usuario o contraseña incorrectos.'};
 const calculated=await scryptKey(pass,out.rows[0].pass_salt),saved=Buffer.from(out.rows[0].pass_hash,'hex');
 if(saved.length!==calculated.length||!crypto.timingSafeEqual(saved,calculated))return {ok:false,status:401,error:'Usuario o contraseña incorrectos.'};
 return {ok:true,enrolled:false};
}
const ownerUsername=()=>String(process.env.NIXORA_ADMIN_USER||'ParaCraftero').trim();
const isOwnerName=name=>String(name||'').trim().toLowerCase()===ownerUsername().toLowerCase();
function cleanDevice(value){return String(value||'Dispositivo desconocido').replace(/[\u0000-\u001f<>]/g,' ').trim().slice(0,100)||'Dispositivo desconocido'}
function cleanLocation(value){const s=String(value||'No compartida').replace(/[\u0000-\u001f<>]/g,' ').trim();return (s||'No compartida').slice(0,120)}
function cleanUserAgent(value){return String(value||'').replace(/[\u0000-\u001f]/g,' ').slice(0,320)}
function cleanSessionId(value){const s=String(value||'');return /^[A-Za-z0-9_-]{20,100}$/.test(s)?s:null}
async function logLoginEvent({username,device='Dispositivo desconocido',location='No compartida',success=false,type='login',detail=''}){
 await initAuthSchema();
 await economyPool.query('INSERT INTO nixora_login_events(username,username_norm,device_name,location_label,success,event_type,detail) VALUES($1,$2,$3,$4,$5,$6,$7)',[String(username||'Desconocido').slice(0,40),String(username||'').trim().toLowerCase().slice(0,80),cleanDevice(device),cleanLocation(location),!!success,String(type||'login').slice(0,20),String(detail||'').replace(/[\u0000-\u001f<>]/g,' ').slice(0,180)]);
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
  if(q.method==='POST'&&url.pathname==='/api/auth/session/open'){
   const d=await readJson(q),name=safeUsername(d.username),sid=cleanSessionId(d.sessionId),device=cleanDevice(d.device),location=cleanLocation(d.location),ua=cleanUserAgent(d.userAgent);
   if(!name||!sid)return json(r,400,{ok:false,error:'La cuenta o el identificador de sesión no es válido.'});
   if(!economyPool)return json(r,503,{ok:false,error:'No se pudo comprobar la sesión porque PostgreSQL no está disponible.'});
   await initAuthSchema();
   if(isOwnerName(name)&&!adminKeyMatches(q)){
    await logLoginEvent({username:name,device,location,success:false,type:'login',detail:'Falta la llave administrativa correcta'}).catch(()=>{});
    return json(r,403,{ok:false,error:'Esta cuenta está protegida. Introduce la llave administrativa configurada en Render.'});
   }
   if(!isOwnerName(name)){
    const credential=await verifyOrEnrollCredential(name,d.password,d.register===true,d.claimLegacy===true);
    if(!credential.ok){await logLoginEvent({username:name,device,location,success:false,type:'login',detail:credential.error}).catch(()=>{});return json(r,credential.status||401,{ok:false,error:credential.error});}
   }
   const client=await economyPool.connect();let conflict=false;
   try{
    await client.query('BEGIN');
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))',[name.toLowerCase()]);
    const current=await client.query('SELECT session_id, expires_at FROM nixora_account_sessions WHERE username_norm=$1 FOR UPDATE',[name.toLowerCase()]);
    if(current.rows[0]&&new Date(current.rows[0].expires_at).getTime()>Date.now()&&current.rows[0].session_id!==sid){conflict=true;await client.query('ROLLBACK');}
    else {
     await client.query(`INSERT INTO nixora_account_sessions(username_norm,username,session_id,device_name,location_label,user_agent,started_at,last_seen,expires_at)
      VALUES($1,$2,$3,$4,$5,$6,NOW(),NOW(),NOW()+INTERVAL '2 minutes')
      ON CONFLICT(username_norm) DO UPDATE SET username=EXCLUDED.username,session_id=EXCLUDED.session_id,device_name=EXCLUDED.device_name,location_label=EXCLUDED.location_label,user_agent=EXCLUDED.user_agent,started_at=NOW(),last_seen=NOW(),expires_at=NOW()+INTERVAL '2 minutes'`,[name.toLowerCase(),name,sid,device,location,ua]);
     await client.query("INSERT INTO nixora_login_events(username,username_norm,device_name,location_label,success,event_type,detail) VALUES($1,$2,$3,$4,TRUE,'login','Inicio de sesión correcto')",[name,name.toLowerCase(),device,location]);
     await client.query('COMMIT');
    }
   }catch(e){await client.query('ROLLBACK').catch(()=>{});throw e}finally{client.release()}
   if(conflict){await logLoginEvent({username:name,device,location,success:false,type:'login',detail:'La cuenta ya tenía una sesión activa'});return json(r,409,{ok:false,error:'Perdon, pero ya hay alguien jugando en esta cuenta. Por favor, vuelve más tarde.'});}
   return json(r,200,{ok:true,sessionId:sid,expiresInSeconds:120,message:'Sesión iniciada y registrada.'});
  }
  if(q.method==='POST'&&url.pathname==='/api/auth/password/change'){
   const d=await readJson(q),name=safeUsername(d.username),sid=cleanSessionId(d.sessionId),oldPassword=String(d.oldPassword||''),newPassword=String(d.newPassword||'');
   if(!name||!sid)return json(r,400,{ok:false,error:'Sesión no válida.'});
   if(isOwnerName(name))return json(r,403,{ok:false,error:'La cuenta ParaCraftero usa NIXORA_ADMIN_KEY en Render. Cambia esa llave desde Render, no desde esta pantalla.'});
   if(newPassword.length<8||newPassword.length>15||/\s|[<>]/.test(newPassword))return json(r,400,{ok:false,error:'La nueva contraseña debe tener entre 8 y 15 caracteres y no contener espacios ni < o >.'});
   await initAuthSchema();
   const active=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[name.toLowerCase(),sid]);
   if(!active.rowCount)return json(r,409,{ok:false,error:'La sesión ya no está activa. Vuelve a iniciar sesión.'});
   const row=await economyPool.query('SELECT pass_salt,pass_hash FROM nixora_credentials WHERE username_norm=$1',[name.toLowerCase()]);
   if(!row.rowCount)return json(r,404,{ok:false,error:'No se encontraron credenciales sincronizadas.'});
   const candidate=await scryptKey(oldPassword,row.rows[0].pass_salt),saved=Buffer.from(row.rows[0].pass_hash,'hex');
   if(saved.length!==candidate.length||!crypto.timingSafeEqual(saved,candidate))return json(r,403,{ok:false,error:'La contraseña actual no es correcta.'});
   const salt=crypto.randomBytes(16).toString('hex'),hash=(await scryptKey(newPassword,salt)).toString('hex');
   await economyPool.query('UPDATE nixora_credentials SET pass_salt=$2,pass_hash=$3 WHERE username_norm=$1',[name.toLowerCase(),salt,hash]);
   await logLoginEvent({username:name,success:true,type:'password',detail:'Contraseña cambiada'});
   return json(r,200,{ok:true,message:'Contraseña actualizada.'});
  }
  if(q.method==='POST'&&url.pathname==='/api/auth/username/change'){
   const d=await readJson(q),name=safeUsername(d.username),next=safeUsername(d.newUsername),sid=cleanSessionId(d.sessionId),password=String(d.password||'');
   if(!name||!next||!sid)return json(r,400,{ok:false,error:'El usuario debe tener entre 8 y 15 letras, números o guiones bajos.'});
   if(isOwnerName(name)||isOwnerName(next))return json(r,403,{ok:false,error:'El nombre de administrador ParaCraftero está protegido y no se puede cambiar aquí.'});
   if(name.toLowerCase()===next.toLowerCase())return json(r,400,{ok:false,error:'El nuevo nombre debe ser diferente.'});
   await initAuthSchema();
   const active=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[name.toLowerCase(),sid]);
   if(!active.rowCount)return json(r,409,{ok:false,error:'La sesión ya no está activa. Vuelve a iniciar sesión.'});
   const creds=await verifyOrEnrollCredential(name,password,false,false);
   if(!creds.ok)return json(r,403,{ok:false,error:'La contraseña actual no es correcta.'});
   const client=await economyPool.connect();
   try{
    await client.query('BEGIN');
    await client.query('UPDATE nixora_credentials SET username_norm=$2,username=$3 WHERE username_norm=$1',[name.toLowerCase(),next.toLowerCase(),next]);
    await client.query('UPDATE nixora_account_sessions SET username_norm=$2,username=$3 WHERE username_norm=$1 AND session_id=$4',[name.toLowerCase(),next.toLowerCase(),next,sid]);
    await client.query('UPDATE nixora_wallets SET username_norm=$2,username=$3 WHERE username_norm=$1',[name.toLowerCase(),next.toLowerCase(),next]);
    await client.query("INSERT INTO nixora_login_events(username,username_norm,device_name,location_label,success,event_type,detail) VALUES($1,$2,$3,$4,TRUE,'rename',$5)",[next,next.toLowerCase(),cleanDevice(d.device),cleanLocation(d.location),'Nombre cambiado desde '+name]);
    await client.query('COMMIT');
   }catch(e){await client.query('ROLLBACK').catch(()=>{});if(e.code==='23505')return json(r,409,{ok:false,error:'Ese nombre ya está registrado.'});throw e}finally{client.release()}
   return json(r,200,{ok:true,username:next,message:'Nombre actualizado.'});
  }
  if(q.method==='POST'&&url.pathname==='/api/auth/session/heartbeat'){
   const d=await readJson(q),name=safeUsername(d.username),sid=cleanSessionId(d.sessionId);
   if(!name||!sid)return json(r,400,{ok:false,error:'Sesión no válida.'});
   await initAuthSchema();const out=await economyPool.query(`UPDATE nixora_account_sessions SET last_seen=NOW(),expires_at=NOW()+INTERVAL '2 minutes' WHERE username_norm=$1 AND session_id=$2 RETURNING username`,[name.toLowerCase(),sid]);
   if(!out.rowCount)return json(r,409,{ok:false,error:'La sesión ya no está activa. Vuelve a iniciar sesión.'});
   return json(r,200,{ok:true});
  }
  if(q.method==='POST'&&url.pathname==='/api/auth/session/close'){
   const d=await readJson(q),name=safeUsername(d.username),sid=cleanSessionId(d.sessionId);
   if(!name||!sid)return json(r,400,{ok:false,error:'Sesión no válida.'});
   await initAuthSchema();await economyPool.query('DELETE FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2',[name.toLowerCase(),sid]);return json(r,200,{ok:true});
  }
  if(q.method==='GET'&&url.pathname==='/api/auth/login-history'){
   const actor=url.searchParams.get('actor')||'';if(!isOwnerName(actor)||!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Solo el administrador puede consultar este historial.'});
   await initAuthSchema();const out=await economyPool.query('SELECT id,username,device_name,location_label,success,event_type,detail,created_at FROM nixora_login_events ORDER BY created_at DESC LIMIT 150');
   const active=await economyPool.query('SELECT username,device_name,location_label,started_at,last_seen,expires_at FROM nixora_account_sessions WHERE expires_at>NOW() ORDER BY username_norm');
   return json(r,200,{ok:true,events:out.rows.map(x=>({id:Number(x.id),username:x.username,device:x.device_name,location:x.location_label,success:x.success,type:x.event_type,detail:x.detail,createdAt:x.created_at})),active:active.rows.map(x=>({username:x.username,device:x.device_name,location:x.location_label,startedAt:x.started_at,lastSeen:x.last_seen,expiresAt:x.expires_at}))});
  }
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
  if(q.method==='GET'&&url.pathname==='/api/codes/admin-list'){
   const actor=url.searchParams.get('actor')||'',sid=cleanSessionId(url.searchParams.get('sessionId'));
   if(!sid||!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Solo ParaCraftero puede administrar los códigos. Revisa la llave de Render y vuelve a iniciar sesión.'});
   await initPromoSchema();
   const activeSession=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[String(actor).toLowerCase(),sid]);
   if(!activeSession.rowCount)return json(r,409,{ok:false,error:'La sesión de administrador ha caducado. Vuelve a iniciar sesión.'});
   const out=await economyPool.query('SELECT code,reward,max_redemptions,used_count,active,created_by,created_at FROM nixora_promo_codes ORDER BY created_at DESC LIMIT 250');
   return json(r,200,{ok:true,codes:out.rows.map(c=>({code:c.code,reward:Number(c.reward),maxRedemptions:Number(c.max_redemptions),usedCount:Number(c.used_count),active:!!c.active,createdBy:c.created_by,createdAt:c.created_at}))});
  }
  if(q.method==='POST'&&url.pathname==='/api/codes/admin-create'){
   const d=await readJson(q),actor=safeUsername(d.actor),sid=cleanSessionId(d.sessionId),code=String(d.code||'').trim().toUpperCase(),reward=Number(d.reward),maxRedemptions=Number(d.maxRedemptions||0);
   if(!actor||!sid)return json(r,400,{ok:false,error:'Cuenta o sesión inválida.'});
   if(!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Solo ParaCraftero puede crear códigos. Comprueba la llave secreta de Render.'});
   if(!/^[A-Z0-9_-]{3,32}$/.test(code))return json(r,400,{ok:false,error:'El código debe tener entre 3 y 32 letras, números, guiones o guiones bajos.'});
   if(!Number.isSafeInteger(reward)||reward<1||reward>1000000000)return json(r,400,{ok:false,error:'La recompensa debe ser un entero entre 1 y 1.000.000.000.'});
   if(!Number.isSafeInteger(maxRedemptions)||maxRedemptions<0||maxRedemptions>1000000)return json(r,400,{ok:false,error:'La cantidad máxima de canjes debe ser un entero entre 0 y 1.000.000.'});
   await initPromoSchema();
   const active=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[actor.toLowerCase(),sid]);
   if(!active.rowCount)return json(r,409,{ok:false,error:'La sesión de administrador ha caducado. Vuelve a iniciar sesión.'});
   try{
    const out=await economyPool.query('INSERT INTO nixora_promo_codes(code,reward,max_redemptions,created_by) VALUES($1,$2,$3,$4) RETURNING code,reward,max_redemptions,used_count,active,created_at',[code,reward,maxRedemptions,actor]);
    const c=out.rows[0];return json(r,201,{ok:true,code:c.code,reward:Number(c.reward),maxRedemptions:Number(c.max_redemptions),usedCount:Number(c.used_count),active:!!c.active,createdAt:c.created_at});
   }catch(e){if(e.code==='23505')return json(r,409,{ok:false,error:'Ya existe un código con ese nombre.'});throw e}
  }
  if(q.method==='POST'&&url.pathname==='/api/codes/admin-toggle'){
   const d=await readJson(q),actor=safeUsername(d.actor),sid=cleanSessionId(d.sessionId),code=String(d.code||'').trim().toUpperCase(),active=d.active===true;
   if(!actor||!sid||!adminAuthorized(q,actor))return json(r,403,{ok:false,error:'Solo ParaCraftero puede activar o desactivar códigos.'});
   if(!/^[A-Z0-9_-]{3,32}$/.test(code))return json(r,400,{ok:false,error:'Código inválido.'});
   await initPromoSchema();const valid=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[actor.toLowerCase(),sid]);
   if(!valid.rowCount)return json(r,409,{ok:false,error:'La sesión de administrador ha caducado. Vuelve a iniciar sesión.'});
   const out=await economyPool.query('UPDATE nixora_promo_codes SET active=$2 WHERE code=$1 RETURNING code,active',[code,active]);
   if(!out.rowCount)return json(r,404,{ok:false,error:'No existe ese código.'});
   return json(r,200,{ok:true,code:out.rows[0].code,active:!!out.rows[0].active});
  }
  if(q.method==='POST'&&url.pathname==='/api/codes/redeem'){
   const d=await readJson(q),username=safeUsername(d.username),sid=cleanSessionId(d.sessionId),code=String(d.code||'').trim().toUpperCase();
   if(!username||!sid||!/^[A-Z0-9_-]{3,32}$/.test(code))return json(r,400,{ok:false,error:'El usuario, sesión o código no es válido.'});
   await initPromoSchema();
   const client=await economyPool.connect();let result=null,fail=null;
   try{
    await client.query('BEGIN');
    const session=await client.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW() FOR UPDATE',[username.toLowerCase(),sid]);
    if(!session.rowCount){fail={status:409,error:'Tu sesión no está activa. Vuelve a iniciar sesión.'};await client.query('ROLLBACK')}
    else {
     const found=await client.query('SELECT code,reward,max_redemptions,used_count,active,expires_at FROM nixora_promo_codes WHERE code=$1 FOR UPDATE',[code]);
     if(!found.rowCount){fail={status:404,error:'Ese código no existe.'};await client.query('ROLLBACK')}
     else {
      const c=found.rows[0];
      if(!c.active){fail={status:410,error:'Ese código está desactivado.'};await client.query('ROLLBACK')}
      else if(c.expires_at&&new Date(c.expires_at).getTime()<=Date.now()){fail={status:410,error:'Ese código ha caducado.'};await client.query('ROLLBACK')}
      else if(Number(c.max_redemptions)>0&&Number(c.used_count)>=Number(c.max_redemptions)){fail={status:410,error:'Se agotaron los canjes de ese código.'};await client.query('ROLLBACK')}
      else {
       const prior=await client.query('SELECT 1 FROM nixora_promo_redemptions WHERE code=$1 AND username_norm=$2',[code,username.toLowerCase()]);
       if(prior.rowCount){fail={status:409,error:'Ya canjeaste este código con esta cuenta.'};await client.query('ROLLBACK')}
       else {
        await client.query('INSERT INTO nixora_wallets(username_norm,username,balance) VALUES($1,$2,0) ON CONFLICT(username_norm) DO NOTHING',[username.toLowerCase(),username]);
        const wallet=await client.query('SELECT username,balance FROM nixora_wallets WHERE username_norm=$1 FOR UPDATE',[username.toLowerCase()]);
        const before=Number(wallet.rows[0].balance),amount=Number(c.reward),after=before+amount;
        if(!Number.isSafeInteger(after)||after>1000000000){fail={status:409,error:'El saldo máximo de Nixdollars se alcanzaría con esta recompensa.'};await client.query('ROLLBACK')}
        else {
         await client.query('UPDATE nixora_wallets SET username=$2,balance=$3,updated_at=NOW() WHERE username_norm=$1',[username.toLowerCase(),username,after]);
         await client.query('INSERT INTO nixora_promo_redemptions(code,username_norm,username,reward) VALUES($1,$2,$3,$4)',[code,username.toLowerCase(),username,amount]);
         await client.query('UPDATE nixora_promo_codes SET used_count=used_count+1 WHERE code=$1',[code]);
         await client.query("INSERT INTO nixora_wallet_transactions(actor,target,action,amount,balance_before,balance_after) VALUES($1,$2,'add',$3,$4,$5)",['CODE:'+code,username,amount,before,after]);
         await client.query('COMMIT');result={code,reward:amount,balance:after,username};
        }
       }
      }
     }
    }
   }catch(e){await client.query('ROLLBACK').catch(()=>{});if(e.code==='23505')fail={status:409,error:'Este código ya fue canjeado por esta cuenta.'};else throw e}finally{client.release()}
   if(fail)return json(r,fail.status,{ok:false,error:fail.error});
   if(result){await sendWalletToName(result.username,result.balance);return json(r,200,{ok:true,code:result.code,reward:result.reward,balance:result.balance})}
   return json(r,500,{ok:false,error:'No se pudo canjear el código.'});
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
 ws.on('message',async raw=>{let d;try{d=JSON.parse(raw)}catch{return}
  if(d.t==='join'){
   const n=String(d.n||'').replace(/[^\w-]/g,'').slice(0,16),world=String(d.world||d.g||'').slice(0,80),room=String(d.room||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12),g=room?world+'::'+room:world,sid=cleanSessionId(d.sessionId);
   if(!safeUsername(n)||!world||!sid||!economyPool){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No se pudo verificar tu sesión. Vuelve a iniciar sesión.'}));return ws.close(1008,'Sesión no válida')}
   try{await initAuthSchema();const valid=await economyPool.query('SELECT 1 FROM nixora_account_sessions WHERE username_norm=$1 AND session_id=$2 AND expires_at>NOW()',[n.toLowerCase(),sid]);if(!valid.rowCount){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No se pudo verificar tu sesión. Vuelve a iniciar sesión.'}));return ws.close(1008,'Sesión no válida')}}catch(err){console.error('No se pudo validar sesión WebSocket:',err.message);ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No se pudo verificar tu sesión con PostgreSQL.'}));return ws.close(1011,'Validación fallida')}
   if([...P.values()].some(p=>p.n.toLowerCase()===n.toLowerCase())){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'Perdon, pero ya hay alguien jugando en esta cuenta. Por favor, vuelve más tarde.'}));return ws.close(1008,'Cuenta ocupada')}
   if(room&&!d.owner&&!([...P.values()].some(p=>p.world===world&&p.room===room))){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No existe una sala privada con ese código. Comprueba el código con tu amigo.'}));return ws.close()}
   const pvp=!!d.pvp,duelMembers=[...P.entries()].filter(([otherId,p])=>otherId!==id&&p.g===g&&p.pvp);
   if(pvp&&duelMembers.length>=2){ws.send(JSON.stringify({t:'chat',n:'Arena',m:'Esta arena ya tiene dos jugadores. Busca otra partida 1 contra 1.'}));return ws.close(1008,'Arena completa')}
   const side=pvp?(duelMembers.length?(duelMembers[0][1].side===1?2:1):1):0;
   const me={ws,n,g,world,room,av:d.av||{},rank:String(d.rank||'').slice(0,40),x:0,y:0,z:0,ry:0,sp:0,cr:0,pvp,side,hp:100,kos:0,lastAttack:0,won:false};
   P.set(id,me);
   if(economyPool){readWallet(me.n).then(w=>{if(w&&ws.readyState===1)ws.send(JSON.stringify({t:'wallet',username:me.n,balance:Number(w.balance)}))}).catch(e=>console.error('No se pudo cargar la billetera al entrar:',e.message))}
   for(const [otherId,p] of P){if(otherId!==id&&p.g===me.g&&p.ws.readyState===1){ws.send(JSON.stringify({t:'st',id:otherId,n:p.n,av:p.av,rank:p.rank,x:p.x,y:p.y,z:p.z,ry:p.ry,sp:p.sp,cr:p.cr}));p.ws.send(JSON.stringify({t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,g:me.g,cr:me.cr}));}}
   if(pvp){const duel=[...P.values()].filter(p=>p.g===me.g&&p.pvp);if(duel.length===1)ws.send(JSON.stringify({t:'duelWaiting'}));else if(duel.length===2){duel[0].ws.send(JSON.stringify({t:'duelStart',side:duel[0].side,opponent:duel[1].n}));duel[1].ws.send(JSON.stringify({t:'duelStart',side:duel[1].side,opponent:duel[0].n}))}}
   return;
  }
  const me=P.get(id);if(!me)return;
  if(d.t==='st'){me.x=Number.isFinite(+d.x)?Math.max(-10000,Math.min(10000,+d.x)):me.x;me.y=Number.isFinite(+d.y)?Math.max(-1000,Math.min(1000,+d.y)):me.y;me.z=Number.isFinite(+d.z)?Math.max(-10000,Math.min(10000,+d.z)):me.z;me.ry=Number.isFinite(+d.ry)?+d.ry:me.ry;me.sp=Number.isFinite(+d.sp)?+d.sp:0;me.cr=+d.cr?1:0;bc(me,{t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,g:me.g,cr:me.cr})}
  if(d.t==='attack'){
   if(!me.pvp||me.won||Date.now()-me.lastAttack<450)return;
   const tid=Number(d.targetId),target=P.get(tid);if(!target||target===me||!target.pvp||target.g!==me.g||target.won||target.ws.readyState!==1)return;
   const dx=me.x-target.x,dy=me.y-target.y,dz=me.z-target.z;if(dx*dx+dy*dy+dz*dz>5.5*5.5)return;
   me.lastAttack=Date.now();target.hp=Math.max(0,target.hp-25);target.ws.send(JSON.stringify({t:'combatHit',hp:target.hp,attacker:me.n}));
   if(target.hp<=0){me.kos++;target.kos=0;target.hp=100;me.hp=100;target.ws.send(JSON.stringify({t:'combatRespawn',kos:target.kos,side:target.side}));me.ws.send(JSON.stringify({t:'combatKO',target:target.n,kos:me.kos,winner:me.kos>=3}));if(me.kos>=3){me.won=true;target.won=true;target.ws.send(JSON.stringify({t:'matchOver',winner:me.n}))}}
   return;
  }
  if(d.t==='chat')bc(me,{t:'chat',n:me.n,m:clean(d.m)});
 });
 ws.on('close',()=>{const me=P.get(id);if(me){bc(me,{t:'bye',id});P.delete(id);if(me.pvp)for(const p of P.values())if(p.g===me.g&&p.pvp&&p.ws.readyState===1)p.ws.send(JSON.stringify({t:'duelWaiting'}))}})
});
srv.listen(PORT,()=>console.log('Nixora Blox listo en http://localhost:'+PORT));
