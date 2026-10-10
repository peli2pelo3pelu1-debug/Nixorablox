// Nixora Blox - servidor multijugador (jugadores reales + chat con filtro)
// Uso:  npm install  &&  node server.js   ->  abre http://localhost:3000
const http=require('http'),fs=require('fs'),path=require('path'),{WebSocketServer}=require('ws');
const PORT=process.env.PORT||3000,T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const BW=['puta','puto','mierda','pendejo','idiota','estupido','estúpido','imbecil','imbécil','cabron','cabrón','verga','coño','joder','carajo','marica','maricon','zorra','fuck','shit','bitch','asshole','dick','cunt'];
const RE=new RegExp('(?<![a-záéíóúñ])('+BW.join('|')+')(?![a-záéíóúñ])','gi');
const clean=m=>String(m).slice(0,200).replace(RE,w=>'#'.repeat(w.length));
const srv=http.createServer((q,r)=>{if(q.url.startsWith('/players')){const list=[...P.values()].map(p=>({n:p.n,g:p.room?(p.world+' (sala privada)'):p.world,world:p.world,private:!!p.room,rank:p.rank}));r.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*','Cache-Control':'no-store'});return r.end(JSON.stringify({players:list}))}if(q.url.startsWith('/count')){const g=new URL(q.url,'http://x').searchParams.get('g');r.writeHead(200,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Cache-Control':'no-store'});return r.end(JSON.stringify({n:[...P.values()].filter(p=>p.world===g||p.g===g).length}))}let f=q.url.split('?')[0];if(f=='/')f='/index.html';
 const p=path.join(__dirname,path.normalize(f));if(!p.startsWith(__dirname)){r.writeHead(403);return r.end()}
 fs.readFile(p,(e,b)=>{if(e){r.writeHead(404);return r.end('No encontrado')}r.writeHead(200,{'Content-Type':T[path.extname(p)]||'application/octet-stream'});r.end(b)})});
const wss=new WebSocketServer({server:srv}),P=new Map();let nid=1;
const bc=(me,m)=>{const s=JSON.stringify(m);for(const p of P.values())if(p!==me&&p.g==me.g&&p.ws.readyState==1)p.ws.send(s)};
wss.on('connection',ws=>{const id=nid++;
 ws.on('message',raw=>{let d;try{d=JSON.parse(raw)}catch{return}
  if(d.t=='join'){const n=String(d.n||'').replace(/[^\w-]/g,'').slice(0,16),world=String(d.world||d.g||'').slice(0,80),room=String(d.room||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12),g=room?world+'::'+room:world;
   if(!n||!world||[...P.values()].some(p=>p.n.toLowerCase()==n.toLowerCase())){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'Ya hay un jugador conectado con ese nombre, o el mundo no es válido.'}));return ws.close()}
   if(room&&!d.owner&&!([...P.values()].some(p=>p.world===world&&p.room===room))){ws.send(JSON.stringify({t:'chat',n:'Servidor',m:'No existe una sala privada con ese código. Comprueba el código con tu amigo.'}));return ws.close()}
   const me={ws,n,g,world,room,av:d.av||{},rank:String(d.rank||'').slice(0,40),x:0,y:0,z:0,ry:0,sp:0,cr:0};
   P.set(id,me);
   for(const [otherId,p] of P){if(otherId!==id&&p.g===me.g&&p.ws.readyState===1){ws.send(JSON.stringify({t:'st',id:otherId,n:p.n,av:p.av,rank:p.rank,x:p.x,y:p.y,z:p.z,ry:p.ry,sp:p.sp,cr:p.cr}));p.ws.send(JSON.stringify({t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,cr:me.cr}));}}
   return}
  const me=P.get(id);if(!me)return;
  if(d.t=='st'){me.x=Number.isFinite(+d.x)?+d.x:me.x;me.y=Number.isFinite(+d.y)?+d.y:me.y;me.z=Number.isFinite(+d.z)?+d.z:me.z;me.ry=Number.isFinite(+d.ry)?+d.ry:me.ry;me.sp=Number.isFinite(+d.sp)?+d.sp:0;me.cr=+d.cr?1:0;bc(me,{t:'st',id,n:me.n,av:me.av,rank:me.rank,x:me.x,y:me.y,z:me.z,ry:me.ry,sp:me.sp,g:me.g,cr:me.cr});}
  if(d.t=='chat')bc(me,{t:'chat',n:me.n,m:clean(d.m)})});
 ws.on('close',()=>{const me=P.get(id);if(me){bc(me,{t:'bye',id});P.delete(id)}})});
srv.listen(PORT,()=>console.log('Nixora Blox listo en http://localhost:'+PORT));
