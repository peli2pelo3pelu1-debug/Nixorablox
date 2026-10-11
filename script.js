if(!window.THREE)document.body.insertAdjacentHTML('afterbegin','<div style="background:#b00020;color:#fff;padding:10px;text-align:center;position:relative;z-index:9">⚠ No cargó el motor 3D (Three.js). Conéctate a internet y recarga la página.</div>');
const $=s=>document.querySelector(s),
ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},
sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
hs=s=>{let x=7;for(const c of s)x=(x*31+c.charCodeAt(0))|0;return x},
esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
let OVR=ld('nx_o',{}),ANN=ld('nx_a',''),RK=ld('nx_r',null),MK=ld('nx_m',[]),U=ld('nx_u',{}),G=ld('nx_g',[]),C=ld('nx_c',{}),FR=ld('nx_f',['Ana_Blox','LunaPixel','Kratos_77']),me,cur='home',B=[],GR,quit=()=>{},SERVER_WALLETS=[];
const save=()=>{sv('nx_u',U);sv('nx_g',G);sv('nx_c',C);sv('nx_f',FR);sv('nx_m',MK);sv('nx_r',RK);sv('nx_o',OVR);sv('nx_a',ANN)},
cv=(k,d)=>C[k]??d,A=()=>U[me].av,
AV0={skin:'#e0ac69',hair:'#4a2c0a',shirt:'#9d4edd',pants:'#2b2b6e',eyes:0,hairT:1,top:0,bot:0,acc:0,mouth:1,pet:0,petA:0,aw:0,aj:0,ac:0,as:0,al:0},
SRV0=location.protocol.startsWith('http')?(location.protocol=='https:'?'wss://':'ws://')+location.host:'ws://localhost:3000',
BW=['puta','puto','mierda','pendejo','idiota','estupido','estúpido','imbecil','imbécil','cabron','cabrón','verga','coño','joder','carajo','marica','maricon','zorra','fuck','shit','bitch','asshole','dick','cunt'],
bad=m=>String(m).replace(new RegExp('(?<![a-záéíóúñ])('+BW.join('|')+')(?![a-záéíóúñ])','gi'),w=>'#'.repeat(w.length));

const PERM=[['Movimiento',['Volar','Velocidad personalizada','Salto personalizado','Gravedad baja','Atravesar paredes','Super salto','Salto infinito','Correr rápido','Teletransportarse','Teleport a jugador','Traer jugador','Invisibilidad','Inmortalidad','Vida infinita','Curarse','Cambiar tamaño','Congelar jugador','Empujar jugador','Lanzar jugador','Cámara libre','Cámara de espectador','Zoom ilimitado']],
['Economía',['Dar Nixdollar','Quitar Nixdollar','Fijar saldo','Ver billeteras','Tienda gratis','Cambiar precios','Crear ofertas','Regalar objetos','Quitar objetos','Reembolsar','Ver historial de compras','Bloquear compras']],
['Juegos',['Ver todos los juegos','Editar cualquier juego','Borrar juego','Destacar juego','Ocultar juego','Cambiar nombre de juego','Cambiar descripción de juego','Cambiar hashtag','Cambiar logo','Cambiar banner','Añadir bloques a un juego','Quitar bloques de un juego','Añadir scripts a un juego','Editar spawn de un juego','Activar lava','Cambiar gravedad de un juego','Cambiar cielo de un juego','Cambiar hora de un juego','Reiniciar juego','Cerrar servidor de juego','Clonar juego','Transferir juego']],
['Moderación',['Silenciar jugador','Quitar silencio','Expulsar','Banear','Desbanear','Banear temporal','Advertir','Ver reportes','Resolver reportes','Borrar mensajes','Congelar chat','Modo lento','Editar filtro de palabras','Bloquear imágenes','Revisar avatares','Revisar descripciones','Cambiar nombre ajeno','Restablecer contraseña ajena','Ver registro de actividad','Limpiar spam','Modo moderador','Ver lista de usuarios']],
['Rangos',['Ver rangos','Crear rangos','Editar rangos','Borrar rangos','Asignar rangos','Quitar rangos','Asignar rango DUEÑO','Ver permisos','Clonar rango','Ordenar rangos']],
['Avatares',['Dar avatares','Quitar avatares','Editar avatar ajeno','Crear avatares especiales','Aprobar avatares','Rechazar avatares','Publicar gratis','Avatares ilimitados','Cambiar piel ajena','Cambiar mascota ajena','Dar animaciones','Quitar animaciones','Avatares exclusivos','Aprobar mascotas']],
['Mercado',['Eliminar publicaciones','Destacar publicaciones','Aprobar publicaciones','Publicar sin límite','Subir archivos grandes','Editar publicaciones ajenas','Bloquear autor','Ver estadísticas','Precios del mercado','Moderar texturas']],
['Sistema',['Ver jugadores en línea','Mensaje global','Anuncio en pantalla','Apagar servidor','Reiniciar servidor','Modo mantenimiento','Cambiar hora global','Clima global','Ver rendimiento','Exportar datos','Importar datos','Copia de seguridad']],
['Social',['Editar descripción ajena','Verificar usuarios','Quitar verificado','Dar insignias','Quitar insignias','Cambiar nombre de rango visible','Crear eventos','Organizar torneos']],
['Studio y panel',['Usar panel de administrador','Usar Studio de admin','Importar modelos','Exportar modelos','Publicar sin imagen','Usar scripts avanzados','Modificar servicios','Explorador completo','Ejecutar comandos','Consola de administrador']],['Rendimiento y diagnóstico',['Ver ping de sala','Ver latencia por jugador','Ver uso de memoria','Ver FPS por cliente','Ver conexiones WebSocket','Ver errores recientes','Exportar diagnóstico de sala','Limitar frecuencia de eventos','Configurar tasa de actualización','Ver estado del hosting']],['Seguridad de cuentas',['Revisar sesiones activas','Cerrar sesiones ajenas','Forzar cierre de sesión','Exigir rotación de contraseña','Ver intentos de inicio','Bloquear registro nuevo','Aprobar cuentas nuevas','Revisar nombres duplicados','Marcar cuenta sospechosa','Revisar cambios de credenciales']],['Chat y comunidad',['Desactivar chat global','Configurar modo lento del chat','Bloquear enlaces en chat','Bloquear menciones masivas','Ver mensajes reportados','Crear filtro personalizado','Restaurar mensaje moderado','Configurar duración de silencio','Revisar historial de conversación','Limitar mensajes repetidos']],['Salas y servidores',['Crear plantilla de sala','Cambiar límite de jugadores','Definir sala solo amigos','Expulsar todos de sala','Bloquear entrada a sala','Transferir anfitrión','Ver lista de salas públicas','Reiniciar una sala','Programar cierre de sala','Cambiar región de sala']],['Herramientas de Studio',['Bloquear scripts externos','Validar scripts antes de publicar','Revisar historial de versiones','Restaurar versión anterior','Marcar versión estable','Bloquear edición compartida','Gestionar colaboradores','Configurar permisos por proyecto','Revisar cambios de bloques','Exportar plantilla de mundo']],['Inventario y comercio',['Revisar transacciones pendientes','Reembolsar compra específica','Deshabilitar artículo del catálogo','Fijar cantidad disponible','Configurar comisión del mercado','Revisar artículo denunciado','Bloquear vendedor','Ver historial de canjes','Crear cupón promocional','Configurar límite de regalos']],['Publicación y descubrimiento',['Validar metadatos de juego','Marcar juego recomendado','Programar publicación','Revisar juegos enviados','Solicitar cambios al creador','Comparar versiones publicadas','Bloquear etiquetas prohibidas','Gestionar portada de catálogo','Gestionar colecciones destacadas','Exportar catálogo de juegos']],['Notificaciones y protección',['Enviar aviso a grupo','Configurar aviso de mantenimiento','Programar anuncio global','Ocultar alertas automáticas','Configurar avisos de moderación','Ver entrega de notificaciones','Desactivar invitaciones externas','Limitar invitaciones entrantes','Gestionar lista de confianza','Configurar controles parentales']],['Copias y auditoría',['Ver registro de administradores','Revisar cambios de permisos','Ver historial de baneos','Exportar registro de auditoría','Programar copia de seguridad','Validar copia de seguridad','Comparar copias de seguridad','Restaurar configuración administrativa','Eliminar exportación temporal','Crear registro de incidente']],['Desarrollo y API',['Ver estado de API','Gestionar claves de desarrollo','Revocar clave de desarrollo','Configurar URL de servicio','Ver eventos de WebSocket','Probar conexión multijugador','Configurar límite de solicitudes','Bloquear cliente incompatible','Consultar versión de protocolo','Revisar errores de scripts']],['Eventos y torneos',['Crear evento programado','Editar reglas del torneo','Inscribir participantes','Cerrar inscripciones','Registrar resultados del evento','Asignar premios de evento','Enviar invitación de evento','Cancelar evento','Crear misión temporal','Finalizar misión temporal']],['Analítica y estadísticas',['Ver jugadores diarios','Ver tiempo medio de sesión','Ver juegos más visitados','Ver retención de usuarios','Ver monedas generadas','Ver artículos más adquiridos','Ver tasa de fallos','Ver uso de móvil y PC','Exportar estadísticas semanales','Comparar actividad por fecha']],['Moderación avanzada',['Crear caso de moderación','Asignar caso a moderador','Cerrar caso de moderación','Reabrir caso cerrado','Ver reportes por jugador','Adjuntar evidencia de reporte','Configurar nivel de advertencias','Detectar spam repetitivo','Revisar historial de sanciones','Apelar sanción']],['Accesibilidad e idioma',['Configurar escala de interfaz','Activar texto de alto contraste','Ajustar tamaño de texto','Configurar subtítulos','Configurar idioma predeterminado','Gestionar traducciones','Ver textos sin traducir','Configurar navegación por teclado','Reducir efectos visuales','Configurar modo daltonismo']],['Privacidad y datos',['Gestionar visibilidad de perfil','Limitar mensajes de desconocidos','Configurar lista de usuarios bloqueados','Exportar datos de una cuenta','Solicitar borrado de cuenta','Revisar datos guardados localmente','Configurar retención de mensajes','Ocultar estado en línea','Gestionar permiso de invitaciones','Revisar consentimientos de privacidad']]],
PN=PERM.flatMap(c=>c[1]),PI=Object.fromEntries(PN.map((n,i)=>[n,i])),
IMPL=['Volar','Velocidad personalizada','Salto personalizado','Gravedad baja','Atravesar paredes','Super salto','Salto infinito','Correr rápido','Teletransportarse','Invisibilidad','Inmortalidad','Vida infinita','Curarse','Cambiar tamaño','Congelar jugador','Zoom ilimitado','Dar Nixdollar','Quitar Nixdollar','Fijar saldo','Ver billeteras','Tienda gratis','Ver todos los juegos','Editar cualquier juego','Borrar juego','Destacar juego','Ocultar juego','Cambiar nombre de juego','Cambiar descripción de juego','Cambiar hashtag','Añadir bloques a un juego','Quitar bloques de un juego','Añadir scripts a un juego','Editar spawn de un juego','Activar lava','Cambiar gravedad de un juego','Cambiar hora de un juego','Clonar juego','Transferir juego','Silenciar jugador','Quitar silencio','Banear','Desbanear','Restablecer contraseña ajena','Ver lista de usuarios','Ver rangos','Crear rangos','Borrar rangos','Asignar rangos','Quitar rangos','Asignar rango DUEÑO','Ver permisos','Publicar gratis','Eliminar publicaciones','Anuncio en pantalla','Modo mantenimiento','Exportar datos','Importar datos','Copia de seguridad','Mensaje global','Clima global','Cambiar hora global','Editar descripción ajena','Verificar usuarios','Quitar verificado','Usar panel de administrador','Usar Studio de admin','Importar modelos','Exportar modelos','Usar scripts avanzados','Modificar servicios','Explorador completo','Ejecutar comandos','Consola de administrador'],
RSPEC=[['dueno','DUEÑO','👑','Dueño de Nixora Blox: tiene todos los permisos.',99,'all'],['codueno','Co-Dueño','💎','Casi todos los permisos, sin poder asignar DUEÑO.',10,'all'],['adminjefe','Administrador Jefe','🛡','Gestiona todo el servidor.',9,'all'],['admin','Administrador','🛡','Administra juegos, usuarios y economía.',8,[0,1,2,3,5,6,7,9]],['subadmin','Sub-Administrador','⚔','Ayuda a administrar.',6,[0,1,2,3,5,7,9]],['modjefe','Moderador Jefe','🔨','Lidera la moderación.',9,[3,7,8]],['mod','Moderador','🔨','Modera el chat y a los usuarios.',7,[3,8]],['submod','Sub-Moderador','🔧','Moderación básica.',4,[3]],['ayudante','Ayudante','🤝','Apoya a los jugadores nuevos.',3,[3,8]],['soporte','Soporte','🎧','Atiende consultas.',3,[3,8,7]],['dev','Desarrollador','💻','Acceso técnico y Studio.',8,[0,2,7,9]],['constjefe','Constructor Jefe','🏗','Lidera a los constructores.',8,[2,6,9]],['const','Constructor','🧱','Construye mundos.',6,[2,9]],['disenador','Diseñador','🎨','Crea avatares y diseños.',6,[5,6,9]],['eventos','Event Manager','🎉','Organiza eventos.',6,[2,7,8]],['streamer','Streamer','📺','Creador de contenido en directo.',3,[5,8]],['youtuber','YouTuber','▶','Creador de videos.',3,[5,8]],['embajador','Embajador','🌟','Representa a la comunidad.',4,[5,6,8]],['verificado','Verificado','✔','Usuario verificado.',2,[8]],['vipplus','VIP+','💠','Beneficios VIP máximos.',5,[0,1,5]],['vip','VIP','⭐','Beneficios VIP.',3,[0,1,5]],['pro','Miembro Pro','🔥','Miembro destacado.',2,[0,5]],['miembro','Miembro','🙂','Miembro de la comunidad.',1,[5]],['novato','Novato','🌱','Jugador nuevo, sin permisos especiales.',0,[]]],
mkRanks=()=>RSPEC.map(([id,n,ic,d,pw,cats])=>({id,n,ic,d,p:id=='dueno'?PN.map((_,i)=>i):PERM.flatMap((c,ci)=>(cats=='all'||cats.includes(ci))?c[1].map((nm,k)=>[nm,Math.ceil((k+1)*10/c[1].length)]).filter(([nm,lv])=>lv<=pw&&nm!='Asignar rango DUEÑO').map(([nm])=>PI[nm]):[])}));
if(!RK)RK=mkRanks();
const isOw=u=>String(u||'').trim().toLowerCase()==='paracraftero',rk=u=>RK.find(r=>r.id==(isOw(u)?'dueno':((U[u]||{}).rk||'novato')))||RK[RK.length-1],
can=p=>!!me&&(isOw(me)||(rk(me).p||[]).includes(PI[p])),need=p=>can(p)||(alert('No tienes el permiso: '+p),false),
VBS=c=>`<svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align:-3px;margin-left:4px"><g transform="rotate(12 12 12)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" fill="${c}"/></g><path d="M7 12.5l3.2 3.2L17 8.8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
tag=u=>{const r=rk(u),ow=isOw(u);return (ow?VBS('#dc3d3d'):((U[u]||{}).ver?VBS('#3b82f6'):''))+(r&&r.id!='novato'?` <small style="color:${ow?'#ff6b6b':'#c9a6ff'}">[${r.id=='dueno'?'':esc(r.ic||'')+' '}${esc(r.n)}]</small>`:'')},
nd=()=>(U[me]||{}).nd||0,addND=(u,n)=>{U[u].nd=Math.max(0,(U[u].nd||0)+n)},
updWallet=()=>{const w=$('#wal');if(w)w.textContent='💵 '+nd()+' Nixdollar';const l=$('#wl');if(l)l.textContent='💵 '+nd()},
own=()=>U[me].own||(U[me].own={}),BASE={eyes:5,mouth:5,hairT:10,top:15,bot:10,acc:20,pet:25,petA:15,ch:50,petT:40,aw:10,aj:10,ac:10,as:10,al:10},
price=(t,i)=>i==0?0:(BASE[t]||10)+(i%4)*5,lbl=(t,i)=>(own()[t+':'+i]||price(t,i)==0||A()[t]==i)?'Tuyo':'💵 '+price(t,i),
gmx=id=>{const g=[...DEF,...G].find(x=>x.id==id);return g?{...g,...(OVR[g.id]||{})}:g};
const DAILY_MISSIONS=[
 {id:'worlds',title:'Explorador',desc:'Entra en 2 mundos diferentes',kind:'worlds',goal:2,reward:20},
 {id:'coins',title:'Cazatesoros',desc:'Recoge 5 monedas en los mundos',kind:'coins',goal:5,reward:20},
 {id:'friends',title:'Haz nuevos amigos',desc:'Envía una solicitud de amistad',kind:'friends',goal:1,reward:10},
 {id:'builds',title:'Creador',desc:'Guarda o publica un proyecto en Studio',kind:'builds',goal:1,reward:25}
];
const ACHIEVEMENTS=[
 {id:'first_world',title:'Primera partida',desc:'Entra por primera vez a un mundo',reward:10,test:u=>(u.stats.totalPlays||0)>=1},
 {id:'traveler',title:'Viajero',desc:'Visita 5 mundos distintos',reward:25,test:u=>(u.stats.worldsVisited||[]).length>=5},
 {id:'treasure',title:'Cazador de monedas',desc:'Recoge 20 monedas',reward:25,test:u=>(u.stats.coinsCollected||0)>=20},
 {id:'creator',title:'Creador de mundos',desc:'Publica tu primer mundo',reward:40,test:u=>(u.stats.worldsPublished||0)>=1},
 {id:'social',title:'Comunidad',desc:'Envía tu primera solicitud de amistad',reward:10,test:u=>(u.stats.friendRequestsSent||0)>=1}
];
function dateKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function ensureUser(u){if(!U[u])return null;const a=U[u];a.stats=a.stats||{};Object.assign(a.stats,{totalPlays:a.stats.totalPlays||0,coinsCollected:a.stats.coinsCollected||0,projectsSaved:a.stats.projectsSaved||0,worldsPublished:a.stats.worldsPublished||0,friendRequestsSent:a.stats.friendRequestsSent||0,worldsVisited:Array.isArray(a.stats.worldsVisited)?a.stats.worldsVisited:[]});a.achievements=Array.isArray(a.achievements)?a.achievements:[];a.favGames=Array.isArray(a.favGames)?a.favGames:[];a.createdAt=a.createdAt||Date.now();a.desc=typeof a.desc==='string'?a.desc:'';return a}
function dailyState(u){const a=u||ensureUser(me);if(!a)return {date:dateKey(),visited:[],progress:{},claimed:[]};if(!a.daily||a.daily.date!==dateKey())a.daily={date:dateKey(),visited:[],progress:{coins:0,friends:0,builds:0},claimed:[]};a.daily.visited=Array.isArray(a.daily.visited)?a.daily.visited:[];a.daily.progress=a.daily.progress||{coins:0,friends:0,builds:0};a.daily.claimed=Array.isArray(a.daily.claimed)?a.daily.claimed:[];return a.daily}
function toastNixora(msg){let n=$('#nxToast');if(!n){n=document.createElement('div');n.id='nxToast';n.style.cssText='position:fixed;right:16px;bottom:16px;z-index:100;background:#2a1245;border:1px solid #9d4edd;color:#fff;padding:10px 14px;border-radius:10px;max-width:min(360px,90vw);box-shadow:0 4px 16px #0008';document.body.appendChild(n)}n.textContent=msg;n.hidden=false;clearTimeout(toastNixora.timer);toastNixora.timer=setTimeout(()=>{n.hidden=true},3200)}
function checkAchievements(){if(!me||!U[me])return;const u=ensureUser(me);let changed=false;for(const a of ACHIEVEMENTS){if(a.test(u)&&!u.achievements.includes(a.id)){u.achievements.push(a.id);addND(me,a.reward);changed=true;toastNixora('🏆 Logro desbloqueado: '+a.title+' · +'+a.reward+' Nixdollar')}}if(changed){save();updWallet()}}
function missionEvent(kind,value=1){if(!me||!U[me])return;const u=ensureUser(me),d=dailyState(u);if(kind==='world'){const id=String(value);if(!d.visited.includes(id))d.visited.push(id);d.progress.worlds=d.visited.length}else d.progress[kind]=(d.progress[kind]||0)+value;for(const m of DAILY_MISSIONS){const progress=m.kind==='worlds'?(d.progress.worlds||0):(d.progress[m.kind]||0);if(progress>=m.goal&&!d.claimed.includes(m.id)){d.claimed.push(m.id);addND(me,m.reward);toastNixora('✅ Misión completada: '+m.title+' · +'+m.reward+' Nixdollar')}}checkAchievements();save();updWallet()}
function recordPlay(id){const u=ensureUser(me);if(!u)return;u.stats.totalPlays++;u.stats.lastWorld=String(id);u.stats.lastActive=Date.now();if(!u.stats.worldsVisited.includes(String(id)))u.stats.worldsVisited.push(String(id));missionEvent('world',id)}
function recordCoin(){const u=ensureUser(me);if(!u)return;u.stats.coinsCollected++;missionEvent('coins',1)}
function recordBuild(published=false){const u=ensureUser(me);if(!u)return;u.stats.projectsSaved++;if(published)u.stats.worldsPublished++;missionEvent('builds',1)}
function toggleFavorite(id){const u=ensureUser(me),i=u.favGames.indexOf(id);if(i>=0)u.favGames.splice(i,1);else u.favGames.push(id);save();if(cur==='home')home();else det(id)}
function homeFilter(k){HOME_FILTER=k;home()}
function editMyDescription(){const u=ensureUser(me),v=prompt('Descripción de tu perfil (máximo 300 caracteres)',u.desc||'');if(v!==null){u.desc=v.slice(0,300);save();prof(me)}}
function buy(t,i){if(t==='acc'&&A().mcSkin&&A().mcHasLayers)return alert('Esta skin tiene capas exteriores de Minecraft. Los accesorios de Nixora están desactivados para evitar superposiciones.');const k=t+':'+i,p=price(t,i);if(!own()[k]&&A()[t]!=i&&p>0){if(!can('Tienda gratis')){if(nd()<p){alert('Necesitas '+p+' Nixdollar (tienes '+nd()+')');return}addND(me,-p)}own()[k]=1}A()[t]=i;if(t=='pet')delete A().petC;save();updWallet();avatar()}
/* ---------- Cuenta ---------- */
const BAD=/admin|root|<|>|script|\s/i;
function chk(){const u=$('#u').value;$('#hint').textContent=!u?'':Object.keys(U).some(n=>n.toLowerCase()===u.toLowerCase())?'⚠ Ese usuario ya existe (si es tuyo, inicia sesión; si no, elige otro nombre)':'✓ Nombre disponible'}
let ACTIVE_SESSION_ID='',ACTIVE_SESSION_USER='',SESSION_TIMER=null;
function deviceLabel(){const ua=navigator.userAgent||'',os=/Android/i.test(ua)?'Android':/iPhone|iPad|iPod/i.test(ua)?'iOS':/Windows/i.test(ua)?'Windows':/Mac OS/i.test(ua)?'macOS':/Linux/i.test(ua)?'Linux':'Dispositivo';const browser=/Edg\//i.test(ua)?'Edge':/OPR\//i.test(ua)?'Opera':/Firefox\//i.test(ua)?'Firefox':/Chrome\//i.test(ua)?'Chrome':/Safari\//i.test(ua)?'Safari':'Navegador',nick=String(cv('deviceName','')||'').trim().slice(0,40);return (nick?nick+' · ':'')+os+' · '+browser}
async function loginLocation(){if(!cv('loginLocation',false)||!navigator.geolocation)return 'No compartida';return await new Promise(resolve=>{let done=false;const end=v=>{if(!done){done=true;resolve(v)}};navigator.geolocation.getCurrentPosition(pos=>{const lat=Math.round(pos.coords.latitude),lon=Math.round(pos.coords.longitude);end('Región aproximada '+lat+'°, '+lon+'°')},()=>end('No compartida'),{enableHighAccuracy:false,maximumAge:3600000,timeout:4500});setTimeout(()=>end('No compartida'),5000)})}
async function openAccountSession(username,password,register=false,claimLegacy=false){
 const owner=isOw(username),sidKey='nx_session_id_'+username.toLowerCase();let sid='';
 try{sid=sessionStorage.getItem(sidKey)||''}catch{}
 if(!/^[A-Za-z0-9_-]{20,100}$/.test(sid)){sid=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():'nx_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);try{sessionStorage.setItem(sidKey,sid)}catch{}}
 let key='';if(owner){try{key=sessionStorage.getItem('nx_admin_key')||sessionStorage.getItem('nx_owner_login_key')||''}catch{}if(!key){key=prompt('Cuenta ParaCraftero protegida. Introduce la llave administrativa configurada como NIXORA_ADMIN_KEY en Render.');if(!key)throw new Error('La llave administrativa es necesaria para entrar en ParaCraftero.')}}
 const locationLabel=await loginLocation(),headers={'Content-Type':'application/json'};if(owner)headers['x-admin-key']=key;
 const payload=JSON.stringify({username,password:password||'',register:!!register,claimLegacy:!!claimLegacy,sessionId:sid,device:deviceLabel(),location:locationLabel,userAgent:navigator.userAgent||''});
 let response,data;
 const send=async()=>{response=await fetch('/api/auth/session/open',{method:'POST',headers,cache:'no-store',body:payload});data=await response.json().catch(()=>({}))};
 try{await send()}catch{throw new Error('No se pudo comprobar tu sesión con el servidor. Comprueba que Render esté Live e inténtalo otra vez.')}
 // Render key may have been rotated while an older value remains in this tab. Ask again once.
 if(owner&&response.status===403){try{sessionStorage.removeItem('nx_admin_key');sessionStorage.removeItem('nx_owner_login_key')}catch{}key=prompt('La llave guardada no fue aceptada. Introduce la llave nueva de NIXORA_ADMIN_KEY configurada en Render.');if(!key)throw new Error('La llave administrativa es necesaria para entrar en ParaCraftero.');headers['x-admin-key']=key;try{await send()}catch{throw new Error('No se pudo comprobar tu sesión con el servidor. Comprueba que Render esté Live e inténtalo otra vez.')}}
 if(!response.ok)throw new Error(data.error||'No se pudo iniciar sesión.');ACTIVE_SESSION_ID=sid;ACTIVE_SESSION_USER=username;
 if(owner&&key){try{sessionStorage.setItem('nx_admin_key',key);sessionStorage.setItem('nx_owner_login_key',key)}catch{}}
 if(SESSION_TIMER)clearInterval(SESSION_TIMER);SESSION_TIMER=setInterval(async()=>{if(!ACTIVE_SESSION_ID||!ACTIVE_SESSION_USER)return;try{const r=await fetch('/api/auth/session/heartbeat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:ACTIVE_SESSION_USER,sessionId:ACTIVE_SESSION_ID}),cache:'no-store'});if(r.status===409){clearInterval(SESSION_TIMER);SESSION_TIMER=null;alert('Perdon, pero ya hay alguien jugando en esta cuenta. Por favor, vuelve más tarde.');logout(true)}}catch{}},30000)
}
async function auth(reg){const u=$('#u').value.trim(),p=$('#pw').value,e=$('#err');e.textContent='';
 const localName=Object.keys(U).find(n=>n.toLowerCase()===u.toLowerCase());
 if(reg&&localName)return e.textContent='Ese usuario ya existe. Elige otro nombre.';
 if(reg&&isOw(u))return e.textContent='El nombre ParaCraftero está reservado para la cuenta protegida.';
 if(reg&&(!/^\w{8,15}$/.test(u)||p.length<8||p.length>15||BAD.test(u)||BAD.test(p)))return e.textContent='No puedes escribir ese usuario/contraseña!';
 if(reg){U[u]={h:hs(p),av:{...AV0},createdAt:Date.now(),desc:'',stats:{totalPlays:0,coinsCollected:0,projectsSaved:0,worldsPublished:0,friendRequestsSent:0,worldsVisited:[]},achievements:[],favGames:[]}}
 const account=reg?u:(isOw(u)?(localName||'ParaCraftero'):(localName||u));
 const claimLegacy=!reg&&!isOw(account)&&!!localName&&U[localName].h===hs(p);
 try{await openAccountSession(account,p,reg,claimLegacy)}catch(err){e.textContent=err.message||'No se pudo validar la cuenta.';return}
 if(!U[account])U[account]={h:hs(p||('owner-session-'+Date.now())),av:{...AV0},createdAt:Date.now(),desc:'',stats:{totalPlays:0,coinsCollected:0,projectsSaved:0,worldsPublished:0,friendRequestsSent:0,worldsVisited:[]},achievements:[],favGames:[]};
 else if(!isOw(account)&&p)U[account].h=hs(p);
 me=account;ensureUser(account);dailyState(U[account]);save();$('#auth').hidden=true;$('#app').hidden=false;$('#who').innerHTML='👤 '+esc(account)+tag(account);go('home')}
async function logout(reload=true){const username=ACTIVE_SESSION_USER,sid=ACTIVE_SESSION_ID;if(SESSION_TIMER)clearInterval(SESSION_TIMER);SESSION_TIMER=null;ACTIVE_SESSION_ID='';ACTIVE_SESSION_USER='';if(username&&sid){try{await fetch('/api/auth/session/close',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,sessionId:sid}),keepalive:true})}catch{}try{sessionStorage.removeItem('nx_session_id_'+username.toLowerCase())}catch{}}if(reload)location.reload()}

/* ---------- Juegos incluidos ---------- */
const isla=[],tor=[],are=[];
for(let i=0;i<10;i++){const a=i*.63,x=Math.cos(a)*14,z=Math.sin(a)*14;isla.push([x,1,z,.6,2,.6,'#6b4423'],[x,2.8,z,2.4,1.6,2.4,'#2d8a3e'])}
isla.push([0,.5,0,6,1,6,'#c9b27c'],[0,1,0,4,1,4,'#d9c690'],[0,1.5,0,2,1,2,'#e8d9a8'],[8,.05,-8,6,.1,6,'#3a86ff',.7,0],
 [-13.6,1.5,-4,1.8,3,.4,'#c9a66b'],[-10.4,1.5,-4,1.8,3,.4,'#c9a66b'],[-12,1.5,-8,5,3,.4,'#c9a66b'],[-14.3,1.5,-6,.4,3,4,'#c9a66b'],[-9.7,1.5,-6,.4,3,4,'#c9a66b'],[-12,3.2,-6,6,.4,5,'#a23b3b'],
 [-12,.5,-6,.6,.6,.6,'#ffd166',1,0,'',2,1,6],[16,3,16,2.2,6,2.2,'#e9ecef'],[16,6.4,16,3,.8,3,'#ffd166',1,1,'',0,1]);
for(let i=0;i<26;i++){const a=i*.55,c=i==25?'#ffd700':i%8==7?'#2fbf5b':`hsl(${270+i*4},75%,${45+i}%)`;tor.push([Math.cos(a)*6,i*.45,Math.sin(a)*6,3,.5,3,c,1,1,'',0,i==25?1:0,i==25?7:i%8==7?2:0])}
are.push([0,1.5,-20,40,3,1,'#6c757d'],[0,1.5,20,40,3,1,'#6c757d'],[-20,1.5,0,1,3,40,'#6c757d'],[20,1.5,0,1,3,40,'#6c757d'],[10,2,10,2,4,2,'#9d4edd'],[-10,2,10,2,4,2,'#9d4edd'],[10,2,-10,2,4,2,'#9d4edd'],[-10,2,-10,2,4,2,'#9d4edd'],[0,.25,0,6,.5,6,'#ffd166']);
const RS=s=>()=>(s=(s*16807)%2147483647)/2147483647,
box=(a,x,y,z,w,h,d,c,...r)=>a.push([x,y,z,w,h,d,c,...r]);

// Casa habitable de dos plantas: doorway abierto (sin puerta), ventanas reales, escalera y muebles.
function addDetailedHouse(a,x,z,wallColor='#c9a66b',roofColor='#8d5524'){
 const q=(dx,y,dz,w,h,d,c,solid=1,opacity=1,shape=0,name='')=>box(a,x+dx,y,z+dz,w,h,d,c,opacity,solid,'',shape,0,0,0,name);
 const front=4.08, floor='#9b8065', trim='#f0d8a8', glass='#78cde8';
 // Cimientos y primer nivel.
 q(0,.08,0,9.2,.16,8.6,floor,1,1,0,'Cimientos');
 q(0,1.55,-4.05,8.7,2.8,.25,wallColor,1,1,0,'Pared trasera');
 for(const side of [-1,1])q(side*4.28,1.55,0,.25,2.8,7.85,wallColor,1,1,0,'Pared lateral');
 // Dos ventanas delanteras dejando hueco real de entrada al centro.
 for(const side of [-1,1]){
  const win=side*2.65;
  q(side*3.76,1.55,front,1.08,2.8,.25,wallColor,1,1,0,'Columna fachada');
  q(side*1.54,1.55,front,1.08,2.8,.25,wallColor,1,1,0,'Jamba fachada');
  q(win,.53,front,1.15,.76,.25,wallColor,1,1,0,'Antepecho ventana');
  q(win,2.53,front,1.15,.84,.25,wallColor,1,1,0,'Dintel ventana');
  q(win,1.53,front-.07,1.08,1.08,.06,glass,0,.52,0,'Cristal ventana');
  q(win,.96,front+.02,1.28,.08,.12,trim,0,1,0,'Alféizar');
 }
 q(0,2.64,front,2.0,.48,.25,wallColor,1,1,0,'Dintel entrada abierta');
 // Planta alta y suelo dividido para dejar espacio a la escalera.
 q(1.1,3.14,0,6.3,.18,8.05,floor,1,1,0,'Suelo planta alta');
 q(-4.02,3.14,0,.48,.18,8.05,floor,1,1,0,'Suelo lateral escalera');
 q(-2.88,3.14,-3.25,1.8,.18,1.5,floor,1,1,0,'Descanso escalera');
 q(-2.88,3.14,3.05,1.8,.18,1.65,floor,1,1,0,'Descanso escalera inferior');
 q(0,4.68,-4.05,8.7,2.8,.25,wallColor,1,1,0,'Pared trasera alta');
 for(const side of [-1,1])q(side*4.28,4.68,0,.25,2.8,7.85,wallColor,1,1,0,'Pared lateral alta');
 // Fachada superior con hueco de ventana, no un panel pintado sobre una pared sólida.
 q(0,4.68,front,2.0,2.8,.25,wallColor,1,1,0,'Pared central alta');
 for(const side of [-1,1]){
  const win=side*2.65;
  q(side*3.76,4.68,front,1.08,2.8,.25,wallColor,1,1,0,'Columna superior');
  q(side*1.54,4.68,front,1.08,2.8,.25,wallColor,1,1,0,'Jamba superior');
  q(win,3.65,front,1.15,.7,.25,wallColor,1,1,0,'Antepecho alto');
  q(win,5.75,front,1.15,.66,.25,wallColor,1,1,0,'Dintel alto');
  q(win,4.72,front-.07,1.08,1.38,.06,glass,0,.48,0,'Cristal planta alta');
  q(win,4.0,front+.02,1.28,.08,.12,trim,0,1,0,'Alféizar alto');
 }
 // Cubierta y remates.
 q(0,6.25,0,9.55,.34,9.35,roofColor,1,1,0,'Techo');
 q(0,6.47,-4.48,9.7,.16,.18,trim,1,1,0,'Remate techo trasero');q(0,6.47,4.48,9.7,.16,.18,trim,1,1,0,'Remate techo frontal');
 q(-4.58,6.47,0,.18,.16,8.8,trim,1,1,0,'Remate techo lateral');q(4.58,6.47,0,.18,.16,8.8,trim,1,1,0,'Remate techo lateral');
 // Escalera interior en nueve peldaños: visualmente conecta las dos plantas.
 for(let i=0;i<9;i++)q(-2.88,.22+i*.32,2.35-i*.55,1.25,.24,.82,i%2?'#9b8065':'#b99a79',1,1,0,'Escalón');
 // Sala: sofá, cojines, mesa y encimera de cocina.
 q(-2,.42,.9,2.35,.52,1.0,'#6d597a',1,1,0,'Sofá');q(-2,.88,.48,2.35,.72,.22,'#8a6bb1',1,1,0,'Respaldo sofá');
 q(-2.62,.76,.9,.86,.15,.68,'#bb9bd8',1,1,0,'Cojín');q(-1.38,.76,.9,.86,.15,.68,'#bb9bd8',1,1,0,'Cojín');
 q(-1,.47,-.35,1.65,.14,.9,'#9b6b43',1,1,0,'Mesa de centro');
 for(const dx of [-1.62,-.38])for(const dz of [-.65,-.05])q(dx,.22,dz,.12,.48,.12,'#6b4423',1,1,0,'Pata mesa');
 q(2.85,.62,-2.45,2.0,1.1,.72,'#8d6e63',1,1,0,'Encimera cocina');q(2.85,1.22,-2.45,2.05,.14,.78,'#e9ecef',1,1,0,'Encimera clara');
 q(2.7,2.12,-3.48,1.0,.72,.3,'#b08968',1,1,0,'Armario cocina');q(3.82,2.12,-3.48,.85,.72,.3,'#b08968',1,1,0,'Armario cocina');
 // Dormitorio y almacenamiento en la planta alta.
 q(-1.3,3.48,-1.28,2.25,.28,2.9,'#6b4423',1,1,0,'Cama');q(-1.3,3.68,-2.3,2.12,.16,.55,'#f1faee',1,1,0,'Almohada');q(-1.3,3.66,-.7,2.15,.12,1.25,'#5fa8d3',1,1,0,'Manta');
 q(3.45,4.14,1.35,1.15,1.65,.72,'#8d6e63',1,1,0,'Armario dormitorio');
 q(3.25,4.05,-2.95,1.25,1.45,.3,'#6b4423',1,1,0,'Biblioteca');
 q(2.9,4.45,-2.76,.22,.32,.12,'#ff6b6b',0,1,0,'Libro');q(3.25,4.66,-2.76,.22,.32,.12,'#ffd166',0,1,0,'Libro');q(3.6,4.42,-2.76,.22,.32,.12,'#80ed99',0,1,0,'Libro');
 // Porche abierto, escalones, faroles y jardineras (sin puerta).
 q(0,.12,4.78,3.0,.24,1.15,'#b9a083',1,1,0,'Porche');q(0,.06,5.42,2.45,.12,.62,'#8d99ae',1,1,0,'Escalón exterior');
 for(const side of [-1,1]){q(side*3.75,2.35,4.23,.3,.42,.14,'#ffd166',0,1,0,'Farol');q(side*3.65,.32,5.0,.92,.55,.76,'#967d61',1,1,0,'Jardinera');q(side*3.65,.85,5.0,.66,.68,.62,side<0?'#2d6a4f':'#40916c',0,1,1,'Arbusto jardinera')}
}
const house=(a,x,z,c,roof)=>addDetailedHouse(a,x,z,c,roof||(['#7b3f32','#6c5b7b','#345995','#8d5524'][Math.abs(Math.round(x*7+z*11))%4]));
function addDetailedTree(a,x,z,variant=0,scale=1){
 const s=Math.max(.5,Number(scale)||1),greens=[['#2d6a4f','#40916c','#74a66b'],['#31572c','#4f772d','#90a955'],['#1b5e20','#2e7d32','#558b2f'],['#386641','#6a994e','#a7c957']],pal=greens[Math.abs(variant|0)%greens.length];
 box(a,x,.98*s,z,.48*s,1.96*s,.48*s,'#70452b',1,1,'',0,0,0,0,'Tronco');
 box(a,x,2.45*s,z,2.55*s,1.85*s,2.55*s,pal[0],1,0,'',1,0,0,0,'Copa principal');
 box(a,x-.78*s,2.15*s,z+.08*s,1.42*s,1.32*s,1.42*s,pal[1],1,0,'',1,0,0,0,'Copa lateral');
 box(a,x+.78*s,2.18*s,z-.06*s,1.4*s,1.34*s,1.4*s,pal[2],1,0,'',1,0,0,0,'Copa lateral');
}
const tree=(a,x,z,variant=0,scale=1)=>addDetailedTree(a,x,z,variant,scale);
const maze=[],city=[],obby=[],vil=[],space=[],forest=[],desert=[],ice=[],castle=[],zomb=[];
{const N=10,W=2*N+1,g=Array.from({length:W},()=>Array(W).fill(1)),R=RS(7),st=[[1,1]];g[1][1]=0;
 while(st.length){const[x,y]=st[st.length-1],d=[[2,0],[-2,0],[0,2],[0,-2]].filter(([a,b])=>x+a>0&&y+b>0&&x+a<W&&y+b<W&&g[y+b][x+a]);if(!d.length){st.pop();continue}const[a,b]=d[R()*d.length|0];g[y+b/2][x+a/2]=0;g[y+b][x+a]=0;st.push([x+a,y+b])}
 for(let y=0;y<W;y++)for(let x=0;x<W;x++)if(g[y][x])box(maze,(x-1)*2,1.5,(y-1)*2,2,3,2,'#2d6a4f');
 box(maze,(W-2-1)*2,.1,(W-2-1)*2,2,.2,2,'#ffd700',1,1,'',0,1,7);for(let i=0;i<8;i++){const cx=1+2*(R()*N|0),cy=1+2*(R()*N|0);box(maze,(cx-1)*2,.6,(cy-1)*2,.6,.6,.6,'#ffd166',1,0,'',2,1,6)}}
{
 // Ciudad organizada en cuadrícula: calles en múltiplos de 28 y edificios en el centro de manzanas.
 box(city,0,-.35,0,112,.5,112,'#7c9874',1,1,'',0,0,0,0,'Terreno urbano');
 for(let lane=-2;lane<=2;lane++){
  const c=lane*28;
  box(city,0,-.02,c,112,.08,4.4,'#303842',1,0,'',0,0,0,0,'Calle asfaltada');
  box(city,c,-.02,0,4.4,.08,112,'#303842',1,0,'',0,0,0,0,'Calle asfaltada');
  for(const sgn of [-1,1]){
   box(city,0,.045,c+sgn*3.25,112,.1,1.2,'#c4c9ce',1,0,'',0,0,0,0,'Acera');
   box(city,c+sgn*3.25,.045,0,1.2,.1,112,'#c4c9ce',1,0,'',0,0,0,0,'Acera');
  }
  for(let dash=-5;dash<=5;dash++){
   box(city,dash*10,.035,c,.1,.025,1.4,'#f7d25c',1,0,'',0,0,0,0,'Línea vial');
   box(city,c,.035,dash*10,1.4,.025,.1,'#f7d25c',1,0,'',0,0,0,0,'Línea vial');
  }
 }
 const blockAxis=[-42,-14,14,42],blocksAt=blockAxis.flatMap(x=>blockAxis.map(z=>[x,z]));
 blocksAt.forEach(([x,z],i)=>{
  // Reserva una manzana para la plaza y asigna dos solares a comercio accesible.
  if(x===14&&z===14)return;
  if(i===2){const p=[];addTallBuilding(p,x,z,{floors:12,wall:'#a9bdcf',trim:'#f8e8c8',glass:'#75def4',roof:'#2b203d',width:18,depth:17.8,enterable:true,kind:'mall',stairSide:-1});city.push(...p);return}
  if(i===9){const p=[];addTallBuilding(p,x,z,{floors:2,wall:'#d8e8cd',trim:'#fff0d1',glass:'#70dff1',roof:'#405363',width:18,depth:17.8,enterable:true,kind:'supermarket',stairSide:-1});city.push(...p);return}
  if(i%7===0){const p=[];addTallBuilding(p,x,z,{floors:5+(i%4)*2,wall:['#9ba7b4','#556b7a','#b0a69a'][i%3],trim:'#e5edf4',glass:'#6ed4eb',roof:'#374151',width:7.4,depth:7.4,enterable:true,kind:'residencial',stairSide:(x>0?-1:1)});city.push(...p)}
  else if(i%5===0){const p=[];addDecorativeBuilding(p,x,z,{floors:4+(i%3),wall:['#b9c3ce','#657080','#8d99ae'][i%3],trim:'#eaf6fb',glass:'#73ddf1',roof:'#303946',width:8,depth:7.5,kind:i%2?'shop':'office'});city.push(...p)}
  else if(i%4===1){const p=[];addDecorativeBuilding(p,x,z,{floors:2+(i%2),wall:'#e1b07e',trim:'#fff0d1',glass:'#68d6ea',roof:'#8b4513',width:7.2,depth:7.2,kind:'shop'});city.push(...p)}
  else if(i%3===0){addDetailedHouse(city,x,z,['#c9a66b','#b08968','#d4a373','#adb5bd','#eee2cf'][i%5],['#8d5524','#a23b3b','#6c5b7b','#343a40'][i%4])}
  else {
   const hh=4+(i%3)*1.3,ww=7,dd=7,c=['#596574','#a6b1bd','#947d9a'][i%3];
   box(city,x,hh/2,z,ww,hh,dd,c,1,1,'',0,0,0,0,'Edificio de barrio');
   for(let f=0;f<Math.ceil(hh/2.5);f++)for(const side of [-1,1])box(city,x+side*2.05,.85+f*2.25,z+dd/2+.05,1.05,1.25,.06,'#80d5ee',.52,0,'',0,0,0,0,'Ventana edificio de barrio');
  }
  // Jardinería y farolas quedan dentro de la manzana, fuera de la zona de paso.
  if(i%2===0){addDetailedTree(city,x+6.35,z+5.85,i%4,.48);addGardenShrub(city,x-6.3,z+5.9,(i+1)%4,.52);addFlowerBed(city,x+6.2,z-6.1,i%3)}
  if(i%4===0){box(city,x+6.0,.9,z-6.1,.12,1.7,.12,'#535b66',1,1,'',0,0,0,0,'Farol de ciudad');box(city,x+6.0,1.8,z-6.1,.42,.18,.42,'#ffe8a3',1,0,'',2,0,6,'Farol iluminado')}
 });
 // Plaza central dentro de la manzana reservada, no encima de un cruce.
 const parkX=14,parkZ=14;
 box(city,parkX,.02,parkZ,10,.1,10,'#689c64',1,0,'',0,0,0,0,'Parque central');
 box(city,parkX,.09,parkZ,2.2,.16,2.2,'#8ecae6',1,0,'',2,0,0,'Fuente central');
 for(const sgn of [-1,1]){box(city,parkX+sgn*3,.35,parkZ,1.7,.7,.25,'#8d6e63',1,1,'',0,0,0,0,'Banco del parque');box(city,parkX,.35,parkZ+sgn*3,1.7,.7,.25,'#8d6e63',1,1,'',0,0,0,0,'Banco del parque')}
 addFlowerBed(city,parkX-3.6,parkZ+3.6,0);addFlowerBed(city,parkX+3.6,parkZ-3.6,2);addDetailedTree(city,parkX-4.5,parkZ-4.5,1,.62);addDetailedTree(city,parkX+4.5,parkZ+4.5,2,.6);
}
for(let i=0;i<=30;i++){const z=-6-i*5,x=Math.sin(i*1.7)*4,t=1+Math.floor(i/3)*.3,k=i%6,w=i==30?6:k==1?1.4:3;box(obby,x,t-.5,z,w,1,i==30?6:3,i==30?'#ffd700':k==5?'#2fbf5b':`hsl(${i*12},70%,55%)`,1,1,'',0,i==30?1:0,i==30?7:k==5?2:k==2?4:k==3?5:0);if(k==4&&i<30)box(obby,x,t+.2,z,3,.4,.8,'#e63946',1,1,'',0,1,3)}
[[10,10],[-10,10],[10,-10],[-10,-10],[22,0],[-22,0]].forEach(([x,z],i)=>{house(vil,x,z,['#c9a66b','#b08968','#d4a373'][i%3]);box(vil,x,.5,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6)});
box(vil,0,.8,0,3,1.6,3,'#8d99ae');box(vil,0,1.7,0,2,.3,2,'#4895ef',.7,0);box(vil,-9,3,-40,12,6,2,'#adb5bd');box(vil,9,3,-40,12,6,2,'#adb5bd');box(vil,-16,5,-40,4,10,4,'#6c757d');box(vil,16,5,-40,4,10,4,'#6c757d');
for(let k=0;k<6;k++)box(vil,0,.5+k,-42-k*1.2,4,1,1.2,'#9a8c98');box(vil,0,5.5,-52,8,1,8,'#6c757d');box(vil,0,6.6,-52,.8,.8,.8,'#ffd700',1,0,'',2,1,6);
for(let i=0;i<18;i++){const a=i*2.4,r=30+i%5*3,x=Math.cos(a)*r,z=Math.sin(a)*r;tree(vil,x,z,i%4,.95+(i%3)*.12)}
{let a=0,r=8;for(let i=0;i<26;i++){const x=Math.cos(a)*r,z=Math.sin(a)*r,y=1.5+i*1.1;box(space,x,y,z,4,.6,4,`hsl(${200+i*6},80%,60%)`,1,1,'',i%3,1,i%7==6?2:0);if(i%2)box(space,x,y+1.2,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6);a+=4.2/r;r+=.45}box(space,Math.cos(a)*r,1.5+26*1.1,Math.sin(a)*r,6,.8,6,'#ffd700',1,1,'',0,1,7)}
{const R=RS(21);for(let i=0;i<70;i++){const a=R()*6.28,r=8+R()*45,x=Math.cos(a)*r,z=Math.sin(a)*r;tree(forest,x,z,i%4,.75+R()*.42)}
 for(let i=0;i<12;i++){const a=i*.55+.2,r=6+i%4*2;box(forest,Math.cos(a)*r,1.2,Math.sin(a)*r,.35,.35,.35,'#b5ff4d',1,0,'',0,1,6)}
 for(let i=0;i<6;i++)box(forest,Math.cos(i*1.05)*5,.4,Math.sin(i*1.05)*5,1,.8,1,'#6c757d');box(forest,0,.35,0,2,.7,2,'#8d99ae');box(forest,0,1,0,.7,.7,.7,'#ffd700',1,0,'',2,1,6)}
{const pyr=(x,z,n)=>{for(let k=0;k<n;k++)box(desert,x,.5+k,z,(n-k)*2.4,1,(n-k)*2.4,'#e9c46a')};pyr(25,0,6);pyr(-25,10,5);pyr(0,-35,7);for(let i=0;i<6;i++)box(desert,Math.cos(i)*14,.6,Math.sin(i)*14,.6,.6,.6,'#ffd166',1,0,'',2,1,6);box(desert,25,6.6,0,1.2,.7,1.2,'#ffd700',1,0,'',2,1,6)}
{let a=0,r=7;for(let i=0;i<22;i++){const x=Math.cos(a)*r,z=Math.sin(a)*r;box(ice,x,.4+i*.35,z,3.2,.8,3.2,'#a8dadc',.75,1,'',0,2,i%6==5?2:0);if(i%3==1)box(ice,x,1.2+i*.35,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6);a+=4/r;r+=.4}
 box(ice,12,1.5,-12,6,3,6,'#ffffff',1,1,'',1);box(ice,-14,1.5,10,6,3,6,'#ffffff',1,1,'',1);box(ice,Math.cos(a)*r,.4+22*.35,Math.sin(a)*r,5,.8,5,'#ffd700',1,1,'',0,1,7)}
for(let i=0;i<10;i++)box(castle,0,.4+i*.9,-6-i*5.5,4,.8,4,'#6c757d',1,1,'',0,0,i%4==3?2:0);box(castle,0,9.2,-66,16,1,16,'#495057');box(castle,0,10.2,-66,1,1,1,'#ffd700',1,0,'',2,1,6);box(castle,-8,12,-74,1.2,6,1.2,'#adb5bd');box(castle,8,12,-74,1.2,6,1.2,'#adb5bd');
for(let i=0;i<12;i++){const a=i/12*6.28;box(zomb,Math.cos(a)*16,.8,Math.sin(a)*16,2.6,1.6,.7,'#5d4037')}box(zomb,0,.25,0,5,.5,5,'#6c757d');
const DAYNIGHT="const T=game.THREE;game.onTick((dt,t)=>{const h=(8+t/4)%24,f=Math.max(0,Math.sin((h-6)/12*Math.PI));game.sky(new T.Color(.15+.85*f,.15+.85*f,.2+.8*f));game.light(.25+.55*f)});";

const NX_SKY_BASES=[
 ['Predeterminado','#0a3d9c','#2a8fe0','#d4ecfb'],['Amanecer cálido','#39255f','#ef7b61','#ffe6b3'],['Atardecer coral','#34205e','#ff6f61','#ffc18c'],['Aurora boreal','#091c4a','#087e8b','#b6f7df'],['Tropical','#086788','#20a4f3','#b8f2e6'],['Azul profundo','#020b2d','#124e96','#80caff'],['Medianoche violeta','#08051e','#302060','#7662a6'],['Arcoíris suave','#6252a3','#d59bcf','#ffe6cf'],['Caramelo','#843d24','#e88d67','#ffd8a8'],['Bosque mágico','#071f22','#176b58','#b8e0ae'],['Nube rosa','#5b3a87','#e9a4c6','#fff0df'],['Volcánico','#260b1b','#ba3527','#ffb347'],['Océano profundo','#031d3b','#087ca7','#78e3df'],['Neón violeta','#13002b','#7b2cbf','#00d9ff'],['Hielo polar','#183e70','#8ed5f0','#f0ffff'],['Desierto dorado','#5a2d20','#d78245','#ffe0a3'],['Tormenta','#101927','#455a73','#b7c6d7'],['Galaxia','#09031c','#552080','#e0aaff'],['Celeste pastel','#8bc6ec','#b9e6ff','#fff7eb'],['Cielo crepuscular','#14132e','#6c5b9b','#e6a6a1']
];
function nxShiftHex(hex,delta){const h=String(hex).replace('#','');const n=parseInt(h,16);return '#'+[n>>16,(n>>8)&255,n&255].map(v=>Math.max(0,Math.min(255,v+delta)).toString(16).padStart(2,'0')).join('')}
const NX_SKY_PRESETS=NX_SKY_BASES.flatMap((base,i)=>[0,-14,12,24].map((delta,v)=>({name:v===0?base[0]:base[0]+' · '+['','Suave','Vivo','Claro'][v],colors:base.slice(1).map(c=>nxShiftHex(c,delta))})));
const NX_SKY_TEXTURES=new Map();
function nxSkyTexture(index=0){const ix=Math.max(0,Math.min(NX_SKY_PRESETS.length-1,Number(index)||0));if(NX_SKY_TEXTURES.has(ix))return NX_SKY_TEXTURES.get(ix);const cn=document.createElement('canvas');cn.width=2;cn.height=256;const cx=cn.getContext('2d'),pal=NX_SKY_PRESETS[ix].colors,gr=cx.createLinearGradient(0,0,0,256);gr.addColorStop(0,pal[0]);gr.addColorStop(.48,pal[1]);gr.addColorStop(1,pal[2]);cx.fillStyle=gr;cx.fillRect(0,0,2,256);const tx=new THREE.CanvasTexture(cn);tx.magFilter=THREE.LinearFilter;tx.minFilter=THREE.LinearFilter;tx.generateMipmaps=false;NX_SKY_TEXTURES.set(ix,tx);return tx}
function nxSkyCss(index=0){const c=(NX_SKY_PRESETS[Math.max(0,Math.min(NX_SKY_PRESETS.length-1,Number(index)||0))]||NX_SKY_PRESETS[0]).colors;return `linear-gradient(180deg,${c[0]},${c[1]} 48%,${c[2]})`}

// Mundos adicionales: siguen usando el mismo motor y no cambian las animaciones.
const moon=[],candy=[];
for(let i=0;i<28;i++){
 const a=i*.56, r=5+i*.28, x=Math.cos(a)*r, z=-i*2.35, y=.25+i*.32;
 box(moon,x,y,z,3.4,.55,3.4,`hsl(${190+i*5},85%,${52+i%4*5}%)`,1,1,'',0,1,i%7===6?2:0);
 if(i%3===1)box(moon,x,y+1,z,.55,.55,.55,'#ffd166',1,0,'',2,1,6);
 const cx=Math.sin(i*.7)*8, cz=-i*2.1, cy=.25+(i%5)*.32;
 box(candy,cx,cy,cz,3.5,.55,3.5,['#ff8fab','#ffd166','#80ed99','#90e0ef','#c77dff'][i%5],1,1,'',0,1,i%6===0?2:0);
 if(i%4===2)box(candy,cx,cy+1,cz,.5,.5,.5,'#ffffff',1,0,'',2,1,6);
}
box(moon,0,.1,0,8,.2,8,'#273469',1,1,'',0,1);
box(candy,0,.1,0,8,.2,8,'#ffcad4',1,1,'',0,1);
const volcano=[],reef=[],speedway=[],farm=[],factory=[],temple=[],pirate=[],golf=[],cloudsMap=[],haunt=[],mine=[],dragon=[];
// Mundos nuevos: geometrías diferenciadas para que sean escenarios jugables, no tarjetas duplicadas.
for(let i=0;i<28;i++){const a=i*.48,r=5+(i%5)*.55,y=.55+(i%7)*.42;box(volcano,Math.cos(a)*r,y,Math.sin(a)*r,2.8,.6,2.8,i%4?'#34313d':'#e85d04',1,1,'',0,1);if(i%4===0)box(volcano,Math.cos(a)*r,y+.55,Math.sin(a)*r,.6,.5,.6,'#ffd166',1,0,'',2,1,6)}
box(volcano,0,.25,0,9,.5,9,'#532b2b');for(let i=0;i<7;i++)box(volcano,0,1.2+i*.85,-18-i*2.6,5-i*.35,1,5-i*.35,i%2?'#5b3a3a':'#3c2f36');
box(reef,0,-.1,0,52,.6,52,'#174a62');for(let i=0;i<34;i++){const a=i*2.399,r=4+(i%7)*2,x=Math.cos(a)*r,z=Math.sin(a)*r,h=1.5+(i%5)*.65;box(reef,x,h/2,z,.7,h,.7,['#ff6b8a','#ef476f','#00bbf9','#80ed99'][i%4]);if(i%3===0)box(reef,x,h+.25,z,.45,.45,.45,'#ffd166',1,0,'',2,1,6)}
// Barco hundido en el arrecife
box(reef,0,1,-10,14,1,5,'#70452b');box(reef,0,2,-10,10,1,3,'#8d5524');box(reef,-3,3,-10,.5,4,.5,'#b08968');box(reef,2,3,-10,.5,4,.5,'#b08968');
for(let i=0;i<48;i++){const z=-i*2.1-3,x=Math.sin(i*.27)*3;box(speedway,x,.15,z,7,.3,2.2,i%6===0?'#00e5ff':'#303344',1,1,'',0,i%6===0?1:0,i%6===0?5:0);if(i%6===0)box(speedway,x,.36,z,1,.08,1.4,'#00f5d4',1,0,'',0,1,5);if(i%8===0)box(speedway,x+4,.45,z,.6,.9,.6,'#ffd166',1,0,'',2,1,6)}
box(speedway,-5,.6,-48,.7,1.2,1,'#2fbf5b');box(speedway,5,.6,-48,.7,1.2,1,'#2fbf5b');
box(farm,0,.1,0,42,.3,42,'#7aa34b');house(farm,-10,-8,'#b65b35');box(farm,-10,3,-8,7,.7,6,'#b23a48');
for(let row=0;row<5;row++)for(let col=0;col<8;col++){const x=-15+col*4,z=3+row*4;box(farm,x,.45,z,1.6,.6,1.6,row%2?'#618b32':'#7cae38');box(farm,x,.95,z,.45,.5,.45,['#f4d35e','#e07a5f','#90be6d'][col%3],1,0,'',2,1,col%2?6:0)}
for(let i=0;i<8;i++)box(farm,10+(i%4)*3,.4,3+Math.floor(i/4)*4,1.4,.8,1.4,'#d9a441');
box(factory,0,.1,0,45,.3,45,'#555b66');for(let x=-18;x<=18;x+=6){box(factory,x,3,-12,1,6,1,'#79808a');box(factory,x,6,-12,5,.5,4,'#414752');box(factory,x,.8,4,4,.25,18,'#343a40');box(factory,x,.98,4,.7,.12,1,'#00b4d8',1,1,'',0,1,5)}
for(let i=0;i<9;i++){const z=-6-i*3;box(factory,Math.sin(i)*12,.4,z,2,.8,2,i%2?'#e63946':'#adb5bd',1,1,'',0,1,i%2?3:0)}
box(temple,0,.1,0,36,.3,36,'#8d8a7e');for(let level=0;level<7;level++)box(temple,0,.5+level*.65,-level*3,18-level*2,.7,18-level*2,level%2?'#b7a98a':'#97866a');
for(let x of [-12,12])for(let z of [-12,12]){box(temple,x,2,z,1.8,4,1.8,'#d6c6a2');box(temple,x,4.2,z,2.5,.5,2.5,'#9d8b67')}
box(temple,0,5.1,-18,3,.4,3,'#ffd166',1,0,'',2,1,6);
box(pirate,0,.5,0,18,1,7,'#56351e');box(pirate,0,1.2,0,14,.6,6,'#8b5e34');for(let x of [-7,7]){box(pirate,x,1.4,0,1,2,7,'#4b2e1f');box(pirate,x,2.5,0,.5,.5,6,'#c29b62')}
box(pirate,0,5,0,.6,8,.6,'#e0c097');box(pirate,1.7,4.4,0,3.2,3.2,.25,'#f8f9fa');box(pirate,1.7,4.4,.18,1,.7,.1,'#212529');
for(let i=0;i<10;i++){const a=i*.63,r=13+(i%3)*3,x=Math.cos(a)*r,z=Math.sin(a)*r;box(pirate,x,.3,z,5,.6,5,'#b7a46a');if(i%2===0)box(pirate,x,.8,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6)}
box(golf,0,.1,0,42,.3,42,'#4c956c');for(let i=0;i<5;i++){const z=-4-i*7;box(golf,0,.5,z,12,.5,5,['#80b918','#55a630','#2d6a4f'][i%3]);box(golf,0,.86,z-1.5,1,.15,.3,'#e9ecef');box(golf,-7,.5,z,1,1,5,'#8d99ae');box(golf,7,.5,z,1,1,5,'#8d99ae');box(golf,3,.7,z-2,.5,.5,.5,'#ffd166',1,0,'',2,1,6)}
for(let i=0;i<18;i++){const a=i*.71,r=5+(i%5)*2,x=Math.cos(a)*r,z=Math.sin(a)*r,y=1+(i%4)*.6;box(cloudsMap,x,y,z,4,.7,4,i%3?'#dbeafe':'#a7c7e7');if(i%3===0)box(cloudsMap,x,y+.8,z,.5,.5,.5,'#ffd700',1,0,'',2,1,6)}
box(cloudsMap,0,7,-17,7,1,7,'#9d4edd');box(cloudsMap,0,8,-17,2,.5,2,'#ffd166',1,0,'',2,1,6);
box(haunt,0,.3,0,32,.6,32,'#292633');box(haunt,0,3,-8,13,6,1,'#363142');box(haunt,-6,3,-3,1,6,10,'#363142');box(haunt,6,3,-3,1,6,10,'#363142');box(haunt,0,6,-3,14,.7,12,'#1f1b29');box(haunt,0,1.2,-8,2.4,2.4,.3,'#7b2cbf');
for(let i=0;i<12;i++){const a=i*.52,r=9+(i%3)*3,x=Math.cos(a)*r,z=Math.sin(a)*r;box(haunt,x,.7,z,.7,1.4,.7,'#514b5d');box(haunt,x,1.5,z,.9,.3,.9,'#8d99ae')}
box(mine,0,.1,0,40,.3,40,'#4f4a45');for(let i=0;i<12;i++){const z=-i*3,x=Math.sin(i*.4)*4;box(mine,x,1.2,z,2.2,2.4,2.2,'#686868');box(mine,x+1.4,2.2,z,.35,.35,.35,['#00e5ff','#80ffdb','#d9ed92'][i%3],1,0,'',2,1,6);box(mine,x-1.4,1.5,z,.3,.3,.3,'#ffd166',1,0,'',2,1,6)}
box(mine,0,2,-18,1,4,1,'#9c6644');box(mine,3,2,-18,1,4,1,'#9c6644');box(mine,1.5,.35,-18,5,.3,1,'#adb5bd');
for(let i=0;i<25;i++){const a=i*.46,r=5+i*.42,x=Math.cos(a)*r,z=Math.sin(a)*r,y=.7+i*.24;box(dragon,x,y,z,3,.7,3,i%5===0?'#c1121f':'#57516e');if(i%5===0)box(dragon,x,y+.6,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6)}
box(dragon,0,7,-14,7,1,7,'#3b263a');box(dragon,0,8,-14,3,1,3,'#ffd166',1,0,'',2,1,6);
const OBBY_SCRIPT_BASE = String.raw`(function(){
 const MODE="__MODE__", P=game.player, parts={};
 const TOTAL_TYPES=1536, STEP=4.4;
 let made=0,best=0,deaths=0,pathX=0,pathY=.8,started=0;
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const rnd=(i,k)=>{const q=Math.sin((i+1)*127.1+(k+1)*311.7+(Math.floor(i/TOTAL_TYPES)+1)*74.7+MODE.charCodeAt(0)*19.19)*43758.5453123;return q-Math.floor(q)};
 const palette=(v)=>{
   if(MODE==='lava')return ['#ff6b35','#e63946','#ffba08','#f77f00','#9d0208'][v%5];
   if(MODE==='neon')return ['#00e5ff','#ff00aa','#9d4edd','#80ffdb','#ffd166'][v%5];
   if(MODE==='water')return ['#00b4d8','#48cae4','#80ffdb','#0077b6','#caf0f8'][v%5];
   if(MODE==='forest')return ['#2d6a4f','#40916c','#95d5b2','#b5e48c','#588157'][v%5];
   if(MODE==='gravity')return ['#7b2cbf','#4361ee','#4cc9f0','#f72585','#ffd166'][v%5];
   if(MODE==='climb')return ['#8d5524','#c9a66b','#adb5bd','#2fbf5b','#00b4d8'][v%5];
   return ['#6c5ce7','#00b4d8','#ff8fab','#ffd166','#2fbf5b','#e76f51'][v%6];
 };
 const add=(i,list,b)=>{const m=game.addBlock(b);if(m)list.push(m);return m};
 function makeStage(i){
   const encoded=(i*37)%TOTAL_TYPES, phase=encoded%12, variant=Math.floor(encoded/12);
   const z=-6-i*STEP;
   pathX=clamp(pathX+(rnd(i,1)-.5)*1.35,-5.2,5.2);
   const x=pathX, surface=pathY, list=[], color=palette(variant+phase*3), shade=variant%7;
   let w=3.0+(variant%5)*.12, depth=3.85;
   if(phase===1){w=2.15+(variant%4)*.1;depth=3.45}
   if(phase===2){w=2.45+(variant%4)*.12;depth=3.6}
   if(phase===4){w=1.75+(variant%4)*.07;depth=3.35}
   if(phase===8){w=2.55+(variant%3)*.1;depth=3.7}
   if(phase===9){w=2.05+(variant%3)*.1;depth=3.4}
   const checkpoint=(phase===0);
   add(i,list,[x,surface-.3,z,w,.6,depth,checkpoint?'#2fbf5b':color,1,1,'',0,0,checkpoint?2:0]);
   const coin=(xx,yy,zz)=>add(i,list,[xx,yy,zz,.38,.38,.38,'#ffd166',1,0,'',2,1,6]);
   const deco=(xx,yy,zz,ww,hh,dd,c,solid=1,func=0)=>add(i,list,[xx,yy,zz,ww,hh,dd,c,1,solid,'',0,0,func]);
   // Each segment is one of 12 challenge families with 128 deterministic parameter variants.
   if(phase===1){
     const side=rnd(i,2)<.5?-1:1;
     deco(x+side*1.65,surface-.23,z-1.15,1.15,.46,1.35,palette(variant+2));
     deco(x-side*1.35,surface-.23,z-2.5,1.05,.46,1.15,palette(variant+4));
     if(variant%3===0)coin(x+side*1.6,surface+.8,z-1.2);
   }
   if(phase===2){
     const m=deco(x+(rnd(i,3)<.5?-1:1)*1.05,surface-.16,z-2.0,1.4,.32,1.55,'#00e5ff');
     game.moveBlock(m,'x',.55+(variant%5)*.18,.65+(variant%4)*.22);
     if(MODE==='race'||MODE==='neon')deco(x,surface+.09,z-.65,1.0,.16,.8,'#00e5ff',0,5);
   }
   if(phase===3){
     const offset=1.02+(variant%3)*.1;
     deco(x-offset,surface+.6,z-.9,.42,1.2,1.9,'#ff394f',0,3);
     deco(x+offset,surface+.6,z-.9,.42,1.2,1.9,'#ff394f',0,3);
     coin(x,surface+.7,z-1.25);
   }
   if(phase===4){
     // Narrow, level beam with adjacent handrails; the next landing remains reachable.
     deco(x-.98,surface+.34,z-.15,.12,.68,3.1,'#adb5bd');
     deco(x+.98,surface+.34,z-.15,.12,.68,3.1,'#adb5bd');
     if(variant%2===0)coin(x,surface+.72,z-1.15);
   }
   const climbThis=phase===5||(MODE==='climb'&&(phase===2||phase===8));
   if(climbThis){
     const height=2.4;
     const ladder=game.ladder(x,surface,z-1.0,height);list.push(ladder);
     const high=surface+height;
     deco(x,high-.3,z-2.5,3.5,.6,3.0,'#a8dadc');
     coin(x,high+.65,z-2.4);
     pathY=high;
   }
   if(phase===6){
     deco(x,surface+.08,z,.95,.16,.95,'#ff00aa',0,4);
     coin(x+(rnd(i,6)-.5)*1.1,surface+.8,z-1.15);
   }
   if(phase===7){
     deco(x-1.42,surface+.83,z-.2,.18,1.66,3.3,MODE==='lava'?'#ffba08':'#6c757d');
     deco(x+1.42,surface+.83,z-.2,.18,1.66,3.3,MODE==='lava'?'#ffba08':'#6c757d');
     deco(x,surface+2.28,z-.25,2.95,.28,3.25,'#495057');
     if(variant%3===0)coin(x,surface+1.35,z-1.0);
   }
   if(phase===8&&!climbThis){
     const m=deco(x+(rnd(i,8)<.5?-1:1)*.72,surface-.14,z-2.15,1.35,.32,1.25,palette(variant+5));
     game.moveBlock(m,'y',.35+(variant%4)*.1,.8+(variant%3)*.2);
     if(variant%2===0)coin(x,surface+.7,z-1.7);
   }
   if(phase===9){
     deco(x+(rnd(i,9)<.5?-.65:.65),surface-.23,z-1.08,1.22,.46,1.25,palette(variant+1));
     deco(x+(rnd(i,10)<.5?.7:-.7),surface-.23,z-2.35,1.22,.46,1.25,palette(variant+2));
   }
   if(phase===10){
     const drop=Math.min(2.4,Math.max(0,pathY-.8));
     if(drop>.1){
       for(let step=1;step<=4;step++){
         const sy=surface-drop*step/4;
         deco(x+(rnd(i,11+step)-.5)*.4,sy-.14,z-step*.82,2.65,.28,1.45,palette(variant+step));
       }
       pathY=surface-drop;
     }else{
       deco(x,surface+.08,z-1.0,1.0,.16,.9,'#ff00aa',0,4);
       deco(x-.8,surface+.4,z-2.2,.3,.8,.3,'#00e5ff');
       deco(x+.8,surface+.4,z-2.2,.3,.8,.3,'#00e5ff');
     }
   }
   if(phase===11){
     deco(x,surface+.08,z-.7,1.1,.16,1.0,MODE==='race'?'#00e5ff':'#2fbf5b',0,5);
     coin(x+(rnd(i,12)-.5)*1.0,surface+.75,z-1.45);
     if(variant%4===0)deco(x,surface+.5,z-1.6,.22,1,.22,'#ffffff',0,0);
   }
   if(phase===0){
     // Start/section pad and a visible marker. The floor itself is a real checkpoint.
     deco(x,surface+.45,z,1.0,.9,1.0,'#ffffff',0,0);
   }
   if(MODE==='lava'&&phase===7)deco(x,surface+.4,z-1.4,.32,.8,.32,'#ff6b00',0,3);
   if(MODE==='gravity'&&phase===1)deco(x,surface+.35,z-1.7,1.25,.25,1.25,'#9d4edd');
   if(MODE==='water'&&phase===6)deco(x,surface+.1,z-.7,1.1,.2,1.1,'#00b4d8',0,4);
   parts[i]=list;
 }
 function removeStage(i){const list=parts[i];if(!list)return;for(const obj of list){if(obj&&obj.isLadder)game.removeLadder(obj);else game.removeBlock(obj)}delete parts[i]}
 game.setSpawn(0,.3,0);
 game.onDie(()=>{deaths++});
 for(;made<28;made++)makeStage(made);
 game.say('🏁 Obby procedural: más de 1.500 combinaciones de tramo. W para avanzar, usa las escaleras y busca checkpoints verdes.');
 game.onTick(()=>{
   const idx=Math.max(0,Math.floor((-P.p.z-6)/STEP));
   while(made<idx+29){makeStage(made);made++}
   best=Math.max(best,idx);
   for(const key in parts)if(+key<idx-15)removeStage(+key);
   const encoded=(Math.max(0,idx)*37)%TOTAL_TYPES;
   game.hud((MODE==='race'?'🏃':'🏁')+' Tramo '+best+' · Tipo '+(encoded+1)+'/'+TOTAL_TYPES+' · 🚩 '+Math.floor(best/12)*12+' · 💀 '+deaths+' · 🪙 '+game.coins());
 });
})();`;
const OBBY_INFINITE_SCRIPT = mode => OBBY_SCRIPT_BASE.replace('__MODE__',mode);

const DEF=[
{id:'d1',n:'Parkour Infinito',h:'#parkour #escalada #infinito',lava:1,d:'Obby sin final con saltos, escaleras, plataformas móviles, vigas, túneles, trampolines, zonas estrechas y checkpoints cada 12 tramos.',gr:'#5c0a0a',b:[],sp:[0,.3,0],by:'Nixora',th:'linear-gradient(135deg,#ff6b35,#7b2cbf)',sc:OBBY_INFINITE_SCRIPT('classic')},
{id:'d2',n:'Isla Bloques',h:'#exploración',d:'Isla con ciclo de día y noche, animales, casita con tesoro, faro, estanque y 8 gemas escondidas.',gr:'#4cc26a',b:isla,by:'Nixora',th:'linear-gradient(135deg,#4cc26a,#1d6b3a)',sc:`const P=game.player,K=[];let n=0;
for(let i=0;i<40;i++){const a=i*2.4,r=5+i%9;game.addBlock([Math.cos(a)*r,.15,Math.sin(a)*r,.3,.3,.3,['#ff6b6b','#ffd166','#ffffff'][i%3],1,0])}
for(let i=0;i<8;i++){const a=i*.785+.3;K.push(game.addBlock([Math.cos(a)*10,.6,Math.sin(a)*10,.5,.5,.5,'#00e5ff',1,0]))}
for(let i=0;i<7;i++)game.mob(Math.cos(i*.9)*9,Math.sin(i*.9)*9,{peaceful:true,speed:1.1,size:.6+i%3*.15,color:['#ffffff','#f4a261','#8d99ae'][i%3]});
game.say('Isla Bloques: encuentra las 8 gemas y el tesoro de la casita. Anochece y amanece solo.');
const T=game.THREE,day=new T.Color('#6ec6ff'),night=new T.Color('#0b0720');
game.onTick((dt,t)=>{const h=(8+t/4)%24,f=Math.max(0,Math.sin((h-6)/12*Math.PI));game.sky(new T.Color(.15+.85*f,.15+.85*f,.2+.8*f));game.light(.25+.55*f);
 K.forEach(m=>{m.rotation.y+=dt*2;m.position.y=.7+Math.sin(t*3)*.15;if(m.visible&&m.position.distanceTo(P.p)<1.5){m.visible=false;n++;game.sound('Moneda');if(n==8){game.say('🏆 ¡Las 8 gemas!');game.sound('Victoria')}}});
 game.hud('🕒 '+String(h|0).padStart(2,'0')+':00 · 💎 '+n+'/8 · 🪙 '+game.coins())});`},
{id:'d3',n:'Torre Neón',h:'#escalada',lava:1,d:'Sube la espiral de neón sobre un suelo de lava. Hay checkpoints cada 8 escalones y una meta dorada en la cima.',gr:'#1b1b3a',b:tor,by:'Nixora',th:'linear-gradient(135deg,#e0aaff,#5a189a)',sc:`const P=game.player;let t0=null;game.say('🌌 Suelo de lava: no caigas. Checkpoints verdes cada 8 escalones.');
game.onDie(()=>game.say('💀 Caíste. Vuelves al último checkpoint.'));
game.onTick((dt,t)=>{if(t0===null)t0=t;game.hud('⬆ '+P.p.y.toFixed(1)+' m · ⏱ '+((t-t0)|0)+'s')});`},
{id:'d4',n:'Arena de Batalla',h:'#batalla',d:'Te dan una espada y enfrentas oleadas con enemigos rápidos, grandes y un jefe cada 5 oleadas. Recoge corazones para curarte.',gr:'#2b2d42',b:are,by:'Nixora',th:'linear-gradient(135deg,#c1121f,#3a0ca3)',sc:`let wv=0,alive=0,kills=0;game.sword();game.say('⚔ Te dieron una espada: ataca con F o clic. Recoge ❤ para curarte.');
const R=()=>(Math.random()-.5)*30;
const spawn=()=>{wv++;const boss=wv%5==0,n=boss?1:Math.min(18,2+wv*2);
 for(let i=0;i<n;i++){const a=i/n*6.28;alive++;game.mob(Math.cos(a)*14,Math.sin(a)*14,{hp:boss?150+wv*15:20+wv*8,size:boss?2.2:(i%3==0?1.3:.9),speed:boss?2.2:Math.min(4.8,1.8+wv*.1+(i%3==1?1:0)),dmg:boss?18:4+wv*2,color:boss?'#111111':(i%3==0?'#7b2cbf':'#c1121f')})}
 if(wv>1)game.addBlock([R(),.6,R(),.5,.5,.5,'#ff4d6d',1,0,'',2,1,8]);
 game.say(boss?'👹 ¡Jefe! Oleada '+wv:'🌊 Oleada '+wv)};
game.onKill(()=>{alive--;kills++;game.sound('Explosión');if(!alive)setTimeout(spawn,2500)});
spawn();game.onTick(()=>game.hud('Oleada '+wv+' · Bajas '+kills+' · Enemigos '+alive));`},
{id:'d5',n:'Laberinto Esmeralda',h:'#laberinto',d:'Un laberinto generado al azar. Encuentra las monedas escondidas y llega a la baldosa dorada del fondo.',gr:'#1b4332',b:maze,sp:[0,.05,0],by:'Nixora',th:'linear-gradient(135deg,#2d6a4f,#95d5b2)',sc:`game.say('🌿 Encuentra la salida dorada del laberinto.');game.onTick(()=>game.hud('🪙 '+game.coins()+' monedas'))`},
{id:'d6',n:'Ciudad Neón',h:'#ciudad',d:'Una ciudad de neón de noche con trampolines para saltar a los techos, aceleradores en las avenidas y monedas en los edificios.',gr:'#0b0b1a',b:city,sp:[0,.05,7],st:{clock:22,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#ff00aa,#00e5ff)',sc:`game.say('🌃 Usa los trampolines rosas y los aceleradores azules. ¡Junta las monedas!');game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d7',n:'Carrera de Obstáculos',h:'#obby #carrera #infinito',lava:1,d:'Carrera de obstáculos interminable con balancines, escaleras, pasarelas angostas, túneles, plataformas móviles, trampolines y checkpoints.',gr:'#5c0a0a',b:[],sp:[0,.3,0],by:'Nixora',th:'linear-gradient(135deg,#ff6b35,#2fbf5b)',sc:OBBY_INFINITE_SCRIPT('race')},
{id:'d8',n:'Pueblo Medieval',h:'#pueblo',d:'Un pueblo con casas, pozo, bosque, animales y un castillo con tesoro en lo alto. Tiene ciclo de día y noche.',gr:'#4a7c3a',b:vil,by:'Nixora',th:'linear-gradient(135deg,#b08968,#4a7c3a)',sc:`game.say('🏘 Explora el pueblo y sube al castillo del norte.');for(let i=0;i<8;i++)game.mob(Math.cos(i)*14,Math.sin(i)*14,{peaceful:true,speed:1,size:.6+i%3*.15,color:['#ffffff','#f4a261','#8d99ae'][i%3]});`+DAYNIGHT+`game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d9',n:'Espacio Gravedad Baja',h:'#espacio',lava:1,d:'Plataformas flotantes en espiral con gravedad baja. Cae en el vacío de plasma y vuelves al checkpoint. Meta dorada arriba.',gr:'#2b1055',b:space,st:{grav:8,clock:0,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#240046,#7b2cbf)',sc:`game.say('🚀 Gravedad baja: ¡salta lejos! Cuidado con el plasma.');game.onTick(()=>game.hud('⬆ '+game.player.p.y.toFixed(1)+' m · 🪙 '+game.coins()))`},
{id:'d10',n:'Bosque Encantado',h:'#bosque',d:'Un bosque de noche con luciérnagas que son monedas, círculo de piedras y venados pacíficos. Busca el tesoro dorado en el centro.',gr:'#14301a',b:forest,st:{clock:21},by:'Nixora',th:'linear-gradient(135deg,#1b5e20,#b5ff4d)',sc:`game.say('🌲 Sigue las luciérnagas verdes.');for(let i=0;i<7;i++)game.mob(Math.cos(i*.9)*18,Math.sin(i*.9)*18,{peaceful:true,speed:1.2,size:.9,color:'#8d6e63'});game.onTick(()=>game.hud('✨ '+game.coins()+' luciérnagas'))`},
{id:'d11',n:'Desierto de Pirámides',h:'#desierto',d:'Pirámides que se escalan caminando, tesoros en la cima y escorpiones hostiles. Te dan una espada para defenderte.',gr:'#e9c46a',b:desert,st:{clock:12},by:'Nixora',th:'linear-gradient(135deg,#e9c46a,#e76f51)',sc:`game.sword();game.say('🏜 Escala las pirámides, junta el tesoro y defiéndete con F o clic.');for(let i=0;i<6;i++)game.mob(Math.cos(i*1.05)*20,Math.sin(i*1.05)*20,{hp:30,size:.6,speed:1.6,dmg:6,color:'#6d4c41'});game.onKill(()=>game.sound('Explosión'));game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d12',n:'Mundo de Hielo',h:'#hielo',d:'Plataformas de cristal helado en espiral, iglús y una meta dorada en la cima nevada.',gr:'#e0f7fa',b:ice,st:{clock:10},by:'Nixora',th:'linear-gradient(135deg,#caf0f8,#48cae4)',sc:`game.say('❄ Sube por las plataformas de hielo.');game.onTick(()=>game.hud('⬆ '+game.player.p.y.toFixed(1)+' m · 🪙 '+game.coins()))`},
{id:'d13',n:'Castillo del Jefe',h:'#jefe',lava:1,d:'Cruza la lava hasta el castillo, derrota al jefe con tu espada y reclama el tesoro. Hay checkpoints en el camino.',gr:'#3a0d0d',b:castle,by:'Nixora',th:'linear-gradient(135deg,#6a040f,#ffba08)',sc:`const P=game.player;game.sword();let boss=null,done=0;game.say('🏰 Sube al castillo, derrota al jefe y reclama el tesoro. Ataca con F o clic.');game.onDie(()=>game.say('💀 Caíste en la lava.'));game.onTick(()=>{if(!boss&&P.p.z<-55&&P.p.y>8){boss=game.mob(0,-66,{y:9.7,hp:260,size:2.4,speed:2.2,dmg:14,color:'#111111'});game.say('👹 ¡El jefe despierta!')}if(boss&&boss.dead&&!done){done=1;game.say('🏆 ¡Derrotaste al jefe!');game.sound('Victoria')}game.hud(boss?(boss.dead?'🏆 Jefe derrotado':'👹 Jefe: '+Math.max(0,boss.hp|0)):'🏰 Sube al castillo')})`},
{id:'d14',n:'Zona de Zombis',h:'#zombis',d:'Sobrevive a 10 oleadas de zombis de noche, con zombi jefe cada 5 oleadas. Recoge corazones para curarte.',gr:'#2d3a2d',b:zomb,st:{clock:22},by:'Nixora',th:'linear-gradient(135deg,#1b5e20,#212529)',sc:`let wv=0,alive=0,kills=0;game.sword();game.say('🧟 Sobrevive a las oleadas. Ataca con F o clic. Recoge ❤ para curarte.');const R=()=>(Math.random()-.5)*34;
const spawn=()=>{wv++;const n=3+wv*2,boss=wv%5==0;for(let i=0;i<(boss?1:n);i++){const a=Math.random()*6.28;alive++;(()=>{const P=game.player.p,r=4.5+Math.random()*1.5,fast=i%4===0,slow=i%4===1,sz=boss?1.45:(i%5===0?.62:i%3===0?1.18:.88);game.mob(P.x+Math.cos(a)*r,P.z+Math.sin(a)*r,{zombie:true,boss:boss,skinIndex:i%3,hp:boss?200:25+wv*6,size:sz,speed:boss?1.35:fast?3.5+Math.min(2,wv*.06):slow?.25:1.4+Math.min(1.8,wv*.12),dmg:boss?16:4+wv,color:boss?'#1b5e20':'#4caf50'})})()}if(wv>1)game.addBlock([R(),.6,R(),.5,.5,.5,'#ff4d6d',1,0,'',2,1,8]);game.say(boss?'👹 Zombi jefe · Oleada '+wv:'🧟 Oleada '+wv)};
game.onKill(()=>{alive--;kills++;game.sound('Explosión');if(!alive){if(wv==10)game.say('🏆 ¡Sobreviviste las 10 oleadas!');else setTimeout(spawn,2500)}});spawn();game.onTick(()=>game.hud('Oleada '+wv+'/10 · Bajas '+kills+' · Zombis '+alive))`},
{id:'d15',n:'Ruta de Cristal',h:'#parkour #cristal',d:'Cruza una ruta de plataformas brillantes sobre el vacío y recoge cristales de energía.',gr:'#101936',b:moon,sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#00e5ff,#273469)',sc:`game.say('💎 Cruza la ruta y recoge los cristales.');game.onTick(()=>game.hud('🪙 '+game.coins()+' cristales'))`},
{id:'d16',n:'Islas Dulces',h:'#aventura #exploración',d:'Salta por islas de colores pastel y encuentra los objetos brillantes.',gr:'#ffd6e0',b:candy,sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#ff8fab,#ffd166)',sc:`game.say('🍬 Explora las islas dulces y encuentra sus monedas.');game.onTick(()=>game.hud('🍬 '+game.coins()+' dulces'))`},
{id:'d17',n:'Volcán Obsidiana',h:'#volcan #aventura',d:'Escala una espiral de roca volcánica, cruza plataformas calientes y llega al cráter dorado.',gr:'#351c2d',b:volcano,sp:[0,.3,0],lava:1,by:'Nixora',th:'linear-gradient(135deg,#ff5400,#3c1642)',sc:`let best=0;game.say('🌋 Sube la espiral volcánica y busca los fragmentos dorados.');game.onDie(()=>game.say('🔥 El calor te devolvió al inicio.'));game.onTick(()=>{best=Math.max(best,Math.floor(game.player.p.y));game.hud('🌋 Altura '+best+' · 🪙 '+game.coins())})`},
{id:'d18',n:'Arrecife Azul',h:'#mar #exploracion',d:'Explora un arrecife brillante, descubre el barco hundido y recoge perlas entre los corales.',gr:'#0b3954',b:reef,st:{clock:12,grav:18,clouds:0,sky:'#168aad'},sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#00b4d8,#0077b6)',sc:`game.water(0,3,0,400,8,400,true);game.say('🐠 Explora el barco hundido y recoge perlas luminosas. Usa W/A/S/D para nadar y Espacio para subir.');for(let i=0;i<9;i++)game.mob(Math.cos(i*.7)*12,Math.sin(i*.7)*12,{peaceful:true,size:.55+i%3*.12,speed:1.3,color:['#ff6b8a','#ffd166','#80ffdb'][i%3]});game.onTick(()=>game.hud('🫧 Perlas: '+game.coins()))`},
{id:'d19',n:'Circuito Turbo',h:'#carreras #velocidad',d:'Corre por una pista técnica con carriles de neón, aceleradores y una línea de meta.',gr:'#181a2d',b:speedway,sp:[0,.2,1],st:{walk:9,clock:21,clouds:0,sky:'#0a0f2c'},by:'Nixora',th:'linear-gradient(135deg,#00f5d4,#5a189a)',sc:`let t0=0,started=false;game.say('🏎 Pasa por los aceleradores cian y alcanza la meta al final de la pista.');game.onTick((dt,t)=>{if(!started){t0=t;started=true}game.hud('⏱ '+(t-t0|0)+'s · 🪙 '+game.coins())})`},
{id:'d20',n:'Valle Granjero',h:'#granja #coleccion',d:'Recorre los sembrados, visita el granero y busca las cosechas doradas del valle.',gr:'#618b32',b:farm,sp:[0,.2,0],st:{clock:10},by:'Nixora',th:'linear-gradient(135deg,#90be6d,#d9a441)',sc:`game.say('🌾 Recorre las hileras y busca las cosechas doradas.');for(let i=0;i<7;i++)game.mob(-10+Math.cos(i)*8,7+Math.sin(i)*8,{peaceful:true,speed:.7,size:.8,color:'#f4f1de'});game.onTick(()=>game.hud('🌽 Cosecha: '+game.coins()))`},
{id:'d21',n:'Fábrica Mecánica',h:'#desafio #maquinas',d:'Cruza una fábrica de plataformas, vigas, trampas rojas y módulos de energía.',gr:'#424751',b:factory,sp:[0,.2,12],st:{clock:18,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#495057,#e63946)',sc:`game.say('⚙️ Evita las zonas rojas, usa las plataformas metálicas y recoge energía.');let t=0;game.onTick((dt)=>{t+=dt;game.hud('⚙️ Tiempo '+(t|0)+'s · Energía '+game.coins())})`},
{id:'d22',n:'Templo de Sombras',h:'#templo #combate',d:'Asciende una pirámide de piedra antigua, encuentra el altar y derrota a su guardián.',gr:'#716653',b:temple,sp:[0,.3,0],st:{clock:19,sky:'#242038'},by:'Nixora',th:'linear-gradient(135deg,#6d597a,#c9ada7)',sc:`game.sword();let g=null,won=false;game.say('🏛️ Llega al altar en lo alto. El guardián vigila las ruinas.');game.onTick(()=>{if(!g&&game.player.p.y>4.5&&game.player.p.z<-15){g=game.mob(0,-17,{hp:180,size:1.8,speed:2,dmg:12,color:'#433d5b'});game.say('👁️ El guardián ha despertado.')}if(g&&g.dead&&!won){won=true;game.say('🏆 El templo vuelve a estar en paz.');game.sound('Victoria')}game.hud(g?(g.dead?'🏆 Altar conquistado':'👁️ Guardián '+Math.max(0,g.hp|0)):'🏛️ Sube al altar')})`},
{id:'d23',n:'Bahía Pirata',h:'#piratas #tesoro',d:'Explora la cubierta de un barco pirata, salta por islas pequeñas y encuentra cofres perdidos.',gr:'#39758a',b:pirate,sp:[0,.2,3],by:'Nixora',th:'linear-gradient(135deg,#6f4518,#2a9d8f)',sc:`game.sword();game.say('🏴‍☠️ Busca los cofres en las islas y protege el barco de los piratas.');for(let i=0;i<5;i++)game.mob(Math.cos(i*1.2)*13,Math.sin(i*1.2)*13,{hp:35,size:.9,speed:1.5,dmg:5,color:'#56351e'});game.onKill(()=>game.sound('Moneda'));game.onTick(()=>game.hud('💰 Tesoros: '+game.coins()))`},
{id:'d24',n:'Circuito Minigolf',h:'#minigolf #precision',d:'Completa un recorrido de cinco greens, esquiva los bordes y encuentra las banderas doradas.',gr:'#2d6a4f',b:golf,sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#55a630,#80b918)',sc:`game.say('⛳ Recorre los cinco greens en orden y encuentra las banderas doradas.');game.onTick(()=>game.hud('⛳ Greens recorridos: '+Math.min(5,Math.floor((-game.player.p.z+4)/7))+'/5 · 🪙 '+game.coins()))`},
{id:'d25',n:'Archipiélago Celeste',h:'#islas #parkour',d:'Salta entre islas flotantes, junta estrellas y alcanza la isla suspendida entre nubes.',gr:'#87b9e8',b:cloudsMap,sp:[0,.2,0],st:{grav:16,clouds:1,sky:'#8ecae6'},by:'Nixora',th:'linear-gradient(135deg,#a8dadc,#4361ee)',sc:`game.say('☁️ Salta entre las islas celestes: algunas están más altas que otras.');game.onTick(()=>game.hud('⭐ Estrellas: '+game.coins()+' · Altura '+game.player.p.y.toFixed(1)))`},
{id:'d26',n:'Mansión Embrujada',h:'#misterio #terror',d:'Investiga habitaciones oscuras, pasa por el cementerio y evita a las criaturas de la mansión.',gr:'#25212f',b:haunt,sp:[0,.2,8],st:{clock:23,clouds:0,sky:'#11101f',bright:.5},by:'Nixora',th:'linear-gradient(135deg,#312244,#5a189a)',sc:`game.sword();game.say('👻 Encuentra las reliquias y ten cuidado en los pasillos.');for(let i=0;i<6;i++)game.mob(Math.cos(i*1.05)*10,Math.sin(i*1.05)*10,{hp:35,size:.85,speed:1.4,dmg:5,color:'#8b5cf6'});game.onKill(()=>game.sound('Explosión'));game.onTick(()=>game.hud('🔮 Reliquias: '+game.coins()))`},
{id:'d27',n:'Mina de Cristales',h:'#mina #exploracion',d:'Avanza por galerías rocosas, encuentra vetas luminosas y sigue las vías hacia la cámara final.',gr:'#46413c',b:mine,sp:[0,.2,0],st:{clock:16,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#606c38,#00b4d8)',sc:`game.say('⛏️ Sigue los rieles, reúne cristales y encuentra la cámara profunda.');game.onTick(()=>game.hud('💎 Cristales: '+game.coins()+' · Profundidad '+Math.max(0,Math.floor(-game.player.p.z/3))))`},
{id:'d28',n:'Cumbre del Dragón',h:'#montaña #jefe',d:'Sube un sendero de piedra por la montaña y enfréntate al dragón que custodia la cima.',gr:'#342b3d',b:dragon,sp:[0,.2,0],lava:1,st:{clock:20,clouds:0,sky:'#251d31'},by:'Nixora',th:'linear-gradient(135deg,#9d0208,#6a040f)',sc:`game.sword();let boss=null,done=false;game.say('🐉 Sube hasta la cumbre y prepárate para el guardián.');game.onTick(()=>{if(!boss&&game.player.p.y>6){boss=game.mob(0,-14,{boss:true,hp:280,size:2.5,speed:2.1,dmg:15,color:'#c1121f'});game.say('🐉 ¡El dragón despierta!')}if(boss&&boss.dead&&!done){done=true;game.say('🏆 La cumbre es tuya.');game.sound('Victoria')}game.hud(boss?(boss.dead?'🏆 Dragón derrotado':'🐉 Vida del dragón: '+Math.max(0,boss.hp|0)):'⬆ Altura: '+game.player.p.y.toFixed(1))})`},
{id:'d29',n:'Obby de Lava Infinito',h:'#obby #parkour #lava #infinito',d:'Circuito procedural de más de 1.500 combinaciones: saltos sobre lava, láseres, plataformas móviles, rampas y checkpoints.',gr:'#351c2d',b:[],sp:[0,.3,0],lava:1,st:{clock:19,clouds:0,sky:'#25131a'},by:'Nixora',th:'linear-gradient(135deg,#ff5400,#9d0208)',sc:OBBY_INFINITE_SCRIPT('lava')},
{id:'d30',n:'Parkour de Escalada',h:'#obby #parkour #escalada #infinito',d:'Sube por escaleras obligatorias, cruza puentes altos y desciende por rampas construidas dinámicamente.',gr:'#31572c',b:[],sp:[0,.3,0],lava:1,st:{clock:14,sky:'#264653'},by:'Nixora',th:'linear-gradient(135deg,#588157,#c9a66b)',sc:OBBY_INFINITE_SCRIPT('climb')},
{id:'d31',n:'Parkour Neón Infinito',h:'#parkour #obby #neon #infinito',d:'Carrera futurista con pasarelas brillantes, túneles, plataformas móviles, aceleradores y combinaciones que cambian por tramo.',gr:'#16102f',b:[],sp:[0,.3,0],lava:1,st:{clock:22,clouds:0,sky:'#120d2a'},by:'Nixora',th:'linear-gradient(135deg,#ff00aa,#00e5ff)',sc:OBBY_INFINITE_SCRIPT('neon')},
{id:'d32',n:'Obby de Gravedad',h:'#obby #parkour #gravedad #infinito',d:'Circuito de saltos más flotantes con caminos estrechos, plataformas cambiantes y tramos de gravedad baja.',gr:'#24104f',b:[],sp:[0,.3,0],lava:1,st:{grav:14,clock:0,clouds:0,sky:'#17113b'},by:'Nixora',th:'linear-gradient(135deg,#4361ee,#7b2cbf)',sc:OBBY_INFINITE_SCRIPT('gravity')},
{id:'d33',n:'Carrera Parkour Turbo',h:'#obby #parkour #carrera #velocidad #infinito',d:'Prueba contrarreloj con aceleradores, bloques móviles, puentes estrechos y checkpoints regulares.',gr:'#15232e',b:[],sp:[0,.3,0],lava:1,st:{walk:8.5,clock:21,clouds:0,sky:'#102033'},by:'Nixora',th:'linear-gradient(135deg,#00f5d4,#5a189a)',sc:OBBY_INFINITE_SCRIPT('race')},
{id:'d34',n:'Parkour del Bosque Infinito',h:'#parkour #obby #bosque #aventura #infinito',d:'Un sendero aéreo entre plataformas de madera, puentes, troncos y retos que cambian continuamente.',gr:'#14301a',b:[],sp:[0,.3,0],lava:1,st:{clock:10,sky:'#1b4332'},by:'Nixora',th:'linear-gradient(135deg,#1b5e20,#95d5b2)',sc:OBBY_INFINITE_SCRIPT('forest')} ];

/* ---------- Catálogo ampliado: 90 experiencias generadas con mapas y objetivos propios ---------- */
const NX_GAME_FAMILIES = [
 {k:'obby',prefix:'Obby Infinito',tag:'#obby #parkour #infinito',desc:'Recorrido interminable con patrones de saltos, plataformas móviles, escaleras, túneles, aceleradores y checkpoints.',modes:['classic','lava','climb','neon','gravity','race','forest','water'],names:['Templo Volcánico','Bosque de Cristal','Rascacielos Neón','Glaciar Suspendido','Ruinas del Dragón','Tubos Cósmicos','Castillo de Lava','Islas Turbo'],colors:['#ff6b35','#00e5ff','#80ffdb','#ffd166']},
 {k:'race',prefix:'Gran Premio',tag:'#carreras #parkour #velocidad',desc:'Circuito amplio con carriles, pórticos de control, saltos y aceleradores. Completa los sectores y vence tu tiempo.',names:['Costa Tropical','Neón Urbano','Cañón Rojo','Glaciar Azul','Puerto Espacial','Bosque Rally','Desierto Rally','Autopista Nocturna'],colors:['#00e5ff','#ffd166','#ff6b35','#2fbf71']},
 {k:'tycoon',prefix:'Tycoon',tag:'#construcción #simulador',desc:'Explora un terreno de construcción, visita cuatro parcelas, reúne materiales y completa el circuito de expansión.',names:['Ciudad Flotante','Parque Acuático','Mega Fábrica','Estación Espacial','Hotel del Bosque','Puerto Pirata','Centro de Robots','Reino Dulce'],colors:['#6c5ce7','#00b4d8','#ffd166','#2fbf71']},
 {k:'survival',prefix:'Supervivencia',tag:'#supervivencia #combate',desc:'Arena grande con suministros, zonas seguras y oleadas crecientes de enemigos humanoides. Sobrevive todo lo posible.',names:['Noche Zombi','Isla Salvaje','Refugio Glacial','Cráter de Lava','Metro Abandonado','Bosque Oscuro','Colonia Lunar','Ciudad en Ruinas'],colors:['#b7e4c7','#e63946','#495057','#ffd166']},
 {k:'adventure',prefix:'Aventura',tag:'#aventura #exploración #misiones',desc:'Explora un mundo abierto con lugares secretos, NPCs, coleccionables, rutas elevadas y una meta de expedición.',names:['Templo Perdido','Archipiélago Dorado','Valle de los Gigantes','Frontera del Oeste','Jungla Esmeralda','Cañón de los Ecos','Islas de los Vientos','Montaña del Dragón'],colors:['#95d5b2','#e9c46a','#8d99ae','#00b4d8']},
 {k:'maze',prefix:'Laberinto',tag:'#laberinto #puzzle #exploración',desc:'Laberinto transitable generado por semilla, con pasillos, bifurcaciones, reliquias y una salida claramente marcada.',names:['Jardín Esmeralda','Catacumbas Antiguas','Palacio de Hielo','Biblioteca Infinita','Minas de Cristal','Templo Solar','Jardín de Setos','Ruinas Subterráneas'],colors:['#2d6a4f','#6c757d','#a8dadc','#ffd166']},
 {k:'roleplay',prefix:'Vida en',tag:'#roleplay #ciudad #social',desc:'Zona habitable con casas abiertas por puertas, plaza central, tiendas, caminos, vecinos NPC y pequeños encargos.',names:['Puerto Brillante','Villa del Roble','Ciudad Arcoíris','Pueblo Nevado','Costa Marina','Barrio Futurista','Aldea Medieval','Isla de Vacaciones'],colors:['#c9a66b','#90be6d','#90e0ef','#ff8fab']},
 {k:'treasure',prefix:'Cazatesoros',tag:'#tesoros #colección #aventura',desc:'Mapa de expedición con cofres, monedas visibles, ruinas y una cámara del tesoro al final del camino.',names:['Pirámides Doradas','Naufragio Perdido','Cueva de Zafiros','Reino de Arena','Santuario del Sol','Bahía de los Piratas','Bosque de Reliquias','Luna de Oro'],colors:['#ffd166','#c9a66b','#00b4d8','#e9c46a']},
 {k:'sport',prefix:'Desafío Deportivo',tag:'#deportes #carrera #parkour',desc:'Arena deportiva con carriles, estaciones de precisión, saltos, metas y cinco sectores para completar sin detenerse.',names:['Estadio Neón','Olimpiadas de Hielo','Circuito de Saltos','Arena Acuática','Pista de Montaña','Desafío de Globos','Estadio Cósmico','Copa del Bosque'],colors:['#00e5ff','#2fbf71','#ffd166','#ff8fab']},
 {k:'dungeon',prefix:'Mazmorra',tag:'#combate #jefes #aventura',desc:'Fortaleza con pasillos y cámaras, enemigos humanoides, tesoros y una batalla contra un guardián al final.',names:['Rey de Ceniza','Cripta Violeta','Fortaleza Helada','Cámara Mecánica','Templo de Hueso','Cueva del Dragón','Torre Maldita','Núcleo de Lava'],colors:['#6d597a','#c1121f','#8d99ae','#ffd166']},
 {k:'farm',prefix:'Granja',tag:'#granja #simulador #colección',desc:'Granja amplia con parcelas, granero, caminos, árboles y vecinos. Recoge las cosechas doradas repartidas por el mapa.',names:['Primavera Verde','Huerto Tropical','Granja Nevada','Valle de Calabazas','Isla de Frutas','Rancho del Oeste','Granja de Cristal','Jardín de Flores'],colors:['#7cae38','#90be6d','#f4d35e','#e07a5f']},
 {k:'sky',prefix:'Islas Celestes',tag:'#obby #parkour #islas #altura',desc:'Ruta de plataformas flotantes con saltos largos, puentes aéreos, escaleras, estrellas y checkpoints sobre el vacío.',names:['Reino de las Nubes','Puentes del Sol','Órbita Violeta','Templo Celestial','Islas de Cristal','Camino del Cometa','Jardín Suspendido','Cumbre Arcoíris'],colors:['#a8dadc','#4361ee','#c77dff','#ffd166']},
 {k:'underwater',prefix:'Aventura Submarina',tag:'#océano #exploración #nadar',desc:'Arrecife grande con barcos hundidos, cuevas de coral, perlas, vida NPC y rutas para explorar nadando.',names:['Arrecife Turquesa','Ciudad Sumergida','Trinchera Azul','Isla de las Perlas','Laboratorio Marino','Jardín de Medusas','Naufragio Ámbar','Reino de Coral'],colors:['#00b4d8','#48cae4','#80ffdb','#ff6b8a']},
 {k:'escape',prefix:'Escape',tag:'#escape #parkour #misterio',desc:'Recorre un laberinto de pasillos y trampas, reúne llaves luminosas y llega a la puerta final mientras te persiguen NPC hostiles.',names:['Laboratorio Cerrado','Mansión Sombría','Prisión Robótica','Hotel Fantasma','Búnker Secreto','Nave Perdida','Museo de Medianoche','Túnel de Hielo'],colors:['#343a40','#6d597a','#e63946','#00b4d8']},
 {k:'puzzle',prefix:'Puzzle de',tag:'#puzzle #lógica #exploración',desc:'Resuelve una ruta de runas por orden, cruza plataformas numeradas y alcanza la cámara de salida.',names:['Runas Antiguas','Luces de Neón','Cristales Musicales','Templo de Colores','Reloj Gigante','Puertas Mágicas','Código Espacial','Espejos del Bosque'],colors:['#9d4edd','#00e5ff','#ffd166','#2fbf71']},
 {k:'defense',prefix:'Defensa',tag:'#defensa #oleadas #combate',desc:'Protege la base desde una arena abierta, usa la espada contra oleadas crecientes y derrota al jefe cada tercera oleada.',names:['Muralla del Reino','Estación Lunar','Puente de Lava','Puerto de Hielo','Ciudad Neón','Campamento del Bosque','Fortaleza Pirata','Refugio del Desierto'],colors:['#495057','#4361ee','#e63946','#ffd166']},
 {k:'duel',prefix:'Duelo 1 contra 1',tag:'#batalla #pvp #1v1 #combate',desc:'Arena competitiva para dos jugadores reales. Cada jugador aparece en su extremo y gana quien consiga tres derribos.',names:['Arena Clásica','Azoteas Neón','Templo de Hielo','Puente Flotante','Fortaleza del Desierto','Cúpula Cósmica','Ruinas del Bosque','Coliseo Carmesí'],colors:['#c1121f','#4361ee','#ffd166','#00e5ff']},
 {k:'obby',prefix:'Parkour Aéreo',tag:'#obby #parkour #aéreo',desc:'Desafío vertical en islas altas con plataformas de tamaños distintos, vigas, escaleras y una meta en la cumbre.',names:['Torre del Trueno','Vía de los Cometas','Puentes Arcoíris','Rascacielos Flotante','Escalera de Cristal','Anillos Celestes','Cúpula del Viento','Torre de la Aurora'],colors:['#00e5ff','#ff8fab','#7b2cbf','#ffd166']},
 {k:'fishing',prefix:'Pesca y Relájate',tag:'#pesca #relax #exploración',desc:'Pueblo costero con muelle, barcas, faroles y rincones tranquilos. Lanza la caña en los puntos señalados y completa encargos de pesca.',names:['Puerto de las Luciérnagas','Lago Espejo','Muelle Coral','Bahía del Atardecer'],colors:['#2a9d8f','#52b6cf','#e9c46a','#f4a261']},
 {k:'cooking',prefix:'Cocina en Equipo',tag:'#cocina #simulador #trabajoenequipo',desc:'Restaurante acogedor con cocina, despensa, mesas y pedidos. Reúne ingredientes, llévalos a la cocina y completa los encargos.',names:['Cafetería de la Plaza','Pizzería del Puerto','Panadería Dulce','Restaurante Estelar'],colors:['#e76f51','#f4a261','#90be6d','#ffd166']},
 {k:'hide',prefix:'Escondite',tag:'#escondite #supervivencia #NPC',desc:'Parque con callejones, arbustos, cabañas y refugios. Evita a los buscadores durante el tiempo de la ronda y llega al refugio seguro.',names:['Jardín Nocturno','Museo Abandonado','Campamento en el Bosque','Barrio de los Gatos'],colors:['#344e41','#6d597a','#588157','#8ecae6']},
 {k:'rescue',prefix:'Rescate de Mascotas',tag:'#mascotas #misiones #aventura',desc:'Explora un refugio y los senderos vecinos, encuentra animales perdidos y llévalos de vuelta al centro de rescate.',names:['Refugio del Roble','Isla de Cachorros','Santuario del Bosque','Aldea de los Mininos'],colors:['#90be6d','#ffafcc','#a3b18a','#bde0fe']},
 {k:'rhythm',prefix:'Ritmo y Baile',tag:'#ritmo #música #minijuegos',desc:'Pista de baile con luces de colores y plataformas musicales. Sigue la secuencia y pulsa en el momento justo para conseguir una puntuación alta.',names:['Discoteca Neón','Festival de la Playa','Escenario Cósmico','Fiesta de Invierno'],colors:['#7b2cbf','#00e5ff','#ff4d6d','#ffd166']},
 {k:'delivery',prefix:'Reparto Exprés',tag:'#entrega #carrera #ciudad',desc:'Recorre calles de una pequeña ciudad, recoge paquetes y visita las casas y tiendas indicadas antes de que termine el tiempo.',names:['Reparto del Centro','Paquetes en la Costa','Mensajería del Bosque','Ruta de Invierno'],colors:['#4361ee','#2a9d8f','#c9a66b','#8ecae6']}
];
function nxRand(seed,n){const v=Math.sin(seed*127.1+n*311.7+seed*n*.013)*43758.5453123;return v-Math.floor(v)}
function nxBuildMap(seed,family,palette,title=""){
 const a=[],put=(x,y,z,w,h,d,c,solid=1,flag=0,kind=0)=>box(a,x,y,z,w,h,d,c,1,solid,'',kind,1,flag),N=palette.length;
 const col=i=>palette[(i%N+N)%N];
 if(family==='obby')return a;
 if(family==='duel'){
  put(0,.05,0,36,.5,28,'#34394f');put(-18,2,0,.8,4,28,'#5f667a');put(18,2,0,.8,4,28,'#5f667a');put(0,2,-14,36,4,.8,'#5f667a');put(0,2,14,36,4,.8,'#5f667a');
  put(-7,.42,0,7,.32,7,col(0));put(7,.42,0,7,.32,7,col(1));put(0,.35,0,3,.3,3,'#24283b');
  for(let i=0;i<4;i++){const x=i%2?-4.5:4.5,z=i<2?-7:7;put(x,.65,z,1.7,1.3,1.7,col(i+2));put(x,1.4,z,.35,.35,.35,'#ffd166',0,6,2)}
  put(-13,.35,-9,3,.7,3,'#606c38');put(13,.35,9,3,.7,3,'#606c38');put(0,.35,-10,5,.7,2,'#d6d6d6');put(0,.35,10,5,.7,2,'#d6d6d6');return a;
 }
 if(family==='sky'){
  // No floor below the route: falling sends the player back to spawn.
  put(0,1,.0,10,.6,10,col(0));
  for(let i=0;i<38;i++){const x=Math.sin(seed*.31+i*.73)*(2.2+(i%4)*.7),z=-4.5-i*2.15,y=1.1+i*.43,w=2.8+(i%4)*.45;put(x,y,z,w,.55,2.8+(i%3)*.35,col(i+1),1,i%8===7?2:0);if(i%4===1)put(x+(i%2?1.7:-1.7),y+.2,z-1,.5,.4,.5,col(i+2),0,6,2);if(i%6===3)put(x,y+1.2,z,.18,1.8,.18,col(i+3))}
  put(0,18,-87,8,.8,8,'#ffd166',1,2);return a;
 }
 if(family==='maze'||family==='escape'){
  put(0,-.3,0,82,.6,82,col(0));
  const size=13,cell=3, wallH=3,grid=Array.from({length:size},()=>Array.from({length:size},()=>({v:0,t:1,r:1,b:1,l:1}))),stack=[[0,0]];grid[0][0].v=1;
  while(stack.length){const [r,c]=stack[stack.length-1],opts=[[r-1,c,'t','b'],[r,c+1,'r','l'],[r+1,c,'b','t'],[r,c-1,'l','r']].filter(([rr,cc])=>rr>=0&&cc>=0&&rr<size&&cc<size&&!grid[rr][cc].v);if(!opts.length){stack.pop();continue}const pick=opts[Math.floor(nxRand(seed,stack.length*7+r*17+c*5)*opts.length)],[rr,cc,side,op]=pick;grid[r][c][side]=0;grid[rr][cc][op]=0;grid[rr][cc].v=1;stack.push([rr,cc])}
  for(let r=0;r<size;r++)for(let c=0;c<size;c++){const q=grid[r][c],x=(c-6)*cell,z=(6-r)*cell;if(q.t)put(x,1.5,z-cell/2,cell+.15,wallH,.28,col(r+c+seed));if(q.l)put(x-cell/2,1.5,z,.28,wallH,cell+.15,col(r+c+seed+1));if(r===size-1&&q.b)put(x,1.5,z+cell/2,cell+.15,wallH,.28,col(seed+c+2));if(c===size-1&&q.r)put(x+cell/2,1.5,z,.28,wallH,cell+.15,col(seed+r+3))}
  // Entrance and exit markers make the objective easy to read.
  put(-18,.22,18,1.4,.25,1.4,'#2fbf71',0,6,2);put(18,.22,-18,2,.35,2,'#ffd166',0,6,2);
  for(let i=0;i<12;i++){const rr=1+Math.floor(nxRand(seed,i+300)*11),cc=1+Math.floor(nxRand(seed,i+500)*11),x=(cc-6)*cell,z=(6-rr)*cell;put(x,.85,z,.4,.4,.4,col(i+2),0,6,2)}
  return a;
 }
 // Large explorable terrain with roads, a plaza, buildings and a clear landmark at the end of the main avenue.
 put(0,-.3,0,112,.6,112,col(0));
 put(0,.05,0,5,.1,88,'#6c757d');put(0,.05,-15,20,.1,5,'#6c757d');put(0,.05,15,20,.1,5,'#6c757d');put(-15,.05,0,5,.1,26,'#6c757d');put(15,.05,0,5,.1,26,'#6c757d');
 put(0,.14,0,13,.28,13,col(1));put(0,.35,0,3,.42,3,col(2));put(0,.7,0,.9,.4,.9,'#ffd166',0,6,2);
 if(family==='roleplay'||family==='farm'){
  [[-22,-18],[22,-18],[-22,18],[22,18]].forEach(([x,z],i)=>{house(a,x,z,col(i+2));put(x,.12,z+5,5,.24,3,col(i+1));put(x,.45,z+5,1,.5,1,'#ffd166',0,6,2)});
 } else if(family!=='tycoon') {
  [[-21,-19],[21,-19],[-21,19],[21,19]].forEach(([x,z],i)=>{house(a,x,z,col(i+2))});
 }
 // Decorative trees stay clear of paths; trunks and crowns are visible pieces rather than a single giant cube.
 for(let i=0;i<24;i++){const ang=i*2.399+seed*.17,r=28+(i%4)*3,x=Math.cos(ang)*r,z=Math.sin(ang)*r;if(Math.abs(x)<5||Math.abs(z)<5)continue;tree(a,x,z,i%4,.82+nxRand(seed,i+800)*.45);if(i%3===0)put(x+1,.3,z+.8,.7,.6,.7,'#b08968',0)}
 // Lamps and park benches give the central streets scale and visual rhythm.
 for(let i=0;i<8;i++){const x=(i%2?1:-1)*(8+Math.floor(i/2)*6),z=(i<4?-1:1)*(8+(i%4)*4);put(x,1.25,z,.16,2.5,.16,'#495057');put(x,2.55,z,.6,.28,.6,'#ffd166',0);if(i%2===0)put(x+1,.35,z,1.8,.35,.5,'#8d6e63')}
 // Theme landmarks, each with walkable approaches and a goal at the far end.
 if(family==='race'||family==='sport'){
  for(let i=0;i<8;i++){const z=-6-i*5.5;put(0,.12,z,10,.24,4,i%2?'#343a40':'#495057');put(-5.25,.4,z,.25,.8,3,'#ffd166');put(5.25,.4,z,.25,.8,3,'#ffd166');if(i%2===0)put(0,.4,z,1,.12,3,'#00e5ff',0,5,0)}
  for(let z of [-12,-28,-44]){put(-4,2.2,z,.5,4,.5,col(2));put(4,2.2,z,.5,4,.5,col(2));put(0,4.1,z,8.5,.5,.5,col(1))}
 } else if(family==='farm'){
  for(let r=0;r<5;r++)for(let c=0;c<7;c++){const x=-14+c*4,z=5+r*4;put(x,.18,z,2.5,.36,2.5,r%2?'#6f8f36':'#8fbf4d');put(x,.65,z,.55,.75,.55,['#f4d35e','#e07a5f','#90be6d'][c%3],0,6,2);if(c%2===0)put(x+1.3,.5,z,.25,.65,.25,'#4f772d')}
  put(0,.5,-32,16,1,11,'#8d6e63');put(0,1.2,-32,17,.4,12,'#b23a48');
 } else if(family==='tycoon'){
  const plots=[[-27,-29],[27,-29],[-27,29],[27,29]];plots.forEach(([x,z],i)=>{put(x,.16,z,12,.32,12,['#555b66','#4b6043','#475569','#6b4f3a'][i],1);put(x,.36,z,8,.12,8,col(i+1),1);put(x-4,.8,z-4,.4,1.2,.4,'#e9ecef');put(x,.8,z-4,.4,1.2,.4,'#e9ecef');put(x+4,.8,z-4,.4,1.2,.4,'#e9ecef');put(x,.3,z+7,3,.6,2,'#d6a23b',0,6,2)});put(0,.2,0,14,.4,14,'#334155');put(0,.55,0,5,.3,5,'#ffd166',0,6,2);
 } else if(family==='fishing'){
  put(0,.02,0,30,.12,24,'#2a9d8f',1);put(0,.25,0,23,.25,17,'#277da1',0);put(0,.5,10,25,.8,3,'#8d6e63');put(-8,.9,10,.25,1.8,.25,'#70452b');put(8,.9,10,.25,1.8,.25,'#70452b');put(0,1.9,10,16,.18,.25,'#c9a66b');for(let i=0;i<5;i++){put(-12+i*6,.25,-7,1.1,.45,1.1,col(i+1),0,6,2);put(-12+i*6,.65,-7,.35,.35,.35,'#ffd166',0,6,2)}put(0,.4,15,6,.8,3,'#c9a66b');
 } else if(family==='cooking'){
  house(a,0,-27,'#e9c46a');put(0,.8,-26,12,1.6,2,'#8d6e63');put(-3,1.8,-26,1,.25,1,'#e76f51');put(0,1.8,-26,1,.25,1,'#90be6d');put(3,1.8,-26,1,.25,1,'#f4a261');for(let i=0;i<4;i++){const x=-10+i*6;put(x,.45,-12,1.5,.9,1.5,'#c9a66b');put(x,.95,-12,.45,.1,.45,'#f4a261',0,6,2)}put(-14,.6,-31,3,1.2,3,'#8d6e63');put(14,.6,-31,3,1.2,3,'#8d6e63');
 } else if(family==='hide'){
  for(let i=0;i<7;i++){const x=-24+i*8,z=(i%2?14:-13);put(x,.5,z,3,1,3,'#386641',0);put(x,.9,z,.8,.8,.8,'#6a994e',0);if(i%2===0)house(a,x,z-5,'#8d6e63')}put(0,.6,-31,8,1.2,5,'#6c757d');put(0,1.3,-31,9,.3,6,'#495057');
 } else if(family==='rescue'){
  house(a,0,-29,'#b08968');for(let i=0;i<6;i++){const x=-15+i*6,z=7+(i%2)*5;put(x,.3,z,3,.6,3,'#c9a66b');put(x,.75,z,.8,.9,.8,['#f4a261','#8d99ae','#90be6d'][i%3],0,6,2);put(x+1,.8,z,.18,.9,.18,'#f8f9fa',0)}put(0,.35,-12,8,.7,7,'#90be6d');
 } else if(family==='rhythm'){
  put(0,.22,-16,26,.44,24,'#21213a');for(let i=0;i<6;i++)for(let j=0;j<5;j++)put(-10+i*4,.48,-25+j*4,2.5,.12,2.5,col((i+j)%N),1,5);for(let i=0;i<4;i++){put(-12+i*8,3,-29,.35,6,.35,'#343a40');put(-12+i*8,6.1,-29,.9,.35,.9,col(i),0)}
 } else if(family==='delivery'){
  put(0,.08,0,9,.16,78,'#495057');for(let i=0;i<5;i++){const x=i%2?-15:15,z=-8-i*8;house(a,x,z,col(i+1));put(x,.5,z+4,2.2,1,2,'#c9a66b');put(x,.95,z+4,.6,.15,.6,'#ffd166',0,6,2)}for(let i=0;i<6;i++)put((i%2?1:-1)*4,.25,-6-i*7,.45,.12,.45,'#ffffff',0,6,2);
 } else if(family==='underwater'){
  for(let i=0;i<34;i++){const ang=i*2.399,r=6+(i%6)*4,x=Math.cos(ang)*r,z=Math.sin(ang)*r,h=1.4+(i%4)*.55;put(x,h/2,z,.6,h,.6,['#00b4d8','#ff6b8a','#80ffdb'][i%3]);if(i%3===0)put(x,h+.3,z,.4,.4,.4,'#ffd166',0,6,2)}
  put(0,1,-18,14,1,5,'#70452b');put(0,2,-18,11,.8,3,'#8b5524');put(-3,3,-18,.35,4,.35,'#c9a66b');put(3,3,-18,.35,4,.35,'#c9a66b');
 } else if(family==='dungeon'||family==='defense'||family==='survival'){
  put(0,.2,-33,23,.4,17,'#495057');for(let x of [-11,11]){put(x,2,-33,1,4,17,col(1));for(let z of [-39,-33,-27])put(x,4.3,z,2,.6,2,col(2))}put(0,2,-41,12,4,1,col(2));
 } else if(family==='puzzle'){
  [[-9,-8],[0,-22],[9,-8],[0,-39]].forEach(([x,z],i)=>{put(x,.35,z,4,.7,4,col(i+1));put(x,.95,z,.6,.5,.6,'#ffffff',0,6,2)});
 } else if(family==='adventure'||family==='treasure'){
  put(0,.5,-34,16,1,12,'#8d6e63');for(let i=0;i<5;i++)put(-6+i*3,1.5,-39,.7,3,.7,col(i+2));put(0,2,-39,12,.5,2,'#c9a66b');put(0,2.65,-39,1,.8,1,'#ffd166',0,6,2);
 } else if(family==='roleplay'){
  put(0,.6,-30,7,1.2,7,'#8d99ae');put(0,1.3,-30,5,.2,5,'#00b4d8');for(let i=0;i<6;i++){const x=-10+i*4;put(x,.8,-8,1.1,1.6,.9,col(i+1));put(x,1.75,-8,1.35,.3,1.1,'#ffd166',0)}
 } else {
  put(0,.5,-33,16,1,12,col(2));for(let i=0;i<7;i++){const x=Math.sin(i*.9)*8,z=-8-i*4;put(x,.6,z,2.3,1.2,2.3,col(i+1));if(i%2===0)put(x,.65,z,.55,.55,.55,'#ffd166',0,6,2)}
 }
 // A clearly visible finish arch, connected to the main road.
 put(-4,2,-47,.45,4,.45,'#ffd166');put(4,2,-47,.45,4,.45,'#ffd166');put(0,4,-47,8.5,.45,.45,'#ffd166');put(0,.5,-52,7,1,7,'#2fbf71');put(0,1.25,-52,.8,.5,.8,'#ffffff',0,6,2);
 // Collectibles are deliberately aligned with streets and clearings, not hidden inside walls.
 const spots=[[-8,-7],[8,-7],[-8,7],[8,7],[-28,0],[28,0],[0,27],[0,-24],[-29,-29],[29,-29],[-29,29],[29,29]];
 spots.forEach(([x,z],i)=>put(x,.85,z,.42,.42,.42,col(i+2),0,6,2));
 // Seeded neighborhoods: settlement maps get their own street plan, homes and landmarks.
 // The layout is deterministic per game seed, so all players see the same town while different games vary.
 const mapTitle=String(title||''),hasTownWord=/(ciudad|pueblo|villa|barrio|puerto|aldea|granja|hotel|mansi[oó]n|refugio|campamento|estaci[oó]n|f[aá]brica|shopping|comercial|costa|bah[ií]a|bosque|ranch|rancho|town|village|city|harbor|farm|mansion|metro|mall|residential)/i.test(mapTitle);
 const homesByFamily={roleplay:6,delivery:5,cooking:4,fishing:4,farm:5,rescue:4,hide:4,tycoon:0,survival:4,defense:3};
 const settlement=Object.prototype.hasOwnProperty.call(homesByFamily,family)||hasTownWord&&!['obby','duel','sky','maze','puzzle','race','sport','underwater','rhythm'].includes(family);
 if(settlement){
  const urban=['roleplay','delivery','cooking','fishing','tycoon'].includes(family)||/(ciudad|barrio|puerto|hotel|estaci[oó]n|f[aá]brica|shopping|comercial|city|town|metro|mall)/i.test(mapTitle);
  const rustic=['farm','rescue','hide'].includes(family)||/(bosque|granja|rancho|aldea|village|farm|isla|santuario)/i.test(mapTitle);
  const ruin=['survival','defense'].includes(family)&&!urban;
  // Short side streets create distinct blocks while preserving the central objective lane.
  if(urban){
   for(const side of [-1,1]){
    put(side*33,.025,0,2.2,.07,96,'#343b46',0);
    put(side*33,.075,0,.18,.025,96,'#d6dce3',0);
    for(const z of [-40,-20,20,40]){put(side*42,.045,z,18,.08,1.5,'#6b737c',0);put(side*38,.09,z,1.05,.12,1.05,'#e1d6be',0)}
   }
   for(const z of [-33,33]){put(0,.025,z,68,.07,2.2,'#343b46',0);put(0,.075,z,68,.025,.16,'#d6dce3',0)}
  }else if(rustic){
   for(let i=0;i<5;i++){const z=-40+i*20;put(0,.025,z,82,.06,1.4,'#bda77c',0);for(const side of [-1,1])put(side*(25+(i%2)*7),.03,z,1.2,.06,18,'#bda77c',0)}
  }else{
   // Ruined outposts and survival clearings keep the play lanes open.
   for(const side of [-1,1]){put(side*35,.02,0,1.5,.06,82,'#66635f',0);put(side*35,.08,0,.15,.03,82,'#8f8d87',0)}
  }
  const candidates=[];
  for(const hx of [-47,-39,39,47])for(const hz of [-43,-27,27,43])candidates.push([hx,hz]);
  // Seeded shuffle: every experience has a different house arrangement without desynchronizing co-op players.
  for(let i=candidates.length-1;i>0;i--){const j=Math.floor(nxRand(seed,i+1700)*(i+1));[candidates[i],candidates[j]]=[candidates[j],candidates[i]]}
  const baseCount=homesByFamily[family]??(hasTownWord?6:0),count=Math.min(candidates.length,Math.max(0,baseCount?baseCount+Math.floor(nxRand(seed,1801)*3)-1:0));
  const wallPalette=urban?['#d4a373','#adb5bd','#eee2cf','#c76f51','#bde0fe','#d6ccc2']:rustic?['#c9a66b','#b08968','#a3b18a','#d4a373','#9b8065']:['#8d8c86','#9c8f7a','#796b62','#b08968'];
  const roofPalette=['#7b3f32','#343a40','#6c5b7b','#8d5524','#495057','#a23b3b'];
  for(let i=0;i<count;i++){
   const [hx,hz]=candidates[i],wi=Math.floor(nxRand(seed,1900+i)*wallPalette.length),ri=Math.floor(nxRand(seed,2000+i)*roofPalette.length),wall=wallPalette[wi],roof=roofPalette[ri];
   if(ruin&&nxRand(seed,2100+i)<.38){
    // Damaged-looking, low abandoned structures rather than clean suburban homes.
    put(hx,.9,hz,7.2,1.8,6.8,wall,1);put(hx,1.95,hz-3.3,7.2,.25,.25,'#625d58',1);
    put(hx-1.3,1.2,hz+3.43,1.1,.65,.08,'#343a40',0);put(hx+1.6,.4,hz-1.1,1.1,.8,.9,'#6f6b65',1);
   }else if(i%5===0&&urban){
    const prefab=[];addThreeStoryHouse(prefab,wall,roof);for(const b of prefab){const q=b.slice();q[0]+=hx;q[2]+=hz;a.push(q)}
   }else house(a,hx,hz,wall,roof);
   // Entry path, planter and garden details; each home gets a small, non-identical front area.
   put(hx,.045,hz+5.7,2.3,.09,2.3,rustic?'#bda77c':'#b9b7b1',0);
   if(i%2===0)addDetailedTree(a,hx+(hx>0?6.1:-6.1),hz+1.8,(seed+i)%4,.62+nxRand(seed,2200+i)*.25);
   if(i%3!==1){const shrub=[];addGardenShrub(shrub,hx+(hx>0?-5.5:5.5),hz+3,(seed+i)%4,.62+nxRand(seed,2300+i)*.25);for(const b of shrub)a.push(b)}
   if(i%3===0){const flowers=[];addFlowerBed(flowers,hx+(hx>0?5.3:-5.3),hz-2,(seed+i)%4);for(const b of flowers)a.push(b)}
   if(urban&&i%3===0){put(hx,.42,hz+6.7,1.2,.84,.8,'#795548',1);put(hx,.92,hz+6.7,.62,.18,.62,'#ffd166',0,6,2)}
  }
  if(urban){
   // One or two distinct city landmarks; positioned away from the center of the gameplay route.
   const side=seed%2?-1:1, floors=5+Math.floor(nxRand(seed,2401)*5), bx=side*44;
   if(family==='tycoon'||/f[aá]brica|factory|estaci[oó]n|station/i.test(mapTitle)){
    const p=[];addTallBuilding(p,bx,0,{floors,wall:'#596574',glass:'#6fe0f5',trim:'#dbeafe',roof:'#28313d',width:10+nxRand(seed,2402)*3,depth:10+nxRand(seed,2403)*3,enterable:true,kind:'oficinas'});for(const b of p)a.push(b);
   }else{
    const p=[];addDecorativeBuilding(p,bx,0,{floors:4+Math.floor(nxRand(seed,2404)*4),wall:['#9ba7b4','#657080','#b0a69a'][seed%3],trim:'#e5edf4',glass:'#6ed4eb',roof:'#374151',width:9+nxRand(seed,2405)*2,depth:9+nxRand(seed,2406)*2,kind:family==='cooking'?'shop':'office'});for(const b of p)a.push(b);
   }
   const shop=[];addDecorativeBuilding(shop,-side*44,8,{floors:1+Math.floor(nxRand(seed,2407)*2),wall:'#e1b07e',trim:'#fff0d1',glass:'#68d6ea',roof:'#8b4513',width:7.5,depth:7,kind:'shop'});for(const b of shop)a.push(b);
  }
  // Trees, bushes and flower beds fill empty areas without covering the goal or primary roads.
  for(let i=0;i<16;i++){
   const ang=(i*2.399+seed*.173),r=39+(i%3)*4,tx=Math.cos(ang)*r,tz=Math.sin(ang)*r;
   if(Math.abs(tx)<30||Math.abs(tz)<17)continue;
   if(nxRand(seed,2500+i)>.32)addDetailedTree(a,tx,tz,(i+seed)%4,.58+nxRand(seed,2600+i)*.42);
   if(i%3===0){const bush=[];addGardenShrub(bush,tx+1.8,tz+1.2,(i+seed)%4,.55+nxRand(seed,2700+i)*.3);for(const b of bush)a.push(b)}
  }
 }
 // Hazard strips and jump pads add optional challenge lanes to non-peaceful genres.
 if(['race','sport','obby','defense'].includes(family)){for(let i=0;i<4;i++){const z=-12-i*8;put(i%2?-2:2,.16,z,1.1,.32,1.1,'#e63946',1,3);put(i%2?2:-2,.12,z-2,1.2,.24,1.2,'#00e5ff',1,5)}}
 return a;
}
function nxBuildScript(family,seed,title,palette){
 if(family==='obby'){
  const modes=['classic','lava','climb','neon','gravity','race','forest','water'];let src=OBBY_INFINITE_SCRIPT(modes[seed%8]);
  src=src.replace(`const MODE="${modes[seed%8]}", P=game.player, parts={};`,`const MODE="${modes[seed%8]}", P=game.player, parts={}, WORLD_SEED=${seed};`);
  src=src.replace('const encoded=(i*37)%TOTAL_TYPES','const encoded=(i*37+WORLD_SEED*17)%TOTAL_TYPES');
  src=src.replace('Math.sin((i+1)*127.1+(k+1)*311.7+(Math.floor(i/TOTAL_TYPES)+1)*74.7+MODE.charCodeAt(0)*19.19)','Math.sin((i+1)*127.1+(k+1)*311.7+(Math.floor(i/TOTAL_TYPES)+1)*74.7+MODE.charCodeAt(0)*19.19+WORLD_SEED*3.731)');
  return src;
 }
 const T=JSON.stringify(title),C=JSON.stringify(palette),seedNum=Number(seed);
 const visitors=['roleplay','farm','underwater','adventure','treasure'].includes(family);
 const common=`const P=game.player,C=${C};let elapsed=0;game.say(${T});${visitors?`for(let i=0;i<3;i++){const a=i*6.28318/3;game.mob(Math.cos(a)*19,Math.sin(a)*19,{peaceful:true,size:.82,speed:.45,color:C[i%C.length]})}`:''}`;
 if(family==='duel')return `${common}game.sword();let lastK=0;game.say('⚔️ Duelo real 1 contra 1: busca a tu rival y golpea con F, clic o el botón de espada. Gana quien consiga tres derribos.');game.onTick(()=>game.hud('⚔️ DUELO 1v1 · Rivales '+game.playerCount()+' · Derribos '+game.duelKOs()+'/3 · '+(game.playerCount()<1?'Esperando rival…':'¡Combate!')));`;
 if(['survival','defense','dungeon'].includes(family))return `${common}game.sword();let wave=0,alive=0,kills=0,next=0,finished=false;const spawnWave=()=>{if(wave>=12){finished=true;return}wave++;const boss=${family==='dungeon'?'wave%3===0':'wave%4===0'},n=boss?1:Math.min(8,2+wave);alive=n;for(let i=0;i<n;i++){const a=i/n*6.28318+(wave*.37),r=12+(i%3)*2;game.mob(Math.cos(a)*r,Math.sin(a)*r,{boss:boss,hp:boss?180+wave*25:28+wave*7,size:boss?2.0:.8+(i%3)*.12,speed:boss?2.35:1.35+Math.min(wave*.08,.9),dmg:boss?14:4+wave,color:boss?'#20202b':C[(i+wave)%C.length]})}game.say(boss?'👹 JEFE · Oleada '+wave:'⚔ Oleada '+wave+' · ¡Defiende el área!')};game.onKill(()=>{kills++;alive=Math.max(0,alive-1);if(!alive){if(wave>=12){finished=true;game.say('🏆 ¡Superaste las 12 oleadas!');game.sound('Victoria')}else next=elapsed+2.5}game.sound('Explosión')});spawnWave();game.onTick((dt)=>{elapsed+=dt;if(!alive&&next&&elapsed>=next){next=0;spawnWave()}game.hud((finished?'🏆 12 oleadas superadas':'🌊 Oleada '+wave)+' · 👾 Enemigos '+alive+' · Bajas '+kills+' · ⏱ '+(elapsed|0)+'s')});`;
 if(family==='race'||family==='sport')return `${common}let sector=0,last=-1,finish=0;game.say('🏁 Sigue la pista hacia el arco dorado. Esquiva las barreras rojas y cruza los sectores en orden.');game.onTick((dt)=>{elapsed+=dt;sector=Math.max(0,Math.min(8,Math.floor((-P.p.z+3)/5.5)));if(sector>last){last=sector;if(sector>0)game.sound('Moneda')}if(P.p.z<-48&&!finish){finish=1;game.say('🏆 ¡Meta completada en '+elapsed.toFixed(1)+' segundos!');game.sound('Victoria')}game.hud('🏁 Sector '+sector+'/8 · ⏱ '+elapsed.toFixed(1)+' s · 🪙 '+game.coins()+(finish?' · ¡META!':''))});`;
 if(family==='maze')return `${common}let done=false;game.say('🧭 Encuentra la salida dorada. Los pasillos cambian en cada experiencia; junta reliquias sin perder el camino.');game.onTick(()=>{if(!done&&Math.hypot(P.p.x-18,P.p.z+18)<2.8){done=true;game.say('🏆 ¡Encontraste la salida del laberinto!');game.sound('Victoria')}game.hud('🧩 Reliquias '+game.coins()+'/12 · '+(done?'🏆 Salida encontrada':'🧭 Busca la salida al noreste'))});`;
 if(family==='escape')return `${common}let escaped=false;game.say('🚨 Reúne reliquias por el laberinto y escapa por la salida dorada. Hay guardianes hostiles en los pasillos.');for(let i=0;i<4;i++)game.mob((i%2?1:-1)*(7+(i%3)*3),(i<2?1:-1)*(7+(i%3)*3),{hp:45,size:1,speed:1.8+i*.1,dmg:7,color:'#6d597a'});game.onTick(()=>{if(!escaped&&Math.hypot(P.p.x-18,P.p.z+18)<2.8){escaped=true;game.say('🏆 ¡Escapaste!');game.sound('Victoria')}game.hud('🗝️ Fragmentos '+game.coins()+'/12 · '+(escaped?'🏆 ESCAPASTE':'Encuentra la salida'))});`;
 if(family==='fishing')return `${common}game.interact();game.water(0,.45,0,24,.35,18,false);const spots=[[-12,-7],[-6,-7],[0,-7],[6,-7],[12,-7]],used=[false,false,false,false,false];let lastE=false,caught=0;game.say('🎣 Ve al muelle y acércate a los marcadores dorados. Pulsa E o Interactuar para pescar. Completa 5 capturas.');game.onTick(()=>{const inp=game.input(),pressed=!!inp.KeyE,edge=(pressed&&!lastE)||game.consumeInteract();lastE=pressed;let near=-1,best=3.2;spots.forEach((q,i)=>{const d=Math.hypot(P.p.x-q[0],P.p.z-q[1]);if(d<best&&!used[i]){best=d;near=i}});if(edge&&near>=0){used[near]=true;caught++;game.sound('Moneda');game.say(['🐟 ¡Pescaste una trucha!','🐠 ¡Pescaste un pez tropical!','🦀 ¡Encontraste un cangrejo!'][caught%3]);if(caught===5){game.say('🏆 ¡Encargo de pesca completado!');game.sound('Victoria')}}game.hud('🎣 Capturas '+caught+'/5 · '+(near>=0?'Pulsa E para pescar':'Explora el muelle'))});`;
 if(family==='cooking')return `${common}game.interact();const spots=[[-10,-12],[-4,-12],[4,-12],[10,-12]],names=['🍅 Tomates','🧀 Queso','🍞 Pan','🥬 Lechuga'],used=[false,false,false,false];let collected=0,lastE=false,served=false;game.say('🍳 Pedido: recoge los cuatro ingredientes del mercado, vuelve a la cocina y pulsa E para entregar.');game.onTick(()=>{const inp=game.input(),pressed=!!inp.KeyE,edge=(pressed&&!lastE)||game.consumeInteract();lastE=pressed;let near=-1,best=2.8;spots.forEach((q,i)=>{if(used[i])return;const d=Math.hypot(P.p.x-q[0],P.p.z-q[1]);if(d<best){best=d;near=i}});if(edge&&near>=0){used[near]=true;collected++;game.say(names[near]+' recogido · '+collected+'/4');game.sound('Moneda')}if(edge&&collected===4&&!served&&Math.hypot(P.p.x,P.p.z+26)<6){served=true;game.say('🍽️ ¡Pedido servido! El restaurante está listo para el siguiente cliente.');game.sound('Victoria')}game.hud('🍽️ Ingredientes '+collected+'/4 · '+(collected===4?'Vuelve a la cocina y pulsa E':'Recoge el pedido en el mercado'))});`;
 if(family==='hide')return `${common}let tagged=0;game.say('🙈 Escóndete y evita que los buscadores te alcancen durante 60 segundos. Usa las cabañas y los arbustos para maniobrar.');for(let i=0;i<4;i++)game.mob((i%2?1:-1)*(8+i*2),(i<2?-1:1)*(9+i*3),{hp:999,size:.8,speed:1.35+i*.12,dmg:8,color:'#6d597a'});game.onTick(dt=>{elapsed+=dt;if(elapsed>=60){elapsed=60;game.say('🏆 ¡Ronda superada! Has aguantado un minuto.');game.sound('Victoria')}game.hud('🙈 Escondite · '+Math.ceil(60-elapsed)+' s · Aléjate de los buscadores')});`;
 if(family==='rescue')return `${common}const spots=[[-15,7],[-9,12],[-3,7],[3,12],[9,7],[15,12]],saved=[false,false,false,false,false,false];let rescued=0;game.say('🐾 Encuentra a los seis animales que se perdieron por los senderos y acércate a cada uno para rescatarlos.');spots.forEach((q,i)=>game.mob(q[0],q[1],{peaceful:true,size:.55+(i%3)*.12,speed:.35,color:['#f4a261','#8d99ae','#90be6d'][i%3]}));game.onTick(()=>{spots.forEach((q,i)=>{if(!saved[i]&&Math.hypot(P.p.x-q[0],P.p.z-q[1])<2.4){saved[i]=true;rescued++;game.say('🐾 Animal rescatado '+rescued+'/6');game.sound('Moneda')}});game.hud('🐾 Rescates '+rescued+'/6 · '+(rescued===6?'🏆 Refugio completo':'Explora los senderos'))});`;
 if(family==='rhythm')return `${common}let beat=1.2,lastSpace=false,hits=0,misses=0,ended=false;game.say('🎵 Sigue el ritmo: pulsa Espacio cuando el pulso llegue al marcador. Consigue 8 aciertos antes de terminar la canción.');game.onTick((dt)=>{elapsed+=dt;const inp=game.input(),space=!!inp.Space,edge=space&&!lastSpace;lastSpace=space;const phase=elapsed%beat;if(edge){if(phase<.22||phase>beat-.22){hits++;game.sound('Moneda')}else misses++}if(hits>=8&&!ended){ended=true;game.say('🏆 ¡Ritmo perfecto! Has conseguido 8 aciertos.');game.sound('Victoria')}game.hud('🎵 Aciertos '+hits+'/8 · Fallos '+misses+' · '+(ended?'¡Canción completada!':'Pulsa Espacio al ritmo'))});`;
 if(family==='delivery')return `${common}const stops=[[-15,-8],[15,-16],[-15,-24],[15,-32],[0,-40]],visited=[false,false,false,false,false];let next=0,done=false;game.say('📦 Reparte los cinco paquetes: sigue los marcadores de la calle y visita cada entrega por orden.');game.onTick(dt=>{elapsed+=dt;if(next<stops.length){const q=stops[next];if(Math.hypot(P.p.x-q[0],P.p.z-q[1])<3){visited[next]=true;next++;game.say('📦 Entrega '+next+'/5 completada');game.sound('Moneda')}}if(next===5&&!done){done=true;game.say('🏆 ¡Todos los paquetes entregados!');game.sound('Victoria')}game.hud('📦 Entregas '+next+'/5 · '+elapsed.toFixed(0)+' s · '+(done?'Ruta completada':'Sigue la calle hacia el siguiente marcador'))});`;
 if(family==='underwater')return `${common}game.water(0,2,0,100,5,100,false);game.say('🌊 Explora el arrecife y los restos del barco. Nada entre los corales y recoge perlas.');game.onTick(()=>{const depth=Math.max(0,Math.round(3-P.p.y));game.hud('🫧 Perlas '+game.coins()+'/12 · Profundidad '+depth+' m · Explora el barco hundido')});`;
 if(family==='sky')return `${common}let record=0,done=false;game.say('☁️ Cruza las islas suspendidas; cada plataforma conduce a la siguiente. No te precipites y busca los cristales.');game.onTick(()=>{record=Math.max(record,P.p.y);if(!done&&P.p.y>15&&P.p.z<-72){done=true;game.say('🏆 ¡Llegaste a la cumbre celeste!');game.sound('Victoria')}game.hud('☁️ Altura '+record.toFixed(1)+' m · ⭐ '+game.coins()+'/12 · '+(done?'Cumbre conquistada':'Busca la siguiente isla'))});`;
 if(family==='puzzle')return `${common}const runes=[[-9,0,-8],[0,0,-22],[9,0,-8],[0,0,-39]],seen=[false,false,false,false];let step=0,finished=false;game.say('🔷 Activa las cuatro runas luminosas en orden: oeste, norte, este y altar final.');game.onTick(()=>{const x=P.p.x,z=P.p.z;if(step<runes.length&&Math.hypot(x-runes[step][0],z-runes[step][2])<3){seen[step]=true;step++;game.sound('Moneda');game.say('🔷 Runa '+step+'/4 activada')}if(step===4&&!finished){finished=true;game.say('🏆 ¡Puzzle resuelto!');game.sound('Victoria')}game.hud('🔷 Runas '+step+'/4 · '+(finished?'🏆 Resuelto':'Sigue el orden de los cristales'))});`;
 if(family==='roleplay')return `${common}const places=[[-22,-18],[22,-18],[-22,18],[22,18]],visited=[false,false,false,false];let visits=0;game.say('🏘️ Explora los cuatro barrios y visita a los vecinos. En cada casa hay un pequeño encargo.');game.onTick(()=>{places.forEach((q,i)=>{if(!visited[i]&&Math.hypot(P.p.x-q[0],P.p.z-q[1])<5){visited[i]=true;visits++;game.say('👋 Encargo vecinal '+visits+'/4 completado');game.sound('Moneda')}});game.hud('🏘️ Barrios visitados '+visits+'/4 · 🪙 '+game.coins())});`;
 if(family==='tycoon')return `${common}const basePlots=[[-27,-29],[27,-29],[-27,29],[27,29]];let plotIndex=0,plot=basePlots[0],level=0,cash=100,rate=0,lastE=false,elapsedTy=0,lastSave=0;const ownKey='tycoon:'+game.network.username();function loadTycoon(){const q=game.network.get(ownKey);if(q&&Number.isFinite(Number(q.level))){level=Math.max(0,Math.min(1000,Number(q.level)||0));cash=Math.max(0,Number(q.cash)||100);rate=Math.max(0,Number(q.rate)||0)}}function choosePlot(slot){plotIndex=Math.max(0,Math.min(127,Number(slot)||0));if(plotIndex<4)plot=basePlots[plotIndex];else{const j=plotIndex-4,col=j%8,row=Math.floor(j/8),x=(col-3.5)*18,z=-55-row*18;plot=[x,z];game.addBlock([x,.16,z,12,.32,12,'#475569',1,1,'',0,0,0]);game.addBlock([x,.36,z,8,.12,8,C[plotIndex%C.length],1,1,'',0,0,0]);game.say('🏗️ Tu parcela nueva está en el sector '+(row+1)+'.')}loadTycoon();P.p.set(plot[0],.5,plot[1]+9);P.vx=P.vz=P.vy=0}game.network.on('ready',info=>choosePlot(info.slot));game.interact();game.say('🏗️ TYCOON MULTIJUGADOR: cada jugador tiene su propia parcela. Empiezas con 100 monedas. Acércate a tu parcela y mantén E o pulsa Interactuar para construir.');game.onTick((dt)=>{elapsedTy+=dt;cash+=rate*dt;const inp=game.input(),pressed=!!inp.KeyE,edge=pressed&&!lastE||game.consumeInteract();lastE=pressed;const dist=Math.hypot(P.p.x-plot[0],P.p.z-plot[1]);if(dist<7&&edge){const cost=25*(level+1);if(cash+0.001<cost)game.say('Te faltan '+Math.ceil(cost-cash)+' monedas.');else{cash-=cost;level++;rate+=level*2;const tier=level,q=plot;game.addBlock([q[0],.65+tier*.65,q[1],2+tier*.65,.6,2+tier*.65,C[(plotIndex+tier)%C.length],1,1,'',0,0,0]);if(tier%2===0)game.addBlock([q[0],1.5+tier*.65,q[1],.35,1.1,.35,'#00e5ff',1,1,'',0,1,0]);game.network.set(ownKey,{slot:plotIndex,level,cash,rate});game.say('🏗️ Tu parcela · Nivel '+tier+' · +'+(tier*2)+'/s');game.sound('Moneda')}}if(elapsedTy-lastSave>5){lastSave=elapsedTy;game.network.set(ownKey,{slot:plotIndex,level,cash,rate})}game.hud('🏗️ Tu Tycoon · 💵 '+Math.floor(cash)+' · Ingresos '+rate+'/s · Nivel '+level+' · '+(dist<7?'Pulsa E / Interactuar · Próxima mejora '+(25*(level+1)):'Vuelve a tu parcela'));});`;
 if(family==='farm')return `${common}game.say('🌾 Recolecta los cultivos brillantes por las hileras y visita el granero al final del campo.');let harvest=0,finish=false;game.onTick(()=>{harvest=game.coins();if(!finish&&harvest>=10&&P.p.z<-27){finish=true;game.say('🏆 ¡Cosecha entregada!');game.sound('Victoria')}game.hud('🌽 Cosecha '+Math.min(harvest,10)+'/10 · '+(finish?'🏆 Pedido entregado':'Lleva la cosecha al granero'))});`;
 if(family==='treasure')return `${common}game.say('💎 Busca los tesoros dorados repartidos por el mapa y llega al santuario al final de la avenida.');let reached=false;game.onTick(()=>{if(!reached&&game.coins()>=8&&P.p.z<-43){reached=true;game.say('🏆 ¡Tesoro recuperado y entregado!');game.sound('Victoria')}game.hud('💰 Tesoros '+game.coins()+'/12 · '+(reached?'🏆 Expedición completada':'Busca 8 tesoros y llega al santuario'))});`;
 // Adventure: reach the final landmark; a humanoid guardian appears and must be defeated.
 return `${common}game.sword();let boss=null,won=false;game.say('🗺️ Recorre los puntos de interés, reúne reliquias y alcanza el monumento dorado al final del camino.');game.onTick(()=>{if(!boss&&P.p.z<-30&&Math.abs(P.p.x)<12){boss=game.mob(0,-36,{boss:true,hp:130+${seedNum%5}*20,size:1.8,speed:1.9,dmg:10,color:C[1]});game.say('🛡️ ¡Un guardián protege el monumento!')}if(boss&&boss.dead&&!won){won=true;game.say('🏆 ¡Aventura completada!');game.sound('Victoria')}game.hud('🗺️ Reliquias '+game.coins()+'/12 · '+(won?'🏆 Guardián derrotado':boss?'🛡️ Guardián '+Math.max(0,boss.hp|0):'Llega al monumento dorado'))});`;
}
const NX_GENERATED_GAMES=[];
NX_GAME_FAMILIES.forEach((family,fi)=>family.names.slice(0,({obby:8,duel:8,tycoon:4,survival:4,defense:3,dungeon:3,race:3,sport:3,sky:4,underwater:3,adventure:3,roleplay:3,maze:3,escape:3,puzzle:3,farm:3,treasure:3,fishing:3,cooking:3,hide:3,rescue:3,rhythm:3,delivery:3}[family.k]||3)).forEach((variant,vi)=>{
 const seed=fi*17+vi+11,palette=family.colors.map((c,i)=>{if(i===0)return c;return c});
 const title=family.k==='roleplay'?family.prefix+' '+variant:family.k==='puzzle'?family.prefix+' '+variant:family.prefix+': '+variant;
 const obby=family.k==='obby';
 const blocks=nxBuildMap(seed,family.k,palette,title);
 const isMaze=family.k==='maze'||family.k==='escape';
 const sp=family.k==='sky'?[0,1.32,0]:isMaze?[-18,.2,18]:family.k==='duel'?[0,.2,13]:[0,.2,0];
 NX_GENERATED_GAMES.push({id:'nxg'+String(seed).padStart(3,'0'),n:title,h:family.tag,d:family.desc+' Variante '+(vi+1)+', con distribución de obstáculos y decoración propia.',gr:palette[0],b:blocks,sp,st:family.k==='underwater'?{clock:13,grav:18,clouds:0,sky:'#168aad'}:family.k==='sky'?{grav:22,clouds:1,sky:'#8ecae6'}:family.k==='survival'||family.k==='escape'?{clock:22,clouds:0,sky:'#171421'}:family.k==='duel'?{clock:17,clouds:0,sky:'#20243b'}:{clock:14},by:'Nixora',th:`linear-gradient(135deg,${palette[0]},${palette[1]})`,sc:nxBuildScript(family.k,seed,title,palette),lava:obby||family.k==='sky',endless:obby,genre:family.k,themeSeed:seed,pvp:family.k==='duel',combat:['duel','survival','defense','dungeon'].includes(family.k)});
}));
DEF.push(...NX_GENERATED_GAMES);

/* ---------- Navegación ---------- */
let HOME_FILTER='all';
const NV=[['home','🏠','Descubrir'],['avatar','🧍','Avatar'],['cart','🛒','Carrito'],['shop','🛍','Tienda'],['studio','🛠','Crear'],['codes','🎁','Códigos'],['chat','💬','Chat'],['store','🏪','Mercado'],['friends','👥','Amigos'],['inventory','🎒','Inventario'],['missions','🏆','Misiones'],['profile','👤','Mi perfil'],['cfg','⚙','Ajustes']],
V={home:()=>home(),avatar:()=>avatar(),cart:()=>cartPage(),shop:()=>{tab='eyes';avatar()},studio:()=>studio(),codes:()=>codesPage(),friends:()=>friends(),store:()=>store(),chat:()=>chat(),inventory:()=>inventory(),missions:()=>missions(),profile:()=>prof(me),cfg:()=>cfg()},
nb=n=>`<button class="nv" data-v="${n[0]}" onclick="go('${n[0]}')">`;
$('#nav').innerHTML=NV.slice(0,5).map(n=>nb(n)+n[2]+'</button>').join('');
$('#side').innerHTML=NV.map(n=>nb(n)+n[1]+' '+n[2]+'</button>').join('');
function go(v){cur=v;applyBG();updWallet();refreshCartNav();const ab=$('#admbtn');if(ab)ab.hidden=!can('Usar panel de administrador');document.documentElement.style.fontSize=cv('ui',100)+'%';
 document.querySelectorAll('.nv').forEach(b=>b.classList.toggle('on',b.dataset.v==v));V[v]()}
const QI='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#fff"/><rect x="24" y="24" width="52" height="52" rx="6" transform="rotate(45 50 50)" fill="#fff" stroke="#000" stroke-width="5"/><text x="50" y="64" font-size="40" font-weight="700" text-anchor="middle" font-family="Arial">?</text></svg>'),
thS=g=>g.img?`background-image:url(${g.img})`:g.th?`background:${g.th}`:`background:#fff url("${QI}") center/contain no-repeat`,
card=g=>`<div class="card2" onclick="det('${g.id}')"><div class="th" style="${thS(g)}"></div><b>${esc(g.n)}</b><small>${esc(g.h||'')}</small></div>`;
function home(){PVU=null;ensureUser(me);const u=U[me],q=($('#q').value||'').trim().toLowerCase(),all=[...DEF,...G].map(g=>gmx(g.id)).filter(g=>!g.hid),matches=all.filter(g=>[g.n,g.d,g.h,g.by].some(v=>String(v||'').toLowerCase().includes(q))),L=matches.filter(g=>{
 if(HOME_FILTER==='fav')return u.favGames.includes(g.id);
 if(HOME_FILTER==='parkour')return /parkour|obby|escalada|obstáculo|cristal/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='adventure')return /aventura|explora|bosque|isla|pueblo|desierto|hielo|laberinto|dulces/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='created')return g.by===me;
 if(HOME_FILTER==='tycoon')return /tycoon|construcción|simulador|granja|fábrica/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='social')return /roleplay|social|escondite|rescate|mascotas|pesca|cocina/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='survival')return /supervivencia|oleadas|escapar|escondite|zombis/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='puzzle')return /puzzle|laberinto|lógica|runas|escape/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='sports')return /deportivo|carrera|ritmo|baile|velocidad/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='battle')return /duelo|batalla|combate|pvp|arena|supervivencia|defensa|mazmorra/i.test([g.n,g.h,g.d].join(' '));
 return true;
 }).sort((a,b)=>(b.feat|0)-(a.feat|0)),
 row=(t,l)=>`<h3>${t}</h3><div class="row">${l.map(card).join('')||'<i>Nada aún</i>'}</div>`,
 filters=[['all','Todos'],['fav','⭐ Favoritos'],['parkour','🏃 Parkour'],['tycoon','🏗️ Tycoon'],['battle','⚔️ Batallas'],['survival','🛡️ Supervivencia'],['puzzle','🧩 Puzzles'],['sports','🏁 Carreras y ritmo'],['social','🏡 Social y simuladores'],['adventure','🌎 Aventura'],['created','🛠 Mis mundos']];
 $('#main').innerHTML=`${ANN?`<div class="hero" style="background:#7a1f1f;margin-bottom:8px">📢 ${esc(ANN)}</div>`:''}<div class="hero" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><h2 style="margin:0 0 6px">¡Hola, ${esc(me)}!</h2><small>Explora ${DEF.length+G.length} experiencias, crea mundos y juega con tus amigos.</small><div style="margin-top:8px">${fr().filter(f=>U[f]&&!bl().includes(f)).slice(0,5).map(f=>`<span class="fr">👤 ${esc(f)}</span>`).join('')}</div></div><div id="pvh"></div></div><div class="rbar">${filters.map(([k,t])=>`<button class="${HOME_FILTER===k?'':'s'}" onclick="homeFilter('${k}')">${t}</button>`).join('')}<button onclick="go('missions')">🏆 Misiones</button><button class="s" onclick="go('codes')">🎁 Códigos</button><button class="s" onclick="go('profile')">👤 Mi perfil</button><button class="s" onclick="go('inventory')">🎒 Inventario</button></div>`+row(HOME_FILTER==='fav'?'Tus favoritos':HOME_FILTER==='created'?'Tus mundos':HOME_FILTER==='all'?'Todos los juegos':'Resultados',L);pvw()}

let CNT=null;
async function cnt(id){try{const r=await fetch(cv('srv',SRV0).replace(/^ws/,'http')+'/count?g='+encodeURIComponent(id));return (await r.json()).n}catch(e){return 0}}
function det(id){const g=gmx(id);if(!g)return;clearInterval(CNT);const u=ensureUser(me),isFav=u.favGames.includes(id),skyIndex=Number(g.st?.skyPreset)||0,sky=NX_SKY_PRESETS[skyIndex]||NX_SKY_PRESETS[0],ban=g.ban?`background-image:url(${g.ban})`:`background:#fff url("${QI}") center/contain no-repeat`;
 $('#main').innerHTML=`<div class="th" style="height:150px;${ban};margin-bottom:12px"></div><div class="det"><div class="th big" style="${thS(g)}"></div><div style="flex:1;min-width:220px"><h2 style="margin:0">${esc(g.n)}</h2><small>por ${esc(g.by)} ${esc(g.h||'')}</small><p>${esc(g.d)}</p><div class="set" style="display:grid;gap:6px"><b>🌤 Cielo del juego</b><div style="height:54px;border-radius:8px;background:${nxSkyCss(skyIndex)}"></div><select aria-label="Cielo gradiente" onchange="setGameSky('${id}',this.value)">${NX_SKY_PRESETS.map((q,i)=>`<option value="${i}" ${i===skyIndex?'selected':''}>${i+1}. ${esc(q.name)}</option>`).join('')}</select><small>Vista previa y ajuste local. Para guardar el cielo dentro del proyecto, abre este juego en Studio y pulsa Guardar.</small></div><p>👥 Jugadores ahora: <b id="cn">…</b></p><button class="play" onclick="play('${id}')">▶ Jugar</button> <button class="s" onclick="toggleFavorite('${id}')">${isFav?'★ En favoritos':'☆ Añadir a favoritos'}</button><div class="rbar" style="margin-top:10px"><button onclick="createPrivateRoom('${id}')">🔒 Crear sala privada</button><button class="s" onclick="joinPrivateRoom('${id}')">🔑 Unirse con código</button></div><small>Comparte el código de una sala privada con tus amigos por mensaje privado.</small></div></div>`;
 const up=async()=>{const el=$('#cn');if(!el){clearInterval(CNT);return}el.textContent=await cnt(id)};up();CNT=setInterval(up,30000)}
function setGameSky(id,value){const g=gmx(id);if(!g)return;const index=Math.max(0,Math.min(NX_SKY_PRESETS.length-1,Math.floor(Number(value)||0))),o=OVR[id]||(OVR[id]={});o.st={...(g.st||{}),...(OVR[id].st||{}),skyPreset:index};if(index>0)o.st.sky='';save();det(id)}
function createPrivateRoom(id){const random=Math.random().toString(36).slice(2,8).toUpperCase(),v=prompt('Elige un código privado de 4 a 12 letras o números para compartir con tus amigos',random);if(v===null)return;const code=v.trim().toUpperCase();if(!/^[A-Z0-9]{4,12}$/.test(code))return alert('El código debe tener de 4 a 12 letras o números.');U[me].lastPrivateRoom={world:id,code};save();play(id,code,true)}
function joinPrivateRoom(id){const v=prompt('Escribe el código de la sala privada');if(v===null)return;const code=v.trim().toUpperCase();if(!/^[A-Z0-9]{4,12}$/.test(code))return alert('El código debe tener de 4 a 12 letras o números.');play(id,code,false)}

/* ---------- Texturas de skins de Minecraft (solo avatares, no mascotas) ---------- */
const MC_TEXTURES=new Map();
// Skins del zombi aportadas para este proyecto (texturas PNG 64×64).
const NX_ZOMBIE_SKINS=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAIAklEQVR4Xu2a229UVRTG+2xiJDxIhEgQQVpIC23phellhnbsZWgLbWhLp1wKpYUSoSAJokWMRttKiAmSQAgaKoFUDZaYopUYo48aH4gPypMP/iXLfIt+O6ubc9ppaZlpMiv5svfsvc7p+X177TOHOeTkzBFvn2mXwVON8lfjTvmvplz+PdItf9dG5FR/o5zobZCKI1uleiA/UJhzJ1quAfj+3no1AOAwAP3+nno5P7jHgQYJc8uV2wVW+vTJJnm8s1ymKkvUhD+b4nJ+/DNXAVB52xszxHF3omeIzs62p84TNLYkgdWHCTAA4L/vbdYKsFtgqQ1IaxzdH3NbAPCoAt0C08ZwCwQZsFhbIGi1g8aWJE4O7JKB/hZnAKrgcV2VwmNrPA8D0hpn32pR0D8iRbr/aQK3QOOZksAbIcYwtxgXH7TaQWNLEgBFuQMeVUAd6KjUbwJA0gQrjrsTZWoMvZcUfNd/8/UluT9xQx5M3tCShwCvoL317iYI+H+a4u4ecLQn4YRKGTgc1z5aVA9y8HWJCsJzBJ8lkIOv2OfhS1C1uLF3z3dJX1+DwIgrowPy0YeHBPv+7GCrmgBQ3AgfNcQUHEagGk4ciUtvd0wNAjjyAXV/9265cO+q9o/3xJxJj6Kl8qhwkxoBAzA+PHnzqQt77nHo4Jt6ITDhyshRuTCU1AuGAAXIvoO1Cg8TYAAgMNZYX/lkpafhCX63qUmOjw+78wAW8GpCtFSPx+rjb6UC/PMvDwX6fvK+/PDTpJNLmCNmrYDhjwfl4tAxVc+hNtnXuUuSXa2uVQ01yMlr3aoz17plYKRDxzhvj8E5aAKq4URfiz40PWys0ZVH+128Wva2xvRvTl+PRuHmUtmwLlfuTXyrgBbch6eY88mDMT0W53AnTCVwsadP7ZfR0Q+ko71ZVRnZKjvK8iVaVaygq1evVsEAwPMz5pCDXBxDQ7jyqIjDBxqko3WHQsOAXw93y0Rku8B45LgLycnJyV+3XvI25utxNPDzqXEFfHXVGrkz/pW2dyfGtL1165bOc9sVrFipx7sTphKXp8bk8qUhNQAX1NJcJ9sKNklxYZ4zAdAQv+L4mfDIxTE4ds+ubVr+3ErJjqg8jBTJg+oy+W1HofZhAvqoAnch04HVv337toJZI65+cVMFaOr69etuu7ES3IlSDazYxfcHRY2YGtOLbkpUSay6RNoSRZJsi0i8plT3e22sSHr2Vbs+WggXgLa7s1Yv+p1zHdKcKJeuvRW6+qwCmIH2QLJO4VO5CdIECKsOaLaQS1xoYBVHfvxSLxz95qZ6SXa1aCkXbtsoRYV5Urp9i9TEimXwWKOC18XLpCqSp/lVFQWu9HEsxqDtRet1jjkcQwtwjOHe4C5klmCpw4SR0WEnl7CYESn8VKzKyspUubm5KpcYEhWb9j31dMgHI8z55/flThQSBWvjQuWtqdLztgyVqhblwcu/IILTCJcYEoC08NaEpTCA4PgbS2LAQipgqQ2IbGmZUQH2b7jEhYZ/QQupAFyUNQF9vdBFMADQtgJwbp5/QRWws+SmQPjjaOsid504xpay8xteKZ4hXhjArRG88LB8yI5bUIp5dm7VS6/PkH+MAw0LAqZqgJ2HcLFrX96sIhCEPivAHw/Kp4LAOe7DQ4B+8YWVKhpg8xxoWMwGyLGweQggq1a8pkKff5itP+bn+yb4ZvE4noPCZ8wHGWCPcaBhMRsgx/x52ycMNReQn2/BCGU/s7TDRHhrgpUDDQsfkJ+Dxuwc5QPZFSc0+3b1KT/XN4Q3OYqP4ZQ/r/9IM3KgYWHhIH+FLTTH7We/pGkAQXwD/Hy/QtjnZ97d8X2P+wn/NYr22JUnBvCGC2GMQp4DDQsCEY7lT801TyjKQsAEu6p+blC+fywACQdQgGFlYQBajsMg5GK+81y9wqPvQMOCYGGAGJvNAFykhUFLCMJT+OznQ74BNt/CERCiAZxjhXBrMM+BhoUtZwvIz5SfRxHIwqElgIVjjp9ncyw8cmgAy5zw3AqYsxVi4VPaAolEQiAChol5viyUBWPfAvq5kA9t4SFuARpBeBrBeVsh86oAPN5Go9EZUO3t7TM+Q8jxc9Fnddgq4WeO0QiC+Tk0zbaYRyVyhWkAwVH+6GMc4HYe9wAa4UDDgs/4hPMBCR6Uh741gLLbiC2gID/f5tIsOw54gHGf8wYIOPQJzkrAOG+CaB1oNrKRjWxkIxvZWHaBH0DD5D8+QxizOcsOOBvZyEY2spGNbCzf4K891HxfrvJhhuIPIhD6LjFTwzeA4Km+Xg8yAL/60AiXmKnhG7DQCuCjLn/vowkuMVPDN+BZKgB9QEP81dclZkrwx03A+j9y+nN2njn+y0wLT3EsSGn3IRVIVoM/BwE66PU2FGaCHcs4AwBqAX2D7BzkG8CXI2HAtp+RBviQQQZwDH3CWxPmIxpijbG/B8ymRTHQwlG25O2YnaN4c6PwQsPKn8fLECt3IemKMGAoqALY52fe5fmKi6++AI+Wb36Yh3HkUOnidhEEONcWsAI0APk9z1dfaAHIcYgGwQS+/3MXkq7wAdFaQM5Tdg7iCtMIGsAVZunTJI5zi6SL24UtZxpgQe24zaPsCgOSpU8TME6T0NotkBEG8E0yAcPEPF9cYZY4wWmC3R6Yt/Bo3UqkK/CYa1+pQ/P5/wUEBBxL3G4DawArBOMZcw/gsz7hfECCB+Whz5UlKOC5DdDHOOeRa9/9L8YW+B96pfCTJRpSQAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAN5klEQVR4Xu1a6VNVRxbPv5D58N697wX4Npl6C7732KrmEyTuSwRJWNwAkUWNGs0kaqLlRCeyvJkE1Bo11oBRGMFlRrIgLqAoJiw1MJWK8EUzf8pv6nf69uXyFh4EFyaTU3Wq+3b37dtn6dPn9jmvvJICVtaVYXV9OVbvKMOa2jKsqVOlaitHftWGWdGe6GdCQeUG+Y7dYAHb2Kfrzm+xnuidnwVr6zdiTX05lm0vwdLaUiytKZE6P7CqvgwFVcVxRBMLKouQX1m44EWkYgDLZAxI9N68YU39JizdXop8ErqNhG1AfmUxltWUYI3FAM0Ujlu2fZpJBdsWrgGpQDPcbrAgWfu8gQxYXV8mBOcL8YVYUVsibSulvVQRXlOK5SSczzUlWMqytmThC3jZsHbnRiGGUi/YVoz8anK2WCR8/O+HsIKSrynB8bY/zMD171VI+8te/4KBNoAGkFImAwoqC7FyRxk+OLMHn5zeIlImwe33mmYg21bs/AUwYN2OTUr9q4rxRnUxGq4dxvEzFTj21wpEj+6RfZaMAc9kDyaB5rKVz23uGSAaUF8uJ0HdkRLUHSlF9Ohe3B+/hN3rC14YA9bs4NFbJmtoPrp3BvFv1rwTx4yC6uK4toSgj4tZkWd+fTlqD5fg+JmtiJaswOBEB/auz0f1qt8j+sluHD+9FQ1Xj8S/mwJ5qujzfDbg99fu2iQMOHZ6a8rxel59VNodFuhvS6XoYLUMYumssyTn6fysFCdIaQG3wNlj9YiWrURzySocO12BE9cPY/tf3o97P9X8yRbohLU7N2FlfTneencL1gkTSnFuz7R9aS6P3w567mTz636plHxcL4NYOuss15AIen7EOhJUhtLD9SLxaOlyNJetwLEzFUnfd9YT9dsrsqDko3pp0yWP1XW7NmJFbTne2r0Z63ZtFmbw+2d3l+Lcu9OM0O/MCzbsrZTF6NJZ1wSsri1HY9eHaLx8EE0dB9F0+RC2HtuFLZ/swh9Pb8aJa4cTvs9ytvlZ2guxwMmAN2rewdLtJeJxLq8rx/p3N2Pdzo1YUVeObY17cfZQFUqPTBNddKga82YCF0F1lPJQtaBu0wxo6DyE9oFmtN+LWtiMP106gOXbS6Xfft9SceecM+ZP0G8vxCKAqOtvbH9bTiAygG3vfLAN6/dukTqdMGristrSGe/o+pxh1Z4tshhdOuszGHBvmgFtA83Spt3NZO+znG1+lvJ+kkVTA+h96ufCfRUzxnEPJ/M2Oae9vgTz6377x0GXzrqe4NXfvCqEnx/4VJB1tun+5XX0E5K/72xL1m+vzAFv1ryN/G3Jj7MC/pPUxR+BieZnmajf/mmYDY+Jo6M1QJXa0VkockHJGKCBHqj9YMFs5zzndc6ZjAH6eQZc+WcrrvZ8hms9rWjvbIBpmvB6vfB6PIL2wCQgf4xVRXLE8EP8WyyQkj9SRQgG/AgEgggGAggGgggEWVcYCARSzh/OiYDoDwbQNXYSXSOtaO8/kfK9OcO1Gy241tOC6z2taOs4AY/Hg/SMdGSkZ0jdHpgE1NlbaP0+F8tPlP6VJgN8QT/8QR98wYAQHFziQzDos5iQmgGhnCwQfUEfusZa0T166tkygIRfu9GK6z0taLcYQOKJ1AR7YBKgaor0Kzeg6fJHgrwcKagqFAYEAj74g36E8sII52YhKyeMSG4IgcwAgsG5MSCSHYE/EETXWAu6Rp45A1pw/QaxFe0dDfB4PUI4GTGXLWCre9UGNF7+GE2XP5Y7BNGCyiJRXV6phXPCyMoLISsvC1nZEXFzg5n+lPNzPBnnX+JDt2hAy8IY8Oi7Tgx934FHwxfx6LsODI104NH3nWB7X/959N75Ar23v8BNwXPovX0OQ99fxNBIJ+7eb5s2aLwCs+qF+6qkbB9oRNtAdEabGqvsgvOdZBjKiSCUG0IWMVupfyQ3orYN7YcD/ZkBZOVEEMnOmjtDvnwQRfdIC7pHT+LLB8248CCqjAv31kCznPntd62yvwntA03oGj4lqndh8M9yRxBYEoQvHLQXrYmN5IYRys2a0Ub0L/HDz/EWAwr3qz6WzjpLEkxNiXDL5GQhnBdCKC8CXyCeAUQZNz8GNKN7tBXdI6248LBZmNAlz2RAFG39zaok3mtC20ATuodPCtMuPGiWRY79cAsTU7elLovfV4Xh8a8w+eQBpn4alLqTAROP+zAx1TcnBrT3NyTEk98cTIi63yYwFXzbdwmj4734pu8i0jNo7NKlTKfV5/736CPQK89E9mVYJ8Pa9yoQyQnBl+kTIon08vgsBs7qY5vu5zMluXZfhbxfdKDaLp11ll3UTovhJOxKPzVQ1RMhTwYK0CYwFUw+vQ/T48Xkk0EpTdMD0/DCY3phmG6YhiHodpkwTAOGyw2v4YFhemF6TVnkv/59U9DJAEp96qcHmPrPQ6k7GTA+eRvjk3dQtL8yNQNGuR1Pomu4FV/3N+DreyfQPUbLH0+8MGDkFLqHW+bOAEoynVJ3SF5LVyw/nSBK3joF+CyawrFpaaKq4eywSFWrOOsiZRqwbKUBsf2hnDAK369SP0YHrB8kiwHONkqTDIi+txXR/Vul5HMs4TYDhukcnZw7A0yPAcPjgUmJeyl1AybR8MJ0u+AyDbhcSgPoFbpMUzTCQw/RdAkDRn/oxcSPfSJpIokUDXgyiKmn92e0ESeoAY9vo2h/RUoGaMK+uvspbt76FFfpjts24FAM/gwbIE4OJa6lSo2Qerra8yJ1hR5xiakBHJ+OtPTXEMrLEtRSdmIoNyLnfGw7MZxLa67eJbFkkGaArrOvmyfSsNKCKwON6B6mitP9jZc+UbzDkXnYAC/3vMeQfW1SA0isacIwTLjcbpG+y+2C2zDhdrtgGG4YtBEcb5qyWDkFHk9rgMbJJw8x9UTZACdOPL6FcZ4C1pZIxgCW3O90d7mvBbklZmEAmTOvLaD3vbIDyuXVe1zv/WktoD3wWtqi7AYXSecjVsLESHYIEfrtCfp4lmsGzHYMUgO66fJKqYif1QbQYI7NQwNo7T1eE4bHhNcwLetPbTDhdrlhEk0X3C4XXIYLbvvvkKVHFjn+421MTMZrwNST+6IFse3jP94ROzAXBtAhI1FKE8gAasEsp8DYKflHsAlMBaIB2vpr6UuZrqRv7X+lDcoGKFuhtCQrL4JwXgSRvAgCmT68/tvXBfnTQy+Qfb5AQNp+53sdwcgSkX4kJywl93kyBrCPfoCc7fQ+hRkkkBpwIo54xQA11iZwsUIswYt1nb/CQqDx8kcg2g2/ggLeB8TyYv0edd29qKDvztnFt6jFBokMGH947AcLErXx3UTva2CfbwnvDQNyeeoL8NLDN+vNUZD9gWDS/ucKmiAS6yTM2eZs18CTQJfOutX9fGFw6Lp86P7QNfuDaWlpeC0tLekCxAvMyJB+/rLqdv27q59jIbaf7xLLju6WNpbOunPuRQv/9wxIpKq8/LAfLEjUplU+mQY45/7b+QP4x43P8bezH8bNsyBwXnXLtZcn9d2/BtMw5zx2NkjGAKv7+QL9fl3X/r1+TgXzGTsbOA2fs251vzjgrRBve+bzxYUsVBOcSNqxW+CFgLoPnJ9UF7JIzYBEcyRr/xV+qSDOkiX1RM7S/wy0dTbgyo3PcbXnc1zp+UxdongZbzDmFFyV8FZOBFnZYbn04O0Pb4TsAYsdGFKXCHNPq0SYVSRJ3TfyVinV+plAwWgS43vCACsJwh6w2KGt02IAEy1utFhXaAy0pM+NAZlBiQQzAkwGkHhehtoDFju0d56wM0xY6niiul1O7WQFmTyRrfIGhAFWXNAe8Lzh1t353QH03jqP3r6z6O1j7sB5ySF4NNJp5xkMSc5BJx4Nd0gewtDIRdU2fFFyDmLD23JlzqAqkydywwjnMZGCMX8GUnjNHpELV3sBLxva+hutzDGGzplHEFUBjJFTEmpX4XYGOFtw4WEUXz6Mqn09elJC77EM4P9+OJsRpRBCzC9gUlQ2mcDMEN4mMzli9lQa3xKm4fjgz/TDlxmQvCTmFAUyg+B9gT3wWQAJbhsgE1QCZVt/E7pH1D3+lw+thAsyZKzVSsBolmdeX7ffjcbF953xvWTIMfYCngfwLsB5H3DfujMYfKRKiQukp0td4gaSO6CiyDp6bEebMtLx7a2LGB2/iW9uXZqOO9AoerxxxBHF8Inxs8JikiPQqqJDIyoqpFa2CMDlZsTYDZcVPSKaOn/AUDHHqaeD8BheTD4dhNdjSFzRw9ijacYRLwwYtZIiSPwotYXZYCojjO2LigE6b0BFkNTvNKUrmSYSbbKizXbUSWkFtYgaE0s8UZ39StqKcG4hpQ2Su/SiNICxQkaKtaIxjyD2LHcZhkjfoPQNt4ogm154Jc+AkWePxB0l08Q0ZKuYXkOQkefY/b8obIAG517Xz877A4KKH6qYodYCSlk5P1bM0c5CUfOpfpV4GSt90QArJUYkz21gZa2JDbBC4/YCnidInkAK/11LnpFjl5TUGuYOeGB4TYk8UxtoAzymlXvAPtoAw4gjnkhixQgyKsyIMJMemBjBkqfHi2KAaECK+wH9s6NtAbeIvjVW72sbYGmAPiEymIOURANGKG2VByBMoC2g9EULXqANmAtQkm7TrTLIDErXpXIHaOkpaQ+1gH1kjil7X8YZzDhLpgFK0nL08TSQksZQHYUcYy/gZYPy87UG6FNg+qxX0rf2/ozTIPkpIFtA9r6VEEFbYJ0KOkXuWdH9X9xDdXDuOOF9AAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAJDElEQVR4Xu1abU8c1xUeY4uS2MHE2Bhig9dhg22WwgZTIISYrh2CN3acWLysCaV+xYBsTKIYEVS5yIoS14raKsqnKFGkqGrkKGqr5h9E6g9ov/VF6V851XPguT17PbOzwGJMzJEezb3nnHvnPs/cmb0zd4MgxsrrWuSpgy+GArFgbyBBIpCKlkB2pZeAMnwaK4HhPHquiPq6GsnWpDJ5oD9oCKTsYCDVfYHsbS2Tuv4dWg6SgcZcR6s0ksU56UP5kYlA8omuc3mgCGVNgVQeVaJSXl6uQBk+xDjo1ZpPnkYRnGO9LE6A8uZA9rQska+qqlKgrL7mtQuw4capDsIW9ON+x9T3BYBPnwWb3TDNSNYHYpjmVUtXWioqKhQo76otzS2w4Xb1nUUpBDztdzQsiVCT3qFAGT79JdjsNjY1L4UQ1AQSPB/I062BVHUsAWX4NFYC88/pzl0KC5vi8OHq+ieMAnKj+gnz2zjGwDrH5Jt/PsIleOb3V7DOiv9wCxNg8NKMwvcjN6of318ovjw+Z/55rsz+WuH7XYNli+vfxlUAOPyfN3R8YeK2wj8hYeNR/fj+qDgHR/P7D4ONu4bLFtc/43kzwA4MnZ6a6ZSxO1m5+fsLMv/ZhNz74215/7Pr8sGDWzJ454Rk3+tYyvEEsCe3/VvQ70bkWRipKFtJ7kPmD5JldPrW3Zfl2r23pKGhQVpbW+X+t7fkd9+9r2X4xhfPaA4F8PtYKfzzu0HG2FrOH9gpTODhBF/6YkIys81y/bfnZPGL63Juqlcx/9VleWOxS1pH6zUHuf7DDj47RfmzSfjxsPM7hjG2lvMHHWNJSY81ukE48uMHJXm6WrouNkrvdJP0TbTI0Hudis7RpHRPJKVl8IDmINcOQtuPNYr2nXte2kYa5cxclwzMdEtmqkMGRtqlbzqlMUtiNeRp/vldIM4Sb+ySltFaOT3Xrg2B/nfbpH38kDx34inZ31Muif4qaR9JSPcvjkhmsk3L7blDUp/ZqTnIPbvQ4dpn5ztVNPQNNGX3SdcvU9J7La1AGT7E3ECWSaxo8J6ttT0NHThwSunVqU3Fdr67sUsKoXz/sYJwHUVYbUtGAPSlY1z65hDbbiWmU2lHTbNs39ek5Uwm4+CyIsySPX/z5wrre/pg20OkLVxHEZYnQGUgFVhxlj2GAmSvdcvQrYwC5VIJcCA94ARQ8pWlW3LTOKXk8qVbOvVXMwPSQ4f0mQGgbAUoBNdRhFUe7vj/DOD0r1ibAI6wj+mpORXB91v4BDi43R2BJAZ3SnX3Ni3Dh1hkvicO8y2Yx/r26mQebK5jF2e4xy1wxbmYwEMvDDYHg+X0JSEA5fpTOxW+PyyfCCNOvx8D6W3P1CkoAPMcwThToh55Lmd94kRezv5jsu3Zw3Lz9ryWceRAcISPZRyZD4SJ4IvFduyDdcTCBGDcEYwzXklLvjkzqkcVxyMPn80hmdSevYqhw0k51ZBwQviEmE+EEbN1Tu8wkLwVgXAE44xX0pL/2dlreqQ4ljx8NgckFgeH5csr1+WHf/1F/vn3B/LXDz6Siz29jjQJ2asfJgByfUGG7/bJ+P0Bxbm5Hn0pA2Y/Gdc6Y8iDj3FHMM5+evKCErfkiSgBbA5I/eadGb3quPqcAQBmhC9AoVvAllkHuclPzytG7mRk7tMJufuHWSWJ2KV7ZzWGMnyIAY5gnK11BuDq44r/428P5L//+ZP88O8/62zADOCU5lWlABaWtH/1EQPpMAFu3B8LFQBxwBGMM5IkOYqAoyVvRbA5vPftDEAdzwCSJxZGx9RnyYcJwHzEMM0vfpxVYJovfD6puHp3UOsXFl/VGPJwCzDuCMaZkqxrkcnXTstwul2B8uRI7iHyBIXCkWRw1TEDgO+//sYRACEQR/1K7wkt80iBKADzAJSBzHSrvPmrbjk92yHZueMy/XFOkZsb0DpiAPKufnjexR3BOONPIIjzCp44eswJ4ZMHOFtwRD4JLSwsqBhVyZdkZ33akbXEx9pedECdZJmXO5bSOo6ovzyZlMxMSnouN2kZX6iA4flTLgagDN+bM30adwTjjAIQ5195Rc6ePCm5XE6m3n7bLYF9AQg7lQErAI4EyUMw5lnAB9K8CPQfGXxWUrl9kjxTpeX+yePSnTsqmattkhjYlReDDzHkOIJx5gsAUjdu3FDyONr3gGIEAHzyRBR5C0seqOvfLvXZnyhQ7hpNSip7QI7075c93UFe7PhwQmPIcQTXapasc27ZE2S4LZ4gug/b1tTfsh+56U+Z+Qm0q7wo6sXkbFmJDB9Bw2DfGQj4GHcdbNkKjK+5zvEkGO9l3tfFiGC/BzjnZjUQ51KXIsRxoVDF5G4KW+lqr1ihNoXxJ9D/KSy0AiwmZ9NYmABxxJgTl7cpDKQxUCtA3MB/VAIUYyskjBwH/wOKy4owLmgAtH+p9jl5oXK3HgGX+Lga/lOA/xYsz6z8L0pFPGzzBCgLZLA+oZ/YIQLgEjfCiiFQKgF0OVuzJEBqT7ViwwUoZgqfyeonaQcrQDHt82ZARaD7DT1Hjj4eMyDCHFmQHx66nCdAHOyGJkDy9gUnDO7sG232c7n9asx1Aqa9RV6sNqWkw7a4AV8EW19X3lzp+SQ4eMaQ65MHim0fJgA+m0eRtn6OdcPNJw+SIMh3BYpgyTMGny9AsSBxCmSFst8NwlBSAfUKG/Igad8WKYIlb3ef/f1/u8fv7//Tjxw3gPW0Yl55wwRAO4IiWPIEckEO29vY5uYWN7a/scVtt8YR494/ctwA1svs4KOuIPLCBLA5hdqHCYB9/zAB+N8A4JEIAOPgQYzkSAJH5JC8FcHmFGoPH/f/sc+PaY59f+7xo87/BiCP/kd2C1jDU5xlElO/JwBAoiRf6FeA+/8A9vux74/9fQB1/C+A+//0438AHMu6GAdqB++TwBG5Pnmg2PbIDdvjx/7+651duvzFCxBWg/xvAPb/kcOxrpthgFEECOSRNJe7+F8BEdce7UAO+/vY58d+P/b48fLDtT+WwXwTRC6OeD8AUOd418UsAdR9Auoz5AH8p4Cw7QnbngJYQiBv1/4QArMBoABWkOWhrtr+Bzsrg9skFX/aAAAAAElFTkSuQmCC"];
function mcTexture(data){let entry=MC_TEXTURES.get(data);if(entry)return entry.texture;const texture=new THREE.Texture();texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestFilter;texture.generateMipmaps=false;texture.flipY=true;entry={texture,ready:false};MC_TEXTURES.set(data,entry);const image=new Image();image.onload=()=>{texture.image=image;texture.needsUpdate=true;entry.ready=true};image.onerror=()=>{entry.failed=true};image.src=data;return texture}
const mcR=(x,y,w,h)=>({x,y,w,h}),
MC_HEAD={right:mcR(0,8,8,8),left:mcR(16,8,8,8),top:mcR(8,0,8,8),bottom:mcR(16,0,8,8),front:mcR(8,8,8,8),back:mcR(24,8,8,8)},
MC_TORSO={right:mcR(16,20,4,12),left:mcR(28,20,4,12),top:mcR(20,16,8,4),bottom:mcR(28,16,8,4),front:mcR(20,20,8,12),back:mcR(32,20,8,12)},
MC_ARM={right:mcR(40,20,4,12),left:mcR(48,20,4,12),top:mcR(44,16,4,4),bottom:mcR(48,16,4,4),front:mcR(44,20,4,12),back:mcR(52,20,4,12)},
MC_LEFT_ARM={right:mcR(32,52,4,12),left:mcR(40,52,4,12),top:mcR(36,48,4,4),bottom:mcR(40,48,4,4),front:mcR(36,52,4,12),back:mcR(44,52,4,12)},
MC_LEG={right:mcR(0,20,4,12),left:mcR(8,20,4,12),top:mcR(4,16,4,4),bottom:mcR(8,16,4,4),front:mcR(4,20,4,12),back:mcR(12,20,4,12)},
MC_LEFT_LEG={right:mcR(16,52,4,12),left:mcR(24,52,4,12),top:mcR(20,48,4,4),bottom:mcR(24,48,4,4),front:mcR(20,52,4,12),back:mcR(28,52,4,12)},
MC_HAT={right:mcR(32,8,8,8),left:mcR(48,8,8,8),top:mcR(40,0,8,8),bottom:mcR(48,0,8,8),front:mcR(40,8,8,8),back:mcR(56,8,8,8)},
MC_JACKET={right:mcR(16,36,4,12),left:mcR(28,36,4,12),top:mcR(20,32,8,4),bottom:mcR(28,32,8,4),front:mcR(20,36,8,12),back:mcR(32,36,8,12)},
MC_ARM_LAYER={right:mcR(40,36,4,12),left:mcR(48,36,4,12),top:mcR(44,32,4,4),bottom:mcR(48,32,4,4),front:mcR(44,36,4,12),back:mcR(52,36,4,12)},
MC_LEFT_ARM_LAYER={right:mcR(48,52,4,12),left:mcR(56,52,4,12),top:mcR(52,48,4,4),bottom:mcR(56,48,4,4),front:mcR(52,52,4,12),back:mcR(60,52,4,12)},
MC_LEG_LAYER={right:mcR(0,36,4,12),left:mcR(8,36,4,12),top:mcR(4,32,4,4),bottom:mcR(8,32,4,4),front:mcR(4,36,4,12),back:mcR(12,36,4,12)},
MC_LEFT_LEG_LAYER={right:mcR(0,52,4,12),left:mcR(8,52,4,12),top:mcR(4,48,4,4),bottom:mcR(8,48,4,4),front:mcR(4,52,4,12),back:mcR(12,52,4,12)};
function mcBox(parent,w,h,d,regions,texture,material,x,y,z){const g=new THREE.BufferGeometry(),pos=[],uv=[],idx=[];const X=w/2,Y=h/2,Z=d/2,faces=[
 ['right',[[X,-Y,Z],[X,-Y,-Z],[X,Y,-Z],[X,Y,Z]]],
 ['left',[[-X,-Y,-Z],[-X,-Y,Z],[-X,Y,Z],[-X,Y,-Z]]],
 ['top',[[-X,Y,Z],[X,Y,Z],[X,Y,-Z],[-X,Y,-Z]]],
 ['bottom',[[-X,-Y,-Z],[X,-Y,-Z],[X,-Y,Z],[-X,-Y,Z]]],
 ['front',[[-X,-Y,Z],[X,-Y,Z],[X,Y,Z],[-X,Y,Z]]],
 ['back',[[X,-Y,-Z],[-X,-Y,-Z],[-X,Y,-Z],[X,Y,-Z]]]
 ];let v=0;for(const [name,verts] of faces){const r=regions[name];if(!r)continue;for(const p of verts)pos.push(p[0],p[1],p[2]);const u0=r.x/64,u1=(r.x+r.w)/64,v0=1-(r.y+r.h)/64,v1=1-r.y/64;uv.push(u0,v0,u1,v0,u1,v1,u0,v1);idx.push(v,v+1,v+2,v,v+2,v+3);g.addGroup(idx.length-6,6,0);v+=4}g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();const m=new THREE.Mesh(g,material);m.position.set(x,y,z);m.castShadow=true;parent.add(m);return m}
function mcAccessory(parent,acc){const b=(w,h,d,c,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshLambertMaterial({color:c}));m.position.set(x,y,z);m.castShadow=true;parent.add(m)};if(acc==1){b(.48,.1,.48,'#e63946',0,1.86,0);b(.4,.04,.2,'#c1121f',0,1.79,.3)}if(acc==2)b(.45,.15,.45,'#ffd166',0,1.9,0);if(acc==3)b(.47,.07,.03,'#111',0,1.6,.235);if(acc==4)b(.45,.8,.04,'#6a0dad',0,1,-.15);if(acc==5)b(.5,.3,.5,'#8d99ae',0,1.85,0);if(acc==6){b(.12,.15,.1,'#4a2c0a',-.15,1.9,0);b(.12,.15,.1,'#4a2c0a',.15,1.9,0)}if(acc==7)b(.35,.45,.15,'#6b4423',0,1,-.2);if(acc==8){b(.05,.6,.4,'#f8f9fa',-.3,1.1,-.2);b(.05,.6,.4,'#f8f9fa',.3,1.1,-.2)}if(acc==9)b(.5,.1,.5,'#e63946',0,1.34,0);if(acc==10){b(.03,.3,.03,'#ddd',-.1,1.95,0);b(.03,.3,.03,'#ddd',.1,1.95,0)}}
function mkMinecraft(s){const g=new THREE.Group(),u={},texture=mcTexture(s.mcSkin),base=new THREE.MeshLambertMaterial({map:texture}),layer=new THREE.MeshLambertMaterial({map:texture,transparent:true,alphaTest:.03,depthWrite:true}),pv=(x,y)=>{const p=new THREE.Group();p.position.set(x,y,0);g.add(p);return p},box=(parent,w,h,d,reg,x,y,z,mat=base)=>mcBox(parent,w,h,d,reg,texture,mat,x,y,z);
 box(g,.45,.675,.225,MC_TORSO,0,1.0125,0);box(g,.45,.45,.45,MC_HEAD,0,1.575,0);
 u.ra=pv(.3375,1.35);u.la=pv(-.3375,1.35);u.rl=pv(.1125,.675);u.ll=pv(-.1125,.675);
 box(u.ra,.225,.675,.225,s.mcSkinLegacy?MC_ARM:MC_ARM,0,-.3375,0);box(u.la,.225,.675,.225,s.mcSkinLegacy?MC_ARM:MC_LEFT_ARM,0,-.3375,0);box(u.rl,.225,.675,.225,s.mcSkinLegacy?MC_LEG:MC_LEG,0,-.3375,0);box(u.ll,.225,.675,.225,s.mcSkinLegacy?MC_LEG:MC_LEFT_LEG,0,-.3375,0);
 if(s.mcHasLayers){box(g,.474,.474,.474,MC_HAT,0,1.575,0,layer);box(g,.474,.699,.249,MC_JACKET,0,1.0125,0,layer);box(u.ra,.249,.699,.249,MC_ARM_LAYER,0,-.3375,0,layer);box(u.la,.249,.699,.249,s.mcSkinLegacy?MC_ARM_LAYER:MC_LEFT_ARM_LAYER,0,-.3375,0,layer);box(u.rl,.249,.699,.249,MC_LEG_LAYER,0,-.3375,0,layer);box(u.ll,.249,.699,.249,s.mcSkinLegacy?MC_LEG_LAYER:MC_LEFT_LEG_LAYER,0,-.3375,0,layer)}else if(s.acc)mcAccessory(g,s.acc|0);
 g.userData=u;return g}

/* ---------- Personaje estilo Minecraft ---------- */
function mk(s){if(s&&s.mcSkin)return mkMinecraft(s);s=CHO[s.ch|0]?{...s,...CHO[s.ch|0]}:s;const g=new THREE.Group(),u={},
 bx=(p,w,h,d,c,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshLambertMaterial({color:c}));m.position.set(x,y,z);m.castShadow=true;p.add(m)},
 pv=(x,y)=>{const p=new THREE.Group();p.position.set(x,y,0);g.add(p);return p},
 sh=s.top==2?'#aab4c0':s.shirt;
 bx(g,.45,.675,.225,sh,0,1.0125,0);bx(g,.45,.45,.45,s.skin,0,1.575,0);
 u.ra=pv(.3375,1.35);u.la=pv(-.3375,1.35);u.rl=pv(.1125,.675);u.ll=pv(-.1125,.675);
 [u.ra,u.la].forEach(p=>bx(p,.225,.675,.225,s.top&&s.top!=3&&s.top!=4?sh:s.skin,0,-.3375,0));
 [u.rl,u.ll].forEach(p=>{bx(p,.225,.675,.225,s.bot==1||s.bot==2?s.skin:s.pants,0,-.3375,0);if(s.bot==1)bx(p,.24,.34,.24,s.pants,0,-.17,0);if(s.bot==3)bx(p,.24,.16,.28,'#222',0,-.6,.02)});if(s.bot==2)bx(g,.5,.24,.3,s.pants,0,.6,0);
 const e=[[.07,.07,'#000'],[.11,.11,'#000'],[.12,.035,'#000'],[.09,.09,'#0ff'],[.04,.13,'#ff0'],[.1,.1,'#e63946'],[.08,.14,'#2ecc71'],[.14,.05,'#000']][s.eyes]||[.07,.07,'#000'],H=s.hair,t=s.hairT;
 [-.1,.1].forEach(x=>bx(g,e[0],e[1],.02,e[2],x,1.6,.226));
 if(t==1)bx(g,.47,.1,.47,H,0,1.8,0);
 if(t==2){bx(g,.47,.1,.47,H,0,1.8,0);bx(g,.47,.5,.08,H,0,1.58,-.2)}
 if(t==3)bx(g,.1,.22,.47,H,0,1.88,0);
 if(s.acc==1){bx(g,.48,.1,.48,'#e63946',0,1.86,0);bx(g,.4,.04,.2,'#c1121f',0,1.79,.3)}
 if(s.acc==2)bx(g,.45,.15,.45,'#ffd166',0,1.9,0);
 if(s.acc==3)bx(g,.47,.07,.03,'#111',0,1.6,.235);
 if(s.acc==4)bx(g,.45,.8,.04,'#6a0dad',0,1,-.15);
 const ch=s.ch|0;
 if(ch==1||ch==13){bx(g,.03,.25,.03,'#ddd',0,1.92,0);bx(g,.08,.08,.08,'#f00',0,2.06,0)}
 if(ch==3){bx(g,.14,.18,.1,s.skin,-.15,1.88,0);bx(g,.14,.18,.1,s.skin,.15,1.88,0);bx(g,.06,.5,.06,s.skin,0,.75,-.2);bx(g,.3,.01,.01,'#222',-.28,1.5,.23);bx(g,.3,.01,.01,'#222',.28,1.5,.23)}
 if(ch==4){const hm=new THREE.Mesh(new THREE.BoxGeometry(.58,.58,.58),new THREE.MeshLambertMaterial({color:'#9fd3ff',transparent:true,opacity:.35}));hm.position.set(0,1.575,0);g.add(hm);bx(g,.4,.5,.15,'#ced4da',0,1,-.2)}
 if(ch==5){bx(g,.3,.03,.23,'#222',0,1.15,0);bx(g,.3,.03,.23,'#222',0,1,0)}
 if(ch==6){bx(g,.56,.12,.56,'#111',0,1.86,0);bx(g,.4,.16,.4,'#111',0,1.96,0);bx(g,.12,.12,.03,'#111',.1,1.6,.236)}
 if(ch==7){bx(g,.47,.47,.47,'#1b1b1b',0,1.575,0);bx(g,.48,.08,.48,'#c1121f',0,1.7,0);bx(g,.4,.1,.03,'#e0ac69',0,1.6,.24)}
 if(ch==8){bx(g,.7,.06,.7,'#5a189a',0,1.82,0);bx(g,.4,.3,.4,'#5a189a',0,1.99,0);bx(g,.2,.3,.2,'#5a189a',0,2.25,0);bx(g,.3,.3,.05,'#fff',0,1.35,.23)}
 if(ch==9){bx(g,.5,.5,.5,'#aab4c0',0,1.575,0);bx(g,.4,.05,.02,'#222',0,1.6,.255);bx(g,.05,.5,.4,'#e63946',-.45,1,.1)}
 if(ch==10){bx(g,.14,.2,.02,'#000',-.1,1.6,.23);bx(g,.14,.2,.02,'#000',.1,1.6,.23);bx(g,.03,.25,.03,'#7bd389',-.12,1.92,0);bx(g,.03,.25,.03,'#7bd389',.12,1.92,0)}
 if(ch==11){bx(g,.5,.9,.05,'#8b0000',0,1.05,-.15);bx(g,.03,.06,.02,'#fff',-.04,1.43,.23);bx(g,.03,.06,.02,'#fff',.04,1.43,.23)}
 if(ch==12){bx(g,.1,.1,.08,'#f00',0,1.5,.26);bx(g,.15,.2,.15,'#f00',-.2,1.9,0);bx(g,.15,.2,.15,'#0a0',0,1.95,0);bx(g,.15,.2,.15,'#00f',.2,1.9,0)}
 const mo=s.mouth|0,mc='#5a1f1f',my=1.46;
 if(mo==0)bx(g,.1,.025,.02,mc,0,my,.226);
 if(mo==1){bx(g,.12,.025,.02,mc,0,my,.226);bx(g,.025,.025,.02,mc,-.07,my+.02,.226);bx(g,.025,.025,.02,mc,.07,my+.02,.226)}
 if(mo==2)bx(g,.1,.08,.02,'#3a0d0d',0,my,.226);
 if(mo==3)bx(g,.12,.04,.02,'#fff',0,my,.226);
 if(mo==4){bx(g,.1,.03,.02,mc,0,my,.226);bx(g,.05,.05,.02,'#ff6b8a',0,my-.03,.226)}
 if(t==4)bx(g,.1,.3,.5,H,0,1.9,0);
 if(t==5){bx(g,.47,.1,.47,H,0,1.8,0);bx(g,.1,.4,.1,H,0,1.5,-.27)}
 if(t==6)bx(g,.65,.3,.65,H,0,1.9,0);
 if(t==7){bx(g,.47,.1,.47,H,0,1.8,0);bx(g,.47,.12,.06,H,0,1.7,.22)}
 if(s.top==3)bx(g,.1,.67,.23,'#222',0,1.0125,0);
 if(s.top==4)bx(g,.5,.4,.3,sh,0,.55,0);
 if(s.top==5)bx(g,.08,.35,.23,'#e63946',0,1.1,0);
 if(s.acc==5)bx(g,.5,.3,.5,'#8d99ae',0,1.85,0);
 if(s.acc==6){bx(g,.12,.15,.1,H,-.15,1.9,0);bx(g,.12,.15,.1,H,.15,1.9,0)}
 if(s.acc==7)bx(g,.35,.45,.15,'#6b4423',0,1,-.2);
 if(s.acc==8){bx(g,.05,.6,.4,'#f8f9fa',-.3,1.1,-.2);bx(g,.05,.6,.4,'#f8f9fa',.3,1.1,-.2)}
 if(s.acc==9)bx(g,.5,.1,.5,'#e63946',0,1.34,0);
 if(s.acc==10){bx(g,.03,.3,.03,'#ddd',-.1,1.95,0);bx(g,.03,.3,.03,'#ddd',.1,1.95,0)}
 g.userData=u;return g}
const anim=(e,t,dt)=>{const m=e.m,u=m.userData,L=(a,b,k)=>a+(b-a)*Math.min(1,k*dt),P=e.pk||{},W=wp(P.aw|0),J=jp(P.aj|0),K=cpk(P.ac|0),SW=spk(P.as|0),CL=lpk(P.al|0);
 e.sw=L(e.sw||0,e.sp,10);e.ph=(e.ph||0)+dt*(5+e.sp*7)*W.f;e.ja=L(e.ja||0,e.g?0:1,12);e.ca=L(e.ca||0,e.cr?1:0,10);e.swimMix=L(e.swimMix||0,e.swimming?1:0,5);e.climbMix=L(e.climbMix||0,e.climbing?1:0,7);
 if(e.g&&!e.wg)e.sq=1;e.wg=e.g;e.sq=L(e.sq||0,0,9);
 const w=Math.sin(e.ph)*e.sw*(1-e.ja),s=W.ph?-1:1,idle=Math.sin(t*2)*.05*(1-e.sw),a=J.ax*e.ja+K.ax*e.ca;
 let rax=w*W.aa*s+a+idle+(e.ax||0),lax=-w*W.aa*s+a-idle,rlx=-w*W.la+J.lx*e.ja,llx=w*W.la+J.ly*e.ja,raz=J.az*e.ja,laz=-J.az*e.ja;
 if(e.swimMix>0){const phase=t*SW.rate+e.ph*.2,mix=e.swimMix;rax=rax*(1-mix)+Math.sin(phase)*SW.arm*mix;lax=lax*(1-mix)-Math.sin(phase+1.2)*SW.arm*mix;rlx=rlx*(1-mix)+Math.sin(phase+Math.PI)*SW.leg*mix;llx=llx*(1-mix)-Math.sin(phase+Math.PI+1.1)*SW.leg*mix;raz+=(Math.cos(phase)*.12)*mix;laz-=(Math.cos(phase+1.2)*.12)*mix;m.rotation.x+=(SW.tilt*mix-m.rotation.x)*Math.min(1,dt*3)}
 if(e.climbMix>0){const phase=t*CL.rate,mix=e.climbMix;rax=rax*(1-mix)+Math.sin(phase)*CL.arm*mix;lax=lax*(1-mix)-Math.sin(phase)*CL.arm*mix;rlx=rlx*(1-mix)-Math.sin(phase)*CL.leg*mix;llx=llx*(1-mix)+Math.sin(phase)*CL.leg*mix;m.rotation.x+=(CL.lean*mix-m.rotation.x)*Math.min(1,dt*4)}else if(e.swimMix<=0)m.rotation.x*=Math.max(0,1-dt*4);
 u.ra.rotation.x=rax;u.la.rotation.x=lax;u.ra.rotation.z=raz;u.la.rotation.z=laz;u.rl.rotation.x=rlx;u.ll.rotation.x=llx;u.rl.rotation.z=K.lx*e.ca;u.ll.rotation.z=-K.lx*e.ca;
 m.scale.y=1-K.dp*e.ca-.12*e.sq+J.st*e.ja;m.rotation.z=Math.sin(e.ph)*W.sw*e.sw;e.so=L(e.so||0,0,14);m.position.y+=e.so;
 if(e.ty!=null){let d=(e.ty-m.rotation.y)%(2*Math.PI);if(d>Math.PI)d-=2*Math.PI;if(d<-Math.PI)d+=2*Math.PI;m.rotation.y+=d*Math.min(1,dt*14)}};

/* ---------- Avatar y tienda gratuita ---------- */
let tab='eyes',part='skin',mode=0,PR,PS,PC,PM,PA=0,PP;
const SH={eyes:['Normales','Grandes','Sonrientes','Brillantes','Gato','Rojos','Verdes','Cansados'],mouth:['Normal','Sonrisa','Abierta','Dientes','Lengua'],hairT:['Calvo','Corto','Largo','Punk','Mohicano','Cola','Afro','Flequillo'],top:['Camiseta','Sudadera','Armadura','Chaleco','Vestido','Traje'],bot:['Pantalón','Shorts','Falda','Botas'],acc:['Ninguno','Gorra','Corona','Gafas','Capa','Casco','Orejas','Mochila','Alas','Bufanda','Antenas'],pet:['Predeterminado','Neón','Oro','Rojo','Verde','Hielo','Noche'],petA:['Nada','Gorrito','Corona','Antena','Gafas','Cuernos','Orejas','Halo','Moño','Mochila mini','Flor','Auriculares','Visor','Bufanda','Alitas','Mochila cohete']},
TN={eyes:'Ojos',mouth:'Boca',hairT:'Pelo',top:'Ropa',bot:'Pantalón',acc:'Accesorios',pet:'Mascota',petA:'Acc. mascota'},PT={skin:'Piel',hair:'Pelo',shirt:'Camisa',pants:'Pantalón'},
PAL=['#ffdbac','#e0ac69','#c68642','#8d5524','#3b2219','#ff595e','#ffca3a','#8ac926','#1982c4','#9d4edd','#f8f9fa','#212529'],
cp=()=>{if(PM)PS.remove(PM);if(PP)PS.remove(PP);const show=SHOP_PREVIEW?.avatar||PVU||A();PM=mk(show);PM.position.x=-.4;PP=mkPet(show);PP.position.set(.95,0,.3);PS.add(PM,PP)};
const rg=n=>{let a=n*2654435761>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},
AN1=['Neón','Cósmico','Pixel','Mágico','Salvaje','Veloz','Épico','Sombrío','Dorado','Helado'],AN2=['Zorro','Dragón','Ninja','Robot','Pirata','Mago','Gato','Lobo','Astronauta','Guerrero'],
hx6=(r,s,l)=>'#'+new THREE.Color().setHSL(r(),s,l).getHexString(),
presetAv=n=>{const r=rg(n+1),p=k=>r()*k|0;return{n:AN1[n%10]+' '+AN2[(n/10|0)%10]+' #'+(n+1),skin:PAL[p(5)],hair:hx6(r,.65,.35+r()*.3),shirt:hx6(r,.65,.35+r()*.3),pants:hx6(r,.6,.25+r()*.3),eyes:p(8),mouth:p(5),hairT:p(8),top:p(6),bot:p(4),acc:p(11),ch:n%14}},
presetPet=n=>{const r=rg(n+5000),names=['Minion','Cubo','Robot','Fantasma','Slime','Dragón','Gatito','Pollito','Búho','Cohete','Calabaza','Dado','Conejito','Zorro','Pingüino','Tortuguita','Abejita','Ajolote','Setita','Cactus','Nubecita','Gólem','Murciélago','Medusa'];return{n:AN1[(n+3)%10]+' '+names[n%names.length]+' #'+(n+1),petC:hx6(r,.7,.35+r()*.3),petA:r()*16|0,petT:n%names.length}};
let GK=0,GP=0;
let SHOP_CART=ld('nx_shop_cart',[]),SHOP_PREVIEW=null;
function saveShopCart(){SHOP_CART=Array.isArray(SHOP_CART)?SHOP_CART.slice(0,60):[];sv('nx_shop_cart',SHOP_CART);refreshCartNav()}
function refreshCartNav(){const n=Array.isArray(SHOP_CART)?SHOP_CART.length:0;document.querySelectorAll('.nv[data-v="cart"]').forEach(b=>{const prefix=b.closest('#side')?'🛒 ':'🛒 ';b.textContent=prefix+'Carrito'+(n?' ('+n+')':'')})}
function itemOwned(it){return !!(it&&own()[it.ownershipKey])}
function shopItemName(it){return esc(it?.name||'Objeto de avatar')}
function previewStoreItem(type,index){
 if(type==='acc'&&A().mcSkin&&A().mcHasLayers)return alert('Esta skin tiene capas exteriores de Minecraft. Quita la skin o elige otro objeto.');
 const list=SH[type]||[],name=list[index]||('Objeto '+(index+1)),key=type+':'+index,previewAv={...A()},p=price(type,index);
 if(type==='pet'){previewAv.pet=index;delete previewAv.petC}else if(type==='petT'){previewAv.petT=index}else previewAv[type]=index;
 SHOP_PREVIEW={item:{id:'std:'+key,kind:'standard',type,index,ownershipKey:key,name:name+' · '+(TN[type]||type),price:p},avatar:previewAv};avatar();
}
function previewGalleryItem(n){const data=GK?presetPet(n):presetAv(n),name=data.n,avatar={...A()};delete data.n;if(GK){avatar.petC=data.petC;avatar.petA=data.petA;avatar.petT=data.petT}else Object.assign(avatar,data);const key='g'+GK+':'+n;SHOP_PREVIEW={item:{id:'gallery:'+key,kind:GK?'galleryPet':'galleryAvatar',galleryKind:GK,index:n,ownershipKey:key,name,price:GK?25:30,data:{...data}},avatar};avatar()}
function closeShopPreview(){SHOP_PREVIEW=null;avatar()}
function addPreviewToCart(){if(!SHOP_PREVIEW)return;const it=SHOP_PREVIEW.item;if(!SHOP_CART.some(x=>x.id===it.id)){SHOP_CART.push(JSON.parse(JSON.stringify(it)));saveShopCart();toastNixora('Añadido al carrito: '+it.name)}else toastNixora('Ese objeto ya está en tu carrito.');SHOP_PREVIEW=null;avatar()}
function removeCartItem(id){SHOP_CART=SHOP_CART.filter(x=>x.id!==id);saveShopCart();cartPage()}
function cartItemIsOwned(it){return itemOwned(it)||(it.kind==='standard'&&A()[it.type]===it.index)}
function cartPayable(it){return cartItemIsOwned(it)?0:Math.max(0,Number(it.price)||0)}
function cartGrandTotal(items=SHOP_CART){return items.reduce((n,it)=>n+cartPayable(it),0)}
function applyShopItem(it){
 if(it.kind==='standard'){own()[it.ownershipKey]=1;if(it.type==='pet'){A().pet=it.index;delete A().petC}else A()[it.type]=it.index}
 else if(it.kind==='galleryAvatar'){own()[it.ownershipKey]=1;Object.assign(A(),it.data||{})}
 else if(it.kind==='galleryPet'){own()[it.ownershipKey]=1;const d=it.data||{};A().petC=d.petC;A().petA=d.petA;A().petT=d.petT}
}
function purchaseShopItems(items,removeFromCart=false){if(!Array.isArray(items)||!items.length)return;const total=cartGrandTotal(items);if(!can('Tienda gratis')&&nd()<total)return alert('Necesitas '+total+' Nixdollars y tienes '+nd()+'.');if(total>0&&!can('Tienda gratis'))addND(me,-total);items.forEach(applyShopItem);if(removeFromCart){const ids=new Set(items.map(x=>x.id));SHOP_CART=SHOP_CART.filter(x=>!ids.has(x.id));saveShopCart()}SHOP_PREVIEW=null;save();updWallet();toastNixora('Compra completada · '+total+' Nixdollars');if(cur==='cart')cartPage();else avatar()}
function buyPreview(){if(SHOP_PREVIEW)purchaseShopItems([SHOP_PREVIEW.item],false)}
function cartPage(){const total=cartGrandTotal(),rows=SHOP_CART.map(it=>`<article class="nx-cart-item"><div class="nx-cart-chip" style="background:${it.data?.petC||it.data?.shirt||'#7b2cbf'}">${it.kind==='galleryPet'?'🐾':it.kind==='galleryAvatar'?'🧍':it.type==='pet'||it.type==='petT'?'🐾':'✨'}</div><div class="nx-cart-info"><b>${shopItemName(it)}</b><small>${cartPayable(it)?cartPayable(it)+' Nixdollars':'Tuyo / gratis'}</small></div><button class="s" onclick="removeCartItem('${it.id}')">Quitar</button></article>`).join('');$('#main').innerHTML=`<section class="nx-cart-page"><header class="nx-catalog-title"><div><small>NIXORA MARKET</small><h2>🛒 Tu carrito</h2><p>Revisa los artículos antes de comprarlos.</p></div><div class="nx-cart-total"><small>Total</small><b>${total} ND</b></div></header>${rows||'<div class="nx-empty-cart">🛍️<h3>Tu carrito está vacío</h3><p>Explora el catálogo y pulsa «Llevar al carrito» para guardar varios objetos.</p><button onclick="go(\'avatar\')">Explorar avatar</button></div>'}<div class="nx-cart-actions"><button class="s" onclick="SHOP_CART=[];saveShopCart();cartPage()">Vaciar carrito</button><button class="play" ${SHOP_CART.length?'':'disabled'} onclick="purchaseShopItems([...SHOP_CART],true)">Comprar todo · ${total} ND</button></div><small>Se comprueba tu saldo antes de cobrar. Los objetos adquiridos se marcan como tuyos en este perfil.</small></section>`;refreshCartNav()}

function galHTML(){const L=GK?presetPet:presetAv;return `<p>${[0,1].map(k=>`<button class="${GK==k?'':'s'}" onclick="GK=${k};GP=0;avatar()">${k?'Mascotas':'Avatares'}</button>`).join(' ')} <button class="s" onclick="GP=Math.max(0,GP-1);avatar()">◀</button> Página ${GP+1}/38 <button class="s" onclick="GP=Math.min(37,GP+1);avatar()">▶</button></p><div style="display:flex;flex-wrap:wrap;gap:6px">${Array.from({length:24},(_,i)=>{const n=GP*24+i;if(n>=900)return'';const a=L(n),c=GK?[a.petC]:[a.skin,a.shirt,a.pants,a.hair];return `<button class="s" style="width:112px;padding:6px;font-size:12px" onclick="previewGalleryItem(${n})"><span style="display:flex;height:14px;margin-bottom:4px">${c.map(x=>`<i style="flex:1;background:${x}"></i>`).join('')}</span>${a.n}<br>${own()['g'+GK+':'+n]?'Tuyo':'💵 '+(GK?25:30)}</button>`}).join('')}</div>`}
function eq(n){const k='g'+GK+':'+n,p=GK?25:30;if(!own()[k]){if(!can('Tienda gratis')){if(nd()<p){alert('Necesitas '+p+' Nixdollar (tienes '+nd()+')');return}addND(me,-p)}own()[k]=1;updWallet()}const o=GK?presetPet(n):presetAv(n);delete o.n;if(GK){A().petC=o.petC;A().petA=o.petA;A().petT=o.petT}else Object.assign(A(),o);save();avatar()}
const CK=['skin','hair','shirt','pants','petC'],NK=['eyes','mouth','hairT','top','bot','acc','pet','petA','ch','petT','aw','aj','ac','as','al'];
function applyAv(o){if(!o||typeof o!='object')return;CK.forEach(k=>{if(/^#[0-9a-f]{6}$/i.test(o[k]))A()[k]=o[k]});NK.forEach(k=>{if(Number.isInteger(o[k])&&o[k]>=0&&o[k]<100)A()[k]=o[k]});if(typeof o.mcSkin==='string'&&o.mcSkin.startsWith('data:image/png;base64,')&&o.mcSkin.length<3000000){A().mcSkin=o.mcSkin;A().mcSkinLegacy=!!o.mcSkinLegacy;A().mcHasLayers=!!o.mcHasLayers;if(A().mcHasLayers){A().mcPreviousAcc=Number.isInteger(A().acc)?A().acc:0;A().acc=0}}save()}
const dl=(n,t)=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'application/json'}));a.download=n;a.click()},
rd=(i,f)=>{const x=i.files[0];if(!x)return;const r=new FileReader();r.onload=()=>{try{f(JSON.parse(r.result))}catch(e){}};r.readAsText(x)},
expA=()=>dl('avatar-'+me+'.json',JSON.stringify(A())),impA=i=>rd(i,o=>{applyAv(o);avatar()});
async function importMinecraftSkin(input){const file=input&&input.files&&input.files[0];if(!file)return;input.value='';if((file.type&&file.type!=='image/png')&&!/\.png$/i.test(file.name))return alert('Selecciona una imagen PNG de skin de Minecraft.');if(file.size>5*1024*1024)return alert('La imagen es demasiado grande. Usa una skin PNG de hasta 5 MB.');let img,url;try{url=URL.createObjectURL(file);img=await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>reject(new Error('No se pudo leer la imagen'));im.src=url})}catch(e){if(url)URL.revokeObjectURL(url);return alert('No se pudo abrir la imagen. Comprueba que sea un PNG válido.')}finally{if(url)URL.revokeObjectURL(url)}const w=img.naturalWidth,h=img.naturalHeight,scale=w/64,legacy=h===w/2;if(!Number.isInteger(scale)||scale<1||scale>4||!(h===w||legacy))return alert('Formato no compatible. Usa una skin cuadrada de 64×64 (también se aceptan 128×128 o 256×256) o una skin clásica 64×32 (también 128×64).');const canvas=document.createElement('canvas');canvas.width=64;canvas.height=64;const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.clearRect(0,0,64,64);ctx.imageSmoothingEnabled=false;ctx.drawImage(img,0,0,64,legacy?32:64);let hasLayers=false;if(!legacy){const pixels=ctx.getImageData(0,0,64,64).data,regions=[[32,0,32,16],[0,32,16,16],[16,32,24,16],[40,32,16,16],[0,48,16,16],[48,48,16,16]];outer:for(const [rx,ry,rw,rh] of regions)for(let y=ry;y<ry+rh;y++)for(let x=rx;x<rx+rw;x++)if(pixels[(y*64+x)*4+3]>0){hasLayers=true;break outer}}const a=A();if(a.mcSkin&&a.mcHasLayers&&Number.isInteger(a.mcPreviousAcc))a.acc=a.mcPreviousAcc;delete a.mcSkin;delete a.mcSkinLegacy;delete a.mcHasLayers;delete a.mcPreviousAcc;a.mcSkin=canvas.toDataURL('image/png');a.mcSkinLegacy=legacy;a.mcHasLayers=hasLayers;if(hasLayers){a.mcPreviousAcc=Number.isInteger(a.acc)?a.acc:0;a.acc=0}save();avatar();alert('✅ Skin de Minecraft aplicada al avatar.'+(legacy?' Formato clásico 64×32.':'')+(hasLayers?' Se detectaron capas exteriores y se desactivaron los accesorios de Nixora.':' No se detectaron píxeles visibles en las capas exteriores.'))}
function removeMinecraftSkin(){const a=A();if(a.mcHasLayers&&Number.isInteger(a.mcPreviousAcc))a.acc=a.mcPreviousAcc;delete a.mcSkin;delete a.mcSkinLegacy;delete a.mcHasLayers;delete a.mcPreviousAcc;save();avatar()}

// NPCs use a small procedural Minecraft-compatible texture, with a real head/body/limb UV layout.
const NPC_SKIN_CACHE=new Map();
function npcMinecraftSkin(seed=1,accent='#8b5cf6'){
 const cacheKey=(seed|0)+'|'+accent;if(NPC_SKIN_CACHE.has(cacheKey))return NPC_SKIN_CACHE.get(cacheKey);
 const c=document.createElement('canvas');c.width=64;c.height=64;const x=c.getContext('2d');x.clearRect(0,0,64,64);
 const palette=['#edc29b','#c68642','#8d5524','#e0ac69','#f1d4b7','#6e4428'],skin=palette[Math.abs(seed*13)%palette.length],hair=['#2b2118','#171717','#593d2b','#bc6c25','#4a4e69'][Math.abs(seed*7)%5],pants=['#20304a','#3a506b','#343a40','#5c3d2e'][Math.abs(seed*5)%4],shirt=accent&&/^#[0-9a-f]{6}$/i.test(accent)?accent:'#8b5cf6';
 const rect=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)};
 // Head base, face, hair and pixel face features.
 rect(0,0,32,16,skin);rect(8,8,8,8,skin);rect(0,0,32,7,hair);rect(8,8,8,2,hair);rect(8,10,2,1,'#fff');rect(13,10,2,1,'#fff');rect(9,11,1,2,'#263238');rect(14,11,1,2,'#263238');rect(10,14,4,1,'#8c3d37');
 // Torso and legs: base layer regions used by the Minecraft skin UV convention.
 rect(16,16,16,16,shirt);rect(20,20,8,12,shirt);rect(20,23,2,6,'#ffffff');rect(24,23,2,6,'#ffffff');rect(0,16,16,16,shirt);rect(40,16,16,16,skin);rect(44,20,4,12,skin);
 rect(0,16,16,16,shirt);rect(4,20,4,12,pants);rect(8,20,4,12,pants);rect(16,48,16,16,pants);rect(20,52,4,12,pants);rect(24,52,4,12,pants);
 // Left arm/leg base regions.
 rect(32,48,16,16,skin);rect(36,52,4,12,skin);rect(40,52,4,12,skin);rect(16,48,16,16,pants);rect(20,52,4,12,pants);rect(24,52,4,12,pants);
 // Transparent outer layers: hair/hood and jacket cuffs, like standard skin layers.
 rect(32,0,32,8,'#00000000');rect(40,0,8,8,hair);rect(32,8,8,8,hair);rect(48,8,8,8,hair);
 rect(16,32,16,16,'#00000000');rect(20,36,8,12,shirt);rect(20,36,2,12,'#00000000');rect(26,36,2,12,'#00000000');
 rect(40,32,16,16,'#00000000');rect(44,36,4,12,shirt);rect(48,32,16,16,'#00000000');rect(52,52,4,12,'#00000000');
 const url=c.toDataURL('image/png');if(NPC_SKIN_CACHE.size>60)NPC_SKIN_CACHE.delete(NPC_SKIN_CACHE.keys().next().value);NPC_SKIN_CACHE.set(cacheKey,url);return url
}
function npcMinecraftAvatar(seed,accent,zombieSkinIndex=-1){const base={mcSkin:npcMinecraftSkin(seed,accent),mcSkinLegacy:false,mcHasLayers:true,skin:'#d9a781',hair:'#2b2118',shirt:accent||'#8b5cf6',pants:'#343a40',eyes:0,mouth:1,aw:(seed%9)+1,aj:0,ac:0,as:(seed%8)+1,al:(seed%8)+1};if(Number.isInteger(zombieSkinIndex)&&zombieSkinIndex>=0){base.mcSkin=NX_ZOMBIE_SKINS[zombieSkinIndex%NX_ZOMBIE_SKINS.length];base.mcHasLayers=true;base.mcPreviousAcc=0;base.acc=0}return base}
const CHO={1:{skin:'#9aa5b1',eyes:1,mouth:2,hairT:0},2:{skin:'#7fb069',mouth:4,eyes:7},3:{skin:'#f4a261',hairT:0},4:{skin:'#e9ecef'},5:{skin:'#f1f1f1',eyes:1,mouth:3,hairT:0},6:{},7:{shirt:'#1b1b1b',pants:'#1b1b1b'},8:{shirt:'#5a189a'},9:{top:2,pants:'#aab4c0'},10:{skin:'#7bd389'},11:{skin:'#e8e8f0',shirt:'#111111',pants:'#111111'},12:{skin:'#ffffff',pants:'#e63946'},13:{skin:'#ffd700',eyes:1,mouth:2,hairT:0}},
PKA=['Suave','Elegante','Robótica','Zombi','Soldado','Modelo','Saltarina','Perezosa','Veloz','Pingüino','Ninja','Bailarina'],PK=Array.from({length:60},(_,i)=>i?PKA[i%12]+' '+i:'Predeterminada'),
PKSWIM=['Suave','Crol','Braza','Delfín','Aventura','Robótica','Relajada','Rápida','Marina','Exploradora'],PKCLIMB=['Escalador','Montañista','Ninja','Roca','Cuerda','Robótica','Rápida','Cuidadosa','Aventurera','Alpinista'],
PKS=Array.from({length:40},(_,i)=>i?PKSWIM[i%PKSWIM.length]+' '+i:'Nado predeterminado'),PKL=Array.from({length:40},(_,i)=>i?PKCLIMB[i%PKCLIMB.length]+' '+i:'Escalada predeterminada'),ACH={},
wp=n=>ACH['w'+n]||(ACH['w'+n]=n?(r=>({f:.6+r()*1.2,aa:.3+r()*1.3,la:.3+r()*.9,ph:r()<.3,bn:r()*.1,sw:r()*.15}))(rg(n+9000)):{f:1,aa:.9,la:.9,ph:0,bn:0,sw:0}),
jp=n=>ACH['j'+n]||(ACH['j'+n]=n?(r=>({ax:-.3-r()*2.6,az:r()*1.6-.2,lx:r()*1.4-.4,ly:r()*1.4-.7,st:r()*.12}))(rg(n+19000)):{ax:-2.5,az:0,lx:.5,ly:-.4,st:.05}),
cpk=n=>ACH['c'+n]||(ACH['c'+n]=n?(r=>({dp:.1+r()*.25,ax:-r()*1.4,lx:r()*.5}))(rg(n+29000)):{dp:.2,ax:-.5,lx:0}),
spk=n=>ACH['s'+n]||(ACH['s'+n]=n?(r=>({arm:.45+r()*1.35,leg:.12+r()*.65,tilt:.03+r()*.11,rate:2.6+r()*3.6}))(rg(n+39000)):{arm:1,leg:.38,tilt:.08,rate:3.4}),
lpk=n=>ACH['l'+n]||(ACH['l'+n]=n?(r=>({arm:.5+r()*.9,leg:.12+r()*.55,lean:.02+r()*.12,rate:2+r()*2.5}))(rg(n+49000)):{arm:.8,leg:.3,lean:.07,rate:2.5});
Object.assign(SH,{ch:['Jugador','Robot','Zombi','Gato','Astronauta','Esqueleto','Pirata','Ninja','Mago','Caballero','Alien','Vampiro','Payaso','Robot Dorado'],petT:['Minion','Cubo','Robot','Fantasma','Slime','Dragón','Gatito','Pollito','Búho','Cohete','Calabaza','Dado','Conejito','Zorro','Pingüino','Tortuguita','Abejita','Ajolote','Setita','Cactus','Nubecita','Gólem','Murciélago','Medusa'],aw:PK,aj:PK,ac:PK,as:PKS,al:PKL});
Object.assign(TN,{ch:'Personaje',petT:'Minion: tipo',aw:'Anim. caminar',aj:'Anim. saltar',ac:'Anim. agacharse',as:'Pack de nadar',al:'Pack de escalar'});
function avatarPage(){avatar()}
function avatar(){PVU=null;const a=A(),b=(on,t,f)=>`<button class="${on?'':'s'}" onclick="${f}">${t}</button> `;
 const total=cartGrandTotal(),itemCards=(SH[tab]||[]).map((n,i)=>{const owned=own()[tab+':'+i]||price(tab,i)===0||a[tab]===i;const lock=tab==='acc'&&a.mcSkin&&a.mcHasLayers;return `<button class="nx-catalog-item ${a[tab]===i?'selected':''}" onclick="previewStoreItem('${tab}',${i})" ${lock?'disabled':''}><span class="nx-catalog-illustration" style="--swatch:${tab==='petC'?a.petC:(tab==='shirt'?a.shirt:tab==='pants'?a.pants:tab==='hair'?a.hair:'#8b5cf6')}">${tab==='pet'||tab==='petT'?'🐾':tab==='aw'||tab==='aj'||tab==='ac'||tab==='as'||tab==='al'?'🎞️':tab==='ch'?'🧍':tab==='acc'?'✨':tab==='top'||tab==='bot'?'👕':'🎨'}</span><b>${esc(n)}</b><small>${owned?'Tuyo':'💵 '+price(tab,i)+' ND'}</small><span class="nx-preview-link">Vista previa</span></button>`}).join('');
 const preview=SHOP_PREVIEW,pr=preview?.item;
 $('#main').innerHTML=`<div class="nx-avatar-shop">
 <aside class="nx-avatar-preview"><div class="nx-catalog-eyebrow">NIXORA AVATAR</div><h2>Tu avatar</h2><div id="pvh" class="nx-avatar-canvas"></div><p class="nx-avatar-summary">Vista previa 3D · Los cambios solo se aplican al confirmar.</p><div class="nx-avatar-tools"><h3>🎮 Skins de Minecraft</h3><small>${a.mcSkin?`Skin activa · ${a.mcSkinLegacy?'clásica 64×32':'moderna 64×64'} · ${a.mcHasLayers?'capas exteriores activas':'sin capas detectadas'}`:'Importa una skin PNG de 64×64 o 64×32.'}</small><div class="rbar"><button onclick="$('#mcsf').click()">⬆ Importar PNG</button><button class="s" onclick="removeMinecraftSkin()" ${a.mcSkin?'':'disabled'}>Quitar</button><input id="mcsf" type="file" accept="image/png,.png" hidden onchange="importMinecraftSkin(this)"></div>${a.mcSkin&&a.mcHasLayers?'<small>Los accesorios de Nixora se ocultan para respetar las capas de Minecraft.</small>':''}<h3>🎨 Colores</h3><div class="nx-color-tabs">${Object.keys(PT).map(k=>b(part==k,PT[k],`part='${k}';avatar()`)).join('')}</div>${mode?`<input type="color" value="${a[part]}" oninput="setC(this.value)" style="width:100%;height:46px">`:PAL.map(c=>`<button class="nx-color-chip" style="--chip:${c}" aria-label="Color ${c}" onclick="setC('${c}')"></button>`).join('')}<div class="nx-avatar-utility"><button onclick="rnd()">🎲 Aleatorio</button><button class="s" onclick="expA()">⬇ Exportar</button><button class="s" onclick="$('#imf').click()">⬆ Importar JSON</button><input id="imf" type="file" accept=".json" hidden onchange="impA(this)"></div></div></aside>
 <section class="nx-catalog"><header class="nx-catalog-title"><div><small>NIXORA MARKETPLACE</small><h2>Avatar y accesorios</h2><p>Selecciona un objeto para verlo antes de comprarlo.</p></div><button class="nx-cart-pill" onclick="go('cart')">🛒 Carrito <b>${SHOP_CART.length}</b><small>${total} ND</small></button></header>
 <div class="nx-catalog-tabs">${Object.keys(TN).map(k=>`<button class="${tab===k?'active':''}" onclick="tab='${k}';SHOP_PREVIEW=null;avatar()">${esc(TN[k])}</button>`).join('')}<button class="${GK===0?'active':''}" onclick="GK=0;GP=0;avatar()">👤 Avatares</button><button class="${GK===1?'active':''}" onclick="GK=1;GP=0;avatar()">🐾 Mascotas</button></div>
 ${a.mcSkin&&a.mcHasLayers&&tab==='acc'?'<div class="nx-catalog-note">Esta skin usa capas exteriores de Minecraft; los accesorios superpuestos están desactivados.</div>':''}
 <div class="nx-catalog-grid">${itemCards}</div>
 <div class="nx-catalog-divider"><h3>✨ Galería completa</h3><small>900 avatares y 900 mascotas generados por estilos.</small></div>${galHTML()}
 ${preview?`<div class="nx-item-preview-backdrop"><section class="nx-item-preview"><button class="nx-modal-x" onclick="closeShopPreview()" aria-label="Cancelar">✕</button><div class="nx-item-preview-visual" style="--item-color:${preview.avatar?.shirt||preview.avatar?.petC||'#9d4edd'}">${pr?.kind==='galleryPet'||pr?.type==='pet'||pr?.type==='petT'?'🐾':'🧍'}</div><div class="nx-item-preview-copy"><small>VISTA PREVIA</small><h2>${esc(pr?.name||'Objeto')}</h2><p>Comprueba cómo queda en tu avatar antes de añadirlo al inventario.</p><div class="nx-price">${cartPayable(pr||{})} <small>Nixdollars</small></div><div class="nx-item-preview-actions"><button class="play" onclick="buyPreview()">Comprar</button><button class="s" onclick="closeShopPreview()">Cancelar</button><button onclick="addPreviewToCart()">🛒 Llevar al carrito</button></div></div></section></div>`:''}
 </section></div>`;pvw();refreshCartNav()}

function setC(c){A()[part]=c;save();cp()}
function rnd(){const a=A();if(a.mcSkin&&a.mcHasLayers&&Number.isInteger(a.mcPreviousAcc))a.acc=a.mcPreviousAcc;delete a.mcSkin;delete a.mcSkinLegacy;delete a.mcHasLayers;delete a.mcPreviousAcc;const r=n=>Math.random()*n|0,hx=()=>'#'+r(16777216).toString(16).padStart(6,'0');
 Object.assign(a,{skin:PAL[r(5)],hair:hx(),shirt:hx(),pants:hx(),eyes:r(8),mouth:r(5),hairT:r(8),top:r(6),bot:r(4),acc:r(11),pet:r(7),petA:r(8),ch:r(14),petT:r(SH.petT.length)});delete a.petC;save();avatar()}
function pvw(){if(!PR){PR=new THREE.WebGLRenderer({alpha:true,antialias:true});PR.setSize(280,360);PS=new THREE.Scene();PS.add(new THREE.AmbientLight(0xffffff,.8));
 const l=new THREE.DirectionalLight(0xffffff,.8);l.position.set(2,4,3);PS.add(l);PC=new THREE.PerspectiveCamera(35,280/360,.1,50);PC.position.set(0,1.1,6);PC.lookAt(0,.95,0)}
 $('#pvh').appendChild(PR.domElement);cp();
 if(!PA){PA=1;(function f(){const h=$('#pvh');if(!h||!h.contains(PR.domElement)){PA=0;return}PM.rotation.y+=.02;PP.rotation.y-=.02;PR.render(PS,PC);requestAnimationFrame(f)})()}}

const PETC=['#9d4edd','#00e5ff','#ffd166','#ff595e','#8ac926','#bde0fe','#1b1b3a'];
function mkPet(a){
 const g=new THREE.Group(),T=Math.max(0,Math.min(23,a.petT|0)),H=[.9,.7,.8,1,.4,.8,.8,.7,.85,1.3,.75,.7,.95,.8,.85,.8,.75,.8,.85,.95,.8,1,.7,.8][T]||.9,h=Math.max(0,Math.min(15,a.petA|0)),
 col=a.petC||(T===0&&!a.pet?'#ffd23f':PETC[a.pet|0])||'#9d4edd',
 b=(w,hh,dd,c,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,hh,dd),new THREE.MeshLambertMaterial({color:c}));m.position.set(x,y,z);m.castShadow=true;g.add(m);return m};
 // Los minions comparten un cuerpo de escala pequeña, pero cada especie tiene silueta propia.
 if(T===0){b(.55,.9,.55,col,0,.45,0);b(.57,.35,.57,'#2b59c3',0,.18,0);b(.58,.1,.58,'#333',0,.68,0);b(.3,.3,.1,'#e8e8e8',0,.68,.3);b(.12,.12,.1,'#222',0,.68,.34);b(.2,.03,.05,'#222',0,.4,.29);b(.12,.3,.12,col,-.34,.4,0);b(.12,.3,.12,col,.34,.4,0)}
 else if(T===1){b(.7,.7,.7,col,0,.35,0);b(.1,.1,.02,'#000',-.15,.45,.36);b(.1,.1,.02,'#000',.15,.45,.36);b(.22,.04,.02,'#000',0,.25,.36)}
 else if(T===2){b(.7,.7,.7,'#9aa5b1',0,.35,0);b(.5,.15,.02,col,0,.45,.36);b(.2,.04,.02,'#000',0,.2,.36);b(.04,.2,.04,'#ddd',0,.8,0);b(.1,.1,.1,'#f00',0,.95,0)}
 else if(T===3){b(.6,.8,.6,'#f4f4ff',0,.4,0);b(.1,.15,.02,'#222',-.14,.55,.31);b(.1,.15,.02,'#222',.14,.55,.31);b(.15,.1,.02,'#222',0,.35,.31);b(.5,.1,.5,col,0,.05,0)}
 else if(T===4){b(.9,.4,.9,col,0,.2,0);b(.1,.1,.02,'#000',-.2,.28,.46);b(.1,.1,.02,'#000',.2,.28,.46);b(.15,.3,.12,col,-.3,.22,0);b(.15,.3,.12,col,.3,.22,0)}
 else if(T===5){b(.65,.65,.65,col,0,.33,0);b(.1,.1,.02,'#ff0',-.15,.45,.33);b(.1,.1,.02,'#ff0',.15,.45,.33);b(.25,.1,.1,col,0,.2,.4);b(.05,.5,.35,'#fff',-.38,.5,-.1);b(.05,.5,.35,'#fff',.38,.5,-.1);b(.1,.24,.1,'#8b4513',0,.82,0)}
 else if(T===6){b(.7,.7,.7,col,0,.35,0);b(.14,.2,.1,col,-.22,.8,0);b(.14,.2,.1,col,.22,.8,0);b(.1,.1,.02,'#2ecc71',-.15,.45,.36);b(.1,.1,.02,'#2ecc71',.15,.45,.36);b(.08,.06,.02,'#ff8fab',0,.32,.36)}
 else if(T===7){b(.6,.6,.6,col,0,.3,0);b(.2,.1,.15,'#ff9f1c',0,.28,.36);b(.08,.08,.02,'#000',-.14,.4,.31);b(.08,.08,.02,'#000',.14,.4,.31);b(.16,.15,.12,'#ffffff',0,.68,0)}
 else if(T===8){b(.7,.8,.6,col,0,.4,0);b(.22,.22,.02,'#fff',-.17,.55,.31);b(.22,.22,.02,'#fff',.17,.55,.31);b(.1,.1,.03,'#000',-.17,.55,.32);b(.1,.1,.03,'#000',.17,.55,.32);b(.12,.12,.05,'#ff9f1c',0,.38,.31);b(.35,.08,.2,'#70452b',0,.05,0)}
 else if(T===9){b(.5,1,.5,'#f8f9fa',0,.5,0);b(.4,.3,.4,col,0,1.15,0);b(.2,.3,.1,col,-.35,.15,0);b(.2,.3,.1,col,.35,.15,0);b(.2,.2,.02,'#4cc9f0',0,.7,.26)}
 else if(T===10){b(.9,.7,.9,'#f77f00',0,.35,0);b(.12,.2,.12,'#2d6a4f',0,.8,0);b(.12,.12,.02,'#222',-.2,.45,.46);b(.12,.12,.02,'#222',.2,.45,.46);b(.4,.1,.02,'#222',0,.22,.46)}
 else if(T===11){b(.7,.7,.7,'#f8f9fa',0,.35,0);[[-.2,.2],[.2,.2],[0,0],[-.2,-.2],[.2,-.2]].forEach(([x,y])=>b(.1,.1,.02,col,x,.35+y,.36))}
 else if(T===12){b(.6,.6,.5,col,0,.32,0);b(.23,.27,.06,'#fff',-.15,.48,.29);b(.23,.27,.06,'#fff',.15,.48,.29);b(.1,.13,.04,'#252525',-.15,.48,.34);b(.1,.13,.04,'#252525',.15,.48,.34);b(.15,.65,.13,col,-.19,1.02,-.02);b(.15,.65,.13,col,.19,1.02,-.02);b(.5,.09,.14,'#e7b7a8',0,.22,.3)}
 else if(T===13){b(.75,.55,.55,col,0,.35,0);b(.4,.24,.28,'#f5d6b4',0,.27,.3);b(.18,.25,.18,col,-.22,.72,0);b(.18,.25,.18,col,.22,.72,0);b(.55,.28,.28,col,0,.58,-.39);b(.15,.12,.03,'#111',-.15,.48,.31);b(.15,.12,.03,'#111',.15,.48,.31)}
 else if(T===14){b(.65,.8,.55,'#30343b',0,.4,0);b(.42,.36,.08,'#f1faee',0,.4,.31);b(.1,.12,.03,'#111',-.15,.55,.36);b(.1,.12,.03,'#111',.15,.55,.36);b(.13,.14,.13,'#f77f00',0,.25,.35);b(.18,.75,.12,'#30343b',-.4,.38,0);b(.18,.75,.12,'#30343b',.4,.38,0)}
 else if(T===15){b(.62,.42,.62,col,0,.25,0);b(.75,.28,.7,'#537a35',0,.49,-.02);b(.11,.11,.03,'#111',-.16,.39,.33);b(.11,.11,.03,'#111',.16,.39,.33);for(const x of [-.23,.23])b(.13,.16,.13,'#4d7c0f',x,.08,.17)}
 else if(T===16){b(.72,.55,.6,'#ffd60a',0,.37,0);b(.15,.52,.62,'#2b2d42',-.22,.37,0);b(.15,.52,.62,'#2b2d42',.22,.37,0);b(.1,.1,.03,'#111',-.14,.49,.32);b(.1,.1,.03,'#111',.14,.49,.32);b(.3,.32,.03,'#ffffff',-.39,.61,0);b(.3,.32,.03,'#ffffff',.39,.61,0);b(.05,.25,.05,'#70452b',0,.8,0)}
 else if(T===17){b(.68,.66,.58,'#f7a8c4',0,.34,0);b(.18,.18,.06,'#fff',-.16,.52,.3);b(.18,.18,.06,'#fff',.16,.52,.3);b(.09,.09,.03,'#222',-.16,.52,.34);b(.09,.09,.03,'#222',.16,.52,.34);for(const x of [-.4,.4])for(let i=0;i<3;i++)b(.12,.13,.11,'#e85d9e',x,.53+i*.15,0);b(.18,.08,.04,'#c1126b',0,.24,.31)}
 else if(T===18){b(.34,.55,.34,'#f4e1b6',0,.28,0);b(.9,.34,.78,col,0,.68,0);for(const x of [-.19,.19])b(.09,.12,.05,'#202020',x,.49,.34);b(.15,.05,.03,'#ffffff',0,.37,.36)}
 else if(T===19){b(.45,.92,.45,'#40916c',0,.47,0);b(.28,.42,.26,'#40916c',-.32,.48,0);b(.28,.36,.26,'#40916c',.31,.35,0);for(const x of [-.13,.13])for(const y of [.28,.52,.76])b(.035,.09,.035,'#d8f3dc',x,y,.235);b(.1,.1,.04,'#202020',-.1,.62,.24);b(.1,.1,.04,'#202020',.1,.62,.24)}
 else if(T===20){b(.62,.55,.52,col,-.18,.33,0);b(.58,.65,.55,col,.18,.4,0);b(.58,.43,.53,col,0,.23,-.25);b(.12,.12,.03,'#222',-.15,.43,.29);b(.12,.12,.03,'#222',.15,.43,.29);b(.2,.05,.03,'#ffffff',0,.27,.3)}
 else if(T===21){b(.72,.8,.6,'#8d99ae',0,.4,0);b(.85,.28,.7,'#6c757d',0,.83,0);b(.15,.13,.04,'#ffbe0b',-.16,.55,.32);b(.15,.13,.04,'#ffbe0b',.16,.55,.32);b(.18,.28,.14,'#6c757d',-.44,.39,0);b(.18,.28,.14,'#6c757d',.44,.39,0)}
 else if(T===22){b(.42,.58,.42,'#343a40',0,.33,0);b(.14,.2,.13,'#343a40',-.18,.72,0);b(.14,.2,.13,'#343a40',.18,.72,0);b(.52,.12,.12,col,-.4,.47,0);b(.52,.12,.12,col,.4,.47,0);b(.1,.1,.04,'#ff006e',-.1,.46,.22);b(.1,.1,.04,'#ff006e',.1,.46,.22)}
 else {b(.72,.4,.72,col,0,.78,0);b(.55,.22,.55,col,0,.48,0);for(let i=0;i<6;i++)b(.11,.34,.11,col,Math.cos(i*Math.PI/3)*.25,.19,Math.sin(i*Math.PI/3)*.25);b(.1,.1,.03,'#202020',-.15,.79,.34);b(.1,.1,.03,'#202020',.15,.79,.34);}
 // Accesorios exclusivos de minions (petA); todos permanecen unidos al grupo al moverse.
 if(h===1)b(.42,.13,.42,'#e63946',0,H+.06,0);
 if(h===2){b(.5,.08,.5,'#ffd166',0,H+.05,0);for(const x of [-.18,0,.18])b(.08,.18,.08,'#ffd166',x,H+.17,0)}
 if(h===3){b(.055,.28,.055,'#ddd',0,H+.12,0);b(.13,.13,.13,'#00e5ff',0,H+.3,0)}
 if(h===4)b(.62,.1,.03,'#111',0,H*.7,.34);
 if(h===5){b(.1,.2,.1,'#fff',-.2,H+.1,0);b(.1,.2,.1,'#fff',.2,H+.1,0)}
 if(h===6){b(.15,.25,.1,'#fff',-.22,H+.12,0);b(.15,.25,.1,'#fff',.22,H+.12,0)}
 if(h===7)b(.5,.05,.5,'#ffd166',0,H+.3,0);
 if(h===8){b(.22,.12,.12,'#ff4d6d',-.13,.27,.34);b(.22,.12,.12,'#ff4d6d',.13,.27,.34);b(.08,.1,.12,'#fff',0,.27,.4)}
 if(h===9){b(.28,.32,.18,'#8d6e63',0,.4,-.36);b(.22,.08,.1,'#6f4518',0,.55,-.44)}
 if(h===10){b(.12,.12,.04,'#ffd166',-.35,H*.7,.24);b(.12,.12,.04,'#ff70a6',-.35,H*.7+.1,.24);b(.12,.12,.04,'#7bdff2',-.35,H*.7-.1,.24)}
 if(h===11){b(.08,.3,.08,'#343a40',-.38,.5,0);b(.08,.3,.08,'#343a40',.38,.5,0);b(.14,.08,.14,'#9d4edd',-.38,.65,0);b(.14,.08,.14,'#9d4edd',.38,.65,0)}
 if(h===12){b(.66,.1,.12,'#00e5ff',0,H*.75,.32);b(.09,.08,.06,'#fff',-.18,H*.75,.38);b(.09,.08,.06,'#fff',.18,H*.75,.38)}
 if(h===13){b(.7,.13,.62,'#ff8fab',0,.1,.02);b(.14,.1,.08,'#fff',-.22,.09,.31);b(.14,.1,.08,'#fff',.22,.09,.31)}
 if(h===14){b(.32,.14,.42,'#80ffdb',-.43,.55,-.02);b(.32,.14,.42,'#80ffdb',.43,.55,-.02)}
 if(h===15){b(.25,.32,.22,'#8d99ae',0,.6,-.38);b(.12,.1,.1,'#ffbe0b',0,.78,-.42);b(.09,.18,.09,'#d8f3dc',0,.91,-.4)}
 const piv=()=>({rotation:{x:0,z:0}});g.userData={ra:piv(),la:piv(),rl:piv(),ll:piv()};return g
}
let GRAV=28,JP=10.5,WS=6;
/* ---------- Motor 3D del juego ---------- */
const hov=(e,b)=>Math.abs(e.p.x-b[0])<b[3]/2+.3&&Math.abs(e.p.z-b[2])<b[5]/2+.3,
vov=(e,b)=>e.p.y<b[1]+b[4]/2-.1&&e.p.y+1.8>b[1]-b[4]/2+.1;
function unst(e){for(let i=0;i<160&&B.some(b=>hov(e,b)&&vov(e,b));i++)e.p.y+=.25}
function slide(e,k,d,dt){const o=e.p[k],oy=e.p.y;e.p[k]+=d*dt;const hit=B.filter(b=>hov(e,b)&&vov(e,b));if(!hit.length)return;
 const top=Math.max(...hit.map(b=>b[1]+b[4]/2));
 if(e.g&&top-e.p.y<=1.01&&top-e.p.y>0){e.p.y=top+.001;if(!B.some(b=>hov(e,b)&&vov(e,b))){e.so=(e.so||0)+(oy-e.p.y);return}}
 e.p[k]=o;e.p.y=oy}
function mv(e,dx,dz,dt){slide(e,'x',dx,dt);slide(e,'z',dz,dt);
 e.vy-=GRAV*dt;const py=e.p.y;e.p.y+=e.vy*dt;e.g=false;
 for(const b of B)if(hov(e,b)&&e.p.y<b[1]+b[4]/2&&e.p.y+1.8>b[1]-b[4]/2){const t=b[1]+b[4]/2;
  if(e.vy<=0&&py>=t-.1){e.p.y=t;e.vy=0;e.g=true}else if(e.vy>0){e.p.y=b[1]-b[4]/2-1.8;e.vy=0}}
 if(e.p.y<=0){e.p.y=0;e.vy=0;e.g=true}}
function beep(f,l=.08){try{const a=beep.a||(beep.a=new AudioContext()),o=a.createOscillator(),g=a.createGain();o.frequency.value=f;g.gain.value=.08*cv('vol',70)/100;o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+l)}catch(e){}}
let CHAT_PINNED=false,CHAT_TIMER=null,ACTIVE_WORLD='',ACTIVE_ROOM='';
function setGameChat(open,pin=false){const c=$('#chat'),b=$('#chatToggle');if(!c)return;if(CHAT_TIMER){clearTimeout(CHAT_TIMER);CHAT_TIMER=null}CHAT_PINNED=!!open&&!!pin;c.classList.toggle('chat-hidden',!open);if(!open&&document.activeElement===$('#ci'))$('#ci').blur();if(b)b.setAttribute('aria-expanded',open?'true':'false')}
function toggleGameChat(){const c=$('#chat');if(!c)return;const open=c.classList.contains('chat-hidden');setGameChat(open,open);if(open)setTimeout(()=>$('#ci')?.focus(),0)}
function popupGameChat(){if($('#play')?.hidden||CHAT_PINNED)return;setGameChat(true,false);CHAT_TIMER=setTimeout(()=>{if(!CHAT_PINNED&&document.activeElement!==$('#ci'))setGameChat(false,false)},5000)}
function sendGameChat(){const i=$('#ci');if(!i)return;const text=i.value.trim();if(text&&typeof window.__nixoraGameChatSend==='function')window.__nixoraGameChatSend(text);i.value='';setGameChat(false,false);i.blur()}
function say(n,m){if(me&&n&&String(n).toLowerCase()!==String(me).toLowerCase()&&(U[me]?.bl||[]).some(v=>String(v).toLowerCase()===String(n).toLowerCase()))return;const l=$('#log');m=bad(m);if(!l)return;l.innerHTML+=`<div><b>${esc(n)}${tag(n)}:</b> ${esc(m)}</div>`;l.scrollTop=1e9;popupGameChat()}
let CURRENT_GAME_META=null;
function showGameInstructions(){
 const g=CURRENT_GAME_META,wrap=$('#gameInstructions'),body=$('#gameInstructionsContent');if(!wrap||!body||!g)return;
 const all=(String(g.n||'')+' '+String(g.h||'')+' '+String(g.d||'')).toLowerCase();
 let objective='Explora el mapa, lee los mensajes del juego y completa el objetivo indicado en pantalla.';
 let tips=['Mira alrededor antes de avanzar.','Sigue las señales, luces y elementos destacados del escenario.'];
 if(/obby|parkour|escalada|obstáculo|obstaculo|infinito/.test(all)){objective='Avanza por el recorrido, usa las plataformas y escaleras, y alcanza los checkpoints para no perder todo tu progreso.';tips=['No saltes demasiado pronto: alinea el personaje con el centro de la plataforma.','En escaleras, mantén W o el control hacia delante para subir.','Si caes, vuelve al último checkpoint y prueba otra trayectoria.'];}
 if(/tycoon|simulador|construcción|construccion|granja|cocina|pesca|entrega/.test(all)){objective='Explora tu zona, reúne recursos y completa los encargos o mejoras de este modo.';tips=['Busca marcadores y objetos brillantes.','Acércate a los puntos de interacción y usa E o el botón de interactuar en móvil.'];}
 if(/duelo|batalla|combate|pvp|arena|supervivencia|defensa|mazmorra|jefe|zombi/.test(all)){objective='Mantente en movimiento, observa a los enemigos y cumple la meta de combate de este modo.';tips=['Ataca solo cuando tengas al objetivo cerca.','En móvil, usa el botón de espada si aparece; en PC, usa F o clic.','Recoge curación si el escenario la ofrece.'];}
 if(/laberinto|escape|puzzle|rompecabezas|runas/.test(all)){objective='Observa las pistas, activa los elementos en el orden correcto y encuentra la salida o resuelve el mecanismo.';tips=['Recuerda por dónde ya pasaste.','Los objetos luminosos suelen señalar pistas, llaves o puntos de objetivo.'];}
 if(/roleplay|ciudad|pueblo|social|aventura|exploración|exploracion|tesoro|bosque|isla/.test(all)){objective='Explora el mundo habitable, visita sus lugares importantes, habla con los NPC y busca tesoros o encargos.';tips=['Prueba las puertas, plazas, muelles y caminos secundarios.','Los NPC y objetos destacados pueden señalar objetivos.'];}
 if(/ritmo|música|musica|baile/.test(all)){objective='Sigue el ritmo, observa los indicadores y pulsa en el momento correcto.';tips=['Escucha los sonidos de referencia.','No mantengas todas las teclas pulsadas: el tiempo de cada acción importa.'];}
 const mobile=matchMedia('(pointer: coarse)').matches||innerWidth<850;
 const controls=mobile?'Móvil: usa el pad/joystick para moverte. ⬆ salta, 🧎 agáchate, E interactúa y usa ⚔ cuando aparezca.':'PC: WASD para moverte, Espacio para saltar, Shift para agacharte, E para interactuar y F o clic para atacar cuando el juego permita combate.';
 body.innerHTML=`<div class="game-help-eyebrow">GUÍA DEL JUEGO</div><h2 id="gameHelpTitle">${esc(g.n||'Juego')}</h2><p>${esc(g.d||'Diviértete y explora el mundo.')}</p><section><b>🎯 Objetivo</b><p>${esc(objective)}</p></section><section><b>🕹 Controles</b><p>${esc(controls)}</p><p>${mobile?'Puedes usar los gestos táctiles de la cámara si están habilitados.':'Mueve el ratón para mirar; pulsa Escape para abrir la pausa.'}</p></section><section><b>💡 Consejos</b><ul>${tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section><small>Etiqueta: ${esc(g.h||'#juego')}</small>`;
 wrap.hidden=false;
}
function closeGameInstructions(){const w=$('#gameInstructions');if(w)w.hidden=true}
let NX_PAUSE_TAB='Players';
function openPauseMenu(tab='Players'){
 const modal=$('#pm');if(!modal)return;
 NX_PAUSE_TAB=tab||'Players';modal.hidden=false;
 if(document.pointerLockElement&&document.exitPointerLock)document.exitPointerLock();
 if(typeof window.__nxPauseRender==='function')window.__nxPauseRender(NX_PAUSE_TAB);
}
function closePauseMenu(){const modal=$('#pm');if(modal)modal.hidden=true}
function pauseMenuTab(tab){NX_PAUSE_TAB=String(tab||'Players');if(typeof window.__nxPauseRender==='function')window.__nxPauseRender(NX_PAUSE_TAB)}
function pauseMenuAction(action,value=''){if(typeof window.__nxPauseAction==='function')return window.__nxPauseAction(String(action||''),String(value||''))}
function showGameRuntimeError(err){
 const overlay=$('#gameRuntimeError'),details=$('#gameRuntimeDetails');
 if($('#gameLoading'))$('#gameLoading').hidden=true;
 if($('#gameInstructions'))$('#gameInstructions').hidden=true;
 if($('#pm'))$('#pm').hidden=true;
 if(details)details.textContent=String(err&&err.message||'Error de renderizado').slice(0,240);
 if(overlay)overlay.hidden=false;
 try{if(document.pointerLockElement)document.exitPointerLock()}catch{}
}
function paintPlayerFallback(canvas,profile){
 if(!canvas)return;const ctx=canvas.getContext('2d');if(!ctx)return;const a=profile?.av||AV0,w=canvas.width,h=canvas.height;
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#21132f';ctx.fillRect(0,0,w,h);
 const skin=/^#[0-9a-f]{3,8}$/i.test(a.skin||'')?a.skin:'#e0ac69',shirt=/^#[0-9a-f]{3,8}$/i.test(a.shirt||'')?a.shirt:'#9d4edd',pants=/^#[0-9a-f]{3,8}$/i.test(a.pants||'')?a.pants:'#2b2b6e',hair=/^#[0-9a-f]{3,8}$/i.test(a.hair||'')?a.hair:'#4a2c0a';
 const px=(x,y,ww,hh,c)=>{ctx.fillStyle=c;ctx.fillRect(x,y,ww,hh)};
 px(15,38,7,20,shirt);px(42,38,7,20,shirt);px(20,35,24,25,shirt);px(21,59,9,17,pants);px(34,59,9,17,pants);px(20,14,24,22,skin);px(19,12,26,7,hair);px(17,17,5,9,hair);px(42,17,5,9,hair);px(26,23,3,3,'#20172a');px(36,23,3,3,'#20172a');
 if(a.mcSkin){px(20,14,24,22,'#4b956c');px(26,23,3,3,'#122');px(36,23,3,3,'#122')}
 if(a.acc&&!(a.mcSkin&&a.mcHasLayers)){px(18,11,28,4,'#ffd166')}
}
let NX_PLAYER_THUMB_RENDERER=null,NX_PLAYER_THUMB_SCENE=null,NX_PLAYER_THUMB_CAMERA=null,NX_PLAYER_THUMB_LIGHTS_READY=false;
function renderPlayerModelThumbnails(players){
 const targets=[...document.querySelectorAll('canvas[data-player-model]')];if(!targets.length)return;
 targets.forEach(c=>{const i=Number(c.dataset.playerModel),profile=players[i];paintPlayerFallback(c,profile)});
 if(!window.THREE||typeof mk!=='function')return;
 try{
  if(!NX_PLAYER_THUMB_RENDERER){const canvas=document.createElement('canvas');canvas.width=72;canvas.height=72;NX_PLAYER_THUMB_RENDERER=new THREE.WebGLRenderer({canvas,alpha:false,antialias:false,powerPreference:'low-power',preserveDrawingBuffer:true});NX_PLAYER_THUMB_RENDERER.setPixelRatio(1);NX_PLAYER_THUMB_RENDERER.setSize(72,72,false);NX_PLAYER_THUMB_SCENE=new THREE.Scene();NX_PLAYER_THUMB_SCENE.background=new THREE.Color('#21132f');NX_PLAYER_THUMB_SCENE.add(new THREE.HemisphereLight(0xf3e8ff,0x31203e,2));const light=new THREE.DirectionalLight(0xffffff,1.25);light.position.set(2,4,5);NX_PLAYER_THUMB_SCENE.add(light);NX_PLAYER_THUMB_CAMERA=new THREE.PerspectiveCamera(40,1,.1,20);NX_PLAYER_THUMB_CAMERA.position.set(0,1.03,3.35);NX_PLAYER_THUMB_CAMERA.lookAt(0,1,0)}
  for(const canvas of targets){const profile=players[Number(canvas.dataset.playerModel)];if(!profile)continue;let avatar=null;
   try{avatar=mk(profile.av||AV0);avatar.rotation.y=.18;NX_PLAYER_THUMB_SCENE.add(avatar);NX_PLAYER_THUMB_RENDERER.render(NX_PLAYER_THUMB_SCENE,NX_PLAYER_THUMB_CAMERA);const ctx=canvas.getContext('2d');if(ctx){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.drawImage(NX_PLAYER_THUMB_RENDERER.domElement,0,0,canvas.width,canvas.height)}}finally{if(avatar)NX_PLAYER_THUMB_SCENE.remove(avatar)}
  }
 }catch(err){console.warn('Se usará el icono de avatar de respaldo en la lista:',err);targets.forEach(c=>paintPlayerFallback(c,players[Number(c.dataset.playerModel)]))}
}
function play(id,roomCode='',createRoom=false){
 try{
 const g=typeof id=='object'?id:gmx(id);if(!g)return;CURRENT_GAME_META=g;roomCode=String(roomCode||'').trim().toUpperCase();if(roomCode&&!/^[A-Z0-9]{4,12}$/.test(roomCode))return alert('Código de sala inválido.');const roomKey=roomCode?g.id+'::'+roomCode:g.id;ACTIVE_WORLD=g.id;ACTIVE_ROOM=roomCode;B=g.b.filter(b=>b[8]!==0);recordPlay(g.id);
 $('#app').hidden=true;$('#play').hidden=false;if($('#gameLoading'))$('#gameLoading').hidden=false;if($('#gameRuntimeError'))$('#gameRuntimeError').hidden=true;window.nixoraGameRecovery=null;$('#play').classList.remove('combat-mode','interaction-mode');$('#ab').hidden=true;$('#ib').hidden=true;$('#pm').hidden=true;$('#gt').textContent=g.n;$('#log').innerHTML='';setGameChat(false,false);if(window.__nxBgStop)window.__nxBgStop();showGameInstructions();
 const coarseDevice=matchMedia('(pointer: coarse)').matches||innerWidth<850;
 if(!GR)GR=new THREE.WebGLRenderer({canvas:$('#cv'),antialias:!coarseDevice,powerPreference:'high-performance'});
 GR.setPixelRatio(Math.min(window.devicePixelRatio||1,coarseDevice?1.15:1.5));GR.setSize(innerWidth,innerHeight);const useShadows=!!cv('shadowsEnabled',cv('0_0',false))&&!coarseDevice;GR.shadowMap.enabled=useShadows;
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(cv('fov',70),innerWidth/innerHeight,.1,700);
 const S=g.st||{},cycleTheme=(String(g.n||'')+' '+String(g.h||'')+' '+String(g.genre||'')).toLowerCase(),useDayCycle=S.dayNightCycle===false?false:(S.dayNightCycle===true||/ciudad|pueblo|casa|supervivencia|survival|zombi|zombie|bosque|granja|roleplay|aventura|montaña|mountain|rescate|apocalipsis|naturaleza|village|city/.test(cycleTheme)),cycleStart=Number.isFinite(Number(S.clock))?Number(S.clock):14,df=Math.max(0,Math.sin(((S.clock??14)-6)/12*Math.PI)),tv=Math.min(1,.2+df),tint=S.sky?new THREE.Color(S.sky):new THREE.Color(tv,tv,tv),skyIndex=Math.max(0,Math.min(NX_SKY_PRESETS.length-1,Number(S.skyPreset)||0)),usingCustomSky=Number(S.skyPreset)>0,skyPalette=NX_SKY_PRESETS[skyIndex],HZ=new THREE.Color(skyPalette.colors[2]);
 const skyTint=usingCustomSky?new THREE.Color(0xffffff):tint.clone();sc.background=HZ.clone().multiply(usingCustomSky?new THREE.Color(1,1,1):tint);const fogStyle=['none','soft','mist','dense'].includes(S.fogStyle)?S.fogStyle:'soft',fogEnd=Math.max(45,Math.min(500,Number(S.fog)||150));sc.fog=fogStyle==='none'?null:fogStyle==='mist'?new THREE.FogExp2(sc.background.clone(),.0075):fogStyle==='dense'?new THREE.FogExp2(sc.background.clone(),.016):new THREE.Fog(sc.background.clone(),20,fogEnd);
 const amb=new THREE.AmbientLight(0xffffff,(.25+.5*df)*(S.bright??1));sc.add(amb);
 const skyM=new THREE.MeshBasicMaterial({side:THREE.BackSide,fog:false,depthWrite:false,color:skyTint,map:nxSkyTexture(skyIndex)});
 const sim=S.skyImg&&MK.find(x=>x.id==S.skyImg);if(sim){const tx=new THREE.TextureLoader().load(sim.d);tx.wrapS=THREE.RepeatWrapping;tx.repeat.x=-1;skyM.map=tx;skyM.color.set(0xffffff)}
 const skyD=new THREE.Mesh(new THREE.SphereGeometry(450,16,10),skyM);skyD.renderOrder=-1;sc.add(skyD);
 const cycleStops=[[0,'#080d28'],[4.7,'#30214d'],[5.8,'#d47f91'],[7.2,'#86c5f2'],[12,'#59b9ff'],[16.8,'#f7bb7c'],[18.5,'#dc7585'],[20,'#38294f'],[22,'#13132f'],[24,'#080d28']].map(([h,c])=>[h,new THREE.Color(c)]),cycleCol=new THREE.Color(),cycleBg=new THREE.Color();
 const cmat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.42,fog:false,depthWrite:false}),cl=[],cloudGeo=new THREE.SphereGeometry(1,8,6);cmat.color.copy(skyTint);
 const cloudCount=S.clouds===0?0:(coarseDevice?10:24);for(let i=0;i<cloudCount;i++){const q=new THREE.Group(),lobes=coarseDevice?3:4;for(let k=0;k<lobes;k++){const p=new THREE.Mesh(cloudGeo,cmat);p.position.set(k*2.8-4.1+(Math.random()-.5)*1.2,Math.random()*1.25,Math.random()*2.2);p.scale.set(2.5+Math.random()*2.6,1.05+Math.random()*.85,2.1+Math.random()*2.0);q.add(p)}q.position.set((Math.random()-.5)*360,24+Math.random()*42,(Math.random()-.5)*360);q.rotation.y=Math.random()*.18;q.visible=cv('pauseClouds',true);sc.add(q);cl.push(q)}
 const dl=new THREE.DirectionalLight(0xffffff,.8),sd=dl.shadow.camera;dl.castShadow=useShadows;sd.left=sd.bottom=-24;sd.right=sd.top=24;sd.updateProjectionMatrix();dl.shadow.mapSize.set(coarseDevice?256:512,coarseDevice?256:512);sc.add(dl,dl.target);
 const gm=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshLambertMaterial({color:(g.lava||S.lava)?'#c62828':g.gr,emissive:(g.lava||S.lava)?0x661100:0}));gm.rotation.x=-Math.PI/2;gm.receiveShadow=useShadows;sc.add(gm);
 const gd=new THREE.GridHelper(400,80,0x9d4edd,0x4b2a7a);gd.position.y=.01;gd.visible=!!cv('gameGrid',false);sc.add(gd);
 const addM=b=>{const m=shp(b);m.position.set(b[0],b[1],b[2]);m.castShadow=m.receiveShadow=useShadows;m.userData.b=b;b.m=m;sc.add(m);return m};
 // Los mapas grandes se construyen por lotes durante los primeros fotogramas. Así el navegador puede pintar la pantalla de carga y no se queda negro mientras crea miles de mallas.
 const initialMeshQueue=B.slice();let initialMeshCursor=0;
 const buildInitialMeshBatch=(limit=coarseDevice?56:112)=>{const end=Math.min(initialMeshQueue.length,initialMeshCursor+limit);for(;initialMeshCursor<end;initialMeshCursor++)addM(initialMeshQueue[initialMeshCursor]);return initialMeshCursor>=initialMeshQueue.length};
 let initialMeshesReady=buildInitialMeshBatch();
 const mkE=(av,x,z,name,pet)=>{const m=pet?mkPet(av):mk(av);sc.add(m);return {p:new THREE.Vector3(x,0,z),tp:new THREE.Vector3(x,0,z),vy:0,g:1,m,name,sp:0,s:0,pk:pet?null:av}},
 mkNameplate=(r)=>{if(r.label)r.m.remove(r.label);const c=document.createElement('canvas');c.width=512;c.height=96;const x=c.getContext('2d');x.fillStyle='rgba(18,6,31,.78)';x.fillRect(0,0,512,96);x.font='bold 34px Arial';x.textAlign='center';x.fillStyle='#ffffff';x.fillText((r.rank?'['+r.rank+'] ':'')+r.name,256,59,490);const tx=new THREE.CanvasTexture(c),sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,transparent:true,depthTest:false}));sp.scale.set(4.5,.85,1);sp.position.set(0,3.2,0);r.m.add(sp);r.label=sp;},
 pl=mkE(A(),0,0,me),
 bot=mkE(A(),2,2,'Minion',1);
 let k={},yaw=0,pitch=.4,dist=cv('dist',8),follow=cv('11_1',true),bj=0,dr=0,hooks=[],raf,last=performance.now(),t=0,fc=0,ft=0,dn_=0,ns=0,cid=0,px=0,py=0,touchPts=new Map(),pinchD=0,jumpLatch=false,mobs=[],atk=0,hasSword=0,kf=null,stp=0,boost=0,coins=0,won=0,kd2=null,nds=[],ndT=3,JI=0,duelKO=0,duelSide=0,WORLD_HOST=true,MULTI_CONNECTED=false,WORLD_SLOT=0,MOB_SEQ=0,LAST_MOB_SYNC=0,NX_DYN_BLOCK_SEQ=0,NX_NET_STATE=Object.create(null),NX_NET_HANDLERS=Object.create(null),NX_STATE_HANDLERS=Object.create(null),NX_DYN_BLOCKS=new Map();
 const lava=g.lava||S.lava,RL=g.b.filter(b=>b[12]),sb=g.b.find(b=>b[12]==1),SP=sb?[sb[0],sb[1]+sb[4]/2+.05,sb[2]]:(g.sp?[...g.sp]:[0,lava?.25:.05,0]);
 const waterZones=[],waterMeshes=[],ladderZones=[],movingBlocks=[],procChunks=new Map();
 // Navegación de NPC: buscan rutas alrededor de obstáculos sólidos y escalan solo si no encuentran una ruta.
 const NAV_STEP=.5,NAV_RADIUS=.30,NAV_BODY_HEIGHT=2.05;
 const navVerticalOverlap=(q,baseY,height=NAV_BODY_HEIGHT)=>{const bottom=q[1]-q[4]/2,top=q[1]+q[4]/2;return top>baseY+.18&&bottom<baseY+height-.03};
 const navVolumeBlocked=(x,z,baseY,ignore=null)=>{
  for(const q of B){if(q===ignore||q[8]===0||!navVerticalOverlap(q,baseY))continue;
   if(Math.abs(x-q[0])<q[3]/2+NAV_RADIUS-.015&&Math.abs(z-q[2])<q[5]/2+NAV_RADIUS-.015)return true;
  }return false;
 };
 const navObstaclesBetween=(a,b,pad=10)=>{
  const minX=Math.min(a.x,b.x)-pad,maxX=Math.max(a.x,b.x)+pad,minZ=Math.min(a.z,b.z)-pad,maxZ=Math.max(a.z,b.z)+pad,baseY=Number.isFinite(a.y)?a.y:0;
  return B.filter(q=>q[8]!==0&&navVerticalOverlap(q,baseY)&&q[0]+q[3]/2+NAV_RADIUS>=minX&&q[0]-q[3]/2-NAV_RADIUS<=maxX&&q[2]+q[5]/2+NAV_RADIUS>=minZ&&q[2]-q[5]/2-NAV_RADIUS<=maxZ);
 };
 const navClimbHasClearance=(agent,wall,ax,az,ex,ez,climbY)=>{
  // Escalar una pared no autoriza atravesar techos ni forjados: revisar todo el volumen del cuerpo durante la subida y el cruce.
  const baseY=Number.isFinite(agent.p.y)?agent.p.y:0,verticalSteps=Math.max(4,Math.ceil(Math.abs(climbY-baseY)/.18));
  for(let i=0;i<=verticalSteps;i++){const y=baseY+(climbY-baseY)*i/verticalSteps;if(navVolumeBlocked(ax,az,y,wall))return false;}
  const run=Math.hypot(ex-ax,ez-az),steps=Math.max(2,Math.ceil(run/.18));
  for(let i=0;i<=steps;i++){const f=i/steps;if(navVolumeBlocked(ax+(ex-ax)*f,az+(ez-az)*f,climbY,wall))return false;}
  return true;
 };
 const navSegmentHit=(a,b,obs)=>{
  const dx=b.x-a.x,dz=b.z-a.z;let best=null;
  for(const q of obs){let lo=0,hi=1,valid=true;
   for(const [pos,delta,center,half] of [[a.x,dx,q[0],q[3]/2+NAV_RADIUS],[a.z,dz,q[2],q[5]/2+NAV_RADIUS]]){
    if(Math.abs(delta)<1e-7){if(pos<center-half||pos>center+half){valid=false;break}}
    else{let t1=(center-half-pos)/delta,t2=(center+half-pos)/delta;if(t1>t2){const tmp=t1;t1=t2;t2=tmp}lo=Math.max(lo,t1);hi=Math.min(hi,t2);if(lo>hi){valid=false;break}}
   }
   if(valid&&hi>=0&&lo<=1&&hi>.015){const enter=Math.max(0,lo);if(!best||enter<best.enter)best={b:q,enter,exit:Math.min(1,hi)};}
  }
  return best;
 };
 const navFindPath=(start,target,obs)=>{
  const step=NAV_STEP,pad=6.5,minX=Math.floor((Math.min(start.x,target.x)-pad)/step)*step,minZ=Math.floor((Math.min(start.z,target.z)-pad)/step)*step,
   maxX=Math.ceil((Math.max(start.x,target.x)+pad)/step)*step,maxZ=Math.ceil((Math.max(start.z,target.z)+pad)/step)*step,
   cols=Math.min(80,Math.floor((maxX-minX)/step)+1),rows=Math.min(80,Math.floor((maxZ-minZ)/step)+1),N=cols*rows;
  const clamp=(v,max)=>Math.max(0,Math.min(max-1,v)),id=(x,z)=>z*cols+x,ix=p=>p%cols,iz=p=>(p/cols)|0,
   sx=clamp(Math.round((start.x-minX)/step),cols),sz=clamp(Math.round((start.z-minZ)/step),rows),tx=clamp(Math.round((target.x-minX)/step),cols),tz=clamp(Math.round((target.z-minZ)/step),rows),startId=id(sx,sz),goalId=id(tx,tz);
  if(startId===goalId)return [];
  const blocked=new Uint8Array(N);
  for(const q of obs){const extX=q[3]/2+NAV_RADIUS+step*.12,extZ=q[5]/2+NAV_RADIUS+step*.12;
   let x0=clamp(Math.floor((q[0]-extX-minX)/step),cols),x1=clamp(Math.ceil((q[0]+extX-minX)/step),cols),z0=clamp(Math.floor((q[2]-extZ-minZ)/step),rows),z1=clamp(Math.ceil((q[2]+extZ-minZ)/step),rows);
   for(let z=z0;z<=z1;z++)for(let x=x0;x<=x1;x++){const wx=minX+x*step,wz=minZ+z*step;if(Math.abs(wx-q[0])<=extX&&Math.abs(wz-q[2])<=extZ)blocked[id(x,z)]=1;}
  }
  // Siempre se permite salir de la celda actual y llegar a la celda del objetivo.
  blocked[startId]=0;blocked[goalId]=0;
  const scores=new Float32Array(N),prev=new Int32Array(N),closed=new Uint8Array(N);scores.fill(Infinity);prev.fill(-1);scores[startId]=0;
  const heapIds=[],heapFs=[];
  const push=(v,f)=>{let i=heapIds.length;heapIds.push(v);heapFs.push(f);while(i>0){const par=(i-1)>>1;if(heapFs[par]<=f)break;heapIds[i]=heapIds[par];heapFs[i]=heapFs[par];i=par}heapIds[i]=v;heapFs[i]=f};
  const pop=()=>{const out=[heapIds[0],heapFs[0]],v=heapIds.pop(),f=heapFs.pop();if(heapIds.length){let i=0;while(true){let c=i*2+1;if(c>=heapIds.length)break;if(c+1<heapIds.length&&heapFs[c+1]<heapFs[c])c++;if(heapFs[c]>=f)break;heapIds[i]=heapIds[c];heapFs[i]=heapFs[c];i=c}heapIds[i]=v;heapFs[i]=f}return out};
  const heuristic=(v)=>{const dx=Math.abs(ix(v)-tx),dz=Math.abs(iz(v)-tz);return Math.max(dx,dz)+.41421356*Math.min(dx,dz)};
  push(startId,heuristic(startId));let found=false,iterations=0;
  const dirs=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[-1,1,1.414],[1,-1,1.414],[-1,-1,1.414]];
  while(heapIds.length&&iterations++<N*2){const [curId]=pop();if(closed[curId])continue;closed[curId]=1;if(curId===goalId){found=true;break}
   const cx=ix(curId),cz=iz(curId);
   for(const [ax,az,cost] of dirs){const nx=cx+ax,nz=cz+az;if(nx<0||nz<0||nx>=cols||nz>=rows)continue;const ni=id(nx,nz);if(blocked[ni]||closed[ni])continue;
    if(ax&&az&&(blocked[id(cx+ax,cz)]||blocked[id(cx,cz+az)]))continue;
    const ns=scores[curId]+cost;if(ns<scores[ni]){scores[ni]=ns;prev[ni]=curId;push(ni,ns+heuristic(ni));}
   }
  }
  if(!found)return null;const path=[];let cur=goalId,guard=0;while(cur!==startId&&cur>=0&&guard++<N){path.push({x:minX+ix(cur)*step,z:minZ+iz(cur)*step});cur=prev[cur]}if(cur!==startId)return null;path.reverse();return path;
 };
 const navMoveFlat=(agent,x,z,dt,speed,ignore=null)=>{const sx=agent.p.x,sz=agent.p.z,dx=x-sx,dz=z-sz,d=Math.hypot(dx,dz);if(d<.025)return d;const travel=Math.min(d,Math.max(0,speed)*dt),steps=Math.max(1,Math.ceil(travel/.12));let moved=0;
  // Muestrea desde la posición inicial fija. Antes cada muestra sumaba una distancia acumulativa a la posición ya movida y podía saltarse una colisión.
  for(let i=1;i<=steps;i++){const f=travel*i/steps,nx=sx+dx/d*f,nz=sz+dz/d*f;if(navVolumeBlocked(nx,nz,agent.p.y,ignore))break;agent.p.x=nx;agent.p.z=nz;moved=f;}
  if(moved>0.001)agent.ty=Math.atan2(dx,dz);return Math.max(0,d-moved)};
 const navSetSpeed=(agent,speed)=>{agent.navActualSpeed=speed;agent.sp=agent.navAnimNormalized?Math.min(1,speed/6):speed};
 const smartMoveAgent=(agent,target,dt,speed=2.5,allowClimb=true)=>{
  if(!target||!agent.p)return;const c=agent.navClimb;
  if(c){agent.navLineClear=false;agent.g=false;agent.climbing=true;
   if(c.phase===0){const rem=navMoveFlat(agent,c.ax,c.az,dt,Math.max(.5,speed));navSetSpeed(agent,speed*.65);if(rem<.22)c.phase=1;return}
   if(c.phase===1){navSetSpeed(agent,speed*.5);agent.p.y+=(c.climbY-agent.p.y)*Math.min(1,dt*2.5);if(Math.abs(c.climbY-agent.p.y)<.12){agent.p.y=c.climbY;c.phase=2}return}
   if(c.phase===2){agent.p.y=c.climbY;const rem=navMoveFlat(agent,c.ex,c.ez,dt,Math.max(.8,speed),c.wall);navSetSpeed(agent,speed*.8);if(rem<.25)c.phase=3;return}
   navSetSpeed(agent,speed*.45);agent.p.y+=(c.baseY-agent.p.y)*Math.min(1,dt*2.1);if(Math.abs(agent.p.y-c.baseY)<.12){agent.p.y=c.baseY;agent.navClimb=null;agent.navPath=null;agent.navTimer=0;agent.climbing=false;agent.g=true;navSetSpeed(agent,0)}return;
  }
  const dx=target.x-agent.p.x,dz=target.z-agent.p.z,dist=Math.hypot(dx,dz);
  agent.navTimer=(agent.navTimer||0)-dt;
  const targetMoved=!agent.navTarget||Math.hypot(target.x-agent.navTarget.x,target.z-agent.navTarget.z)>1.75;
  if(agent.navTimer<=0||targetMoved||agent.navLineClear===undefined){
   agent.navTimer=agent.pc?1.1:.52;agent.navTarget={x:target.x,z:target.z};
   const obs=navObstaclesBetween(agent.p,target),hit=navSegmentHit(agent.p,target,obs);agent.navLineClear=!hit;agent.navPath=null;agent.navIndex=0;
   if(hit){const path=navFindPath(agent.p,target,obs);
    if(path&&path.length){agent.navPath=path}
    else if(allowClimb){const length=Math.max(.001,dist),ux=dx/length,uz=dz/length,approach=Math.max(0,hit.enter*length-.58),exit=Math.min(length,hit.exit*length+.65),top=hit.b[1]+hit.b[4]/2,ax=agent.p.x+ux*approach,az=agent.p.z+uz*approach,ex=agent.p.x+ux*exit,ez=agent.p.z+uz*exit,climbY=Math.max(agent.p.y+1.1,top+.48);
     if(top-agent.p.y<=3.4&&navClimbHasClearance(agent,hit.b,ax,az,ex,ez,climbY)){agent.navClimb={phase:0,ax,az,ex,ez,climbY,baseY:agent.p.y,wall:hit.b};agent.navPath=null}else{agent.navPath=[];agent.navClimb=null;}
    }else agent.navPath=[];
   }
  }
  if(agent.navClimb){smartMoveAgent(agent,target,dt,speed,allowClimb);return}
  if(agent.navLineClear){const rem=navMoveFlat(agent,target.x,target.z,dt,speed);navSetSpeed(agent,rem<dist-.001?speed:0);return}
  if(agent.navPath&&agent.navPath.length){while(agent.navIndex<agent.navPath.length&&Math.hypot(agent.navPath[agent.navIndex].x-agent.p.x,agent.navPath[agent.navIndex].z-agent.p.z)<.38)agent.navIndex++;
   if(agent.navIndex<agent.navPath.length){const wp=agent.navPath[agent.navIndex],before=Math.hypot(wp.x-agent.p.x,wp.z-agent.p.z),rem=navMoveFlat(agent,wp.x,wp.z,dt,speed);navSetSpeed(agent,rem<before-.001?speed:0)}else{navSetSpeed(agent,0);if(dist<NAV_STEP*1.4)agent.navTimer=0;}
  }else navSetSpeed(agent,0);
 };
 GRAV=S.grav||28;JP=S.jump||10.5;WS=S.walk||6;
 if(lava&&!sb){const pb=[SP[0],SP[1]-.15,SP[2],10,.3,10,'#3a3a5c',1,1];B.push(pb);addM(pb)}
 pl.p.set(SP[0],SP[1],SP[2]);unst(pl);
 const die=()=>{pl.p.set(SP[0],SP[1],SP[2]);pl.vy=0;pl.vx=pl.vz=0;unst(pl);beep(140,.25);say('Juego','💀 Has muerto');kd2&&kd2()};
 const spawnND=()=>{if(nds.length>=6||!B.length)return;const b=B[Math.random()*B.length|0],d=Math.hypot(b[0]-pl.p.x,b[2]-pl.p.z);if(d<4||d>40)return;const m=addM([b[0],b[1]+b[4]/2+.9,b[2],.55,.55,.55,'#00ff88',1,0,'',0,1,0]);m.userData.t0=performance.now();nds.push(m)};
 pl.hp=100;const sw=new THREE.Group();[[.08,.9,.08,'#dfe6ee',-.95],[.3,.06,.1,'#8d6e63',-.5]].forEach(([w,h,d,c,y])=>{const q=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshLambertMaterial({color:c}));q.position.set(0,y,.1);sw.add(q)});sw.visible=false;pl.m.userData.ra.add(sw);
 const hit=()=>{if(!hasSword||atk>0)return;atk=.35;if(g.pvp){let target=null,best=4.5;for(const [sid,r] of Object.entries(rp)){const d=r.p.distanceTo(pl.p);if(d<best){best=d;target=r;target.sid=sid}}if(target){net({t:'attack',targetId:Number(target.sid),damage:25});say('Combate','⚔️ Atacaste a '+target.name+'.');}else say('Combate','Acércate a tu rival para golpearlo.')}else{let target=null,best=3.2;for(const m of mobs){if(!m.dead&&!m.pc){const d=m.p.distanceTo(pl.p);if(d<best){best=d;target=m}}}if(target){if(MULTI_CONNECTED)net({t:'mobAttack',targetId:target.netId});else{target.hp-=15;target.fl=.15;if(target.hp<=0){target.dead=1;sc.remove(target.m);kf&&kf(target)}}}else say('Combate','Acércate al enemigo para golpearlo.');}beep(300,.1)};
 let ws=null;const rp={},net=o=>{if(ws&&ws.readyState==1)ws.send(JSON.stringify(o))},
 updPl=()=>{$('#pl').textContent='👥 '+[me,...Object.values(rp).filter(r=>r&&r.name).map(r=>r.name+(r.rank?' ['+r.rank+']':''))].join(' · ')};updPl(); 
 let pauseRecorder=null,pauseRecording=false,pauseChunks=[],pausePreviewRenderer=null,pausePreviewScene=null,pausePreviewCamera=null,pausePreviewAvatar=null,pausePreviewPet=null;
 const NX_SENT_FRIENDS=new Set(),NX_INCOMING=[];
 const pausePlayers=()=>[{name:String(me),rank:(rk(me)&&rk(me).n)||'',self:true,x:pl.p.x,y:pl.p.y,z:pl.p.z,av:A(),description:String(U[me]?.desc||''),pet:{type:A().petT??A().pet??0,accessory:A().petA??0},equipment:A()},...Object.values(rp).filter(r=>r&&r.name&&String(r.name).toLowerCase()!==String(me).toLowerCase()).map(r=>({name:String(r.name),rank:r.rank||'',self:false,x:r.p.x,y:r.p.y,z:r.p.z,av:r.av||AV0,description:String(r.description||''),pet:r.pet||{type:r.av?.petT??0,accessory:r.av?.petA??0},equipment:r.equipment||r.av||AV0}))];
 const pauseEsc=s=>esc(String(s??'')),pauseNorm=n=>String(n||'').toLowerCase(),pauseBlocked=n=>(U[me]?.bl||[]).some(v=>pauseNorm(v)===pauseNorm(n)),pauseFriend=n=>(U[me]?.fr||[]).some(v=>pauseNorm(v)===pauseNorm(n));
 function clearPausePreview(){try{if(pausePreviewRenderer)pausePreviewRenderer.dispose()}catch{}pausePreviewRenderer=pausePreviewScene=pausePreviewCamera=pausePreviewAvatar=pausePreviewPet=null}
 function renderPausePreview(profile){const canvas=$('#nxPauseProfileCanvas');if(!canvas||!window.THREE)return;clearPausePreview();try{pausePreviewRenderer=new THREE.WebGLRenderer({canvas,alpha:false,antialias:false,powerPreference:'low-power'});pausePreviewRenderer.setPixelRatio(1);pausePreviewRenderer.setSize(180,196,false);pausePreviewScene=new THREE.Scene();pausePreviewScene.background=new THREE.Color('#100b17');pausePreviewScene.add(new THREE.HemisphereLight(0xf3e8ff,0x31203e,2.1));const light=new THREE.DirectionalLight(0xffffff,1.8);light.position.set(3,5,4);pausePreviewScene.add(light);pausePreviewCamera=new THREE.PerspectiveCamera(34,180/196,.1,30);pausePreviewCamera.position.set(0,1.18,5.6);pausePreviewCamera.lookAt(0,1,.0);const av=profile.av||AV0;pausePreviewAvatar=mk(av);pausePreviewAvatar.scale.setScalar(.82);pausePreviewAvatar.position.x=-.34;pausePreviewScene.add(pausePreviewAvatar);pausePreviewPet=mkPet(av);pausePreviewPet.scale.setScalar(.65);pausePreviewPet.position.set(.82,0,.16);pausePreviewScene.add(pausePreviewPet);pausePreviewRenderer.render(pausePreviewScene,pausePreviewCamera)}catch(err){clearPausePreview();console.warn('No se pudo abrir la vista previa del jugador:',err)}}
 function showFriendRequestToast(from,profile={}){const norm=pauseNorm(from);if(!from||norm===pauseNorm(me)||NX_INCOMING.some(x=>pauseNorm(x.from)===norm))return;NX_INCOMING.push({from:String(from),profile:profile&&typeof profile==='object'?profile:{}});drawFriendRequestToast()}
 function drawFriendRequestToast(){const root=$('#nxFriendRequestRoot');if(!root)return;const req=NX_INCOMING[0];if(!req){root.hidden=true;root.innerHTML='';return}root.hidden=false;root.innerHTML=`<div class="nx-friend-popup"><canvas id="nxFriendPicCanvas" class="nx-friend-pic" width="64" height="64" aria-label="Avatar de quien envía la solicitud"></canvas><div class="nx-friend-info"><strong>${pauseEsc(req.from)}</strong><small>En línea · Solicitud de amistad</small><small>Quiere agregarte a sus amigos</small></div><div class="nx-friend-actions"><button data-decision="ignore">Ignorar</button><button class="nx-accept" data-decision="accept">Aceptar</button></div></div>`;try{const canvas=root.querySelector('#nxFriendPicCanvas');if(canvas&&window.THREE){const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'low-power'});renderer.setPixelRatio(1);renderer.setSize(64,64,false);const scene=new THREE.Scene();scene.background=new THREE.Color('#21132f');scene.add(new THREE.HemisphereLight(0xf3e8ff,0x31203e,2));const light=new THREE.DirectionalLight(0xffffff,1.5);light.position.set(2,4,5);scene.add(light);const camera=new THREE.PerspectiveCamera(34,1,.1,30);camera.position.set(0,1.1,4.3);camera.lookAt(0,1,0);const avatar=mk(req.profile?.av||AV0);avatar.scale.setScalar(.58);scene.add(avatar);renderer.render(scene,camera);renderer.dispose()}else if(canvas){const ctx=canvas.getContext('2d');ctx.fillStyle='#2a183b';ctx.fillRect(0,0,64,64);ctx.fillStyle='#f3e8ff';ctx.font='bold 26px sans-serif';ctx.textAlign='center';ctx.fillText(req.from.slice(0,1).toUpperCase(),32,42)}}catch{const canvas=root.querySelector('#nxFriendPicCanvas');if(canvas){const ctx=canvas.getContext('2d');ctx.fillStyle='#2a183b';ctx.fillRect(0,0,64,64);ctx.fillStyle='#f3e8ff';ctx.font='bold 26px sans-serif';ctx.textAlign='center';ctx.fillText(req.from.slice(0,1).toUpperCase(),32,42)}}root.querySelectorAll('[data-decision]').forEach(b=>b.addEventListener('click',()=>{const decision=b.dataset.decision;net({t:'friendResponse',from:req.from,decision});if(decision==='accept'){U[me].fr=Array.isArray(U[me].fr)?U[me].fr:[];if(!pauseFriend(req.from))U[me].fr.push(req.from);save()}NX_INCOMING.shift();drawFriendRequestToast();say('Amistad',decision==='accept'?'Ahora eres amigo de '+req.from+'.':'Solicitud de '+req.from+' ignorada.')}))}
 function profileEquipment(p){const a=p.av||{},bits=[];const pick=(arr,n)=>Array.isArray(arr)?(arr[n]||'') :'';if(a.mcSkin)bits.push('Skin de Minecraft');else{if(a.top!=null)bits.push(pick(SH.top,a.top|0));if(a.bot!=null)bits.push(pick(SH.bot,a.bot|0));if(a.acc)bits.push(pick(SH.acc,a.acc|0));if(a.hairT!=null)bits.push('Pelo: '+pick(SH.hairT,a.hairT|0))}if(a.petT!=null||a.pet!=null)bits.push('Mascota: '+pick(SH.petT,a.petT??a.pet|0));if(a.petA)bits.push('Acc. mascota: '+pick(SH.petA,a.petA|0));return bits.filter(Boolean)}
 const renderPauseMenu=(tab=NX_PAUSE_TAB)=>{
  clearPausePreview();NX_PAUSE_TAB=tab;const host=$('#nxPauseContent');if(!host)return;
  document.querySelectorAll('.nx-pause-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  const players=pausePlayers();let body='';
  if(tab==='Players'){
   body=`<div class="nx-pause-invite"><span>✉ Invitar amigos</span><button class="nx-small-btn" data-action="invite">Copiar invitación</button></div><div class="nx-player-summary">${players.length} jugador${players.length===1?'':'es'} real${players.length===1?'':'es'} conectado${players.length===1?'':'s'} a esta sala</div><div class="nx-pause-list">`+players.map(p=>{const color=String(p.av?.shirt||p.av?.skin||'#9d4edd').match(/^#[0-9a-f]{3,8}$/i)?(p.av.shirt||p.av.skin):'#9d4edd',pet=p.av?.petT!=null?(SH.petT[p.av.petT]||'Mascota'):(p.av?.pet?'Mascota':'Sin mascota'),isB=pauseBlocked(p.name),isF=pauseFriend(p.name),sent=NX_SENT_FRIENDS.has(pauseNorm(p.name));return `<div class="nx-player-row"><div class="nx-player-name"><canvas class="nx-player-card-avatar" data-player-model="${players.indexOf(p)}" width="64" height="64" aria-label="Modelo de ${pauseEsc(p.name)}"></canvas><span class="nx-player-meta"><b>${pauseEsc(p.name)}${p.self?' <em>(Tú)</em>':''}</b><small>${pauseEsc((p.description||'').slice(0,120)|| (p.self?'Tu perfil':'Jugador conectado'))}</small><small>🐾 ${pauseEsc(pet)} ${p.rank?' · '+pauseEsc(p.rank):''}</small></span></div><div class="nx-player-actions">${p.self?'<span class="nx-you-label">TÚ</span>':`<button class="nx-flag-btn" title="Reportar jugador" data-action="report-user" data-user="${pauseEsc(p.name)}">⚑</button><button class="nx-small-btn" data-action="view" data-user="${pauseEsc(p.name)}">Ver</button><button class="nx-small-btn" data-action="${isF?'view':'friend'}" data-user="${pauseEsc(p.name)}" ${sent?'disabled':''}>${isF?'Amigos ✓':sent?'Enviada':'Agregar amigo'}</button><button class="nx-small-btn" data-action="${isB?'unblock':'block'}" data-user="${pauseEsc(p.name)}">${isB?'Desbloquear':'Bloquear'}</button>`}</div></div>`}).join('')+'</div>';
  } else if(tab==='Settings'){
   const sens=Math.max(.25,Math.min(2.5,Number(cv('sens',1))||1)),volume=Math.max(0,Math.min(100,Number(cv('vol',70))||0)),fps=Math.max(30,Math.min(120,Number(cv('fps',60))||60)),fov=Math.max(55,Math.min(100,Number(cv('fov',70))||70)),touchSize=Math.max(48,Math.min(120,Number(cv('touchsize',80))||80));
   body=`<div class="nx-pause-section"><h3>⚙ Ajustes</h3><p>Los cambios se aplican a esta sesión y se guardan en este navegador.</p><label class="nx-range-label">Sensibilidad de cámara <b id="nxSensValue">${sens.toFixed(2)}×</b></label><input class="nx-range" id="nxPauseSensitivity" type="range" min="0.25" max="2.5" step="0.05" value="${sens}"><label class="nx-range-label">Campo de visión <b id="nxFovValue">${fov}°</b></label><input class="nx-range" id="nxPauseFov" type="range" min="55" max="100" step="1" value="${fov}"><label class="nx-range-label">Volumen de sonidos <b id="nxVolumeValue">${volume}%</b></label><input class="nx-range" id="nxPauseVolume" type="range" min="0" max="100" step="5" value="${volume}"><label for="nxPauseFps">Límite de FPS</label><select id="nxPauseFps"><option value="30" ${fps===30?'selected':''}>30 FPS · ahorro</option><option value="45" ${fps===45?'selected':''}>45 FPS</option><option value="60" ${fps===60?'selected':''}>60 FPS</option><option value="90" ${fps===90?'selected':''}>90 FPS</option><option value="120" ${fps>=120?'selected':''}>120 FPS · alto rendimiento</option></select><label for="nxPauseTouch">Controles táctiles</label><select id="nxPauseTouch"><option value="joystick" ${cv('touchmode','joystick')==='joystick'?'selected':''}>Joystick</option><option value="buttons" ${cv('touchmode','joystick')==='buttons'?'selected':''}>Botones direccionales</option></select><label class="nx-range-label">Tamaño de controles <b id="nxTouchValue">${touchSize}px</b></label><input class="nx-range" id="nxPauseTouchSize" type="range" min="48" max="120" step="4" value="${touchSize}"><div class="nx-setting-row"><span>Chat público</span><button class="nx-small-btn" data-action="chat">Mostrar / ocultar</button></div><label for="nxPauseFriendRequests">Solicitudes de amistad</label><select id="nxPauseFriendRequests"><option value="1" ${(cv('friendRequests',true)!==false)?'selected':''}>Permitir que me agreguen</option><option value="0" ${(cv('friendRequests',true)===false)?'selected':''}>No permitir solicitudes</option></select><label for="nxPauseFogStyle">Niebla del mundo</label><select id="nxPauseFogStyle"><option value="soft" ${(cv('pauseFogStyle','soft')==='soft')?'selected':''}>Suave</option><option value="mist" ${cv('pauseFogStyle','soft')==='mist'?'selected':''}>Bruma</option><option value="dense" ${(cv('pauseFogStyle','soft')==='dense')?'selected':''}>Densa</option><option value="none" ${(cv('pauseFogStyle','soft')==='none')?'selected':''}>Desactivada</option></select><div class="nx-setting-row"><span>Sombras dinámicas</span><input id="nxPauseShadows" type="checkbox" ${cv('shadowsEnabled',cv('0_0',false))?'checked':''}></div><div class="nx-setting-row"><span>Mostrar FPS</span><input id="nxPauseShowFps" type="checkbox" ${cv('showFps',cv('0_5',false))?'checked':''}></div><div class="nx-setting-row"><span>Mostrar cuadrícula</span><input id="nxPauseGrid" type="checkbox" ${cv('gameGrid',false)?'checked':''}></div><div class="nx-setting-row"><span>Nubes decorativas</span><input id="nxPauseClouds" type="checkbox" ${cv('pauseClouds',true)?'checked':''}></div><div class="nx-setting-row"><span>Instrucciones del juego</span><button class="nx-small-btn" data-action="instructions">Abrir instrucciones</button></div><div class="nx-setting-row"><span>Descripción de perfil</span><button class="nx-small-btn" data-action="description">Editar descripción</button></div><div class="nx-setting-row"><span>Cuenta y ajustes completos</span><button class="nx-small-btn" data-action="main-settings">Abrir menú principal</button></div><p class="nx-muted">Estos controles amplían los ajustes del menú principal. Las preferencias visuales solo afectan a tu dispositivo.</p></div>`;
  } else if(tab==='Report'){
   body=`<div class="nx-pause-section"><h3>⚑ Reportar</h3><p>Elige a un jugador real conectado y describe el problema.</p><label for="nxReportTarget">Jugador</label><select id="nxReportTarget">${players.filter(p=>!p.self).map(p=>`<option value="${pauseEsc(p.name)}">${pauseEsc(p.name)}</option>`).join('')}</select><label for="nxReportReason">Motivo</label><textarea id="nxReportReason" rows="3" maxlength="400" placeholder="Describe lo que ocurrió..."></textarea><button class="nx-small-btn nx-submit-report" data-action="submit-report" ${players.length<2?'disabled':''}>Enviar reporte</button><p class="nx-muted">Los reportes se guardan en el servidor con el nombre del jugador, el motivo y la experiencia. No se registra tu IP en este sistema.</p></div>`;
  } else if(tab==='Help'){
   body=`<div class="nx-pause-section"><h3>ⓘ Ayuda</h3><div class="nx-help-grid"><div><b>Moverse</b><span>W A S D</span></div><div><b>Saltar</b><span>Espacio</span></div><div><b>Agacharse</b><span>Shift</span></div><div><b>Atacar</b><span>F / clic</span></div><div><b>Interactuar</b><span>E</span></div><div><b>Pausa</b><span>Esc</span></div></div><button class="nx-small-btn" data-action="instructions">Ver instrucciones del juego</button></div>`;
  } else if(tab==='Record'){
   body=`<div class="nx-pause-section"><h3>⏺ Grabación</h3><p>Graba el vídeo del canvas en WebM si el navegador lo permite. No incluye micrófono ni audio.</p><button class="nx-small-btn" data-action="record">${pauseRecording?'■ Detener grabación':'● Empezar a grabar'}</button></div>`;
  }
  host.innerHTML=body;
  if(tab==='Players')renderPlayerModelThumbnails(players);
  host.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>pauseMenuAction(b.dataset.action,b.dataset.user||'')));
  const changeSetting=(selector,key,after)=>{const el=host.querySelector(selector);if(!el)return;el.addEventListener('input',()=>{C[key]=Number(el.value);sv('nx_c',C);after?.(Number(el.value))});el.addEventListener('change',()=>{C[key]=Number(el.value);sv('nx_c',C);after?.(Number(el.value))})};
  changeSetting('#nxPauseSensitivity','sens',v=>{const label=host.querySelector('#nxSensValue');if(label)label.textContent=v.toFixed(2)+'×'});
  changeSetting('#nxPauseFov','fov',v=>{cam.fov=v;cam.updateProjectionMatrix();const label=host.querySelector('#nxFovValue');if(label)label.textContent=v+'°'});
  changeSetting('#nxPauseVolume','vol',v=>{const label=host.querySelector('#nxVolumeValue');if(label)label.textContent=v+'%'});
  changeSetting('#nxPauseTouchSize','touchsize',v=>{document.documentElement.style.setProperty('--btn-size',v+'px');document.documentElement.style.setProperty('--joy-size',(v*1.5)+'px');const label=host.querySelector('#nxTouchValue');if(label)label.textContent=v+'px'});
  const fpsSelect=host.querySelector('#nxPauseFps');if(fpsSelect)fpsSelect.addEventListener('change',()=>{C.fps=Number(fpsSelect.value);sv('nx_c',C)});
  const touchSelect=host.querySelector('#nxPauseTouch');if(touchSelect)touchSelect.addEventListener('change',()=>{C.touchmode=touchSelect.value;document.body.classList.toggle('controls-buttons',touchSelect.value==='buttons');sv('nx_c',C)});
  const friendPrivacy=host.querySelector('#nxPauseFriendRequests');if(friendPrivacy)friendPrivacy.addEventListener('change',()=>{C.friendRequests=friendPrivacy.value==='1';sv('nx_c',C);net({t:'friendPrivacyUpdate',allowed:C.friendRequests});say('Privacidad',C.friendRequests?'Ahora pueden enviarte solicitudes de amistad.':'Has desactivado las solicitudes de amistad.')});
  const fogSelect=host.querySelector('#nxPauseFogStyle');if(fogSelect)fogSelect.addEventListener('change',()=>{C.pauseFogStyle=fogSelect.value;sv('nx_c',C);const color=sc.background.clone();sc.fog=fogSelect.value==='none'?null:fogSelect.value==='mist'?new THREE.FogExp2(color,.0075):fogSelect.value==='dense'?new THREE.FogExp2(color,.016):new THREE.Fog(color,20,fogEnd)});
  const shadow=host.querySelector('#nxPauseShadows');if(shadow)shadow.addEventListener('change',()=>{C.shadowsEnabled=shadow.checked;sv('nx_c',C);GR.shadowMap.enabled=shadow.checked;dl.castShadow=shadow.checked;sc.traverse(o=>{if(o.isMesh){o.castShadow=shadow.checked;o.receiveShadow=shadow.checked}})});
  const showFps=host.querySelector('#nxPauseShowFps');if(showFps)showFps.addEventListener('change',()=>{C.showFps=showFps.checked;sv('nx_c',C);if(!showFps.checked)$('#fps').textContent=''});
  const grid=host.querySelector('#nxPauseGrid');if(grid)grid.addEventListener('change',()=>{C.gameGrid=grid.checked;gd.visible=grid.checked;sv('nx_c',C)});
  const cloudsToggle=host.querySelector('#nxPauseClouds');if(cloudsToggle)cloudsToggle.addEventListener('change',()=>{C.pauseClouds=cloudsToggle.checked;cl.forEach(q=>q.visible=cloudsToggle.checked);sv('nx_c',C)});
 };
 window.__nxPauseRender=renderPauseMenu;
 window.__nxPauseAction=(action,value='')=>{
  const target=String(value||''),remote=pausePlayers().find(p=>!p.self&&pauseNorm(p.name)===pauseNorm(target));
  if(action==='resume'){closePauseMenu();return}
  if(action==='leave'){closePauseMenu();quit();return}
  if(action==='reset'){closePauseMenu();die();return}
  if(action==='instructions'){closePauseMenu();showGameInstructions();return}
  if(action==='main-settings'){closePauseMenu();quit();setTimeout(()=>go('cfg'),100);return}
  if(action==='chat'){toggleGameChat();return}
  if(action==='description'){const current=String(U[me]?.desc||''),text=prompt('Descripción de perfil (hasta 750 caracteres):',current);if(text!==null){U[me].desc=text.slice(0,750);save();net({t:'profileUpdate',description:U[me].desc,av:A(),pet:{type:A().petT??A().pet??0,accessory:A().petA??0},equipment:A()});say('Perfil','Descripción guardada para este navegador.');renderPauseMenu('Players')}return}
  if(action==='invite'){const inviteUrl=location.origin+location.pathname,roomText=ACTIVE_ROOM?'Sala privada: '+ACTIVE_ROOM:'Experiencia: '+(g.n||g.id);if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(inviteUrl).then(()=>say('Invitación','Enlace copiado. Comparte también '+roomText+'.')).catch(()=>prompt('Copia este enlace ('+roomText+'):',inviteUrl));else prompt('Copia este enlace ('+roomText+'):',inviteUrl);return}
  if(action==='view'){
   if(!remote){say('Jugadores','Ese jugador ya no está conectado a esta sala.');renderPauseMenu('Players');return}
   const host=$('#nxPauseContent');if(host){const equip=profileEquipment(remote);host.innerHTML=`<div class="nx-pause-section"><button class="nx-small-btn" id="nxBackPlayers">← Volver a jugadores</button><div class="nx-profile-large"><canvas id="nxPauseProfileCanvas" class="nx-profile-preview" width="180" height="196" aria-label="Vista previa de avatar y mascota"></canvas><div class="nx-profile-copy"><h3>${pauseEsc(remote.name)}</h3><p>${remote.rank?'Rango: '+pauseEsc(remote.rank):'Jugador en esta experiencia'}</p><div class="nx-profile-desc">${pauseEsc(remote.description||'Este jugador aún no escribió una descripción.')}</div><b>Avatar y objetos equipados</b><div class="nx-profile-equipment">${equip.length?equip.map(x=>`<span>${pauseEsc(x)}</span>`).join(''):'<span>Aspecto predeterminado</span>'}</div><small>🐾 Mascota: ${pauseEsc((remote.av?.petT!=null?SH.petT[remote.av.petT]:remote.av?.pet?'Mascota':'Sin mascota')||'Mascota')} · accesorio: ${pauseEsc(SH.petA[remote.av?.petA|0]||'Nada')}</small><small>Posición: ${remote.x.toFixed(1)}, ${remote.y.toFixed(1)}, ${remote.z.toFixed(1)}</small><div class="nx-profile-equipment"><button class="nx-small-btn" id="nxProfileFriend">${pauseFriend(remote.name)?'Amigos ✓':'Agregar amigo'}</button><button class="nx-small-btn" id="nxProfileBlock">${pauseBlocked(remote.name)?'Desbloquear':'Bloquear'}</button><button class="nx-small-btn" id="nxProfileReport">Reportar</button></div></div></div></div>`;renderPausePreview(remote);host.querySelector('#nxBackPlayers')?.addEventListener('click',()=>renderPauseMenu('Players'));host.querySelector('#nxProfileFriend')?.addEventListener('click',()=>pauseMenuAction('friend',remote.name));host.querySelector('#nxProfileBlock')?.addEventListener('click',()=>pauseMenuAction(pauseBlocked(remote.name)?'unblock':'block',remote.name));host.querySelector('#nxProfileReport')?.addEventListener('click',()=>pauseMenuAction('report-user',remote.name))}return;
  }
  if(action==='friend'){
   if(!remote){say('Amistad','Ese jugador ya no está conectado.');renderPauseMenu('Players');return}if(pauseFriend(remote.name)){say('Amistad','Ya son amigos.');return}if(NX_SENT_FRIENDS.has(pauseNorm(remote.name))){say('Amistad','Ya enviaste una solicitud a '+remote.name+'.');return}net({t:'friendRequest',to:remote.name});return;
  }
  if(action==='block'||action==='unblock'){
   if(!remote){say('Bloqueo','Ese jugador ya no está conectado.');renderPauseMenu('Players');return}const shouldBlock=action==='block';U[me].bl=Array.isArray(U[me].bl)?U[me].bl:[];if(shouldBlock){if(!pauseBlocked(remote.name))U[me].bl.push(remote.name);U[me].fr=(U[me].fr||[]).filter(n=>pauseNorm(n)!==pauseNorm(remote.name));net({t:'blockPlayer',target:remote.name})}else{U[me].bl=U[me].bl.filter(n=>pauseNorm(n)!==pauseNorm(remote.name));net({t:'unblockPlayer',target:remote.name})}save();say('Bloqueo',shouldBlock?'Has bloqueado a '+remote.name+'.':'Has desbloqueado a '+remote.name+'.');renderPauseMenu('Players');return;
  }
  if(action==='report-user'){NX_PAUSE_TAB='Report';renderPauseMenu('Report');const sel=$('#nxReportTarget');if(sel)sel.value=target;return}
  if(action==='submit-report'){const sel=$('#nxReportTarget'),input=$('#nxReportReason'),who=sel?String(sel.value||''):'';const reason=input?String(input.value||'').trim():'';if(!who||reason.length<5){say('Reporte','Selecciona un jugador y escribe al menos 5 caracteres para explicar el motivo.');return}net({t:'reportPlayer',target:who,reason:reason.slice(0,400),world:g.id});say('Reporte','Enviando reporte al servidor…');return}
  if(action==='record'){
   if(pauseRecorder&&pauseRecording){pauseRecorder.stop();pauseRecording=false;renderPauseMenu('Record');return}const canvas=$('#cv');if(!canvas||!canvas.captureStream||!window.MediaRecorder){say('Grabación','Este navegador no permite grabar el canvas.');return}try{const stream=canvas.captureStream(30);pauseChunks=[];pauseRecorder=new MediaRecorder(stream,{mimeType:MediaRecorder.isTypeSupported('video/webm;codecs=vp9')?'video/webm;codecs=vp9':'video/webm'});pauseRecorder.ondataavailable=e=>{if(e.data&&e.data.size)pauseChunks.push(e.data)};pauseRecorder.onstop=()=>{const blob=new Blob(pauseChunks,{type:'video/webm'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='nixora-blox-'+Date.now()+'.webm';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);stream.getTracks().forEach(track=>track.stop());pauseRecorder=null;pauseChunks=[]};pauseRecorder.start();pauseRecording=true;renderPauseMenu('Record');say('Grabación','Grabación iniciada.')}catch(err){pauseRecording=false;say('Grabación','No se pudo iniciar la grabación en este navegador.')}return;
  }
 };

 try{ws=new WebSocket(cv('srv',SRV0));
  ws.onopen=()=>{say('Sistema','Conectado al servidor ✔');if(ACTIVE_ROOM)say('Sistema',(createRoom?'Sala privada creada':'Entrando a sala privada')+' · Código: '+ACTIVE_ROOM);net({t:'join',n:me,g:roomKey,world:g.id,room:ACTIVE_ROOM,owner:!!createRoom,av:A(),description:String(U[me]?.desc||''),pet:{type:A().petT??A().pet??0,accessory:A().petA??0},equipment:A(),rank:rk(me).n,pvp:!!g.pvp,sessionId:ACTIVE_SESSION_ID})};
  ws.onclose=()=>{MULTI_CONNECTED=false;WORLD_HOST=true;say('Sistema','Conexión multijugador interrumpida. Se reintentará al volver a entrar al juego. Si no conecta, revisa la sesión y Ajustes → Servidor.')};
  ws.onmessage=ev=>{let d;try{d=JSON.parse(ev.data)}catch(e){return}
   if(d.t==='socialSnapshot'){U[me].bl=Array.isArray(d.blocks)?d.blocks:[];U[me].fr=Array.isArray(d.friends)?d.friends:[];C.friendRequests=d.allowFriendRequests!==false;sv('nx_c',C);save();(Array.isArray(d.incoming)?d.incoming:[]).forEach(r=>showFriendRequestToast(r.from,r.profile||{}));if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players')}
   if(d.t==='friendRequestIncoming')showFriendRequestToast(d.from,d.profile||{});
   if(d.t==='friendRequestResult'){if(d.ok)NX_SENT_FRIENDS.add(pauseNorm(d.to));say('Amistad',(d.ok?'📩 ':'⚠ ')+(d.message||'No se pudo enviar la solicitud.'));if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players')}
   if(d.t==='friendResponseResult'){if(d.ok&&d.accepted){U[me].fr=Array.isArray(U[me].fr)?U[me].fr:[];if(d.from&&!pauseFriend(d.from))U[me].fr.push(d.from);save()}say('Amistad',d.message||(d.accepted?'Solicitud aceptada.':'Solicitud actualizada.'));}
   if(d.t==='blockResult'){if(d.ok!==false){U[me].bl=Array.isArray(U[me].bl)?U[me].bl:[];if(d.blocked&&!pauseBlocked(d.target))U[me].bl.push(d.target);if(!d.blocked)U[me].bl=U[me].bl.filter(n=>pauseNorm(n)!==pauseNorm(d.target));save()}if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players')}
   if(d.t==='blockedBy')say('Sistema',String(d.by||'Un jugador')+' te bloqueó. No podrás enviarle mensajes de chat.');
   if(d.t==='worldSnapshot'){
    MULTI_CONNECTED=true;WORLD_HOST=!!d.host;WORLD_SLOT=Math.max(0,Math.min(127,Number(d.slot)||0));NX_NET_STATE=Object.assign(Object.create(null),d.state||{});
    applyWorldSnapshot(d);notifyNetwork('ready',{host:WORLD_HOST,slot:WORLD_SLOT,world:g.id});
   }
   if(d.t==='worldHost'){WORLD_HOST=!!d.host;WORLD_SLOT=Math.max(0,Math.min(127,Number(d.slot)||0));notifyNetwork('ready',{host:WORLD_HOST,slot:WORLD_SLOT,world:g.id})}
   if(d.t==='gameState'){NX_NET_STATE[d.key]=d.value;(NX_STATE_HANDLERS[d.key]||[]).forEach(fn=>{try{fn(d.value,d.by)}catch(e){console.error(e)}})}
   if(d.t==='gameEvent'){(NX_NET_HANDLERS[d.eventType]||[]).forEach(fn=>{try{fn(d.payload,d.by,d.playerId)}catch(e){console.error(e)}})}
   if(d.t==='moderationNotice'&&String(me).toLowerCase()==='paracraftero'){say('Moderación','⚑ Reporte nuevo de '+String(d.reporter||'jugador')+' sobre '+String(d.target||'otro jugador')+' en '+String(d.world||'una experiencia')+'. Abre la consola de Render/PostgreSQL para revisar el motivo.')}
   if(d.t==='profileUpdated'){if(d.self)say('Perfil','Tu perfil se sincronizó con el servidor.');if(d.id&&rp[d.id]){const r=rp[d.id];if(d.description!==undefined)r.description=String(d.description||'');if(d.av)r.av=d.av;if(d.pet)r.pet=d.pet;if(d.equipment)r.equipment=d.equipment;if(d.rank)r.rank=d.rank;if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players')}}
   if(d.t==='reportResult'){say('Reporte',d.ok?'✅ Reporte guardado en el servidor.':('⚠ '+(d.message||'No se pudo enviar el reporte.')));if(!$('#pm').hidden&&NX_PAUSE_TAB==='Report'&&d.ok)renderPauseMenu('Report')}
   if(d.t==='friendPrivacyResult'){if(!d.ok){C.friendRequests=d.allowed!==false;sv('nx_c',C);say('Privacidad',d.message||'No se pudo guardar la preferencia.');if(!$('#pm').hidden&&NX_PAUSE_TAB==='Settings'&&window.__nxPauseRender)window.__nxPauseRender('Settings')}else{C.friendRequests=d.allowed!==false;sv('nx_c',C)}}
   if(d.t==='blockAdd')applyRemoteBlock(d.key,d.block);
   if(d.t==='blockRemove')applyRemoteBlockRemoval(d.key);
   if(d.t==='mobSnapshot')applyMobSnapshot(d.mobs||[]);
   if(d.t==='mobDamaged'){const m=mobs.find(q=>q.netId===d.mobId);if(m&&!m.dead){m.hp=Number(d.hp)||0;m.fl=.15;if(d.dead){m.dead=1;sc.remove(m.m);if(typeof kf==='function')try{kf(m)}catch(e){console.error(e)}}say('Combate',(d.dead?'💥 '+String(d.attacker||'Un jugador')+' derrotó a un enemigo.':'⚔️ '+String(d.attacker||'Un jugador')+' golpeó a un enemigo.')+' Vida: '+m.hp)}}
   if(d.t==='chat')say(d.n,d.m);
   if(d.t==='wallet'&&me&&String(d.username||'').toLowerCase()===String(me).toLowerCase()&&U[me]){U[me].nd=Math.max(0,Math.floor(Number(d.balance)||0));save();updWallet();if(APO&&APT==='Economía')loadServerWallets(false)}
   if(d.t=='st'){let r=rp[d.id];if(!r){r=rp[d.id]=mkE(d.av||AV0,d.x,d.z,d.n);r.sid=d.id;r.rank=d.rank||'';r.av=d.av||AV0;r.description=String(d.description||'');r.pet=d.pet||null;r.equipment=d.equipment||r.av;mkNameplate(r);r.p.set(d.x,d.y,d.z);r.petM=mkPet(r.av);r.petM.scale.setScalar(.62);sc.add(r.petM);updPl()}r.sid=d.id;r.tp.set(d.x,d.y,d.z);if(d.av)r.av=d.av;if(d.description!==undefined)r.description=String(d.description||'');if(d.pet)r.pet=d.pet;if(d.equipment)r.equipment=d.equipment;if(d.rank&&d.rank!==r.rank){r.rank=d.rank;mkNameplate(r)}r.ry=d.ry;r.sp=d.sp;r.g=d.g;r.cr=d.cr;if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players')}
   if(d.t==='duelWaiting')say('Arena','⌛ Esperando a otro jugador para comenzar el duelo 1v1…');
   if(d.t==='duelStart'){duelSide=Number(d.side)||1;SP[0]=duelSide===1?-7:7;SP[1]=.3;SP[2]=0;pl.p.set(SP[0],SP[1],SP[2]);pl.vy=0;yaw=duelSide===1?-Math.PI/2:Math.PI/2;say('Arena','⚔️ ¡Duelo iniciado contra '+String(d.opponent||'rival')+'! Primero en conseguir 3 derribos gana.')}
   if(d.t==='combatHit'){pl.hp=Math.max(0,Number(d.hp)||0);say('Combate','💥 '+String(d.attacker||'Tu rival')+' te golpeó. Vida: '+pl.hp);if(pl.hp<=0){pl.hp=100;pl.p.set(...SP);pl.vy=0}}
   if(d.t==='combatRespawn'){pl.hp=100;pl.p.set(...SP);pl.vy=0;duelKO=Math.max(duelKO,Number(d.kos)||0);say('Combate','💫 Has reaparecido.')}
   if(d.t==='combatKO'){duelKO=Number(d.kos)||duelKO+1;say('Combate','🏆 Derribaste a '+String(d.target||'tu rival')+' · Marcador '+duelKO+'/3');if(d.winner||duelKO>=3){say('Arena','🏆 ¡Has ganado el duelo!');hasSword=0;sw.visible=false;$('#ab').hidden=true;$('#play').classList.remove('combat-mode')}}
   if(d.t==='matchOver'){say('Arena','🏁 Fin del duelo: ganó '+String(d.winner||'tu rival')+'.');hasSword=0;sw.visible=false;$('#ab').hidden=true;$('#play').classList.remove('combat-mode')}
   if(d.t=='bye'&&rp[d.id]){sc.remove(rp[d.id].m);if(rp[d.id].petM)sc.remove(rp[d.id].petM);delete rp[d.id];updPl();if(!$('#pm').hidden&&NX_PAUSE_TAB==='Players'&&window.__nxPauseRender)window.__nxPauseRender('Players');if(g.pvp)say('Arena','Tu rival se desconectó. Esperando a otro jugador…')}}}catch(e){}
 const api={say:m=>say('Juego',m),player:pl,bot,scene:sc,THREE,onTick:f=>hooks.push(f),sound:snd,hud:s=>{$('#sc').textContent=s},coins:()=>coins,spendCoins:n=>{n=Math.max(0,Number(n)||0);if(coins<n)return false;coins-=n;return true},input:()=>({...k,KeyE:!!(k.KeyE||JI)}),consumeInteract:()=>{if(!JI)return false;JI=0;return true},interact:()=>{$('#play').classList.add('interaction-mode');const btn=$('#ib');btn.hidden=false;btn.onpointerdown=e=>{e.preventDefault();JI=1};btn.onpointerup=btn.onpointercancel=()=>{JI=0}},playerCount:()=>Object.keys(rp).length,duelKOs:()=>duelKO,sky:c=>{skyM.color.set(c);cmat.color.set(c);sc.background.copy(HZ).multiply(skyM.color);if(sc.fog)sc.fog.color.copy(sc.background)},light:v=>{amb.intensity=v},spawn:()=>SP,setSpawn:(x,y,z)=>{SP[0]=x;SP[1]=y;SP[2]=z},die,onDie:f=>{kd2=f},removeBlock:m=>{if(!m||!m.userData)return;const b=m.userData.b,key=b.__nxSharedId||blockIdentity(b);if(MULTI_CONNECTED)net({t:'blockRemove',key});applyRemoteBlockRemoval(key);const i=B.indexOf(b);if(i>=0)B.splice(i,1);const q=RL.indexOf(b);if(q>=0)RL.splice(q,1);for(let j=movingBlocks.length-1;j>=0;j--)if(movingBlocks[j].mesh===m)movingBlocks.splice(j,1);sc.remove(m)},addBlock:b=>{if(!Array.isArray(b))return null;const key='dyn:'+String(me).slice(0,16)+':'+(++NX_DYN_BLOCK_SEQ);b.__nxSharedId=key;if(b[8]!==0)B.push(b);if(b[12])RL.push(b);const mesh=addM(b);NX_DYN_BLOCKS.set(key,{b,mesh});if(MULTI_CONNECTED)net({t:'blockAdd',key,block:b.slice(0,13)});return mesh},sword:()=>{hasSword=1;sw.visible=true;$('#play').classList.add('combat-mode');$('#ab').hidden=false},onKill:f=>{kf=f},
  water:(x,y,z,w,h,d,follow=false)=>{const zone={x,y,z,w,h,d,follow};const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshPhongMaterial({color:'#00cfe8',transparent:true,opacity:.22,depthWrite:false,side:THREE.DoubleSide}));mesh.position.set(x,y,z);mesh.renderOrder=2;sc.add(mesh);zone.mesh=mesh;waterZones.push(zone);waterMeshes.push(mesh);return zone},
  ladder:(x,baseY,z,height=4)=>{height=Math.max(2,Math.min(12,Number(height)||4));const group=new THREE.Group(),wood=new THREE.MeshLambertMaterial({color:'#8d5524'}),rung=new THREE.MeshLambertMaterial({color:'#c9a66b'});for(const rx of [-.52,.52]){const rail=new THREE.Mesh(new THREE.BoxGeometry(.12,height,.12),wood);rail.position.set(rx,height/2,0);rail.castShadow=true;group.add(rail)}for(let yy=.3;yy<height;yy+=.48){const bar=new THREE.Mesh(new THREE.BoxGeometry(1.12,.09,.1),rung);bar.position.set(0,yy,0);group.add(bar)}group.position.set(x,baseY,z);sc.add(group);const zone={isLadder:true,x,baseY,z,height,faceZ:z+.85,group};ladderZones.push(zone);return zone},
  removeLadder:zone=>{if(!zone||!zone.isLadder)return;sc.remove(zone.group);const i=ladderZones.indexOf(zone);if(i>=0)ladderZones.splice(i,1)},
  moveBlock:(mesh,axis='x',range=2,speed=1)=>{if(!mesh||!mesh.userData||!mesh.userData.b)return;const b=mesh.userData.b;movingBlocks.push({mesh,b,axis,base:b[axis==='x'?0:axis==='y'?1:2],range:Math.max(.1,Math.min(10,range)),speed:Math.max(.1,Math.min(5,speed)),phase:Math.random()*Math.PI*2})},
  mob:(x,z,o={})=>{const zombie=!!o.zombie||/(zombi|zombie|infectad|apocalipsis)/i.test(String(g.n||'')+' '+String(g.h||''));return createNetMob(x,z,{...o,zombie,skinIndex:Number.isInteger(o.skinIndex)?o.skinIndex:((Math.abs((Number(x)*7+Number(z)*11)|0))%NX_ZOMBIE_SKINS.length)})}};
 api.network={connected:()=>MULTI_CONNECTED,host:()=>WORLD_HOST,slot:()=>WORLD_SLOT,username:()=>me,emit:(type,payload=null)=>{const eventType=String(type||'').slice(0,40);if(/^[A-Za-z0-9:_-]{1,40}$/.test(eventType))net({t:'gameEvent',eventType,payload})},on:(type,fn)=>{if(typeof fn!=='function')return()=>{};const key=String(type||'');(NX_NET_HANDLERS[key]||(NX_NET_HANDLERS[key]=[])).push(fn);return()=>{NX_NET_HANDLERS[key]=(NX_NET_HANDLERS[key]||[]).filter(f=>f!==fn)}},set:(key,value)=>{key=String(key||'').slice(0,64);if(!/^[A-Za-z0-9:_-]{1,64}$/.test(key))return;NX_NET_STATE[key]=value;net({t:'gameState',key,value})},get:key=>NX_NET_STATE[String(key||'')],onState:(key,fn)=>{if(typeof fn!=='function')return()=>{};key=String(key||'');(NX_STATE_HANDLERS[key]||(NX_STATE_HANDLERS[key]=[])).push(fn);return()=>{NX_STATE_HANDLERS[key]=(NX_STATE_HANDLERS[key]||[]).filter(f=>f!==fn)}},players:()=>Object.values(rp).map(r=>({name:r.name,rank:r.rank||'',x:r.p.x,y:r.p.y,z:r.p.z}))};
 function notifyNetwork(event,data){(NX_NET_HANDLERS[event]||[]).forEach(fn=>{try{fn(data)}catch(e){console.error(e)}})}
 function blockIdentity(b){const raw=b.slice(0,13).map(v=>typeof v==='number'?Math.round(v*100)/100:String(v??'')).join('|');let h=2166136261;for(let i=0;i<raw.length;i++){h^=raw.charCodeAt(i);h=Math.imul(h,16777619)}return 'base:'+(h>>>0).toString(36)}
 function makeMobHealthBar(e){
  if(!e||(!e.zombie&&!e.boss)||!e.m||!window.THREE||e.healthBar)return;
  const canvas=document.createElement('canvas');canvas.width=128;canvas.height=20;
  const texture=new THREE.CanvasTexture(canvas);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.LinearFilter;
  const material=new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false,depthWrite:false});
  const sprite=new THREE.Sprite(material);const boss=!!e.boss||(e.maxHp||0)>=250;sprite.position.set(0,boss?3.45:2.42,0);sprite.scale.set(boss?2.5:1.22,boss?.42:.2,1);sprite.renderOrder=20;e.m.add(sprite);
  e.healthBar={canvas,texture,sprite,ratio:-1};updateMobHealthBar(e);
 }
 function updateMobHealthBar(e){
  const h=e&&e.healthBar;if(!h)return;const ratio=Math.max(0,Math.min(1,(Number(e.hp)||0)/Math.max(1,Number(e.maxHp)||1)));
  if(Math.abs(ratio-h.ratio)<.015)return;h.ratio=ratio;const c=h.canvas.getContext('2d');c.clearRect(0,0,128,20);c.fillStyle='#150d16';c.fillRect(0,0,128,20);c.strokeStyle='#f8f4fc';c.lineWidth=2;c.strokeRect(1,1,126,18);c.fillStyle=ratio>.6?'#48e080':ratio>.3?'#ffd166':'#ef476f';c.fillRect(4,4,120*ratio,12);h.texture.needsUpdate=true;h.sprite.visible=ratio>0;
 }
 function createNetMob(x,z,o={},forcedId=''){
  const zz=Math.max(.25,Math.min(4,Number(o.size??.9)||.9)),maxHp=Math.max(1,Math.min(100000,Number(o.hp??30)||30)),zombie=!!o.zombie,boss=!!o.boss||maxHp>=180,species=['cat','bird','deer','rabbit','fox','cow'].includes(o.species)?o.species:'';
  if(!forcedId&&MULTI_CONNECTED){const same=mobs.find(q=>!q.dead&&Math.hypot(q.p.x-x,q.p.z-z)<.65&&Math.abs((q.maxHp||q.hp)-maxHp)<.01&&Math.abs(q.h-zz)<.05&&q.zombie===zombie);if(same)return same}
  const id=forcedId||('m'+(++MOB_SEQ)),mm=id.match(/^m(\d+)$/);if(mm)MOB_SEQ=Math.max(MOB_SEQ,Number(mm[1])||0);
  const seed=Math.floor(Math.abs(Number(x)*130+Number(z)*70+String(id).length*17)),skinIndex=zombie?Math.max(0,Math.floor(Number(o.skinIndex)||0)%NX_ZOMBIE_SKINS.length):-1,av=npcMinecraftAvatar(seed,o.color||'#c1121f',skinIndex),animal=!!species,m=animal?makeAnimalModel(species):mk(av);m.scale.setScalar(zz/.9);m.castShadow=true;
  const speed=Math.max(0,Math.min(10,Number(o.speed??2.5)||0));
  const e={m,p:new THREE.Vector3(x,o.y||0,z),tp:new THREE.Vector3(x,o.y||0,z),netId:id,hp:maxHp,maxHp,sp:0,navSpeed:speed,dm:o.dmg||8,cd:0,fl:0,pc:!!o.peaceful,h:zz,character:!animal,animal,species,pk:av,g:true,swimming:false,climbing:false,baseScale:zz/.9,color:o.color||'#c1121f',zombie,skinIndex:Math.max(0,skinIndex),healthBar:null,boss,species,spawnData:{y:o.y||0,hp:maxHp,size:zz,speed,dmg:o.dmg||8,peaceful:!!o.peaceful,color:o.color||'#c1121f',zombie,boss,species,skinIndex:Math.max(0,skinIndex)},networkSeen:false};
  sc.add(m);if(zombie||boss)makeMobHealthBar(e);if(MULTI_CONNECTED&&!WORLD_HOST)m.visible=false;mobs.push(e);return e;
 }
 function applyRemoteBlock(key,block){if(!Array.isArray(block)||!key)return;let existing=B.find(b=>b.__nxSharedId===key);if(existing)return;const b=block.slice(0,13);b.__nxSharedId=key;if(b[8]!==0)B.push(b);if(b[12])RL.push(b);const mesh=addM(b);NX_DYN_BLOCKS.set(key,{b,mesh})}
 function applyRemoteBlockRemoval(key){let b=B.find(q=>q.__nxSharedId===key)||B.find(q=>blockIdentity(q)===key);if(!b)return;b[8]=0;if(b.m)b.m.visible=false;const ri=RL.indexOf(b);if(ri>=0)RL.splice(ri,1);const bi=B.indexOf(b);if(bi>=0)B.splice(bi,1);NX_DYN_BLOCKS.delete(key)}
 function applyWorldSnapshot(d){for(const key of d.removed||[])applyRemoteBlockRemoval(key);for(const q of d.blocks||[])applyRemoteBlock(q.key,q.block);applyMobSnapshot(d.mobs||[])}
 function applyMobSnapshot(list){if(!Array.isArray(list))return;const seen=new Set();for(const q of list){if(!q||!q.id)continue;seen.add(q.id);let m=mobs.find(x=>x.netId===q.id);if(!m){m=createNetMob(q.x,q.z,{y:q.y,hp:q.maxHp,size:q.size,speed:q.speed,dmg:q.dmg,peaceful:q.peaceful,color:q.color,zombie:!!q.zombie,boss:!!q.boss,species:q.species||'',skinIndex:q.skinIndex},q.id)}m.networkSeen=true;m.m.visible=true;m.tp.set(Number(q.x)||0,Number(q.y)||0,Number(q.z)||0);m.hp=Number(q.hp)||0;m.maxHp=Number(q.maxHp)||m.maxHp;m.dead=!!q.dead;updateMobHealthBar(m);if(m.dead)sc.remove(m.m)}if(!WORLD_HOST){for(const m of mobs){if(!seen.has(m.netId)&&!m.dead){if(m.networkSeen){m.dead=1;sc.remove(m.m);if(typeof kf==='function')try{kf(m)}catch(e){console.error(e)}}else m.m.visible=false}}}}
 GAME={api,pl,mobs,cl,SP,sc,nds};try{new Function('game',g.sc||'')(api)}catch(e){say('Error en script',e.message)}
 if(g.id==='d2')api.water(8,.7,-8,7,1.4,7,false);
 if(g.id==='d18'&&!waterZones.length)api.water(0,3,0,400,8,400,true);
 // Procedural outer world: each map extends using matching terrain and themed, walkable locations.
 const infiniteCourse=['d1','d7'].includes(g.id)||!!g.endless;
 const hashRand=(a,b,i=0)=>{const n=Math.sin(a*127.1+b*311.7+i*74.7+String(g.id).split('').reduce((v,c)=>v+c.charCodeAt(0),0))*43758.5453;return n-Math.floor(n)};
 const groundColor=g.gr||'#4c956c';
 function makeProcBlock(block,list,visualOnly=false){if(block[8]!==0&&!visualOnly)B.push(block);if(block[12])RL.push(block);const mesh=addM(block);if(list)list.push(block);return mesh}
 function makeAnimalModel(species='cat'){
  const root=new THREE.Group(),mat=c=>new THREE.MeshLambertMaterial({color:c}),part=(geo,c,x,y,z)=>{const m=new THREE.Mesh(geo,mat(c));m.position.set(x,y,z);m.castShadow=true;root.add(m);return m};
  const box=(w,h,d,c,x,y,z)=>part(new THREE.BoxGeometry(w,h,d),c,x,y,z),sphere=(r,c,x,y,z)=>part(new THREE.SphereGeometry(r,8,6),c,x,y,z);
  const colors={cat:['#e0c097','#f1e2ca','#4b382a'],bird:['#f6bd60','#ffe8a1','#2d3142'],deer:['#ae7c4f','#e8c89e','#5c3d2e'],rabbit:['#eee5da','#ffffff','#6f5e76'],fox:['#d97732','#f4c095','#2a1c24'],cow:['#f4f1de','#554b4b','#f28c8c']}[species]||['#c9b69d','#f1e8dc','#3f3f46'];
  const [body,light,dark]=colors;
  if(species==='bird'){sphere(.32,body,0,.38,0);sphere(.2,light,0,.61,.02);box(.17,.1,.22,dark,0,.6,.17);box(.06,.24,.06,dark,-.14,.14,0);box(.06,.24,.06,dark,.14,.14,0);box(.3,.08,.2,light,-.3,.42,0);box(.3,.08,.2,light,.3,.42,0)}
  else{box(species==='cow'?.68:.55,species==='deer'?.55:.48,.8,body,0,.55,0);sphere(.25,body,0,.83,.32);sphere(.11,light,-.11,.88,.51);sphere(.11,light,.11,.88,.51);sphere(.035,dark,-.11,.89,.59);sphere(.035,dark,.11,.89,.59);for(const x of [-.2,.2])for(const z of [-.24,.24])box(.12,.35,.12,dark,x,.2,z);if(species==='cat'||species==='fox'||species==='rabbit'){box(.13,.28,.13,body,-.15,1.04,.29);box(.13,.28,.13,body,.15,1.04,.29)}if(species==='deer'){box(.05,.36,.05,dark,-.12,1.18,.27);box(.05,.36,.05,dark,.12,1.18,.27);box(.32,.05,.05,dark,-.2,1.31,.27);box(.32,.05,.05,dark,.2,1.31,.27)}if(species==='cow'){for(let i=0;i<5;i++)sphere(.08,dark,(i%3-.8)*.18,.55+Math.floor(i/3)*.13,.41)}if(species==='fox')box(.12,.12,.42,body,0,.63,-.52);if(species==='cat')box(.1,.08,.58,body,0,.62,-.56)}
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});return root;
 }
 let lastProcChunkBuild=0;
 function chunkBuild(cx,cz){const key=cx+','+cz;if(procChunks.has(key)||infiniteCourse&&Math.abs(cx)<=1&&Math.abs(cz)<=1)return;
  const x=cx*28,z=cz*28,far=Math.abs(cx)>1||Math.abs(cz)>1,blocks=[];
  if(lava){makeProcBlock([x,.12,z,12,.24,12,groundColor,1,1,'',0,0,0],blocks);makeProcBlock([x,.1,z-13.5,3,.2,15,groundColor,1,1,'',0,0,0],blocks);makeProcBlock([x+13.5,.1,z,15,.2,3,groundColor,1,1,'',0,0,0],blocks)}
  else makeProcBlock([x,-.25,z,28,.5,28,groundColor,1,1,'',0,0,0],blocks);
  // Keep hand-built spawns clear, but start a safe residential ring around survival/zombie maps.
  const starterTheme=(String(g.n||'')+' '+String(g.h||'')+' '+String(g.genre||'')).toLowerCase(),zombieWorld=/zombi|zombie|apocalipsis|infectad/.test(starterTheme),survivalWorld=/supervivencia|survival|zombi|zombie|apocalipsis/.test(starterTheme),habitatWorld=/ciudad|pueblo|villa|barrio|puerto|shopping|mall|supermercado|supermarket|roleplay|casas|casa|house|homes|residencial|viviendas|hospital|escuela|school|hotel|granja|farm|delivery|reparto|cocina|cooking|rescate|refugio/.test(starterTheme),nearSurvivalRing=survivalWorld&&Math.max(Math.abs(cx),Math.abs(cz))===1,nearHabitatRing=habitatWorld&&Math.max(Math.abs(cx),Math.abs(cz))===1&&(Math.abs(cx)+Math.abs(cz)>0);
  const themeText=starterTheme;
  // El tema del mapa se define al nivel de chunkBuild porque también lo usan los NPC y animales que aparecen al final.
  const type=/d6|d21|d24/.test(g.id)||/roleplay|delivery|cooking|tycoon|ciudad|pueblo|villa|barrio|puerto|shopping|mall|f[aá]brica|hotel|city|village|town|metro|supervivencia|survival|zombi|zombie|apocalipsis|residencial|viviendas|casas|house|homes|hospital|escuela|school/.test(themeText)?'city':/d11/.test(g.id)||/desierto|pir[aá]mide|arena|desert|pyramid/.test(themeText)?'desert':/d12/.test(g.id)||/hielo|nieve|glaciar|invierno|ice|snow|frozen|winter/.test(themeText)?'snow':/d18/.test(g.id)||/mar|oc[eé]ano|arrecife|submarin|pesca|costa|bah[ií]a|ocean|underwater|reef|fishing|coast/.test(themeText)?'sea':/d9|d15|d25/.test(g.id)||/espacial|luna|c[oó]smic|space|moon|orbit/.test(themeText)?'space':/d5|d14|d26|d27/.test(g.id)||/ruinas|templo|mazmorra|defensa|escape|dungeon|ruins|haunted|abandonad/.test(themeText)?'ruins':/d20|d2|d8|d10/.test(g.id)||/granja|farm|bosque|jungle|jungla|rescate|mascota|refugio|hide|rescue|forest|isla salvaje/.test(themeText)?'nature':'village';
  if(far||nearSurvivalRing||nearHabitatRing){
   const make=(xx,yy,zz,ww,hh,dd,col,solid=true,kind=0,flag=0)=>makeProcBlock([xx,yy,zz,ww,hh,dd,col,1,solid?1:0,'',kind,0,flag],blocks,!solid);
   const rnd=i=>hashRand(cx,cz,i),themeMarket=/shopping|mall|centro comercial/.test(themeText)?'mall':/supermercado|supermarket/.test(themeText)?'supermarket':'',areaMarket=type==='city'&&!themeMarket&&!infiniteCourse?(rnd(770)<.055?'mall':rnd(771)<.18?'supermarket':''):'',marketMode=themeMarket||areaMarket,count=type==='city'?(marketMode?1:4):3+(rnd(3)*2|0);
   if(type==='city'){
    // Las calles corren por los bordes de cada manzana; las parcelas quedan dentro, no sobre el asfalto.
    make(x+14,.025,z,4.2,.07,28,'#303842',false);make(x,.025,z+14,28,.07,4.2,'#303842',false);
    for(const side of [-1,1]){make(x+14+side*3.0,.09,z,1.35,.12,28,'#b9bec7',false);make(x,.09,z+14+side*3.0,28,.12,1.35,'#b9bec7',false)}
    for(let j=-2;j<=2;j++){make(x+14+j*0.72,.11,z+14,1.05,.02,.13,'#f8d66d',false);make(x+14,.11,z+14+j*.72,.13,.02,1.05,'#f8d66d',false)}
    if(rnd(333)>.24){for(const side of [-1,1]){const lx=x+14+side*4.1,lz=z+(rnd(334)>.5?6.5:21.5);make(lx,1.5,lz,.18,2.8,.18,'#525b64',true);make(lx,2.95,lz,.7,.22,.7,'#ffe8a3',false,2,6);make(lx,.25,lz+1,.8,.45,.8,'#795548',true);make(lx,.68,lz+1,.85,.55,.85,'#42784b',false,1)}}
   }
   if(type==='city'&&WORLD_HOST&&!marketMode){const green=[];addDetailedTree(green,x,z,Math.abs(cx+cz)%4,.42);addFlowerBed(green,x-1.7,z-1.7,Math.abs(cx)%3);addGardenShrub(green,x+1.55,z+1.5,Math.abs(cz)%4,.46);green.forEach(b=>makeProcBlock(b,blocks));make(x,.035,z,2.8,.07,.28,'#cfb997',false);make(x,.035,z, .28,.07,2.8,'#cfb997',false)}
   for(let i=0;i<count;i++){const slotX=[-5.5,5.5,-5.5,5.5][i%4],slotZ=[-5.5,-5.5,5.5,5.5][i%4],px=type==='city'?(marketMode?x:x+slotX):x+(rnd(i+8)-.5)*20,pz=type==='city'?(marketMode?z:z+slotZ):z+(rnd(i+28)-.5)*20;if(type!=='city'&&Math.hypot(px-pl.p.x,pz-pl.p.z)<7)continue;if(type==='city'&&nearSurvivalRing&&Math.hypot(px-(SP[0]||0),pz-(SP[2]||0))<11)continue;
    if(type==='city'){
     if(marketMode==='mall'){const p=[];addTallBuilding(p,px,pz,{floors:5+Math.floor(rnd(400)*11),wall:['#b8c7d8','#e6d2ba','#7f7aad'][Math.abs(cx+cz)%3],glass:'#75def4',trim:'#f8e8c8',roof:'#2b203d',width:16,depth:16,enterable:true,kind:'mall',stairSide:(rnd(401)>.5?1:-1)});p.forEach(b=>makeProcBlock(b,blocks));}
     else if(marketMode==='supermarket'){const p=[];addTallBuilding(p,px,pz,{floors:1+Math.floor(rnd(402)*2),wall:['#e6d2ba','#c9d9e8','#b5c99c'][Math.abs(cx+cz)%3],glass:'#70dff1',trim:'#fff0d1',roof:'#405363',width:16,depth:16,enterable:true,kind:'supermarket',stairSide:(rnd(403)>.5?1:-1)});p.forEach(b=>makeProcBlock(b,blocks));}
     else if(i===0){const floors=5+Math.floor(rnd(i+48)*11),w=8.5+rnd(i+68)*1.1,d=8.5+rnd(i+88)*1.1,c=['#343a40','#495057','#5a189a','#264653','#34345a','#8e9aa8'][Math.abs(cx+cz)%6],p=[];addTallBuilding(p,px,pz,{floors,wall:c,glass:'#6fe0f5',trim:'#dbeafe',roof:'#28313d',width:w,depth:d,enterable:true,kind:'residencial',stairSide:slotX>0?-1:1});p.forEach(b=>makeProcBlock(b,blocks));
     }else if(i===1){const p=[];addTallBuilding(p,px,pz,{floors:1+Math.floor(rnd(i+221)*2),wall:i%2?'#e1b07e':'#becbd4',glass:'#6ed4eb',trim:'#fff0d1',roof:'#8b4513',width:8.2,depth:8.2,enterable:true,kind:'tienda'});p.forEach(b=>makeProcBlock(b,blocks));
     }else if(i===2&&rnd(i+288)>.2){const prefab=[];addDetailedHouse(prefab,px,pz,['#c9a66b','#b08968','#d4a373','#adb5bd'][Math.abs(cx+cz+i)%4],['#8d5524','#a23b3b','#343a40'][Math.abs(cx*5+cz)%3]);prefab.forEach(b=>{const q=b.slice();q[0]=px+(q[0]-px)*.82;q[2]=pz+(q[2]-pz)*.82;q[1]=.08+(q[1]-.08)*.9;q[3]*=.82;q[4]*=.9;q[5]*=.82;makeProcBlock(q,blocks)})
     }else{const prefab=[];addDetailedHouse(prefab,px,pz,['#c9a66b','#b08968','#d4a373'][Math.abs(cx+cz+i)%3],i%2?'#8d5524':'#a23b3b');prefab.forEach(b=>{const q=b.slice();q[0]=px+(q[0]-px)*.82;q[2]=pz+(q[2]-pz)*.82;q[1]=.08+(q[1]-.08)*.9;q[3]*=.82;q[4]*=.9;q[5]*=.82;makeProcBlock(q,blocks)})}
    }
    else if(type==='nature'||type==='village'){if(i%4===0&&((cx*3+cz*5+i)%3!==0)){const prefab=[];addDetailedHouse(prefab,px,pz,['#c9a66b','#b08968','#d4a373'][Math.abs(cx+cz+i)%3],i%2?'#8d5524':'#a23b3b');prefab.forEach(b=>{const q=b.slice();q[0]=px+(q[0]-px)*.59;q[2]=pz+(q[2]-pz)*.59;q[1]=.08+(q[1]-.08)*.76;q[3]*=.59;q[4]*=.76;q[5]*=.59;makeProcBlock(q,blocks)})}
     else{const treeBits=[];addDetailedTree(treeBits,px,pz,Math.abs(i+cx+cz)%4,.62+rnd(i+109)*.18);treeBits.forEach(b=>makeProcBlock(b,blocks));if(i%2===0){const shrub=[];addGardenShrub(shrub,px+2.25,pz+1.4,(i+cx+cz)%4,.68);shrub.forEach(b=>makeProcBlock(b,blocks));const flowers=[];addFlowerBed(flowers,px-2,pz+1.25,i%3);flowers.forEach(b=>makeProcBlock(b,blocks))}if(i%5===1){for(let layer=0;layer<3;layer++){const hw=2.5-layer*.55,hy=.38+layer*.34;make(px+(layer-1)*.38,hy,pz+(layer%2-.5)*.32,hw,.68,hw,['#839b68','#748b5f','#647a52'][layer],false,1)}}}}
    else if(type==='desert'){make(px,.7,pz,1.7+rnd(i+111)*2,1.4,1.5+rnd(i+112)*2,i%2?'#c2a878':'#a98457');if(i%3===0){make(px+1,1.1,pz,.25,2.2,.25,'#6b8e23');make(px+1,2.3,pz,1.3,.15,1.3,'#718355')}}
    else if(type==='snow'){make(px,.65,pz,1.5,1.3,1.5,'#8d99ae');make(px,.65,pz,1.65,1.4,1.65,'#e9ecef',false)}
    else if(type==='sea'){const hh=1.5+rnd(i+122)*2;make(px,hh/2,pz,.5,hh,.5,['#00b4d8','#ff6b8a','#80ffdb'][i%3]);make(px,hh+.2,pz,.4,.4,.4,'#ffd166',false,2,6)}
    else if(type==='space'){make(px,.25,pz,3+rnd(i+133)*2,.5,3+rnd(i+134)*2,['#6a4c93','#4361ee','#4cc9f0'][i%3]);if(i%2===0)make(px,.8,pz,.45,.45,.45,'#ffd166',false,2,6)}
    else{make(px,.7,pz,1.6,1.4,1.6,type==='ruins'?'#5c5470':'#6c757d');if(i%2===0)make(px,1.7,pz,.6,.6,.6,'#ffd166',false,2,6)}
   }
  }
  if(type==='city'&&WORLD_HOST&&!infiniteCourse){
   const zombieTheme=/zombi|zombie|apocalipsis|infectad/.test(themeText),habitable=/ciudad|pueblo|villa|barrio|roleplay|casa|house|homes|casas|granja|farm|delivery|reparto|hospital|escuela|school|hotel|supermercado|shopping|mall|supervivencia|survival/.test(themeText);
   if(habitable&&!zombieTheme&&mobs.filter(m=>m.pc&&!m.animal&&!m.dead).length<14&&Math.hypot(x-pl.p.x,z-pl.p.z)>10){
    const npx=x+(rnd(811)>.5?11:-11),npz=z+(rnd(812)>.5?11:-11);
    createNetMob(npx,npz,{peaceful:true,speed:.45+rnd(813)*.65,size:.78+rnd(814)*.3,hp:100,dmg:0,color:['#b8c0ff','#e6ccb2','#b7e4c7','#f1c0e8'][Math.abs(cx+cz)%4]});
   }
   if(!zombieTheme&&mobs.filter(m=>m.animal&&!m.dead).length<12&&Math.hypot(x-pl.p.x,z-pl.p.z)>8){
    const wild=/bosque|forest|jungle|jungla|montaña|mountain|naturaleza|rescate|isla salvaje/.test(themeText),farm=/granja|farm/.test(themeText),species=wild?(['deer','rabbit','fox'][Math.abs(cx*3+cz)%3]):farm?(['cow','rabbit'][Math.abs(cx+cz)%2]):(['cat','bird'][Math.abs(cx*5+cz)%2]);
    createNetMob(x+(rnd(815)>.5?10.7:-10.7)+(rnd(816)-.5)*.8,z+(rnd(816)>.5?10.7:-10.7)+(rnd(817)-.5)*.8,{species,peaceful:true,speed:.35+rnd(818)*.55,size:.65+rnd(819)*.45,hp:30,dmg:0,color:'#91a581'});
   }
  }
  procChunks.set(key,blocks);
 }
 function ensureProceduralWorld(){
  if(infiniteCourse)return;
  const cx=Math.floor(pl.p.x/28),cz=Math.floor(pl.p.z/28),radius=1;
  // El plano base ya cubre el centro. Generar en orden de cercanía, una manzana por intervalo, evita varios segundos de pantalla negra al entrar.
  if(!procChunks.has('0,0'))procChunks.set('0,0',[]);
  const pending=[];
  for(let xx=cx-radius;xx<=cx+radius;xx++)for(let zz=cz-radius;zz<=cz+radius;zz++){const key=xx+','+zz;if(key!=='0,0'&&!procChunks.has(key))pending.push({x:xx,z:zz,d:(xx-cx)**2+(zz-cz)**2})}
  pending.sort((a,b)=>a.d-b.d);
  const stamp=performance.now();if(pending.length&&stamp-lastProcChunkBuild>115){const next=pending[0];chunkBuild(next.x,next.z);lastProcChunkBuild=stamp}
  for(const [key,blocks] of procChunks){const [xx,zz]=key.split(',').map(Number);if(Math.abs(xx-cx)>radius+1||Math.abs(zz-cz)>radius+1){blocks.forEach(b=>{const bi=B.indexOf(b);if(bi>=0)B.splice(bi,1);const ri=RL.indexOf(b);if(ri>=0)RL.splice(ri,1);if(b.m)sc.remove(b.m)});procChunks.delete(key)}}
 }
 if(S.msg)say('Juego',S.msg);
 const cmd=m=>{if(U[me].mute)return say('Sistema','Estás silenciado.');const s=m.toLowerCase();m=bad(m);say(me,m);net({t:'chat',m});setTimeout(()=>{let r;
  if(/s[ií]gue?|\bven\b/.test(s)){follow=1;r='¡Te sigo!'}
  else if(/quiet|\bpara\b|espera|qu[eé]date/.test(s)){follow=0;r='Me quedo aquí.'}
  else if(/salt/.test(s)){bj=1;r='¡Salto!'}
  else if(/hola|buenas/.test(s))r='¡Hola '+me+'! Soy Minion. Dime "sígueme", "quieto" o "salta".';
  else if(/baila/.test(s)){dn_=t+3;r='¡A bailar! 💃'}
  else if(/chiste/.test(s))r=['¿Qué hace un bloque en el gimnasio? ¡Cubo-curls!','¿Por qué el cubo no miente? Porque muestra todas sus caras.','Me caí del mapa… ¡y seguí jugando!'][Math.random()*3|0];
  else if(/nombre|llamas/.test(s))r='Soy Minion, tu mascota cubo.';
  else if(/hora/.test(s))r='Son las '+new Date().toLocaleTimeString();
  else if(/jugadores/.test(s))r='Hay '+(Object.keys(rp).length+1)+' jugador(es) en esta sala.';
  else if(/aqu[ií]|teletrans/.test(s)){bot.p.set(pl.p.x+1.5,pl.p.y,pl.p.z);r='¡Aquí estoy!'}
  else r='Prueba: sígueme, quieto, salta, baila, chiste, hora, jugadores, ven aquí, hola.';
  if(cv('11_3',true))say('Minion',r)},400)};window.__nixoraGameChatSend=cmd;
 $('#ci').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();sendGameChat()}};$('#ci').onfocus=()=>{CHAT_PINNED=true;if(CHAT_TIMER){clearTimeout(CHAT_TIMER);CHAT_TIMER=null}};$('#ci').onblur=()=>{if(CHAT_PINNED){CHAT_PINNED=false;if(CHAT_TIMER)clearTimeout(CHAT_TIMER);CHAT_TIMER=setTimeout(()=>{if(!CHAT_PINNED&&document.activeElement!==$('#ci'))setGameChat(false,false)},5000)}};
 const kd=e=>{if((e.key==='-'||e.code==='Minus'||e.code==='NumpadSubtract')&&!e.ctrlKey&&!e.altKey){e.preventDefault();toggleGameChat();if(!$('#chat').classList.contains('chat-hidden'))setTimeout(()=>$('#ci')?.focus(),0);return}if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.code=='Escape'){if(APO)return;const help=$('#gameInstructions');if(help&&!help.hidden){closeGameInstructions();return}if($('#pm').hidden)openPauseMenu('Players');else closePauseMenu();return}k[e.code]=1;if(e.code=='KeyF')hit();if(e.code=='Space'||e.code.startsWith('Arrow'))e.preventDefault()},
 ku=e=>k[e.code]=0,pu=e=>{if(touchPts.has(e.pointerId)){touchPts.delete(e.pointerId);pinchD=0;if(touchPts.size<2&&e.pointerId===cid)dr=0}if(e.pointerId==cid)dr=0},
 pm=e=>{if(touchPts.has(e.pointerId)){touchPts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touchPts.size>=2){const pts=[...touchPts.values()],d=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);if(pinchD)dist=Math.max(0,Math.min(ADM.zoom?200:25,dist-(d-pinchD)*.035));pinchD=d;dr=0;return}}if(document.pointerLockElement){const s=.003*cv('sens',1);yaw-=e.movementX*s;pitch=Math.max(-1.2,Math.min(1.3,pitch+e.movementY*s));return}if(dr&&e.pointerId==cid){const s=.005*cv('sens',1);yaw-=(e.clientX-px)*s;pitch=Math.max(-1.2,Math.min(1.3,pitch+(e.clientY-py)*s));px=e.clientX;py=e.clientY}},
 rs=()=>{GR.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};
 addEventListener('keydown',kd);addEventListener('keyup',ku);addEventListener('pointerup',pu);addEventListener('pointercancel',pu);addEventListener('pointermove',pm);addEventListener('resize',rs);document.onpointerlockchange=()=>{if(!document.pointerLockElement&&!$('#play').hidden&&!APO&&$('#pm').hidden)openPauseMenu('Players')};
 $('#cv').onpointerdown=e=>{if(e.pointerType==='touch'){touchPts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touchPts.size>=2){dr=0;const pts=[...touchPts.values()];pinchD=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);e.preventDefault();return}}dr=1;cid=e.pointerId;px=e.clientX;py=e.clientY};$('#cv').onclick=()=>{if(TOUCH)return;if(document.pointerLockElement)hit();else if($('#cv').requestPointerLock)$('#cv').requestPointerLock()};$('#cv').onwheel=e=>{dist=Math.max(0,Math.min(ADM.zoom?200:25,dist+e.deltaY*.01))};
 const frame=now=>{raf=requestAnimationFrame(frame);try{if(now-last<1000/cv('fps',60)-1)return;initialMeshesReady=buildInitialMeshBatch(coarseDevice?56:112);
  const dt=Math.min((now-last)/1000,.05);last=now;t+=dt;fc++;if(useDayCycle){const hour=((cycleStart+t*.03)%24+24)%24;let si=0;while(si<cycleStops.length-2&&hour>cycleStops[si+1][0])si++;const [h0,c0]=cycleStops[si],[h1,c1]=cycleStops[si+1],mix=Math.max(0,Math.min(1,(hour-h0)/(h1-h0)));cycleCol.copy(c0).lerp(c1,mix);sc.background.copy(cycleCol);skyM.color.copy(cycleCol);if(sc.fog)sc.fog.color.copy(cycleCol);const daylight=Math.max(0,Math.sin((hour-6)/12*Math.PI));amb.intensity=(.11+.68*daylight)*(S.bright??1);dl.intensity=.08+.82*daylight;}
  if(now-ft>1000){$('#fps').textContent=cv('showFps',cv('0_5',false))?fc+' FPS':'';fc=0;ft=now}
  GRAV=ADM.grav||S.grav||28;const f=(k.KeyW||k.ArrowUp||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyW?1:0)-(k.KeyS||k.ArrowDown||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyS?1:0)-JV.y,r=(k.KeyD||k.ArrowRight||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyD?1:0)-(k.KeyA||k.ArrowLeft||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyA?1:0)+JV.x,sy=Math.sin(yaw),cy=Math.cos(yaw);
  let dx=-f*sy+r*cy,dz=-f*cy-r*sy;const l=Math.hypot(dx,dz)||1,sp=f||r?((!ADM.fly&&(k.ShiftLeft||k.ShiftRight||JC))?2.5:(ADM.speed||WS)*(t<boost?1.8:1)):0;dx=dx/l*sp;dz=dz/l*sp;
  pl.cr=!!(!ADM.fly&&(k.ShiftLeft||k.ShiftRight||JC));if(sp)pl.ty=Math.atan2(dx,dz);
  waterZones.forEach(zone=>{if(zone.follow){zone.x=pl.p.x;zone.z=pl.p.z;zone.mesh.position.x=zone.x;zone.mesh.position.z=zone.z}});
  const activeWater=waterZones.find(zone=>Math.abs(pl.p.x-zone.x)<=zone.w/2&&Math.abs(pl.p.z-zone.z)<=zone.d/2&&pl.p.y<zone.y+zone.h/2&&pl.p.y>zone.y-zone.h/2-.25);
  const activeLadder=ladderZones.find(zone=>Math.abs(pl.p.x-zone.x)<.95&&pl.p.y>=zone.baseY-.65&&pl.p.y<=zone.baseY+zone.height+.4&&pl.p.z>=zone.z+.25&&pl.p.z<=zone.z+1.6);
  pl.swimming=!!activeWater;pl.climbing=!!(activeLadder&&!pl.swimming&&f>.12);
  const jumpPressed=!!(k.Space||JJ);if(jumpPressed&&!jumpLatch&&(pl.g||ADM.inf||pl.climbing)&&!ADM.fly&&!pl.swimming){pl.vy=ADM.jump||JP;beep(520)}jumpLatch=jumpPressed;
  if(ADM.fly)pl.vy=((k.Space||JJ)?9:0)-((k.ShiftLeft||k.ShiftRight||JC)?9:0)+GRAV*dt;
  if(ADM.freeze){dx=dz=0;pl.vx=pl.vz=0}
  const ac=Math.min(1,dt*(pl.g?12:4));pl.vx=(pl.vx||0)+(dx-(pl.vx||0))*ac;pl.vz=(pl.vz||0)+(dz-(pl.vz||0))*ac;pl.sp=Math.hypot(pl.vx,pl.vz)/6;
  if(pl.swimming&&!ADM.fly){pl.cr=false;const depth=activeWater,vertical=(jumpPressed?3.2:0)-((k.ShiftLeft||k.ShiftRight||JC)?2.6:0);pl.vy+=(vertical-pl.vy)*Math.min(1,dt*4);slide(pl,'x',pl.vx,dt);slide(pl,'z',pl.vz,dt);pl.p.y+=pl.vy*dt;pl.p.y=Math.max(depth.y-depth.h/2+.15,Math.min(depth.y+depth.h/2-1.1,pl.p.y));pl.g=false;pl.sp=Math.max(pl.sp,.35)}
  else if(pl.climbing&&!ADM.fly){pl.vx=pl.vz=0;pl.sp=.72;pl.g=false;pl.vy=0;pl.p.x+=(activeLadder.x-pl.p.x)*Math.min(1,dt*8);pl.p.z=activeLadder.faceZ;pl.p.y+=f*3.5*dt;pl.p.y=Math.min(activeLadder.baseY+activeLadder.height,pl.p.y);if(pl.p.y>=activeLadder.baseY+activeLadder.height-.02){pl.p.y=activeLadder.baseY+activeLadder.height;pl.p.z=activeLadder.z-1.5;pl.climbing=false}}
  else if(ADM.noclip){const sb=B;B=[];mv(pl,pl.vx,pl.vz,dt);B=sb}else mv(pl,pl.vx,pl.vz,dt);
  if(lava&&pl.p.y<=.02&&!ADM.god)die();stp-=dt;if(pl.g&&pl.sp>.3&&stp<=0){beep(90+Math.random()*40,.04);stp=.38/(pl.sp+.3)}
  movingBlocks.forEach(mb=>{const i=mb.axis==='x'?0:mb.axis==='y'?1:2,offset=Math.sin(t*mb.speed+mb.phase)*mb.range;mb.b[i]=mb.base+offset;mb.mesh.position[mb.axis]=mb.b[i]});
  if(initialMeshesReady)ensureProceduralWorld();
  if(bj===1)bj=t+.6;
  const tg=new THREE.Vector3(pl.p.x+Math.sin(yaw+.9)*2.2,pl.p.y+2.2+Math.sin(t*2)*.25+(t<bj?1.5:0),pl.p.z+Math.cos(yaw+.9)*2.2),od=bot.p.clone();
  if(follow)smartMoveAgent(bot,tg,dt,5.2,true);else navSetSpeed(bot,0);
  bot.sp=Math.min(1,od.distanceTo(bot.p)/Math.max(dt,.001)/6);bot.g=!bot.navClimb;bot.vy=0;
  if(follow&&bot.sp>.1)bot.ty=Math.atan2(pl.p.x-bot.p.x,pl.p.z-bot.p.z);
  if(t<dn_)bot.ty=(bot.ty||0)+dt*8;
  ndT-=dt;if(ndT<=0){ndT=4;if(Math.random()<.2)spawnND()}
  {const cc=new THREE.Vector3(pl.p.x,pl.p.y+.9,pl.p.z);for(let i=nds.length-1;i>=0;i--){const m=nds[i];m.rotation.y+=dt*3;m.rotation.x+=dt*2;
   if(m.position.distanceTo(cc)<1.5){sc.remove(m);nds.splice(i,1);addND(me,5);save();updWallet();say('Juego','💵 +5 Nixdollar');beep(1046,.12)}
   else if(performance.now()-m.userData.t0>40000){sc.remove(m);nds.splice(i,1)}}}
  RL.forEach(b=>{if(!hov(pl,b))return;const top=b[1]+b[4]/2,bot=b[1]-b[4]/2,on=Math.abs(pl.p.y-top)<.2,tch=pl.p.y<top+.2&&pl.p.y+1.8>bot,r=b[12];
   if(r==2&&on&&SP.cp!==b){SP.cp=b;SP[0]=b[0];SP[1]=top+.05;SP[2]=b[2];say('Juego','✔ Checkpoint guardado');beep(880,.1)}
   if(r==3&&tch&&!ADM.god)die();
   if(r==4&&on&&pl.vy<=0){pl.vy=19;beep(660,.12)}
   if(r==5&&on)boost=t+.6;
   if(r==6&&b.m&&b.m.visible&&tch){b.m.visible=false;b[8]=0;coins++;recordCoin();beep(988,.08)}
   if(r==8&&b.m&&b.m.visible&&tch){b.m.visible=false;b[8]=0;pl.hp=Math.min(100,pl.hp+50);beep(700,.12)}
   if(r==7&&on&&!won){won=1;say('Juego','🏆 ¡Meta alcanzada!');beep(784,.25)}});
  if(!hooks.length)$('#sc').textContent=(S.hud||'')+(RL.length?' 🪙 '+coins:'');
  if(JA){JA=0;hit()}
  if(atk>0){atk-=dt;pl.ax=-1.9*Math.sin((1-Math.max(atk,0)/.35)*Math.PI)}else pl.ax=hasSword?-.7:0;
  mobs.forEach(m=>{if(m.dead)return;m.fl-=dt;updateMobHealthBar(m);const bob=Math.abs(Math.sin(t*6))*.035;
   if(MULTI_CONNECTED&&!WORLD_HOST){if(!m.networkSeen){m.m.visible=false;return}m.p.lerp(m.tp,Math.min(1,dt*9));const md=pl.p.clone().sub(m.p);md.y=0;const ml=md.length();m.cd-=dt;if(!m.pc&&ml<1.5+m.h/2&&m.cd<=0){m.cd=1;pl.hp-=m.dm}m.sp=0;m.g=!m.climbing;m.m.position.set(m.p.x,m.p.y+bob,m.p.z);m.m.scale.setScalar((m.fl>0?1.08:1)*m.baseScale);if(m.animal){if(m.tp.x!==m.p.x||m.tp.z!==m.p.z)m.m.rotation.y=Math.atan2(m.tp.x-m.p.x,m.tp.z-m.p.z)}else anim(m,t,dt);return}
   if(m.pc){if(t>(m.tt||0)){m.tt=t+2+Math.random()*3;m.a=Math.random()*6.28;m.wanderTarget={x:m.p.x+Math.sin(m.a)*(3+Math.random()*4),z:m.p.z+Math.cos(m.a)*(3+Math.random()*4)}}if(!m.wanderTarget)m.wanderTarget={x:m.p.x+Math.sin(m.a||0)*3,z:m.p.z+Math.cos(m.a||0)*3};smartMoveAgent(m,m.wanderTarget,dt,m.navSpeed??.7,true);m.ty=m.ty??m.a;m.g=!m.navClimb;m.swimming=false;m.climbing=!!m.navClimb;m.m.position.set(m.p.x,m.p.y+bob,m.p.z);if(m.animal){if(m.navSpeed>.15)m.m.rotation.y=Math.atan2(m.navMoveX||Math.sin(m.a||0),m.navMoveZ||Math.cos(m.a||0));}else anim(m,t,dt);return}
   const targets=[{name:me,p:pl.p},...Object.values(rp).filter(r=>r&&r.p).map(r=>({name:r.name,p:r.p}))];let target=targets[0],targetDist=Infinity;for(const candidate of targets){const distance=m.p.distanceTo(candidate.p);if(distance<targetDist){targetDist=distance;target=candidate}}const d=target.p.clone().sub(m.p);d.y=0;const l=d.length();if(l<70)smartMoveAgent(m,target.p,dt,m.navSpeed??2.5,true);else navSetSpeed(m,0);
   m.cd-=dt;if(target.name===me&&l<1.5+m.h/2&&m.navLineClear&&m.cd<=0){m.cd=1;pl.hp-=m.dm;beep(160,.12)}m.g=!m.navClimb;m.swimming=false;m.climbing=!!m.navClimb;m.m.position.set(m.p.x,m.p.y+bob,m.p.z);m.m.scale.setScalar((m.fl>0?1.08:1)*m.baseScale);anim(m,t,dt)});for(let mi=mobs.length-1;mi>=0;mi--)if(mobs[mi].dead)mobs.splice(mi,1);
  pl.hp=ADM.god?100:Math.min(100,pl.hp+2*dt);if(pl.hp<=0){pl.hp=100;pl.p.set(0,1,0);pl.vy=0;say('Juego','Has caído. ¡Reapareces!')}
  $('#hp').textContent=mobs.length||hasSword?'❤ '+Math.ceil(pl.hp):'';
  hooks.forEach(h=>h(dt,t));
  Object.values(rp).forEach(r=>{r.p.lerp(r.tp,.25);r.ty=r.ry||0;if(r.petM){r.petM.position.set(r.p.x+.82,r.p.y+.02,r.p.z+.32);r.petM.rotation.y=t*.45}});[pl,bot,...Object.values(rp)].forEach(e=>{e.m.position.copy(e.p);anim(e,t,dt)});pl.m.scale.x=pl.m.scale.z=ADM.size||1;pl.m.scale.y*=ADM.size||1;bot.m.position.y+=Math.abs(Math.sin(t*8))*.12*bot.sp;
  if(now-ns>66){ns=now;net({t:'st',x:pl.p.x,y:pl.p.y,z:pl.p.z,ry:pl.m.rotation.y,sp:pl.sp,g:pl.g?1:0,cr:pl.cr?1:0})}
  if(MULTI_CONNECTED&&WORLD_HOST&&now-LAST_MOB_SYNC>125){LAST_MOB_SYNC=now;net({t:'mobSnapshot',mobs:mobs.filter(m=>!m.dead).slice(0,100).map(m=>({id:m.netId,x:m.p.x,y:m.p.y,z:m.p.z,hp:m.hp,maxHp:m.maxHp,sp:m.sp,size:m.h,speed:m.navSpeed,dmg:m.dm,peaceful:!!m.pc,color:m.color,zombie:!!m.zombie,boss:!!m.boss,species:m.species||'',skinIndex:m.skinIndex||0}))})}
  if(k.KeyI)dist=Math.min(ADM.zoom?200:25,dist+dt*8);if(k.KeyO)dist=Math.max(0,dist-dt*8);
  const c=Math.cos(pitch),fp=dist<1,hy=pl.p.y+(pl.so||0)+1.6*pl.m.scale.y;pl.m.visible=!fp&&!ADM.invis;
  if(fp){cam.position.set(pl.p.x,hy,pl.p.z);cam.lookAt(pl.p.x-Math.sin(yaw)*c,hy-Math.sin(pitch),pl.p.z-Math.cos(yaw)*c)}
  else{cam.position.set(pl.p.x+Math.sin(yaw)*c*dist,Math.max(.3,hy-.1+Math.sin(pitch)*dist),pl.p.z+Math.cos(yaw)*c*dist);cam.lookAt(pl.p.x,hy-.2,pl.p.z)}
  dl.position.set(pl.p.x+15,pl.p.y+30,pl.p.z+10);dl.target.position.copy(pl.p);skyD.position.copy(pl.p);gm.position.x=pl.p.x;gm.position.z=pl.p.z;gd.position.x=Math.round(pl.p.x/2)*2;gd.position.z=Math.round(pl.p.z/2)*2;cl.forEach(c=>{c.position.x+=dt*1.5;if(c.position.x>pl.p.x+220)c.position.x-=440;if(c.position.x<pl.p.x-220)c.position.x+=440;if(c.position.z>pl.p.z+220)c.position.z-=440;if(c.position.z<pl.p.z-220)c.position.z+=440});GR.render(sc,cam);if(initialMeshesReady&&$('#gameLoading'))$('#gameLoading').hidden=true}catch(err){cancelAnimationFrame(raf);console.error('Error durante la partida de Nixora Blox:',err);showGameRuntimeError(err)}};
 raf=requestAnimationFrame(frame);
 quit=()=>{GAME=null;ACTIVE_WORLD='';ACTIVE_ROOM='';MULTI_CONNECTED=false;WORLD_HOST=true;window.__nixoraGameChatSend=null;window.__nxPauseRender=null;window.__nxPauseAction=null;closePauseMenu();if(pauseRecorder&&pauseRecording){try{pauseRecorder.stop()}catch(e){}pauseRecording=false}setGameChat(false,false);document.onpointerlockchange=null;document.exitPointerLock&&document.exitPointerLock();$('#sc').textContent='';$('#hp').textContent='';try{ws&&ws.close()}catch(e){}cancelAnimationFrame(raf);removeEventListener('keydown',kd);removeEventListener('keyup',ku);removeEventListener('pointerup',pu);removeEventListener('pointercancel',pu);removeEventListener('pointermove',pm);removeEventListener('resize',rs);
  $('#play').hidden=true;$('#app').hidden=false;if($('#gameLoading'))$('#gameLoading').hidden=true;if($('#gameRuntimeError'))$('#gameRuntimeError').hidden=true;$('#ab').hidden=true;$('#ib').hidden=true;$('#play').classList.remove('combat-mode','interaction-mode');if(window.__nxBgStart)window.__nxBgStart();go(cur)};window.nixoraGameRecovery=quit;
 }catch(err){console.error('No se pudo iniciar el juego:',err);if($('#gameLoading'))$('#gameLoading').hidden=true;if($('#gameRuntimeError'))$('#gameRuntimeError').hidden=true;$('#play').hidden=true;$('#app').hidden=false;alert('No se pudo cargar este juego. El menú se restauró para que no te quedes en una pantalla negra. Detalle: '+String(err&&err.message||err).slice(0,180));return}
}

function addTallBuilding(a,x,z,opts={}){
 const kind=opts.kind||'residencial',commercial=kind==='supermarket'||kind==='mall'||kind==='shopping',smallCommercial=kind==='supermarket'||kind==='tienda',floors=smallCommercial?Math.max(1,Math.min(3,Math.round(Number(opts.floors)||1))):Math.max(5,Math.min(15,Math.round(Number(opts.floors)||8))),wall=opts.wall||'#8e9aa8',trim=opts.trim||'#d8e2ed',glass=opts.glass||'#5cc8e8',floorCol=opts.floor||'#777f8c',roof=opts.roof||'#343a46',w=opts.width||(kind==='mall'?20:kind==='supermarket'?20:12),d=opts.depth||(kind==='mall'?20:kind==='supermarket'?19:12),enterable=opts.enterable!==false;
 const q=(dx,y,dz,ww,hh,dd,c,solid=1,opacity=1,shape=0,name='')=>box(a,x+dx,y,z+dz,ww,hh,dd,c,opacity,solid,'',shape,0,0,0,name);
 const halfW=w/2,halfD=d/2,fh=3.05,wallH=2.72,thin=.24,winW=Math.max(1.1,w*.15),winH=1.35;
 q(0,.08,0,w+.65,.16,d+.65,floorCol,1,1,0,'Cimientos del edificio');
 for(let f=0;f<floors;f++){
  const base=.18+f*fh,cy=base+wallH/2;
  if(f>0&&enterable){
   // Floor plates leave a clear stair shaft at the rear-left of every floor.
   q(-w*.4375,base,-.05,w*.125,.18,d-.4,floorCol,1,1,0,'Suelo planta');
   q(w*.154,base,-.05,w*.692,.18,d-.4,floorCol,1,1,0,'Suelo planta');
   q(-w*.28,base,halfD*.72,w*.2,.18,d*.27,floorCol,1,1,0,'Descanso escalera');
   q(-w*.28,base,-halfD*.72,w*.2,.18,d*.27,floorCol,1,1,0,'Descanso escalera');
  }else if(f===0){q(0,.18,0,w,.18,d,floorCol,1,1,0,'Suelo planta baja')}
  // Front/back facades: real gaps for windows. Ground-floor front has an open entrance.
  for(const face of [-1,1]){
   const zz=face*(halfD-.12);
   q(-halfW+.9,cy,zz,1.8,wallH,thin,wall,1,1,0,'Fachada lateral');
   q(halfW-.9,cy,zz,1.8,wallH,thin,wall,1,1,0,'Fachada lateral');
   if(f===0&&face===1){const gap=commercial?Math.min(5.2,w*.42):2.35,sideLen=Math.max(.7,(w-gap)/2);q(-gap/2-sideLen/2,cy,zz,sideLen,wallH,thin,wall,1,1,0,'Muro entrada izquierdo');q(gap/2+sideLen/2,cy,zz,sideLen,wallH,thin,wall,1,1,0,'Muro entrada derecho');q(0,base+wallH-.2,zz,gap,.38,thin,wall,1,1,0,'Dintel de entrada')}
   else q(0,cy,zz,w*.6-winW,wallH,thin,wall,1,1,0,'Fachada central');
   for(const wx of [-w*.29,w*.29]){
    q(wx,base+.38,zz,winW,.4,thin,wall,1,1,0,'Antepecho ventana');q(wx,base+wallH-.38,zz,winW,.45,thin,wall,1,1,0,'Dintel ventana');q(wx,base+1.42,zz-face*.05,winW-.16,winH,.055,glass,0,.48,0,'Ventana');q(wx,base+1.42+winH/2+.09,zz-face*.09,winW,.09,.12,trim,0,1,0,'Marco ventana');
   }
  }
  // Side walls with two actual window openings on each floor.
  for(const side of [-1,1]){
   const xx=side*(halfW-.12),zGap=d*.3,zWin=Math.max(.9,d*.14),edgeLen=Math.max(.6,halfD-zGap-zWin/2);
   q(xx,cy,-halfD+edgeLen/2,thin,wallH,edgeLen,wall,1,1,0,'Muro lateral');q(xx,cy,halfD-edgeLen/2,thin,wallH,edgeLen,wall,1,1,0,'Muro lateral');q(xx,cy,0,thin,wallH,Math.max(.5,2*(zGap-zWin/2)),wall,1,1,0,'Muro lateral central');
   for(const wz of [-zGap,zGap]){q(xx-side*.05,base+1.4,wz,.055,winH,zWin,glass,0,.46,0,'Ventana lateral');q(xx,base+.38,wz,thin,.4,zWin,wall,1,1,0,'Antepecho lateral');q(xx,base+wallH-.38,wz,thin,.45,zWin,wall,1,1,0,'Dintel lateral')}
  }
  // Lights, balcony rails and floor signs add detail without expensive geometry.
  q(0,base+.18,halfD+.22,w*.4,.12,.42,trim,0,1,0,'Balcón decorativo');q(-w*.31,base+2.3,halfD+.22,.18,.55,.18,trim,0,1,0,'Baranda balcón');q(w*.31,base+2.3,halfD+.22,.18,.55,.18,trim,0,1,0,'Baranda balcón');
  if(f===0){q(-.82,base+1.12,halfD+.03,.12,2.05,.18,trim,0,1,0,'Marco puerta');q(.82,base+1.12,halfD+.03,.12,2.05,.18,trim,0,1,0,'Marco puerta');q(0,base+2.13,halfD+.03,1.75,.15,.18,trim,0,1,0,'Marco puerta superior');q(-.66,base+1.06,halfD-.12,.68,1.9,.08,opts.door||'#633d2b',0,.92,0,'Hoja puerta abierta');q(-.38,base+1.12,halfD+.03,.05,.08,.05,'#ffd166',0,1,0,'Manija puerta')}
  if(['shopping','mall','supermarket','tienda'].includes(kind)){
   q(0,base+2.7,halfD+.28,Math.min(commercial?9:6,w*.6),.5,.22,f===0?'#ffba08':trim,0,1,0,'Rótulo comercial');q(0,base+2.7,halfD+.42,Math.min(commercial?7:4,w*.4),.2,.06,'#fff4d6',0,1,0,'Texto rótulo');
  }
  if(enterable){
   // Continuous low steps with alternating directions; stairs occupy the reserved shaft.
   for(let j=0;j<11;j++){const yy=base+(j+.6)*(fh/11),zz=j<6?halfD-1.2-j*.78:-halfD+1.2+(j-6)*.78,xx=j<6?-w*.29:-w*.22;q(xx,yy,zz,1.55,.28,.78,j%2?'#98734d':'#b48b60',1,1,0,'Peldaño escalera')}
   q(-w*.25,base+fh-.16,0,2.0,.28,1.4,trim,1,1,0,'Descanso superior');
  }
  // Escalera exterior de emergencia: tramo lateral por planta, visible y transitable.
  if(enterable&&f<floors-1){const steps=12,stepDepth=Math.max(.24,(d-2.5)/steps),sign=f%2===0?1:-1,side=opts.stairSide===-1?-1:1,sideX=side*(halfW+.43),stairW=.9;for(let j=0;j<steps;j++){const zz=sign*(halfD-1.25-j*stepDepth),yy=base+(j+1)*fh/steps;q(sideX,yy,zz,stairW,.24,stepDepth+.05,j%2?'#98734d':'#b48b60',1,1,0,'Escalón exterior');}q(side*(halfW+.88),base+fh*.53,0,.07,.15,d*.9,trim,0,1,0,'Baranda escalera exterior');}
  // Pasillos y estanterías en supermercados; galería comercial con locales en el mall.
  if(f===0&&kind==='supermarket'){for(const xx of [-w*.28,-w*.08,w*.12,w*.32]){q(xx,.88,-d*.08,.72,1.55,3.9,'#a87943',1,1,0,'Estante supermercado');q(xx,.88,-d*.34,.72,1.55,2.5,'#7d5a50',1,1,0,'Estante supermercado');for(let k=0;k<4;k++)q(xx,.28+k*.36,-d*.08,.76,.05,3.95,['#fb8500','#8ac926','#ffd166','#90e0ef'][k],0,1,0,'Borde estante');}q(w*.27,.48,halfD*.22,1.2,.9,.65,'#4f5d75',1,1,0,'Caja registradora');q(w*.27,.96,halfD*.22,.85,.08,.4,'#80ed99',0,1,0,'Pantalla caja');}
  if(f===0&&kind==='mall'){for(const side of [-1,1])for(let k=0;k<3;k++){const xx=side*(w*.28),zz=(k-1)*4.2;q(xx,1.4,zz,4.1,2.5,.24,['#d9ed92','#a9def9','#ffcad4'][k],1,1,0,'Local interior shopping');q(xx,1.8,zz+.16,2.5,.9,.06,'#77cde6',0,.4,0,'Vitrina local');}}
 }
 q(0,.2+floors*fh,0,w+.4,.32,d+.4,roof,1,1,0,'Azotea');
 // Rooftop machinery, tanks and aerials provide a finished silhouette.
 q(-w*.22,.42+floors*fh,0,w*.22,.42,d*.2,trim,1,1,0,'Sala de máquinas');q(w*.23,.75+floors*fh,0,.65,1.1,.65,'#9aa6b2',1,1,0,'Depósito azotea');q(w*.23,1.45+floors*fh,0,.12,.45,.12,trim,1,1,0,'Antena');
 if(['shopping','mall','supermarket','tienda'].includes(kind)){
  q(0,.42,halfD+.55,w+.4,.65,1.0,'#f4a261',1,1,0,'Marquesina comercial');for(const sx of [-1,1])q(sx*(w*.34),.86,halfD+.58,1.2,1.1,.08,'#48cae4',0,.42,0,'Escaparate tienda');
 }
}
function addDecorativeBuilding(a,x,z,opts={}){
 const floors=Math.max(1,Math.min(18,Math.round(opts.floors||6))),h=floors*3.05,w=opts.width||11,d=opts.depth||10,wall=opts.wall||'#657080',glass=opts.glass||'#64d2e8',roof=opts.roof||'#303946';
 // One solid shell intentionally prevents entry; external details are non-colliding.
 box(a,x,h/2+.16,z,w,h,d,wall,1,1,'',0,0,0,0,'Edificio decorativo cerrado');
 for(let f=0;f<floors;f++){
  const y=.7+f*3.05;for(const side of [-1,1]){box(a,x+side*(w*.29),y,z+d/2+.045,w*.13,1.45,.06,glass,.5,0,'',0,0,0,0,'Ventanal exterior');box(a,x+side*(w*.29),y,z-d/2-.045,w*.13,1.45,.06,glass,.5,0,'',0,0,0,0,'Ventanal exterior')}
  box(a,x,y+1.35,z+d/2+.09,w+.08,.16,.16,opts.trim||'#d7dce4',1,0,'',0,0,0,0,'Moldura piso');
 }
 box(a,x,h+.38,z,w+.5,.34,d+.5,roof,1,1,'',0,0,0,0,'Azotea cerrada');
 if(opts.kind==='shop'||opts.kind==='mall'){box(a,x,.58,z+d/2+.16,w*.65,.9,.12,'#f3a712',1,0,'',0,0,0,0,'Rótulo');box(a,x,.55,z+d/2+.24,w*.5,.4,.05,'#e8f7ff',.15,0,'',0,0,0,0,'Cristal escaparate');}
}
function addGardenShrub(a,x,z,variant=0,scale=1){const s=Math.max(.45,Math.min(2,scale)),greens=['#356b45','#4f772d','#6a994e','#2d6a4f'],c=greens[Math.abs(variant|0)%greens.length];box(a,x,.32*s,z,.68*s,.64*s,.68*s,'#70543b',1,1,'',0,0,0,0,'Tierra planta');box(a,x,.73*s,z,.95*s,.7*s,.95*s,c,1,0,'',1,0,0,0,'Arbusto');box(a,x-.3*s,.86*s,z+.07*s,.52*s,.46*s,.52*s,greens[(variant+1)%greens.length],1,0,'',1,0,0,0,'Follaje arbusto');box(a,x+.3*s,.82*s,z-.08*s,.5*s,.5*s,.5*s,greens[(variant+2)%greens.length],1,0,'',1,0,0,0,'Follaje arbusto')}
function addFlowerBed(a,x,z,variant=0){const colors=['#ff70a6','#ffd166','#9b5de5','#00bbf9'];box(a,x,.08,z,2.2,.16,1.1,'#795548',1,1,'',0,0,0,0,'Macetero');for(let i=0;i<5;i++){const dx=(i-2)*.38;box(a,x+dx,.42,z,.1,.62,.1,'#2d6a4f',1,1,'',0,0,0,0,'Tallo');box(a,x+dx,.74,z,.34,.28,.34,colors[(i+variant)%colors.length],1,0,'',1,0,0,0,'Flor');}}
function addThreeStoryHouse(a,wall='#c9a66b',roof='#8d5524'){
 addDetailedHouse(a,0,0,wall,roof);
 // The old roof becomes the walkable floor of the third storey.
 for(let i=a.length-1;i>=0;i--){const n=String(a[i][14]||'').toLowerCase();if(n.includes('techo')||n.includes('remate techo'))a.splice(i,1)}
 const q=(x,y,z,w,h,d,c,solid=1,opacity=1,shape=0,name='')=>box(a,x,y,z,w,h,d,c,opacity,solid,'',shape,0,0,0,name),front=4.08,base=6.28;
 q(1.1,base,0,6.3,.18,8.05,'#9b8065',1,1,0,'Suelo tercer piso');q(-4.02,base,0,.48,.18,8.05,'#9b8065',1,1,0,'Suelo tercer piso');q(-2.88,base,-3.25,1.8,.18,1.5,'#9b8065',1,1,0,'Descanso tercer piso');q(-2.88,base,3.05,1.8,.18,1.65,'#9b8065',1,1,0,'Descanso tercer piso');
 q(0,7.72,-4.05,8.7,2.8,.25,wall,1,1,0,'Pared trasera tercer piso');for(const side of [-1,1])q(side*4.28,7.72,0,.25,2.8,7.85,wall,1,1,0,'Pared lateral tercer piso');
 // Four wall segments form two genuine windows and a doorway without a door leaf blocking movement.
 for(const side of [-1,1]){q(side*3.82,7.72,front,1.16,2.8,.25,wall,1,1,0,'Pilar fachada tercer piso');q(side*1.54,7.72,front,1.06,2.8,.25,wall,1,1,0,'Jamba fachada tercer piso');const wx=side*2.65;q(wx,6.82,front,1.12,.78,.25,wall,1,1,0,'Antepecho tercer piso');q(wx,8.78,front,1.12,.68,.25,wall,1,1,0,'Dintel tercer piso');q(wx,7.75,front-.07,1.04,1.12,.06,'#78cde8',0,.45,0,'Ventana tercer piso');q(wx,7.2,front+.02,1.18,.08,.12,'#f0d8a8',0,1,0,'Alféizar tercer piso')}
 q(-1.53,7.72,front,1.05,2.8,.25,wall,1,1,0,'Muro puerta izquierdo');q(1.53,7.72,front,1.05,2.8,.25,wall,1,1,0,'Muro puerta derecho');q(0,8.92,front,2.0,.4,.25,wall,1,1,0,'Dintel puerta tercer piso');
 // Internal stair flight continues from the second level through the stair opening.
 for(let i=0;i<10;i++)q(-2.88,3.32+i*.29,2.35-i*.49,1.25,.24,.8,i%2?'#9b8065':'#b99a79',1,1,0,'Escalón al tercer piso');
 q(-1.2,6.63,-1.45,2.25,.28,2.85,'#6b4423',1,1,0,'Cama tercer piso');q(-1.2,6.83,-2.43,2.1,.14,.52,'#f1faee',1,1,0,'Almohada tercer piso');q(3.25,7.15,-2.85,1.2,1.45,.32,'#8d6e63',1,1,0,'Estantería tercer piso');q(2.9,7.55,-2.68,.18,.3,.1,'#ffd166',0,1,0,'Libro');
 q(0,9.13,0,9.55,.32,9.35,roof,1,1,0,'Techo superior');q(0,9.34,-4.48,9.7,.14,.18,'#f0d8a8',1,1,0,'Remate techo superior');q(0,9.34,4.48,9.7,.14,.18,'#f0d8a8',1,1,0,'Remate techo superior');
 // More steps lead up along the rear-left side and connect to an exterior landing for reliable access.
 for(let i=0;i<19;i++)q(-5.2,.32+i*.33,4.8-i*.55,1.3,.25,.65,i%2?'#9b8065':'#b99a79',1,1,0,'Escalera exterior tercer piso');q(-5.2,6.45,-5.7,1.8,.2,1.5,'#9b8065',1,1,0,'Descanso exterior tercer piso');
 for(const side of [-1,1]){q(side*3.75,8.55,4.24,.3,.42,.14,'#ffd166',0,1,0,'Farol tercer piso');q(side*3.75,.32,5.0,.92,.55,.76,'#967d61',1,1,0,'Jardinera');q(side*3.75,.85,5.0,.66,.68,.62,side<0?'#2d6a4f':'#40916c',0,1,1,'Arbusto jardinera')}
}
function housePrefab(wall,roof,style='two'){const a=[];if(style==='three')addThreeStoryHouse(a,wall,roof);else addDetailedHouse(a,0,0,wall,roof);return a}
function treePrefab(variant=0,scale=1){const a=[];addDetailedTree(a,0,0,variant,scale);return a}
function buildingPrefab(opts={}){const a=[];if(opts.enterable!==false)addTallBuilding(a,0,0,opts);else addDecorativeBuilding(a,0,0,opts);return a}
function shrubPrefab(variant=0,scale=1){const a=[];addGardenShrub(a,0,0,variant,scale);return a}
const PF={
 'Casa familiar de dos pisos':housePrefab('#d4a373','#7b3f32'),
 'Casa moderna de dos pisos':housePrefab('#adb5bd','#343a40'),
 'Casa de madera':housePrefab('#c9a66b','#8d5524'),
 'Casa de ladrillo':housePrefab('#c76f51','#713e32'),
 'Casa pastel':housePrefab('#e9c46a','#6c5b7b'),
 'Cabaña acogedora':housePrefab('#9b8065','#5b3924'),
 'Casa mediterránea':housePrefab('#eee2cf','#bb3e03'),
 'Casa costera':housePrefab('#bde0fe','#4361ee'),
 'Casa victoriana':housePrefab('#94618e','#583d72'),
 'Casa urbana compacta':housePrefab('#b8c0cc','#4c5866'),
 'Casa grande de tres pisos':housePrefab('#d4a373','#7b3f32','three'),
 'Casa suburbana de tres pisos':housePrefab('#c9a66b','#5b3924','three'),
 'Casa urbana de cinco pisos':buildingPrefab({floors:5,width:10,depth:10,enterable:true,wall:'#c4b5a5',roof:'#634832',trim:'#f6e7cf',glass:'#65cbe8'}),
 'Edificio residencial 8 pisos':buildingPrefab({floors:8,enterable:true,wall:'#9ca3af',trim:'#e5e7eb',glass:'#66d9ef',roof:'#374151'}),
 'Edificio de apartamentos 10 pisos':buildingPrefab({floors:10,enterable:true,wall:'#b0a69a',trim:'#faf0d7',glass:'#54c7ec',roof:'#3e4a59'}),
 'Torre empresarial 12 pisos':buildingPrefab({floors:12,enterable:true,wall:'#526579',trim:'#dbeafe',glass:'#7dd3fc',roof:'#202a35',kind:'oficinas'}),
 'Torre de cristal 15 pisos':buildingPrefab({floors:15,enterable:true,wall:'#345b74',trim:'#d4f1f9',glass:'#7ee7f7',roof:'#172b3a',width:13,depth:13,kind:'oficinas'}),
 'Shopping de cinco pisos':buildingPrefab({floors:5,enterable:true,wall:'#f0d1ab',trim:'#fff1cf',glass:'#80d8f7',roof:'#f28482',width:15,depth:13,kind:'shopping'}),
 'Centro comercial decorativo':buildingPrefab({floors:6,enterable:false,wall:'#c1c9d2',trim:'#e8f4f8',glass:'#6fe7f7',roof:'#343a46',width:18,depth:14,kind:'mall'}),
 'Tienda de barrio':buildingPrefab({floors:1,enterable:false,wall:'#e1b07e',trim:'#fff0d1',glass:'#68d6ea',roof:'#8b4513',width:8,depth:7,kind:'shop'}),
 'Oficinas decorativas 9 pisos':buildingPrefab({floors:9,enterable:false,wall:'#657080',trim:'#c4d7e0',glass:'#71d7f4',roof:'#303946',width:12,depth:10}),
 'Hospital decorativo 7 pisos':buildingPrefab({floors:7,enterable:false,wall:'#e7edf2',trim:'#a2d2ff',glass:'#7bdff2',roof:'#c9d6df',width:14,depth:12,kind:'shop'}),
 'Árbol detallado':treePrefab(0,1),
 'Roble frondoso':treePrefab(1,1.2),
 'Árbol de bosque':treePrefab(2,.95),
 'Árbol joven':treePrefab(3,.7),
 'Arbusto frondoso':shrubPrefab(0,1),
 'Arbusto florido':shrubPrefab(1,1.15),
 'Jardinera de flores':(()=>{const a=[];addFlowerBed(a,0,0,1);return a})(),
 'Torre':[[0,1,0,3,2,3,'#8d99ae'],[0,3,0,2.5,2,2.5,'#adb5bd'],[0,5,0,2,2,2,'#ced4da']],
 'Escalera':Array.from({length:8},(_,i)=>[0,.25*(i+1),-i,3,.5*(i+1),1,'#9d4edd']),
 'Puente':[[0,2,0,3,.4,10,'#6b4423'],[-1.4,1,-4.5,.3,2,.3,'#444'],[1.4,1,-4.5,.3,2,.3,'#444'],[-1.4,1,4.5,.3,2,.3,'#444'],[1.4,1,4.5,.3,2,.3,'#444']],
 'Muro':[[0,1,0,8,2,.5,'#888']],
 'Pirámide':[[0,.5,0,7,1,7,'#e9c46a'],[0,1.5,0,5,1,5,'#e9c46a'],[0,2.5,0,3,1,3,'#e9c46a'],[0,3.5,0,1,1,1,'#e9c46a']],
 'Meta':[[0,.1,0,3,.2,3,'#2fbf5b']],
 'Plataforma flotante':[[0,4,0,4,.5,4,'#00e5ff']]
}
const MAT_CACHE=new Map(),mat=b=>{const k=b[11]|0,it=b[9]&&MK.find(x=>x.id==b[9]),opacity=k==2?Math.min(.4,b[7]??1):(b[7]??1),key=[k,b[6],b[7]??1,it?it.id:''].join('|');if(MAT_CACHE.has(key))return MAT_CACHE.get(key);const o={color:b[6],transparent:(b[7]??1)<1||k==2,opacity},m=k==1?new THREE.MeshBasicMaterial(o):new THREE.MeshLambertMaterial(o);if(it){m.map=new THREE.TextureLoader().load(it.d,()=>{try{sr()}catch(e){}});m.color.set(0xffffff)}MAT_CACHE.set(key,m);return m},
okB=a=>Array.isArray(a)&&a.length<2000&&a.every(b=>Array.isArray(b)&&b.slice(0,6).every(Number.isFinite)&&/^#[0-9a-f]{6}$/i.test(b[6])),
SV=['⚙ Lighting','🖥 StarterGui','🧍 StarterPlayer','🎒 StarterPack','📦 ReplicatedStorage','📜 ServerScriptService','🔊 SoundService','👥 Players','🎬 Teams'],
SND={Salto:[[520,.08]],Moneda:[[988,.07],[1319,.15]],Explosión:[[120,.3]],Victoria:[[523,.12],[659,.12],[784,.2]],Alarma:[[880,.15],[660,.15],[880,.15]]};
let SEL=-1;
function snd(k){if(SND[k]){let d=0;SND[k].forEach(([f,l])=>{setTimeout(()=>beep(f,l),d*1000);d+=l})}else{const m=MK.find(x=>x.id==k);if(m&&m.t=='sonido')new Audio(m.d).play()}}
function pr(i,v){SBl[SEL][i]=+v;ssync()}
const ROLES=['Parte','Spawn','Checkpoint','Kill Brick','Trampolín','Acelerador','Moneda','Meta','Vida'],
FN=[['📍 Spawn',[4,.4,4],'#4895ef',1],['🚩 Checkpoint',[3,.3,3],'#2fbf5b',2],['🔥 Kill Brick',[3,.3,3],'#e63946',3],['🦘 Trampolín',[3,.4,3],'#ff00aa',4],['⚡ Acelerador',[3,.2,3],'#00e5ff',5],['🪙 Moneda',[.6,.6,.6],'#ffd166',6,2,1],['🏆 Meta',[4,.4,4],'#ffd700',7],['❤ Vida',[.6,.6,.6],'#ff4d6d',8,1,1]],
SVC=['Workspace','Players','Lighting','MaterialService','ReplicatedFirst','ReplicatedStorage','ServerScriptService','ServerStorage','StarterGui','StarterPack','StarterPlayer','Teams','SoundService','TextChatService'],
IC={Workspace:'🌍',Players:'👥',Lighting:'💡',MaterialService:'🎨',ReplicatedFirst:'⏩',ReplicatedStorage:'📦',ServerScriptService:'📜',ServerStorage:'🗄',StarterGui:'🖥',StarterPack:'🎒',StarterPlayer:'🧍',Teams:'🎬',SoundService:'🔊',TextChatService:'💬'},
TN2={sel:'Seleccionar',mv:'Mover',del:'Borrar',add:'Insertar',pf:'Modelo',rot:'Rotar',scl:'Escalar'},
OPT=(a,v)=>a.map((t,i)=>`<option value="${i}" ${v==i?'selected':''}>${t}</option>`).join(''),SELC='style="background:#241040;color:#fff;border-radius:8px;padding:6px"',
allSc=()=>SCR.map(s=>'(function(){'+s.c+'\n})();').join('\n');
let RT='Home',TBT='Modelos',SNAP=1,ISZ=[1,1,1],ICOL='#9d4edd',ISH=0,IMT=0,IR=0,SELS='Workspace',SSEL=0,PFS='Casa',LAST='[]',HI=[],HR=[],
ST={clock:14,bright:1,fog:150,fogStyle:'soft',sky:'',skyPreset:0,walk:6,jump:10.5,grav:28,lava:0,gcol:'#2a1245',hud:'',msg:'',clouds:1,skyImg:''},SCR=[{n:'Script',c:"game.say('¡Bienvenido!');"}];
let CLIP=null,CTX=null,SELM=[],DR='',STG=[0,0,0],PLD=0;
const sel=()=>SELM.length?SELM:(SBl[SEL]?[SEL]:[]),OBJL=['Bloque','Esfera','Cilindro','Pirámide',...FN.map(f=>f[0]),'Script'];
function cpy(){CLIP=sel().map(i=>SBl[i].slice(0,20))}
function cut(){cpy();delS()}
function delS(){if(CTX&&CTX.k=='sky'){ST.skyImg='';ssync();return}if(CTX&&CTX.k=='scr'){if(SCR.length>1){SCR.splice(CTX.i,1);SSEL=0}ssync();return}sel().sort((a,b)=>b-a).forEach(i=>SBl.splice(i,1));SEL=-1;SELM=[];ssync()}
function pst(f){if(!CLIP)return;const fo=f??(CTX&&CTX.f)??'',n0=SBl.length;CLIP.forEach(b=>{const n=b.slice(0,20);n[0]+=SNAP;n[13]=(fo&&fo!='Workspace')?fo:'';SBl.push(n)});SELM=SBl.map((b,i)=>i).filter(i=>i>=n0);SEL=n0;ssync()}
function ren(){if(CTX&&CTX.k=='scr'){const n=prompt('Nuevo nombre',SCR[CTX.i].n);if(n){SCR[CTX.i].n=n.slice(0,20);ssync()}return}const i=sel()[0];if(i==null)return;const n=prompt('Nuevo nombre',SBl[i][14]||'');if(n!==null){SBl[i][14]=n.slice(0,24);ssync()}}
function grp(){const g='g'+Date.now()%1e6;sel().forEach(i=>{SBl[i][15]=g});ssync()}
function ugrp(){sel().forEach(i=>{delete SBl[i][15]});ssync()}
function selCh(){if(CTX&&CTX.k=='fold'){const f=CTX.f;SELM=SBl.map((b,i)=>i).filter(i=>f=='Workspace'?!SBl[i][13]:SBl[i][13]==f)}else{const g=sel().map(i=>SBl[i][15]).filter(Boolean);SELM=SBl.map((b,i)=>i).filter(i=>g.includes(SBl[i][15]))}SEL=SELM[0]??-1;ssync()}
function zoomTo(){const s=sel();if(!s.length)return;const b=SBl[s[0]];STG=[b[0],b[1],b[2]];sdi=Math.max(6,Math.max(b[3],b[4],b[5])*3);ssync()}
function insPart(){SBl.push([Math.round(STG[0]),ISZ[1]/2,Math.round(STG[2]),...ISZ,ICOL,1,1,'',ISH,IMT,0]);SEL=SBl.length-1;SELM=[];ssync()}
function insObj(k){if(k==99){SCR.push({n:'Script'+(SCR.length+1),c:''});ssync();return}if(k<4){const o=ISH;ISH=k;insPart();ISH=o}else{const f=FN[k-4],[w,h,d]=f[1];SBl.push([Math.round(STG[0]),h/2,Math.round(STG[2]),w,h,d,f[2],1,(f[3]==6||f[3]==8)?0:1,'',f[4]||0,f[5]||0,f[3]]);SEL=SBl.length-1;SELM=[];ssync()}}
function insFile(i){const f=i.files[0];i.value='';if(!f)return;if(f.type.startsWith('image/')){if(f.size>6e5)return alert('Máximo 600 KB');const r=new FileReader();r.onload=()=>{const id='m'+Date.now();MK.push({id,t:'imagen',n:f.name.slice(0,20),d:r.result,by:me});save();if((CTX&&CTX.f=='Lighting')||(SELS=='Lighting'&&!sel().length))ST.skyImg=id;else if(SBl[SEL])SBl[SEL][9]=id;ssync()};r.readAsDataURL(f)}else rd({files:[f]},o=>{if(okB(o)){o.forEach(b=>SBl.push(b.slice(0,20)));ssync()}})}
function saveLocal(n){const s=sel();if(!s.length)return;n=(typeof n=='string'?n:prompt('Nombre del plugin/modelo','Mi modelo'));if(!n)return;n=n.slice(0,20);const o=SBl[s[0]],bl=s.map(i=>{const b=SBl[i].slice(0,20);b[0]-=o[0];b[2]-=o[2];return b});(U[me].plug=U[me].plug||{})[n]=bl;PF['⭐ '+n]=bl;save();studio()}
function toPkg(){const n=prompt('Nombre del paquete','Paquete');if(!n)return;grp();saveLocal(n)}
function pubPlug(){const n=prompt('Nombre para publicar','Mi modelo');if(!n)return;MK.push({id:'m'+Date.now(),t:'modelo',n:n.slice(0,24),d:JSON.stringify(sel().map(i=>SBl[i].slice(0,20))),by:me});save();recordBuild(false);alert('Publicado en el Mercado')}
function saveSel(){dl('seleccion.json',JSON.stringify(sel().map(i=>SBl[i].slice(0,20))))}
function saveProj(){U[me].proj={b:SBl.map(x=>x.slice(0,20)),st:ST,sc:SCR};save();recordBuild(false);alert('Proyecto guardado en tu cuenta')}
function expObj(){let v='',f='',n=0;sel().forEach(i=>{const[x,y,z,w,h,d]=SBl[i];for(const a of[-.5,.5])for(const b of[-.5,.5])for(const c of[-.5,.5])v+=`v ${x+a*w} ${y+b*h} ${z+c*d}\n`;[[1,2,4,3],[5,7,8,6],[1,5,6,2],[3,4,8,7],[1,3,7,5],[2,6,8,4]].forEach(q=>f+='f '+q.map(k=>n+k).join(' ')+'\n');n+=8});const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([v+f]));a.download='seleccion.obj';a.click()}
function helpM(){alert('Menú contextual de Nixora Studio\n\n• Arrastra partes del Explorer a una carpeta para moverlas (ServerStorage las oculta).\n• Arrastra una imagen del Toolbox a Lighting para usarla de cielo.\n• Ctrl+clic selecciona varias partes. Ctrl+G agrupa, Ctrl+U desagrupa.\n• Ctrl+C/X/V copiar, cortar y pegar; Ctrl+Shift+V pega en la carpeta seleccionada.\n• F2 renombra, F centra la cámara, Supr borra.\n• Flechas y AvPág/RePág mueven la selección.')}
function pick(e){const r=SR.domElement.getBoundingClientRect();m2.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);rc.setFromCamera(m2,SCm);return rc.intersectObjects([...SM,gp])[0]}
function selBlk(ev,i){if(ev.ctrlKey||ev.metaKey){const s=sel();SELM=s.includes(i)?s.filter(x=>x!=i):[...s,i];SEL=SELM[0]??-1}else{SEL=i;SELM=[];const g=SBl[i][15];if(g)SELM=SBl.map((b,k)=>k).filter(k=>SBl[k][15]==g)}SELS='';ssync()}
function selCtx(ev,i){if(!sel().includes(i)){SEL=i;SELM=[];ssync()}ctxm(ev,{k:'blk',i})}
function drop(s){const d=DR;DR='';if(!d)return;if(d[0]=='b'){const i=+d.slice(1);if(!sel().includes(i)){SEL=i;SELM=[]}sel().forEach(k=>{SBl[k][13]=s=='Workspace'?'':s});ssync()}else if(d[0]=='i'){if(s=='Lighting'){ST.skyImg=d.slice(1);ssync()}else if(SBl[SEL]&&s=='Workspace'){SBl[SEL][9]=d.slice(1);ssync()}}}
function cmClose(){const m=$('#cm');if(m)m.remove()}
function ctxm(e,tgt){e.preventDefault();e.stopPropagation();CTX=tgt||null;cmClose();const s=sel().length,k=CTX&&CTX.k,has=s||k=='sky'||k=='scr';
 const I=(ic,t,sh,en,fn)=>`<div class="ci ${en?'':'dis'}" onclick="cmClose();${fn}">${ic} ${t}<span class="sh">${sh}</span></div>`,sub=OBJL.map((o,q)=>I('',o,'',1,`insObj(${q==OBJL.length-1?99:q})`)).join('');
 const m=document.createElement('div');m.id='cm';
 m.innerHTML=I('✂','Cut','Ctrl+X',s,'cut()')+I('📋','Copy','Ctrl+C',s,'cpy()')+I('📥','Paste Into','Ctrl+Shift+V',CLIP,'pst()')+I('⧉','Duplicate','Ctrl+D',s,'dup()')+I('✖','Delete','Del',has,'delS()')+I('✏','Rename','F2',s||k=='scr','ren()')+'<hr>'+I('▣','Group','Ctrl+G',s,'grp()')+I('▢','Ungroup','Ctrl+U',s,'ugrp()')+I('⛓','Select Children','',1,'selCh()')+I('🔍','Zoom to','F',s,'zoomTo()')+'<hr>'+I('🧱','Insert Part','',1,'insPart()')+`<div class="ci sub">🧩 Insert Object<span class="sh">▸</span><div class="subm">${sub}</div></div>`+I('📂','Insert from File...','',1,"$('#ifl').click()")+'<hr>'+I('📦','Convert to Package...','',s,'toPkg()')+'<hr>'+I('💾','Save to File...','',s,'saveSel()')+I('☁','Save to Nixora...','',1,'saveProj()')+I('🔌','Save as Local Plugin...','',s,'saveLocal()')+I('🚀','Publish as Plugin...','',s,'pubPlug()')+I('⬇','Export Selection...','',s,'expObj()')+'<hr>'+I('❓','Help','',1,'helpM()');
 document.body.appendChild(m);m.style.left=Math.min(e.clientX,innerWidth-250)+'px';m.style.top=Math.max(4,Math.min(e.clientY,innerHeight-m.offsetHeight-8))+'px'}
document.addEventListener('click',e=>{if(!e.target.closest||!e.target.closest('#cm'))cmClose()});
function epr(){const e=$('#ep');if(!e)return;const sl=sel(),nm=b=>b[14]||ROLES[b[12]|0],
 row=i=>{const b=SBl[i];return `<div class="ex sub ${sl.includes(i)?'on':''}" draggable="true" ondragstart="DR='b${i}'" onclick="selBlk(event,${i})" oncontextmenu="selCtx(event,${i})">${['🧱','⚪','🛢','🔺'][b[10]|0]} ${esc(nm(b))}${b[15]?' 🔗':''}</div>`},
 tree=SVC.map(s=>{let t=`<div class="ex ${SELS==s&&!sl.length?'on':''}" ondragover="event.preventDefault()" ondrop="drop('${s}')" onclick="SELS='${s}';SEL=-1;SELM=[];ssync()" oncontextmenu="ctxm(event,{k:'fold',f:'${s}'})">${IC[s]} ${s}</div>`;
  t+=SBl.map((b,i)=>(s=='Workspace'?!b[13]:b[13]==s)?row(i):'').join('');
  if(s=='Lighting'&&ST.skyImg){const m=MK.find(x=>x.id==ST.skyImg);t+=`<div class="ex sub" oncontextmenu="ctxm(event,{k:'sky'})">🌌 Sky${m?' – '+esc(m.n):''}</div>`}
  if(s=='ServerScriptService')t+=SCR.map((x,i)=>`<div class="ex sub" onclick="SSEL=${i};RT='Script';studio()" oncontextmenu="ctxm(event,{k:'scr',i:${i}})">📄 ${esc(x.n)}</div>`).join('');return t}).join('');
 e.innerHTML=`<div class="set" style="display:block;max-height:250px;overflow:auto"><b>📁 Explorer</b>${tree}</div><div class="set" style="display:block;margin-top:6px;max-height:330px;overflow:auto"><b>🔧 Properties${SBl[SEL]?' – '+esc(nm(SBl[SEL])):' – '+SELS}</b>${props()}</div>`}
function fnSel(i){const f=FN[i];ISZ=[...f[1]];ICOL=f[2];IR=f[3];ISH=f[4]||0;IMT=f[5]||0;setT('add');if(RT=='Home')studio()}
function scl(f){sel().forEach(i=>{const b=SBl[i],bt=b[1]-b[4]/2;b[3]=+(b[3]*f).toFixed(2);b[4]=+(b[4]*f).toFixed(2);b[5]=+(b[5]*f).toFixed(2);b[1]=+(bt+b[4]/2).toFixed(2)});ssync()}
function dup(){const s=sel();if(!s.length)return;const n0=SBl.length;s.forEach(i=>{const n=SBl[i].slice(0,20);n[0]+=SNAP;SBl.push(n)});SELM=SBl.map((b,i)=>i).filter(i=>i>=n0);SEL=n0;ssync()}
function props(){const b=SBl[SEL];
 if(b){const E=(i,v)=>`<input type="number" step=".5" value="${v}" onchange="pr(${i},this.value)" style="width:62px">`;
  return `<div>Posición ${E(0,b[0])}${E(1,b[1])}${E(2,b[2])}</div><div>Tamaño ${E(3,b[3])}${E(4,b[4])}${E(5,b[5])}</div><div>Rotación ° ${E(16,b[16]||0)}${E(17,b[17]||0)}${E(18,b[18]||0)}</div><div>Color <input type="color" value="${b[6]}" onchange="SBl[SEL][6]=this.value;ICOL=this.value;ssync()"></div><div>Transparencia <input type="range" min="0" max="1" step=".1" value="${1-(b[7]??1)}" onchange="SBl[SEL][7]=1-this.value;ssync()"></div>
<div>Forma <select ${SELC} onchange="SBl[SEL][10]=+this.value;ssync()">${OPT(['Bloque','Esfera','Cilindro','Pirámide'],b[10]|0)}</select></div><div>Material <select ${SELC} onchange="SBl[SEL][11]=+this.value;ssync()">${OPT(['Plástico','Neón','Cristal'],b[11]|0)}</select></div><div>Función <select ${SELC} onchange="SBl[SEL][12]=+this.value;ssync()">${OPT(ROLES,b[12]|0)}</select></div>
<label>Colisión (Anchored) <input type="checkbox" ${b[8]===0?'':'checked'} onchange="SBl[SEL][8]=this.checked?1:0;ssync()"></label><div>Textura <select ${SELC} onchange="SBl[SEL][9]=this.value;ssync()"><option value="">Ninguna</option>${MK.filter(m=>m.t=='imagen'||m.t=='gif').map(m=>`<option value="${m.id}" ${b[9]==m.id?'selected':''}>${esc(m.n)}</option>`).join('')}</select></div><button class="s" onclick="SBl.splice(SEL,1);SEL=-1;ssync()">Eliminar</button> <button class="s" onclick="dup()">Duplicar</button>`}
 const N=(k,l,mn,mx,st)=>`<label class="set">${l}<input type="number" min="${mn}" max="${mx}" step="${st}" value="${ST[k]}" onchange="ST['${k}']=+this.value" style="width:80px"></label>`;
 if(SELS=='Lighting'){const si=Math.max(0,Math.min(NX_SKY_PRESETS.length-1,Number(ST.skyPreset)||0)),sp=NX_SKY_PRESETS[si];return N('clock','ClockTime',0,24,.5)+N('bright','Brightness',0,2,.1)+N('fog','Distancia de niebla',45,500,10)+`<label class="set">Tipo de niebla <select style="max-width:100%;background:#241040;color:#fff" onchange="ST.fogStyle=this.value;epr()">${[['soft','Suave · horizonte'],['mist','Bruma envolvente'],['dense','Niebla densa'],['none','Sin niebla']].map(([v,n])=>`<option value="${v}" ${(ST.fogStyle||'soft')===v?'selected':''}>${n}</option>`).join('')}</select></label><label class="set">Nubes <input type="checkbox" ${ST.clouds===0?'':'checked'} onchange="ST.clouds=this.checked?1:0"></label><b>🌤 Cielos gradientes (${NX_SKY_PRESETS.length} presets)</b><div style="height:64px;border-radius:8px;background:${nxSkyCss(si)};border:1px solid #ffffff44"></div><label class="set">Preset de cielo <select style="max-width:100%;background:#241040;color:#fff" onchange="ST.skyPreset=+this.value;ST.sky='';epr()">${NX_SKY_PRESETS.map((q,i)=>`<option value="${i}" ${i===si?'selected':''}>${i+1}. ${esc(q.name)}</option>`).join('')}</select></label><small>Los cielos, la niebla y las nubes se guardan al publicar. La bruma y la niebla densa añaden ambiente, pero pueden reducir la visibilidad.</small>`+`<label class="set">SkyColor / tinte <span><input type="color" value="${ST.sky||'#6a3dad'}" onchange="ST.sky=this.value;ST.skyPreset=0;epr()"><button class="s" onclick="ST.sky='';ST.skyPreset=0;epr()">auto</button></span></label>`;}
 if(SELS=='StarterPlayer')return N('walk','WalkSpeed',2,30,1)+N('jump','JumpPower',4,30,.5);
 if(SELS=='Workspace')return N('grav','Gravity',5,80,1)+`<label class="set">Suelo de lava <input type="checkbox" ${ST.lava?'checked':''} onchange="ST.lava=this.checked?1:0"></label><label class="set">Color del suelo <input type="color" value="${ST.gcol}" onchange="ST.gcol=this.value"></label>`;
 if(SELS=='StarterGui')return `<label class="set">HUD <input value="${esc(ST.hud)}" onchange="ST.hud=this.value"></label><label class="set">Bienvenida <input value="${esc(ST.msg)}" onchange="ST.msg=this.value"></label>`;
 return `<small>${SELS} no tiene propiedades editables todavía.</small>`}
function generateTerrain(mode){const n0=SBl.length,step=4;for(let ix=-4;ix<=4;ix++)for(let iz=-4;iz<=4;iz++){let h=.7,c='#709e50';if(mode==='hills'){h=.6+Math.max(0,4.8-Math.hypot(ix,iz)*.62);c=['#739e4c','#64894a','#7b9d4d'][Math.abs(ix+iz)%3]}else if(mode==='islands'){if(Math.hypot(ix,iz)<2.1||Math.sin(ix*1.4+iz)*Math.cos(iz*1.2)>.2)h=0;else h=.7+((Math.abs(ix*7+iz*3)%4)*.35);c='#70a6c2'}else if(mode==='lava'){h=.6+Math.max(0,3.2-Math.hypot(ix,iz)*.4);c=(ix+iz)%3?'#49323b':'#bf360c'}const y=mode==='flat'?.35:h/2;if(mode==='islands'&&h===0)continue;SBl.push([ix*step,y,iz*step,step,h,step,c,1,1,'',0,mode==='lava'?1:0,0,'','Terreno '+mode+' '+ix+' '+iz,'',0,0,0,'terrain'])}SEL=n0;SELM=[];ssync();const e=$('#nx-studio-status');if(e)e.textContent='Terreno '+mode+' generado: '+(SBl.length-n0)+' piezas'}
function clearTerrain(){const old=SBl.length;SBl=SBl.filter(b=>b[19]!=='terrain');SEL=-1;SELM=[];ssync();const e=$('#nx-studio-status');if(e)e.textContent=(old-SBl.length)+' piezas de terreno retiradas'}

const rbar=()=>({
 Home:`<button onclick="setT('sel')">↖ Seleccionar</button><button onclick="setT('mv')">✥ Mover</button><button onclick="scl(1.25)">⤢ Escalar +</button><button onclick="scl(.8)">⤡ Escalar −</button><button onclick="rotS(1,15)">⟳ Girar Y</button><button onclick="rotS(0,15)">↻ Girar X</button><button onclick="rotS(2,15)">↻ Girar Z</button><button class="s" onclick="setT('del')">⌫ Borrar</button><label>Snap <select ${SELC} onchange="SNAP=+this.value">${[.25,.5,1,2].map(v=>`<option ${v==SNAP?'selected':''}>${v}</option>`).join('')}</select></label><label>Forma <select ${SELC} onchange="ISH=+this.value">${OPT(['Bloque','Esfera','Cilindro','Pirámide'],ISH)}</select></label><label>Material <select ${SELC} onchange="setStudioMaterial(this.value)">${OPT(['Plástico','Neón','Cristal'],IMT)}</select></label><label>Color <input type="color" value="${ICOL}" oninput="paintStudioColor(this.value)"></label><label>Tamaño ${[0,1,2].map(i=>`<input type="number" min=".2" max="40" step=".5" value="${ISZ[i]}" onchange="ISZ[${i}]=+this.value" style="width:58px">`).join('')}</label><button onclick="IR=0;setT('add')">＋ Parte</button><b id="tm"></b>`,
 Model:`<button onclick="dup()">⧉ Duplicar (Ctrl+D)</button><button class="s" onclick="SBl=[];SEL=-1;ssync()">Limpiar mapa</button><button class="s" onclick="dl('mapa.json',JSON.stringify(SBl))">⬇ Exportar mapa</button><button class="s" onclick="$('#imm').click()">⬆ Importar mapa</button><input id="imm" type="file" accept=".json" hidden onchange="impM(this)"><small>Teclas: flechas y AvPág/RePág mueven la parte, Supr borra, Ctrl+Z deshace, Ctrl+Y rehace.</small>`,
 Avatar:`<button onclick="fnSel(0)">📍 Spawn</button><button onclick="fnSel(1)">🚩 Checkpoint</button><label>WalkSpeed <input type="number" value="${ST.walk}" onchange="ST.walk=+this.value" style="width:64px"></label><label>JumpPower <input type="number" value="${ST.jump}" onchange="ST.jump=+this.value" style="width:64px"></label><button class="s" onclick="go('avatar')">🧍 Editar mi avatar</button>`,
 UI:`<label>Texto del HUD <input value="${esc(ST.hud)}" onchange="ST.hud=this.value" style="width:220px"></label><label>Mensaje de bienvenida <input value="${esc(ST.msg)}" onchange="ST.msg=this.value" style="width:260px"></label>`,
 Script:`<select ${SELC} onchange="SSEL=+this.value;studio()">${SCR.map((s,i)=>`<option value="${i}" ${i==SSEL?'selected':''}>${esc(s.n)}</option>`).join('')}</select><button onclick="SCR.push({n:'Script'+(SCR.length+1),c:''});SSEL=SCR.length-1;studio()">➕ Nuevo</button><button class="s" onclick="if(SCR.length>1){SCR.splice(SSEL,1);SSEL=0;studio()}">🗑</button><input value="${esc(SCR[SSEL].n)}" onchange="SCR[SSEL].n=this.value.slice(0,20);epr()" style="width:130px"><textarea rows="7" style="flex:1 1 100%;font-family:monospace" oninput="SCR[SSEL].c=this.value">${esc(SCR[SSEL].c)}</textarea><small>API: game.say(t) · hud(t) · sound(n) · coins() · sword() · mob(x,z,{hp,speed,dmg,size,color,peaceful}) · onKill(f) · onTick((dt,t)=>…) · addBlock([x,y,z,w,h,d,color,op,col,tex,forma,mat,función]) · removeBlock(m) · setSpawn(x,y,z) · die() · onDie(f) · sky(color) · light(n) · player · network.connected()/host()/slot()/username() · network.emit(type,payload)/on(type,fn) · network.set(key,value)/get(key)/onState(key,fn)</small>`,
 Plugins:`<button onclick="go('store')">🏪 Abrir Mercado</button><button class="s" onclick="dl('mapa.json',JSON.stringify(SBl))">⬇ Exportar mapa</button><button class="s" onclick="$('#imm').click()">⬆ Importar</button><input id="imm" type="file" accept=".json" hidden onchange="impM(this)"><small>Los plugins externos no están disponibles; usa el Mercado para modelos, imágenes y sonidos.</small>`,
 Publicar:`${EDITG?`<button class="play" onclick="saveGame()">💾 Guardar cambios en «${esc((gmx(EDITG)||{}).n||'')}»</button><button class="s" onclick="EDITG=''">Dejar de editar</button>`:''}<input id="pt" placeholder="Nombre del juego" style="width:200px"><input id="ph" placeholder="#hashtag" style="width:140px"><textarea id="pd" placeholder="Descripción" rows="2" style="flex:1 1 220px"></textarea><label>Logo (obligatorio) <input type="file" id="pi" accept="image/*"></label><label>Banner (opcional) <input type="file" id="pb" accept="image/*"></label><button onclick="pub()">🚀 Publicar juego</button><small id="pe" style="color:#ff8fa3"></small>`})[RT],
tbox=()=>{const t=['Modelos','Funciones','Sonidos','Imágenes','Terreno'].map(x=>`<button class="${TBT==x?'':'s'}" style="padding:5px 8px" onclick="TBT='${x}';studio()">${x}</button>`).join(' ');let b='';
 if(TBT=='Modelos')b=Object.keys(PF).map(k=>`<button class="s" onclick="PFS='${k}';setT('pf')">🧰 ${k}</button>`).join('');
 if(TBT=='Funciones')b=FN.map((f,i)=>`<button class="s" onclick="fnSel(${i})">${f[0]}</button>`).join('');
 if(TBT=='Sonidos')b=Object.keys(SND).map(k=>`<button class="s" onclick="snd('${k}')">🔊 ${k}</button>`).join('')+MK.filter(m=>m.t=='sonido').map(m=>`<button class="s" onclick="snd('${m.id}')">🔊 ${esc(m.n)}</button>`).join('');
 if(TBT=='Imágenes')b=MK.filter(m=>m.t=='imagen'||m.t=='gif').map(m=>`<button class="s" draggable="true" ondragstart="DR='i${m.id}'" onclick="if(SBl[SEL]){SBl[SEL][9]='${m.id}';ssync()}">🖼 ${esc(m.n)}</button>`).join('')||'<small>Publica imágenes en el Mercado y aplícalas al bloque seleccionado.</small>';
 if(TBT=='Terreno')b=`<small>Genera una base por bloques. Puedes editar, recolorear y borrar sus piezas desde el Explorer.</small><button onclick="generateTerrain('flat')">🌱 Pradera plana</button><button onclick="generateTerrain('hills')">⛰ Colinas</button><button onclick="generateTerrain('islands')">🏝 Islas</button><button onclick="generateTerrain('lava')">🌋 Terreno volcánico</button><button class="s" onclick="clearTerrain()">🗑 Quitar terreno generado</button>`;
 return `<div class="set" style="display:block"><b>🧰 Toolbox</b><div style="margin:6px 0">${t}</div><div style="display:grid;gap:4px;max-height:430px;overflow:auto">${b}</div></div>`};
const impM=i=>rd(i,o=>{if(okB(o)){SBl=o.map(b=>b.slice(0,20));ssync()}});
/* ---------- Mercado ---------- */
function store(){$('#main').innerHTML=`<h2>🏪 Mercado</h2><div class="set" style="display:grid;gap:4px"><b>Publicar</b><select id="mt" style="background:#241040;color:#fff;border-radius:8px;padding:6px">${['imagen','gif','video','sonido','avatar','mascota','modelo'].map(t=>`<option>${t}</option>`).join('')}</select><input id="mn" placeholder="Nombre"><input id="mf" type="file" accept="image/*,video/*,audio/*"><small>Imagen, gif, video o sonido: sube un archivo (máx. 600 KB). Avatar, mascota y modelo: publican el tuyo actual (tu avatar, tu mascota o el mapa del Studio).</small><button onclick="pubM()">Publicar</button><small id="me2" style="color:#ff8fa3"></small></div><h3>🔊 Sonidos incluidos</h3>${Object.keys(SND).map(k=>`<button class="s" onclick="snd('${k}')">${k}</button> `).join('')}<h3>Publicado</h3><div class="row" style="flex-wrap:wrap">${MK.map(mc).join('')||'<i>Aún no hay nada publicado</i>'}</div>`}
function mc(m){let v='';if(m.t=='imagen'||m.t=='gif')v=`<img src="${m.d}" style="height:90px;max-width:100%">`;else if(m.t=='video')v=`<video src="${m.d}" controls style="height:90px;max-width:100%"></video>`;else if(m.t=='sonido')v=`<audio src="${m.d}" controls style="width:100%"></audio>`;else if(m.t=='modelo')v='🧱 modelo';else v=m.t=='avatar'?'🧍 avatar':'🟪 mascota';
 return `<div class="card2">${v}<b>${esc(m.n)}</b><small>${m.t} · por ${esc(m.by)}</small>${['avatar','mascota','modelo'].includes(m.t)?`<button onclick="useM('${m.id}')">Usar</button>`:''}${m.by==me?`<button class="s" onclick="MK=MK.filter(x=>x.id!='${m.id}');save();store()">Quitar</button>`:''}</div>`}
function useM(id){const m=MK.find(x=>x.id==id);if(!m)return;if((m.t=='avatar'||m.t=='mascota')&&m.by!=me&&!own()['m:'+id]){if(!can('Tienda gratis')){if(nd()<10)return alert('Cuesta 10 Nixdollar (tienes '+nd()+')');addND(me,-10)}own()['m:'+id]=1;save();updWallet()}try{const o=JSON.parse(m.d);if(m.t=='modelo'){if(okB(o)){SBl=o.map(b=>b.slice(0,20));go('studio')}}else{applyAv(o);go('avatar')}}catch(e){}}
function pubM(){const t=$('#mt').value,n=$('#mn').value.trim(),f=$('#mf').files[0],e=$('#me2');if(!n)return e.textContent='Falta el nombre';
 const add=d=>{MK.push({id:'m'+Date.now(),t,n,d,by:me});save();store()};
 if(t=='avatar'){if(!can('Publicar gratis')){if(nd()<5){e.textContent='Publicar un avatar cuesta 5 Nixdollar (tienes '+nd()+')';return}addND(me,-5)}updWallet();return add(JSON.stringify(A()))}if(t=='mascota')return add(JSON.stringify({petC:A().petC,pet:A().pet,petA:A().petA}));if(t=='modelo')return add(JSON.stringify(SBl));
 if(!f)return e.textContent='Elige un archivo';if(f.size>6e5)return e.textContent='Máximo 600 KB';
 const r=new FileReader();r.onload=()=>add(r.result);r.readAsDataURL(f)}
/* ---------- Nixora Studio ---------- */
let SR,SS,SM=[],SBl=[],tool='add',gp,SCm,sa=.8,sp_=.7,sdi=18,STUDIO_GRID=null,STUDIO_NAV_FRAME=0,STUDIO_LAST=0;
const STUDIO_KEYS=Object.create(null);
const rc=window.THREE&&new THREE.Raycaster(),m2=window.THREE&&new THREE.Vector2(),setT=t=>{tool=t;const e=$('#tm');if(e)e.textContent='Herramienta: '+TN2[t]};
function studio(){if(!PLD){PLD=1;const p=U[me].proj;if(p&&!SBl.length){SBl=p.b;Object.assign(ST,p.st);SCR=p.sc;LAST=JSON.stringify(SBl)}Object.entries(U[me].plug||{}).forEach(([n,b])=>{PF['⭐ '+n]=b})}
 $('#main').innerHTML=`<section class="nx-studio-shell">
 <div class="nx-studio-head"><div class="nx-studio-brand"><span class="nx-studio-mark">N</span><div><strong>Nixora Studio</strong><small>Editor de mundos · ${SBl.length} objetos en el proyecto</small></div></div><div class="nx-studio-quick"><button onclick="saveProj()">💾 Guardar</button><button class="s" onclick="dl('mapa.json',JSON.stringify(SBl))">⬇ Exportar</button><button class="s" onclick="helpM()">❔ Ayuda</button></div></div>
 <div class="nx-studio-tabs">${['Home','Model','Avatar','UI','Script','Plugins','Publicar'].map(t=>`<button class="${RT==t?'on':''}" onclick="RT='${t}';studio()">${({Home:'Inicio',Model:'Modelo',Avatar:'Jugador',UI:'Interfaz',Script:'Scripts',Plugins:'Complementos',Publicar:'Publicar'})[t]}</button>`).join('')}</div>
 <div class="nx-studio-toolbar"><div class="nx-tool-cluster"><button onclick="setT('sel')">↖ Seleccionar</button><button onclick="setT('mv')">✥ Mover</button><button onclick="scl(1.25)">⤢ Escalar</button><button onclick="rotS(1,15)">⟳ Rotar 15°</button><button class="s" onclick="setT('del')">⌫ Borrar</button></div><div class="nx-tool-cluster"><button onclick="TBT='Terreno';studio()">⛰ Terreno</button><button onclick="toggleStudioGrid()">▦ Cuadrícula</button><button onclick="centerStudioCamera()">◎ Centrar cámara</button><button class="s" onclick="undo()">↶</button><button class="s" onclick="redo()">↷</button><button class="play" onclick="testG()">▶ Probar juego</button></div></div>
 <div class="nx-studio-toolbar nx-studio-detailbar">${rbar()}</div>
 <div class="stg nx-studio-grid"><aside class="nx-studio-toolbox">${tbox()}</aside><section class="nx-studio-viewport"><div class="nx-viewbar"><span>🌍 Vista 3D <b id="nx-object-count">${SBl.length} objetos</b></span><small>W A S D mover · Q/E subir/bajar · Shift rápido · rueda zoom · arrastrar para orbitar</small></div><div id="shd" class="nx-stage" tabindex="0" aria-label="Vista 3D del Studio"></div><div class="nx-statusbar"><span id="nx-studio-status">Listo</span><span>Snap ${SNAP} · Guardado automático activo</span></div></section><aside id="ep" class="nx-studio-inspector"></aside></div>
 <div class="nx-studio-footer"><span>Proyecto local · Nixora Blox</span><span>WASD mover cámara · F centrar · Ctrl+Z deshacer · Ctrl+Y rehacer · Supr borrar</span></div></section><input id="ifl" type="file" accept="image/*,.json" hidden onchange="insFile(this)">`;setT(tool);
 if(!SR){SR=new THREE.WebGLRenderer({antialias:true});SS=new THREE.Scene();SS.background=new THREE.Color('#202735');SS.add(new THREE.AmbientLight(0xffffff,.78));
  const l=new THREE.DirectionalLight(0xffffff,.75);l.position.set(5,10,7);STUDIO_GRID=new THREE.GridHelper(120,120,0x8292a7,0x465267);SS.add(l,STUDIO_GRID);
  gp=new THREE.Mesh(new THREE.PlaneGeometry(60,60).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({visible:false}));SS.add(gp);SCm=new THREE.PerspectiveCamera(60,1,.1,200);
  const d=SR.domElement;d.tabIndex=0;d.setAttribute('aria-label','Viewport 3D. Usa WASD para mover la cámara.');let dn=0,mx=0;
  d.onpointerdown=()=>{dn=1;mx=0};
  d.onpointermove=e=>{if(!dn)return;mx+=Math.abs(e.movementX)+Math.abs(e.movementY);sa-=e.movementX*.01;sp_=Math.max(.05,Math.min(1.5,sp_+e.movementY*.01));sr()};
  d.onpointerup=e=>{dn=0;if(mx<5&&e.button==0)sclick(e)};d.onpointerleave=()=>dn=0;d.oncontextmenu=e=>{e.preventDefault();const h=pick(e),i=h?SM.indexOf(h.object):-1;if(i>=0&&!sel().includes(i)){SEL=i;SELM=[];ssync()}ctxm(e,{k:'blk',i})};
  d.onwheel=e=>{e.preventDefault();sdi=Math.max(4,Math.min(60,sdi+e.deltaY*.02));sr()}}
 const h=$('#shd'),w=h.clientWidth||820,ht=h.clientHeight||Math.max(360,Math.min(920,innerHeight-285));h.appendChild(SR.domElement);SR.setPixelRatio(Math.min(window.devicePixelRatio||1,2));SR.setSize(w,ht,false);SCm.aspect=w/ht;SCm.updateProjectionMatrix();ssync();studioStartNav()}
function sr(){SCm.position.set(STG[0]+Math.sin(sa)*Math.cos(sp_)*sdi,STG[1]+Math.sin(sp_)*sdi,STG[2]+Math.cos(sa)*Math.cos(sp_)*sdi);SCm.lookAt(STG[0],STG[1],STG[2]);SR.render(SS,SCm)}
function rotS(axis,deg){const s=sel();if(!s.length){setT('rot');const e=$('#nx-studio-status');if(e)e.textContent='Selecciona una pieza para rotarla';return}for(const i of s){while(SBl[i].length<19)SBl[i].push(0);SBl[i][16+axis]=(Number(SBl[i][16+axis])||0)+deg}ssync();const e=$('#nx-studio-status');if(e)e.textContent='Rotación aplicada: '+deg+'°'}
function paintStudioColor(c){ICOL=c;const s=sel();if(s.length){s.forEach(i=>SBl[i][6]=c);ssync()}}
function setStudioMaterial(v){IMT=+v;sel().forEach(i=>SBl[i][11]=IMT);if(sel().length)ssync()}
function centerStudioCamera(){STG=SBl[SEL]?[SBl[SEL][0],SBl[SEL][1],SBl[SEL][2]]:[0,0,0];if(!SBl[SEL]){sa=.8;sp_=.7;sdi=18}else sdi=Math.max(6,...[SBl[SEL][3],SBl[SEL][4],SBl[SEL][5]].map(v=>v*3));sr();const e=$('#shd');if(e)e.focus({preventScroll:true})}
function toggleStudioGrid(){if(STUDIO_GRID)STUDIO_GRID.visible=!STUDIO_GRID.visible;sr();const e=$('#nx-studio-status');if(e)e.textContent='Cuadrícula '+(STUDIO_GRID&&STUDIO_GRID.visible?'visible':'oculta')}
function studioNavTick(now){if(cur!=='studio'||!$('#shd')){STUDIO_NAV_FRAME=0;STUDIO_LAST=0;return}const dt=Math.min(.05,STUDIO_LAST?(now-STUDIO_LAST)/1000:.016);STUDIO_LAST=now;const fast=STUDIO_KEYS.ShiftLeft||STUDIO_KEYS.ShiftRight?3.4:1.35;let f=0,r=0,y=0;if(STUDIO_KEYS.KeyW||STUDIO_KEYS.ArrowUp)f+=1;if(STUDIO_KEYS.KeyS||STUDIO_KEYS.ArrowDown)f-=1;if(STUDIO_KEYS.KeyD||STUDIO_KEYS.ArrowRight)r+=1;if(STUDIO_KEYS.KeyA||STUDIO_KEYS.ArrowLeft)r-=1;if(STUDIO_KEYS.KeyE) y+=1;if(STUDIO_KEYS.KeyQ)y-=1;if(f||r||y){const l=Math.hypot(f,r)||1;f/=l;r/=l;STG[0]+=(-Math.sin(sa)*f+Math.cos(sa)*r)*fast*dt*18;STG[2]+=(-Math.cos(sa)*f-Math.sin(sa)*r)*fast*dt*18;STG[1]+=y*fast*dt*18;sr()}STUDIO_NAV_FRAME=requestAnimationFrame(studioNavTick)}
function studioStartNav(){if(!STUDIO_NAV_FRAME){STUDIO_LAST=0;STUDIO_NAV_FRAME=requestAnimationFrame(studioNavTick)}}
function studioNavKey(e,down){if(cur!=='studio'||/INPUT|TEXTAREA|SELECT/.test(e.target?.tagName||''))return;const codes=['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ShiftLeft','ShiftRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];if(!codes.includes(e.code))return;STUDIO_KEYS[e.code]=down;if(down){e.preventDefault();studioStartNav()}}
addEventListener('keydown',e=>studioNavKey(e,true));addEventListener('keyup',e=>studioNavKey(e,false));addEventListener('blur',()=>{Object.keys(STUDIO_KEYS).forEach(k=>STUDIO_KEYS[k]=false)});
addEventListener('resize',()=>{if(cur==='studio'&&SR&&$('#shd')){const h=$('#shd'),w=h.clientWidth||820,ht=h.clientHeight||Math.max(360,Math.min(920,innerHeight-285));SR.setSize(w,ht,false);SCm.aspect=w/ht;SCm.updateProjectionMatrix();sr()}});

const GEO=window.THREE?[new THREE.BoxGeometry(1,1,1),new THREE.SphereGeometry(.5,16,12),new THREE.CylinderGeometry(.5,.5,1,16),new THREE.ConeGeometry(.5,1,4).rotateY(Math.PI/4)]:[],
shp=b=>{const m=new THREE.Mesh(GEO[b[10]|0]||GEO[0],mat(b));m.scale.set(b[3],b[4],b[5]);m.rotation.set((b[16]||0)*Math.PI/180,(b[17]||0)*Math.PI/180,(b[18]||0)*Math.PI/180);return m};
let STUDIO_SAVE_TIMER=null;
function scheduleStudioAutosave(){if(!me||cur!=='studio'||!U[me])return;clearTimeout(STUDIO_SAVE_TIMER);STUDIO_SAVE_TIMER=setTimeout(()=>{if(cur==='studio'&&U[me]){U[me].proj={b:SBl.map(x=>x.slice(0,20)),st:{...ST},sc:SCR.map(x=>({...x}))};save()}},1600)}
function ssync(){const curS=JSON.stringify(SBl);if(curS!=LAST){HI.push(LAST);if(HI.length>60)HI.shift();HR=[]}LAST=curS;
 const oc=$('#nx-object-count');if(oc)oc.textContent=SBl.length+' objetos';const st=$('#nx-studio-status');if(st)st.textContent=(SEL>=0?'Seleccionado: '+(SBl[SEL]?.[14]||ROLES[SBl[SEL]?.[12]|0]||'Pieza'):'Sin selección');SM.forEach(m=>SS.remove(m));SM=SBl.map((b,i)=>{const m=shp(b);m.position.set(b[0],b[1],b[2]);if(b[13])m.layers.set(1);if(m.material.emissive&&sel().includes(i))m.material.emissive.set(0x555555);SS.add(m);return m});sr();epr();scheduleStudioAutosave()}
function undo(){if(!HI.length)return;HR.push(LAST);SBl=JSON.parse(HI.pop());LAST=JSON.stringify(SBl);SEL=-1;ssync()}
function redo(){if(!HR.length)return;HI.push(LAST);SBl=JSON.parse(HR.pop());LAST=JSON.stringify(SBl);SEL=-1;ssync()}
function sclick(e){const r=SR.domElement.getBoundingClientRect();m2.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);rc.setFromCamera(m2,SCm);
 const h=rc.intersectObjects([...SM,gp])[0];if(!h)return;const i=SM.indexOf(h.object),p=h.point.toArray(),sn=v=>Math.round(v/SNAP)*SNAP;
 if(tool=='sel'){SEL=i;SELS='';ssync();return}
 if(tool=='del'){if(i>=0){SBl.splice(i,1);SEL=-1;ssync()}return}
 if(tool=='rot'){if(i>=0){SEL=i;SELM=[]}rotS(1,15);return}
 if(tool=='scl'){if(i>=0){SEL=i;SELM=[]}scl(1.1);return}
 if(tool=='mv'){const b=SBl[SEL];if(!b)return;if(i<0){b[0]=sn(p[0]);b[2]=sn(p[2]);b[1]=b[4]/2}else if(i!=SEL){const o=SBl[i];b[0]=sn(p[0]);b[2]=sn(p[2]);b[1]=o[1]+o[4]/2+b[4]/2}ssync();return}
 if(tool=='pf'){const oy=i<0?0:Math.round(p[1]);PF[PFS].forEach(b=>{const part=b.slice(0,20);part[0]=(Number(part[0])||0)+sn(p[0]);part[1]=(Number(part[1])||0)+oy;part[2]=(Number(part[2])||0)+sn(p[2]);SBl.push(part)});ssync();return}
 const s=[...ISZ];let b;
 if(i<0)b=[sn(p[0]),s[1]/2,sn(p[2])];
 else{const o=SBl[i],n=h.face.normal.toArray(),os=[o[3],o[4],o[5]];b=[0,1,2].map(a=>n[a]?o[a]+n[a]*(os[a]+s[a])/2:(a==1?o[1]:sn(p[a])))}
 SBl.push([...b,...s,ICOL,1,IR==6||IR==8?0:1,'',ISH,IMT,IR]);SEL=SBl.length-1;ssync()}
function testG(){play({n:'Prueba',by:me,sc:allSc(),b:SBl.filter(x=>!x[13]).map(x=>x.slice(0,20)),gr:ST.gcol,id:'t',st:{...ST},lava:ST.lava?1:0})}
function im2(f,w,h,cb){const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(i,0,0,w,h);cb(c.toDataURL('image/jpeg',.7))};i.src=r.result};r.readAsDataURL(f)}
function pub(){const t=$('#pt').value.trim(),d=$('#pd').value.trim(),h=$('#ph').value.trim(),f=$('#pi').files[0],bn=$('#pb').files[0],e=$('#pe');
 if(!t||!d||!f)return e.textContent='Nombre, descripción y logo son obligatorios.';
 if(h&&!/^#?\w{2,20}$/.test(h))return e.textContent='Hashtag no válido (2-20 caracteres, sin espacios).';
 im2(f,320,180,img=>{const done=ban=>{G.push({id:'u'+Date.now(),n:t,d,h:h?(h[0]=='#'?h:'#'+h):'',img,ban,b:SBl.filter(x=>!x[13]).map(x=>x.slice(0,20)),sc:allSc(),st:{...ST},lava:ST.lava?1:0,by:me,gr:ST.gcol});save();recordBuild(true);go('home')};bn?im2(bn,800,225,done):done('')})}

/* ---------- Amigos, perfiles y mensajes privados ---------- */
let FT='list',CHF=null,PVU=null;
const fr=()=>U[me].fr||(U[me].fr=[]),bl=()=>U[me].bl||(U[me].bl=[]),rq=()=>U[me].rq||(U[me].rq=[]);
function unblk(x){U[me].bl=bl().filter(y=>y!==x);save();friends()}
function friends(){const b=(k,t)=>`<button class="${FT==k?'':'s'}" onclick="FT='${k}';friends()">${t}</button> `;let h='';
 if(FT=='list')h=fr().filter(f=>U[f]&&!bl().includes(f)).map(f=>`<div class="srv">👤 <b>${esc(f)}</b>${tag(f)}<span style="margin-left:auto;display:flex;gap:4px;flex-wrap:wrap"><button class="s" onclick="prof('${f}')">Perfil</button><button onclick="CHF='${f}';go('chat')">Mensaje</button><button class="s" onclick="joinFriendRoom('${f}')">▶ Unirse</button><button class="s" onclick="rmF('${f}')">Eliminar</button><button class="s" onclick="blk('${f}')">Bloquear</button></span></div>`).join('')||'<i>Aún no tienes amigos. Usa «Buscar personas» para encontrar cuentas existentes.</i>';
 if(FT=='req')h=rq().filter(f=>U[f]&&!bl().includes(f)).map(f=>`<div class="srv">👤 <b>${esc(f)}</b>${tag(f)}<span style="margin-left:auto;display:flex;gap:4px"><button onclick="accF('${f}')">Aceptar</button><button class="s" onclick="rejF('${f}')">Rechazar</button></span></div>`).join('')||'<i>Sin solicitudes</i>';
 if(FT=='find')h='<input id="fq" placeholder="Buscar usuario existente…" autocomplete="off" oninput="fnd()"><div id="fres"></div>';
 if(FT=='blk')h=bl().map(f=>`<div class="srv">🚫 <b>${esc(f)}</b><span style="margin-left:auto"><button class="s" onclick="unblk('${f}')">Desbloquear</button></span></div>`).join('')||'<i>Nadie bloqueado</i>';
 $('#main').innerHTML=`<h2>👥 Amigos</h2>${b('list','Amigos ('+fr().filter(f=>U[f]&&!bl().includes(f)).length+')')}${b('req','Solicitudes ('+rq().length+')')}${b('find','Buscar personas')}${b('blk','Bloqueados')}<div style="margin-top:10px">${h}</div>`;if(FT=='find')fnd()}
function fnd(){const out=$('#fres'),input=$('#fq');if(!out||!input)return;const q=input.value.trim().toLowerCase();if(!q){out.innerHTML='';return}const matches=Object.keys(U).filter(u=>u!==me&&u.toLowerCase().includes(q)&&!bl().includes(u)&&!(U[u].bl||[]).includes(me)).slice(0,30);
 out.innerHTML=matches.map(u=>{const friend=fr().includes(u),sent=(U[u].rq||[]).includes(me);return `<div class="srv">👤 <b>${esc(u)}</b>${tag(u)}<span style="margin-left:auto;display:flex;gap:4px;flex-wrap:wrap">${friend?'<small>Amigo</small>':sent?'<small>Solicitud enviada</small>':`<button onclick="addF('${u}')">➕ Añadir</button>`}<button class="s" onclick="prof('${u}')">Perfil</button></span></div>`}).join('')}
function addF(x){const t=U[x];if(!t||x===me||bl().includes(x)||(t.bl||[]).includes(me)||fr().includes(x)||(t.rq||[]).includes(me))return;t.rq=t.rq||[];if(!t.rq.includes(me))t.rq.push(me);ensureUser(me).stats.friendRequestsSent++;missionEvent('friends',1);if(FT==='find')fnd();prof(x)}
async function joinFriendRoom(name){try{await refreshOnlinePlayers();const p=ONLINE_PLAYERS.find(x=>String(x.n).toLowerCase()===String(name).toLowerCase());if(!p)return alert(name+' no está conectado en este momento.');const world=p.world||String(p.g||'').split('::')[0],g=gmx(world);if(!g)return alert('No pude encontrar el mundo donde está tu amigo.');if(p.private){const code=prompt('Tu amigo está en una sala privada. Pídele el código y escríbelo aquí.');if(code===null)return;const c=code.trim().toUpperCase();if(!/^[A-Z0-9]{4,12}$/.test(c))return alert('Código inválido.');play(world,c,false)}else play(world)}catch(e){alert('No se pudo consultar el servidor. Revisa Ajustes → Servidor.')}}
function rejF(x){U[me].rq=rq().filter(y=>y!==x);if(U[x])U[x].rq=(U[x].rq||[]).filter(y=>y!==me);save();friends()}
function accF(x){const i=rq().indexOf(x);if(i<0||!U[x]||bl().includes(x)||(U[x].bl||[]).includes(me))return;rq().splice(i,1);if(!fr().includes(x))fr().push(x);const t=U[x];t.fr=t.fr||[];if(!t.fr.includes(me))t.fr.push(me);t.rq=(t.rq||[]).filter(y=>y!==me);save();friends()}
function rmF(x){U[me].fr=fr().filter(y=>y!==x);if(U[x])U[x].fr=(U[x].fr||[]).filter(y=>y!==me);CHF=CHF===x?null:CHF;save();if(cur==='friends')friends();else if(cur==='chat')chat()}
function blk(x){if(x===me)return;U[me].fr=fr().filter(y=>y!==x);if(U[x]){U[x].fr=(U[x].fr||[]).filter(y=>y!==me);U[x].rq=(U[x].rq||[]).filter(y=>y!==me)}U[me].rq=rq().filter(y=>y!==x);if(!bl().includes(x))bl().push(x);CHF=CHF===x?null:CHF;save();FT='blk';if(cur==='friends')friends();else if(cur==='chat')chat()}
function prof(x){const u=ensureUser(x);if(!u)return;if(x===me)checkAchievements();PVU=u.av;const ws=G.filter(g=>g.by===x),as=MK.filter(m=>m.by===x&&m.t==='avatar'),f=fr().includes(x),blocked=bl().includes(x),blockedByThem=(u.bl||[]).includes(me),sent=(u.rq||[]).includes(me),stats=u.stats||{},myAchievements=(u.achievements||[]).map(id=>ACHIEVEMENTS.find(a=>a.id===id)).filter(Boolean),last=stats.lastWorld?gmx(stats.lastWorld):null;
 const actions=x===me?`<button class="s" onclick="editMyDescription()">✏️ Editar descripción</button>`:blocked?`<button class="s" onclick="unblk('${x}')">Desbloquear</button>`:blockedByThem?'<small>Este usuario no está disponible para interacción.</small>':(f?`<button class="s" onclick="rmF('${x}')">Eliminar amigo</button><button onclick="CHF='${x}';go('chat')">Mensaje</button><button class="s" onclick="joinFriendRoom('${x}')">▶ Unirse</button>`:sent?'<button class="s" disabled>Solicitud enviada</button>':`<button onclick="addF('${x}')">➕ Añadir amigo</button>`)+(!blockedByThem?` <button class="s" onclick="blk('${x}')">Bloquear</button>`:'');
 $('#main').innerHTML=`<div class="av"><div id="pvh"></div><div style="flex:1;min-width:240px"><h2>👤 ${esc(x)}${tag(x)}</h2><p>${esc(u.desc||'Sin descripción')}</p>${actions}<div class="rbar"><button class="s" onclick="go('missions')">🏆 Misiones y logros</button>${x===me?`<button class="s" onclick="go('inventory')">🎒 Mi inventario</button>`:''}</div><h3>📊 Estadísticas</h3><div class="row" style="flex-wrap:wrap"><div class="set">🎮 Partidas: <b>${stats.totalPlays||0}</b></div><div class="set">🌎 Mundos visitados: <b>${(stats.worldsVisited||[]).length}</b></div><div class="set">🪙 Monedas recogidas: <b>${stats.coinsCollected||0}</b></div><div class="set">🧱 Proyectos guardados: <b>${stats.projectsSaved||0}</b></div><div class="set">🚀 Mundos publicados: <b>${stats.worldsPublished||0}</b></div><div class="set">👥 Amigos: <b>${(u.fr||[]).length}</b></div></div><p><small>Miembro desde ${new Date(u.createdAt||Date.now()).toLocaleDateString()}${last?' · Último mundo: '+esc(last.n):''}</small></p><h3>🏅 Insignias (${myAchievements.length})</h3><div class="row" style="flex-wrap:wrap">${myAchievements.map(a=>`<div class="set" style="display:block">🏆 <b>${esc(a.title)}</b><br><small>${esc(a.desc)}</small></div>`).join('')||'<i>Aún no desbloqueó insignias.</i>'}</div><h3>🌍 Mundos creados (${ws.length})</h3><div class="row">${ws.map(card).join('')||'<i>Ninguno</i>'}</div><h3>🧍 Avatares publicados (${as.length})</h3>${as.map(m=>`<div class="srv">${esc(m.n)}</div>`).join('')||'<i>Ninguno</i>'}</div></div>`;pvw()}
function missions(){const u=ensureUser(me),d=dailyState(u);checkAchievements();const status=m=>{const n=m.kind==='worlds'?(d.progress.worlds||0):(d.progress[m.kind]||0);return Math.min(n,m.goal)};
 $('#main').innerHTML=`<h2>🏆 Misiones y logros</h2><p>Misiones diarias · ${esc(d.date)}. Al completar una misión, la recompensa se añade automáticamente a tu saldo.</p><h3>📅 Misiones de hoy</h3>${DAILY_MISSIONS.map(m=>{const n=status(m),done=d.claimed.includes(m.id);return `<div class="set" style="display:block"><div style="display:flex;gap:12px;justify-content:space-between;flex-wrap:wrap"><div><b>${done?'✅':n>=m.goal?'🏆':'🎯'} ${esc(m.title)}</b><div><small>${esc(m.desc)}</small></div></div><b>+${m.reward} Nixdollar</b></div><div style="height:8px;background:#12061f;border-radius:8px;overflow:hidden;margin-top:8px"><div style="height:100%;width:${Math.round(n/m.goal*100)}%;background:#9d4edd"></div></div><small>${n}/${m.goal} · ${done?'Completada':'En progreso'}</small></div>`}).join('')}<h3>🏅 Logros permanentes</h3>${ACHIEVEMENTS.map(a=>{const got=u.achievements.includes(a.id);return `<div class="set" style="display:block">${got?'🏆':'🔒'} <b>${esc(a.title)}</b> · ${got?'Desbloqueado':'Bloqueado'}<div><small>${esc(a.desc)} · Recompensa: ${a.reward} Nixdollar</small></div></div>`}).join('')}<p>Saldo actual: <b>${nd()} Nixdollar</b></p>`;updWallet()}
function equipOwned(t,i){const key=t+':'+i;if(!own()[key]&&price(t,i)>0&&A()[t]!==i)return alert('Todavía no tienes este objeto. Puedes conseguirlo en la sección Avatar.');A()[t]=i;if(t==='pet')delete A().petC;save();inventory()}
function inventory(){const u=ensureUser(me),a=A(),items=[];for(const t of Object.keys(SH||{})){const vals=SH[t]||[];for(let i=0;i<vals.length;i++){const key=t+':'+i;if(own()[key]||a[t]===i)items.push({t,i,n:vals[i],equipped:a[t]===i})}}
 const market=MK.filter(m=>own()['m:'+m.id]&&['avatar','mascota','modelo'].includes(m.t));
 $('#main').innerHTML=`<h2>🎒 Inventario</h2><p>Objetos de tu cuenta y accesorios que puedes equipar desde aquí.</p><div class="set"><b>💵 ${nd()} Nixdollar</b><button class="s" onclick="go('avatar')">Abrir tienda de avatar</button></div><h3>🧢 Accesorios y opciones desbloqueadas (${items.length})</h3><div class="row" style="flex-wrap:wrap">${items.map(it=>`<div class="card2" style="flex-basis:180px"><b>${esc(it.n)}</b><small>${esc(it.t)} · ${it.equipped?'Equipado':'Disponible'}</small><button class="${it.equipped?'s':''}" onclick="equipOwned('${it.t}',${it.i})">${it.equipped?'Equipado':'Equipar'}</button></div>`).join('')||'<i>Aún no tienes objetos comprados. Puedes conseguirlos en Avatar y Tienda.</i>'}</div><h3>🛍 Objetos del Mercado (${market.length})</h3><div class="row" style="flex-wrap:wrap">${market.map(m=>`<div class="card2" style="flex-basis:180px"><b>${esc(m.n)}</b><small>${esc(m.t)} · por ${esc(m.by)}</small><button onclick="useM('${m.id}')">Usar objeto</button></div>`).join('')||'<i>No tienes objetos del Mercado en el inventario.</i>'}</div>`}

function chat(){const L=fr().filter(f=>U[f]&&!bl().includes(f)&&!(U[f].bl||[]).includes(me));if(!CHF||!L.includes(CHF))CHF=L[0]||null;const m=CHF?((U[me].msg||{})[CHF]||[]):[];
 $('#main').innerHTML=`<h2>💬 Mensajes privados</h2><div class="st"><div style="flex:0 0 210px;display:grid;gap:4px;align-content:start">${L.map(f=>`<button class="${f===CHF?'':'s'}" onclick="CHF='${f}';chat()">👤 ${esc(f)}</button>`).join('')||'<i>Añade amigos para chatear</i>'}</div><div style="flex:1 1 300px;min-width:0">${CHF?`<div class="rbar"><b>Chat con ${esc(CHF)}</b><button class="s" onclick="rmF('${CHF}')">Eliminar amigo</button><button class="s" onclick="blk('${CHF}')">Bloquear</button></div>`:''}<div id="cm" class="set" style="display:block;height:340px;overflow:auto;overflow-wrap:anywhere">${m.map(x=>`<div><b>${esc(x.w)}${tag(x.w)}:</b> ${esc(x.m)}</div>`).join('')||'<i>Sin mensajes</i>'}</div>${CHF?`<div style="display:flex;gap:6px"><input id="cmi" maxlength="300" placeholder="Escribe un mensaje…" onkeydown="if(event.key==='Enter'){sendM();event.preventDefault()}"><button onclick="sendM()">Enviar</button></div>`:''}</div></div>`;const c=$('#cm');if(c)c.scrollTop=1e9}
function sendM(){if(U[me].mute)return alert('Estás silenciado');const i=$('#cmi'),t=bad((i?.value||'').trim()),x=CHF;if(!t||!x||!U[x]||(U[x].bl||[]).includes(me)||bl().includes(x)||!fr().includes(x))return;const o={w:me,m:t};[[me,x],[x,me]].forEach(([a,b])=>{const u=U[a];u.msg=u.msg||{};u.msg[b]=((u.msg[b]||[]).concat(o)).slice(-100)});save();chat()}

/* ---------- Códigos promocionales (recompensas validadas en servidor) ---------- */
function codesPage(){
 const owner=isOw(me);
 $('#main').innerHTML=`<div class="hero"><h2 style="margin:0 0 6px">🎁 Códigos de Nixora Blox</h2><p>Canjea un código promocional para recibir Nixdollars. Cada cuenta puede usar cada código una sola vez. Los códigos no caducan por tiempo: siguen disponibles hasta que ParaCraftero los elimina.</p></div><section class="set" style="display:grid;gap:8px"><b>Canjear código</b><div class="rbar"><input id="promoRedeemInput" maxlength="32" placeholder="Ej.: BIENVENIDA2026" style="text-transform:uppercase;max-width:340px"><button onclick="redeemPromoCode()">Canjear</button></div><small id="promoRedeemMessage" role="status"></small><small>Las recompensas se validan y guardan en PostgreSQL, no solo en el navegador.</small></section>${owner?`<section class="set" style="display:grid;gap:8px;margin-top:12px"><h3 style="margin:0">🛠 Administrar códigos (solo ParaCraftero)</h3><label>Código promocional <input id="promoNewCode" maxlength="32" placeholder="NIXORA100" autocapitalize="characters"></label><label>Recompensa en Nixdollars <input id="promoReward" type="number" min="1" max="1000000000" step="1" value="100"></label><label>Canjes totales máximos (0 = ilimitados, sin fecha de caducidad) <input id="promoMaxUses" type="number" min="0" max="1000000" step="1" value="0"></label><button onclick="createPromoCode()">➕ Crear código</button><small id="promoAdminMessage" role="status"></small><div id="promoAdminList"><small>Cargando códigos…</small></div></section>`:''}`;
 if(owner)loadPromoCodes();
}
async function redeemPromoCode(){const input=$('#promoRedeemInput'),msg=$('#promoRedeemMessage');if(!input||!msg)return;const code=input.value.trim().toUpperCase();if(!/^[A-Z0-9_-]{3,32}$/.test(code)){msg.textContent='Usa entre 3 y 32 letras, números, guiones o guiones bajos.';return}if(!ACTIVE_SESSION_ID||ACTIVE_SESSION_USER!==me){msg.textContent='Tu sesión no está validada. Sal y vuelve a entrar.';return}msg.textContent='Comprobando código…';try{const r=await fetch('/api/codes/redeem',{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify({username:me,sessionId:ACTIVE_SESSION_ID,code})});const d=await r.json().catch(()=>({}));if(!r.ok){msg.textContent=d.error||'No se pudo canjear el código.';return}U[me].nd=Math.max(0,Math.floor(Number(d.balance)||0));save();updWallet();msg.textContent='✅ Código canjeado: +'+d.reward+' Nixdollars. Nuevo saldo del servidor: '+d.balance+'.';input.value='';}catch(e){msg.textContent='No se pudo conectar con Render. Comprueba que el servicio esté Live.'}}
async function createPromoCode(){if(!isOw(me))return;const msg=$('#promoAdminMessage'),code=String($('#promoNewCode')?.value||'').trim().toUpperCase(),reward=Math.floor(Number($('#promoReward')?.value)||0),maxRedemptions=Math.floor(Number($('#promoMaxUses')?.value)||0);if(!msg)return;if(!/^[A-Z0-9_-]{3,32}$/.test(code)){msg.textContent='El código debe tener 3–32 caracteres: letras, números, - o _.';return}if(!Number.isSafeInteger(reward)||reward<1||reward>1000000000){msg.textContent='La recompensa debe ser un entero entre 1 y 1.000.000.000.';return}if(!Number.isSafeInteger(maxRedemptions)||maxRedemptions<0||maxRedemptions>1000000){msg.textContent='Canjes máximos inválidos.';return}if(!ACTIVE_SESSION_ID||ACTIVE_SESSION_USER!==me){msg.textContent='Vuelve a iniciar sesión para validar tu cuenta.';return}const key=getEconomyAdminKey();if(!key)return;msg.textContent='Creando código…';try{const r=await fetch('/api/codes/admin-create',{method:'POST',headers:{'Content-Type':'application/json','x-admin-key':key},cache:'no-store',body:JSON.stringify({actor:me,sessionId:ACTIVE_SESSION_ID,code,reward,maxRedemptions})});const d=await r.json().catch(()=>({}));if(!r.ok){if(r.status===403){try{sessionStorage.removeItem('nx_admin_key')}catch{}}msg.textContent=d.error||'No se pudo crear el código.';return}msg.textContent='✅ Código '+d.code+' creado con recompensa de '+d.reward+' Nixdollars.';$('#promoNewCode').value='';await loadPromoCodes();}catch(e){msg.textContent='No se pudo conectar con PostgreSQL en Render.'}}
async function loadPromoCodes(){if(!isOw(me))return;const out=$('#promoAdminList');if(!out)return;const key=getEconomyAdminKey();if(!key){out.textContent='Introduce la llave de administrador cuando se solicite.';return}try{const r=await fetch('/api/codes/admin-list?actor='+encodeURIComponent(me)+'&sessionId='+encodeURIComponent(ACTIVE_SESSION_ID||''),{headers:{'x-admin-key':key},cache:'no-store'}),d=await r.json().catch(()=>({}));if(!r.ok){out.textContent=d.error||'No se pudo cargar el catálogo.';return}out.innerHTML='<h4>Códigos creados ('+d.codes.length+')</h4><small>Los códigos no caducan por tiempo: siguen disponibles hasta que los elimines.</small>'+ (d.codes.map(c=>`<div class="promo-code-row"><div><b>${esc(c.code)}</b><small>+${Number(c.reward)||0} Nixdollars · ${Number(c.usedCount)||0}/${Number(c.maxRedemptions)||'∞'} canjes · Permanente</small></div><div class="promo-code-actions"><button class="s" onclick="editPromoCode('${esc(c.code)}',${Number(c.reward)||0},${Number(c.maxRedemptions)||0})">✏️ Editar</button><button class="s danger" onclick="deletePromoCode('${esc(c.code)}')">🗑 Eliminar</button></div></div>`).join('')||'<small>Aún no hay códigos.</small>');}catch(e){out.textContent='No se pudo conectar con Render.'}}
async function editPromoCode(code,reward,maxRedemptions){if(!isOw(me))return;const newCode=prompt('Nombre del código (3–32 caracteres)',code);if(newCode===null)return;const nextReward=prompt('Recompensa en Nixdollars',String(reward));if(nextReward===null)return;const nextLimit=prompt('Límite total de canjes (0 = ilimitado)',String(maxRedemptions));if(nextLimit===null)return;const rwd=Number(nextReward),lim=Number(nextLimit),cleanCode=newCode.trim().toUpperCase();if(!/^[A-Z0-9_-]{3,32}$/.test(cleanCode)||!Number.isSafeInteger(rwd)||rwd<1||rwd>1000000000||!Number.isSafeInteger(lim)||lim<0||lim>1000000){alert('Datos inválidos. Revisa el nombre, la recompensa y el límite.');return}const key=getEconomyAdminKey();if(!key)return;try{const r=await fetch('/api/codes/admin-edit',{method:'POST',headers:{'Content-Type':'application/json','x-admin-key':key},cache:'no-store',body:JSON.stringify({actor:me,sessionId:ACTIVE_SESSION_ID,code,newCode:cleanCode,reward:rwd,maxRedemptions:lim})}),d=await r.json().catch(()=>({}));if(!r.ok)alert(d.error||'No se pudo editar el código.');else{alert('✅ Código actualizado: '+d.code);loadPromoCodes()}}catch(e){alert('No se pudo conectar con Render.')}}
async function deletePromoCode(code){if(!isOw(me)||!confirm('¿Eliminar permanentemente el código '+code+'? Ya no se podrá canjear.'))return;const key=getEconomyAdminKey();if(!key)return;try{const r=await fetch('/api/codes/admin-delete',{method:'POST',headers:{'Content-Type':'application/json','x-admin-key':key},cache:'no-store',body:JSON.stringify({actor:me,sessionId:ACTIVE_SESSION_ID,code})}),d=await r.json().catch(()=>({}));if(!r.ok)alert(d.error||'No se pudo eliminar el código.');else loadPromoCodes()}catch(e){alert('No se pudo conectar con Render.')}}

/* ---------- Configuración ---------- */
const CF=[
['Gráficos','fps:Límite de FPS:15:144:60','Sombras,Niebla,Partículas,Reflejos,Bloom,Mostrar FPS,VSync,Antialiasing,Texturas HD,Pantalla completa,Cielo animado,Efectos de agua'],
['Sonido','vol:Volumen general:0:100:70,mus:Música:0:100:50,fx:Efectos:0:100:80','Silenciar todo,Silenciar al minimizar,Música del menú,Música en juegos,Sonido de pasos,Sonido 3D,Sonido de notificaciones,Voces'],
['Controles','sens:Sensibilidad:.2:3:1','Invertir eje Y,Correr con Shift,Vibración del mando,Saltar con espacio,Agacharse con C,Mantener para correr,Atajos de teclado,Zoom con rueda'],
['Cámara','fov:Campo de visión:50:110:70,dist:Distancia:3:20:8','Suavizado,Balanceo al caminar,Sacudida,Bloqueo de cámara,Primera persona,Centrar al moverse,Ocultar cursor al rotar'],
['Privacidad','','Mostrarme en línea,Aceptar solicitudes,Aceptar invitaciones,Mensajes de desconocidos,Inventario público,Juegos públicos,Modo invisible,Filtro de lenguaje,Filtro de enlaces,Confirmar antes de unirme,Controles parentales,Verificación en dos pasos'],
['Chat','','Activar chat,Burbujas,Mostrar hora,Filtro de palabras,Comandos,Sonido de mensaje,Chat de voz,Avisos de menciones,Colores de nombre'],
['Social','','Estado visible,Aviso de amigo en línea,Aviso de amigo jugando,Permitir seguirme,Amigos en el inicio,Mensaje de ausencia,Grupos'],
['Interfaz','ui:Tamaño de interfaz:80:130:100','Animaciones,Transparencias,Barra lateral fija,Esquinas redondeadas,Mostrar consejos,Pantalla de carga,Tarjetas compactas,Efecto al pasar el cursor'],
['Accesibilidad','','Alto contraste,Reducir movimiento,Texto grande,Subtítulos,Avisos visuales de sonido,Cursor grande,Teclas fijas,Lector de pantalla'],
['Rendimiento','','Modo ahorro,Calidad dinámica,Precarga,Caché,Aceleración por hardware,Limpiar memoria,Monitor de rendimiento'],
['Notificaciones','','Activar,Solicitudes,Mensajes,Invitaciones,Amigos,Novedades,Ofertas,No molestar'],
['Minion','','Activar Minion,Seguir automáticamente,Saltar con el jugador,Responder en el chat'],
['Estudio','','Cuadrícula visible,Imán,Guardado automático,Autocompletado,Mostrar ejes,Deshacer ilimitado']],
OFF=/^(Silenc|Invert|Modo|Alto|Reduc|Texto|Cursor|Teclas|Lector|Subt|Avisos v|Controles p|Verif|Primera|No mol|Mostrar FPS)/;
function cfg(){$('#main').innerHTML=`<section class="nx-settings-page"><header class="nx-settings-hero"><div><small>NIXORA · PREFERENCIAS</small><h2>⚙ Ajustes</h2><p>Personaliza controles, privacidad, cuenta y apariencia.</p></div><span class="nx-settings-mark">⚙</span></header><div class="nx-settings-grid"><div class="set" style="display:grid;gap:8px"><b>📱 Controles móviles</b><label>Tipo de movimiento <select id="touchmode" onchange="C.touchmode=this.value;save();document.body.classList.toggle('controls-buttons',this.value==='buttons')"><option value="joystick" ${cv('touchmode','joystick')==='joystick'?'selected':''}>Joystick (predeterminado)</option><option value="buttons" ${cv('touchmode','joystick')==='buttons'?'selected':''}>Botones direccionales</option></select></label><label>Tamaño de controles <input type="range" min="48" max="120" value="${cv('touchsize',80)}" oninput="C.touchsize=+this.value;document.documentElement.style.setProperty('--btn-size',this.value+'px');document.documentElement.style.setProperty('--joy-size',(this.value*1.5)+'px');save()"></label><small>Los cambios se guardan en este dispositivo.</small></div><div class="set" style="display:grid;gap:4px"><b>📝 Mi descripción (máx. 750 letras)</b><textarea id="ds" maxlength="750" rows="4" oninput="$('#dc').textContent=this.value.length+'/750'">${esc(U[me].desc||'')}</textarea><small id="dc">${(U[me].desc||'').length}/750</small><button onclick="U[me].desc=$('#ds').value.slice(0,750);save();$('#dc').textContent='✔ Guardada'">Guardar descripción</button></div>
<div class="set" style="display:grid;gap:4px"><b>🎨 Fondo y ambiente del menú</b>
<label>Color de fondo <input type="color" value="${cv('bgC','#12061f')}" onchange="setBG('bgC',this.value)"></label>
<label>Color de acento <input type="color" value="${cv('acc','#7b2cbf')}" onchange="setBG('acc',this.value)"></label>
<label>Imagen de fondo <input type="file" accept="image/*" onchange="bgImg(this)"></label><button class="s" onclick="setBG('bgI','')">Quitar imagen</button>
<label>Mostrar figuras flotantes <input type="checkbox" ${cv('bgOn',true)?'checked':''} onchange="setBG('bgOn',this.checked)"></label>
<label>Mostrar estrellas y anillo <input type="checkbox" ${cv('bgS',true)?'checked':''} onchange="setBG('bgS',this.checked)"></label>
<label>Forma <select onchange="setBG('bgSh',+this.value)" style="background:#241040;color:#fff;border-radius:8px;padding:6px">${['Cubos','Esferas','Pirámides','Gemas'].map((t,i)=>`<option value="${i}" ${cv('bgSh',0)==i?'selected':''}>${t}</option>`).join('')}</select></label>
<label>Color de las figuras <input type="color" value="${cv('bgCol','#9d4edd')}" onchange="setBG('bgCol',this.value)"></label><button class="s" onclick="setBG('bgCol','')">Colores mixtos</button>
<label>Cantidad <input type="range" min="0" max="120" value="${cv('bgN',45)}" onchange="setBG('bgN',+this.value)"></label></div>
<div class="set" style="display:grid;gap:4px"><b>👤 Cuenta</b><input id="nu" placeholder="Nuevo nombre de usuario"><button onclick="chU()">Cambiar usuario</button><input id="op" type="password" placeholder="Contraseña actual"><input id="np" type="password" placeholder="Nueva contraseña"><button onclick="chP()">Cambiar contraseña</button><small id="am"></small></div>
<div class="set" style="display:grid;gap:6px"><b>🔐 Seguridad de cuenta</b><label>Nombre de este dispositivo (opcional) <input maxlength="40" placeholder="Ej.: PC de casa o Android" value="${esc(cv('deviceName',''))}" onchange="C.deviceName=this.value.slice(0,40);save()"></label><small>Si lo dejas vacío, el historial mostrará el sistema y el navegador.</small><label>Guardar ubicación aproximada en el historial (opcional) <input type="checkbox" ${cv('loginLocation',false)?'checked':''} onchange="C.loginLocation=this.checked;save()"></label><small>Solo se solicita permiso al iniciar sesión si lo activas. La ubicación se redondea de forma amplia antes de guardarla. No se guarda la IP. Cada sesión se registra con dispositivo, fecha y hora.</small>${isOw(me)?'<button class="s" onclick="loadLoginHistory()">📋 Ver inicios de sesión y dispositivos</button><div id="loginHistory"><small>Pulsa para consultar el historial del servidor.</small></div>':''}</div>
<label class="set">🌐 Servidor multijugador<input id="srv" value="${esc(cv('srv',SRV0))}" onchange="C.srv=this.value;save()"></label></div><section class="nx-settings-advanced"><h3>⚙ Opciones avanzadas</h3><input id="cs" placeholder="🔎 Buscar ajuste…" oninput="cfs()"><div id="cl" class="nx-settings-controls"></div></section></div>`;cfs()}
async function loadLoginHistory(){const out=$('#loginHistory');if(!out)return;out.innerHTML='<small>Cargando el historial del servidor…</small>';const key=getEconomyAdminKey();if(!key){out.innerHTML='<small>Hace falta la llave administrativa.</small>';return}try{const r=await fetch('/api/auth/login-history?actor='+encodeURIComponent(me),{headers:{'x-admin-key':key},cache:'no-store'}),d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'No se pudo leer el historial.');const active=(d.active||[]).map(a=>`<div class="srv"><b>${esc(a.username)}</b><small>${esc(a.device)} · ${esc(a.location)} · última señal ${new Date(a.lastSeen).toLocaleString()}</small></div>`).join('')||'<small>No hay sesiones activas ahora.</small>';const events=(d.events||[]).map(a=>`<div class="srv"><b>${a.success?'✅':'⚠️'} ${esc(a.username)}</b><small>${esc(a.device)} · ${esc(a.location)}<br>${new Date(a.createdAt).toLocaleString()} · ${esc(a.detail)}</small></div>`).join('')||'<small>Aún no hay registros.</small>';out.innerHTML='<h4>Sesiones activas</h4>'+active+'<h4>Últimos intentos de inicio (máx. 150)</h4>'+events}catch(e){out.innerHTML='<small>'+esc(e.message)+'</small>'}}
async function chU(){const n=$('#nu').value.trim(),m=$('#am');if(!/^[A-Za-z0-9_]{8,15}$/.test(n)||BAD.test(n))return m.textContent='No puedes escribir ese usuario!';if(isOw(me)||isOw(n))return m.textContent='El nombre ParaCraftero está protegido.';if(Object.keys(U).some(x=>x.toLowerCase()===n.toLowerCase()))return m.textContent='Ese usuario ya existe';if(!ACTIVE_SESSION_ID)return m.textContent='No hay una sesión segura activa. Vuelve a entrar.';const password=prompt('Por seguridad, confirma tu contraseña actual para cambiar el nombre.');if(password===null)return;try{const r=await fetch('/api/auth/username/change',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:me,newUsername:n,sessionId:ACTIVE_SESSION_ID,password,device:deviceLabel(),location:'No compartida'})}),d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'No se pudo cambiar el usuario.');const old=me;U[n]=U[old];delete U[old];G.forEach(g=>{if(g.by===old)g.by=n});me=n;ACTIVE_SESSION_USER=n;try{sessionStorage.removeItem('nx_session_id_'+old.toLowerCase());sessionStorage.setItem('nx_session_id_'+n.toLowerCase(),ACTIVE_SESSION_ID)}catch{}save();$('#who').innerHTML='👤 '+esc(n)+tag(n);m.textContent='✔ Usuario cambiado y sincronizado con el servidor'}catch(e){m.textContent=e.message||'No se pudo cambiar el usuario.'}}
async function chP(){const o=$('#op').value,n=$('#np').value,m=$('#am');if(isOw(me))return m.textContent='Cambia la contraseña de ParaCraftero en Render → Environment → NIXORA_ADMIN_PASSWORD. NIXORA_ADMIN_KEY es una segunda llave distinta.';if(n.length<8||n.length>15||BAD.test(n))return m.textContent='No puedes escribir esa contraseña!';if(!ACTIVE_SESSION_ID)return m.textContent='No hay una sesión segura activa. Vuelve a entrar.';try{const r=await fetch('/api/auth/password/change',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:me,sessionId:ACTIVE_SESSION_ID,oldPassword:o,newPassword:n})}),d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'No se pudo cambiar la contraseña.');U[me].h=hs(n);save();m.textContent='✔ Contraseña cambiada y sincronizada con el servidor'}catch(e){m.textContent=e.message||'No se pudo cambiar la contraseña.'}}
function cfs(){const q=$('#cs').value.toLowerCase();
 $('#cl').innerHTML=CF.map((s,i)=>{
  const R=(s[1]?s[1].split(','):[]).map(r=>r.split(':')).filter(r=>r[1].toLowerCase().includes(q)).map(r=>`<label class="set">${r[1]}<span><input type="range" min="${r[2]}" max="${r[3]}" step="${r[3]-r[2]<5?.1:1}" value="${cv(r[0],+r[4])}" oninput="C['${r[0]}']=+this.value;save();this.nextSibling.textContent=this.value"><b>${cv(r[0],+r[4])}</b></span></label>`),
  T=s[2].split(',').map((t,j)=>[t,j]).filter(x=>x[0].toLowerCase().includes(q)).map(([t,j])=>`<label class="set">${t}<input type="checkbox" ${cv(i+'_'+j,!OFF.test(t))?'checked':''} onchange="C['${i}_${j}']=this.checked;save()"></label>`);
  return R.length+T.length?`<h3>${s[0]}</h3>`+R.join('')+T.join(''):''}).join('')}

/* ---------- Fondo 3D del menú ---------- */
function bgBuild(){if(!BGS)return;BGU.forEach(m=>BGS.remove(m));BGU=[];const n=Math.min(60,Math.max(8,cv('bgN',24))),sh=cv('bgSh',0),col=cv('bgCol','');
 for(let i=0;i<n;i++){const z=Math.random()*2+.5,g=[new THREE.BoxGeometry(z,z,z),new THREE.SphereGeometry(z/2,8,6),new THREE.ConeGeometry(z/2,z,4),new THREE.IcosahedronGeometry(z/2)][sh],
  m=new THREE.Mesh(g,new THREE.MeshLambertMaterial({color:col?new THREE.Color(col):new THREE.Color().setHSL((260+Math.random()*50)/360,.7,.35+Math.random()*.25),transparent:true,opacity:.75}));
  m.position.set((Math.random()-.5)*40,(Math.random()-.5)*24,-Math.random()*20);m.userData={v:(Math.random()+.3)*.01,y:m.position.y};m.visible=cv('bgOn',true);BGS.add(m);BGU.push(m)}
 BGS.userData.ex.visible=cv('bgS',true)}
function bg3d(){const r=new THREE.WebGLRenderer({canvas:$('#bg'),alpha:true,antialias:false,powerPreference:'low-power'}),s=BGS=new THREE.Scene(),cm=new THREE.PerspectiveCamera(60,1,.1,100);cm.position.z=14;r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.1));
 s.add(new THREE.AmbientLight(0xffffff,.6));const l=new THREE.DirectionalLight(0xffffff,.65);l.position.set(5,8,10);s.add(l);
 const ex=new THREE.Group(),sp=new Float32Array(600);for(let i=0;i<600;i++)sp[i]=(Math.random()-.5)*(i%3==2?30:90);
 const st=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(sp,3)),new THREE.PointsMaterial({color:0xe0c3ff,size:.12})),
 ring=new THREE.Mesh(new THREE.TorusGeometry(9,.06,6,64),new THREE.MeshBasicMaterial({color:0xc77dff}));ring.position.z=-8;ring.rotation.x=1.1;
 ex.add(st,ring);s.add(ex);s.userData.ex=ex;bgBuild();
 const rs=()=>{r.setSize(innerWidth,innerHeight);cm.aspect=innerWidth/innerHeight;cm.updateProjectionMatrix()};rs();addEventListener('resize',rs);
 let bgFrame=0,lastBgRender=0;
 const stop=()=>{if(bgFrame)cancelAnimationFrame(bgFrame);bgFrame=0};
 const tick=t=>{bgFrame=0;if(!$('#play').hidden||document.hidden)return;if(t-lastBgRender<32){bgFrame=requestAnimationFrame(tick);return}lastBgRender=t;BGU.forEach(m=>{const u=m.userData;m.rotation.x+=u.v*2;m.rotation.y+=u.v*2.8;m.position.y=u.y+Math.sin(t/1400+u.v*500)*.6});ring.rotation.z=t/8000;st.rotation.y=t/50000;r.render(s,cm);bgFrame=requestAnimationFrame(tick)};
 window.__nxBgStop=stop;window.__nxBgStart=()=>{if(!bgFrame&&$('#play').hidden&&!document.hidden)bgFrame=requestAnimationFrame(tick)};
 document.addEventListener('visibilitychange',()=>document.hidden?stop():window.__nxBgStart());window.__nxBgStart();}

let BGS,BGU=[];
function applyBG(){const c=cv('bgC','#12061f'),i=cv('bgI',''),b=document.body.style;b.backgroundImage=i?`url(${i})`:`linear-gradient(135deg,${c},#2a0a4d,#0d1b4a,${c})`;b.backgroundSize=i?'cover':'300% 300%';b.backgroundPosition='center';b.animation=i?'none':'';document.documentElement.style.setProperty('--p',cv('acc','#7b2cbf'))}
function setBG(k,v){C[k]=v;save();applyBG();bgBuild()}
function bgImg(i){const f=i.files[0];if(!f)return;if(f.size>6e5){alert('Máximo 600 KB');return}const r=new FileReader();r.onload=()=>setBG('bgI',r.result);r.readAsDataURL(f)}
if(window.THREE)bg3d();applyBG();

/* ---------- Móvil: joystick y botón de salto ---------- */
const TOUCH=matchMedia('(pointer:coarse)').matches||'ontouchstart' in window;if(TOUCH)document.body.classList.add('touch');if(cv('touchmode','joystick')==='buttons')document.body.classList.add('controls-buttons');document.documentElement.style.setProperty('--btn-size',cv('touchsize',80)+'px');document.documentElement.style.setProperty('--joy-size',(cv('touchsize',80)*1.5)+'px');
let JV={x:0,y:0},JJ=0,JC=0,JA=0;
(()=>{const j=$('#joy'),kn=$('#knob'),b=$('#jb');let id=null;
 const mvk=e=>{const r=j.getBoundingClientRect(),cx=r.width/2,cy=r.height/2,dx=e.clientX-r.left-cx,dy=e.clientY-r.top-cy,rad=Math.min(cx,cy)-kn.offsetWidth/2,l=Math.min(Math.hypot(dx,dy),rad)/(rad||1),a=Math.atan2(dy,dx);JV.x=Math.cos(a)*l;JV.y=Math.sin(a)*l;kn.style.transform=`translate(${JV.x*rad}px,${JV.y*rad}px)`};
 j.onpointerdown=e=>{id=e.pointerId;j.setPointerCapture(id);mvk(e)};j.onpointermove=e=>{if(e.pointerId==id)mvk(e)};
 j.onpointerup=j.onpointercancel=()=>{id=null;JV.x=JV.y=0;kn.style.transform=''};
 const bindDir=(id,code)=>{const el=$('#'+id);if(!el)return;el.onpointerdown=e=>{e.preventDefault();kMobile[code]=1;};el.onpointerup=el.onpointercancel=()=>kMobile[code]=0};const kMobile=window.__nxDir={};for(const [id,code] of [['upb','KeyW'],['downb','KeyS'],['leftb','KeyA'],['rightb','KeyD']])bindDir(id,code);addEventListener('keydown',e=>{if(kMobile[e.code]!==undefined)kMobile[e.code]=1});addEventListener('keyup',e=>{if(kMobile[e.code]!==undefined)kMobile[e.code]=0});const ab=$('#ab');ab.onpointerdown=()=>JA=1;const cb=$('#cb');cb.onpointerdown=()=>{JC=!JC;cb.style.background=JC?'#c77dff':''};b.onpointerdown=()=>JJ=1;b.onpointerup=b.onpointercancel=()=>JJ=0})();

addEventListener('keydown',e=>{if(!$('#ep')||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||!$('#play').hidden)return;const k=e.code,c=e.ctrlKey||e.metaKey,s=sel();CTX=null;
 if(c&&k=='KeyZ'){e.preventDefault();e.shiftKey?redo():undo();return}if(c&&k=='KeyY'){e.preventDefault();redo();return}
 if(c&&k=='KeyC'){e.preventDefault();cpy();return}if(c&&k=='KeyX'){e.preventDefault();cut();return}if(c&&k=='KeyV'){e.preventDefault();pst(e.shiftKey&&SELS?SELS:'');return}
 if(c&&k=='KeyD'){e.preventDefault();dup();return}if(c&&k=='KeyG'){e.preventDefault();grp();return}if(c&&k=='KeyU'){e.preventDefault();ugrp();return}
 if(k=='F2'){e.preventDefault();ren();return}if(k=='KeyF'&&!c){zoomTo();return}
 if(!s.length)return;if(k=='Delete'||k=='Backspace'){delS();return}
 const d={ArrowLeft:[0,-1],ArrowRight:[0,1],ArrowUp:[2,-1],ArrowDown:[2,1],PageUp:[1,1],PageDown:[1,-1]}[k];if(d){e.preventDefault();s.forEach(i=>{SBl[i][d[0]]+=d[1]*SNAP});ssync()}});

let ADM={fly:0,noclip:0,speed:0,jump:0,grav:0,god:0,inf:0,invis:0,size:1,freeze:0,zoom:0},GAME=null,APO=0,APT='Inicio',ASEL='',EDITG='',CLG=['Escribe /help para ver los comandos.'],ONLINE_PLAYERS=[],AP_REFRESH=null;
const STD={clock:14,bright:1,fog:150,fogStyle:'soft',sky:'',skyPreset:0,walk:6,jump:10.5,grav:28,lava:0,gcol:'#2a1245',hud:'',msg:'',clouds:1,skyImg:''};
async function refreshOnlinePlayers(){try{const base=cv('srv',SRV0).replace(/^ws/,'http').replace(/\/$/,'');const r=await fetch(base+'/players',{cache:'no-store'});if(!r.ok)return;const d=await r.json();ONLINE_PLAYERS=Array.isArray(d.players)?d.players:[]}catch(e){ONLINE_PLAYERS=[]}}
function apOpen(){if(!me||!can('Usar panel de administrador'))return;APO=1;ASEL=ASEL||me;document.exitPointerLock&&document.exitPointerLock();let d=$('#ap');if(!d){d=document.createElement('div');d.id='ap';document.body.appendChild(d)}d.hidden=false;apr();refreshOnlinePlayers().then(()=>{if(APO)apr()});clearInterval(AP_REFRESH);AP_REFRESH=setInterval(()=>{if(!APO)return;refreshOnlinePlayers().then(()=>{if(APO&&['Inicio','Usuarios'].includes(APT)&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||''))apr()})},5000)}
function apClose(){APO=0;clearInterval(AP_REFRESH);AP_REFRESH=null;const d=$('#ap');if(d)d.hidden=true}function adm(k,v,p){if(!need(p)){apr();return}ADM[k]=v;apr()}
function ga(k){const g=GAME;if(!g)return alert('Entra a un juego primero (pulsa P dentro del juego).');const p=g.pl,P={heal:'Curarse',spawn:'Teletransportarse',up:'Teletransportarse',sword:'Usar scripts avanzados',mobH:'Usar scripts avanzados',mobP:'Usar scripts avanzados',killm:'Usar scripts avanzados',block:'Añadir bloques a un juego',clouds:'Clima global',night:'Cambiar hora global',day:'Cambiar hora global',say:'Mensaje global'}[k];if(!need(P))return;
 if(k=='heal')p.hp=100;if(k=='spawn'){p.p.set(...g.SP);p.vy=0}if(k=='up')p.p.y+=15;if(k=='sword')g.api.sword();
 if(k=='mobH')g.api.mob(p.p.x+5,p.p.z,{hp:40,color:'#c1121f'});if(k=='mobP')g.api.mob(p.p.x+4,p.p.z+3,{peaceful:true,size:.7,color:'#ffffff'});
 if(k=='killm')g.mobs.forEach(m=>{m.dead=1;g.sc.remove(m.m)});if(k=='block')g.api.addBlock([p.p.x,p.p.y-.25,p.p.z,2,.5,2,'#9d4edd']);
 if(k=='clouds')g.cl.forEach(c=>{c.visible=!c.visible});
 if(k=='night'){g.api.sky(new g.api.THREE.Color(.15,.15,.2));g.api.light(.25)}if(k=='day'){g.api.sky(new g.api.THREE.Color(1,1,1));g.api.light(.75)}
 if(k=='say'){const t=prompt('Mensaje global');if(t)say('📢 '+me,t)}}
function getEconomyAdminKey(){let key='';try{key=sessionStorage.getItem('nx_admin_key')||''}catch{}if(!key){key=prompt('Introduce la clave NIXORA_ADMIN_KEY que configuraste en Environment de Render. No la compartas.');if(!key)return '';try{sessionStorage.setItem('nx_admin_key',key)}catch{}}return key}
async function loadServerWallets(showPrompt=true){if(showPrompt&&!can('Ver billeteras'))return;let key='';try{key=sessionStorage.getItem('nx_admin_key')||''}catch{}if(!key&&showPrompt)key=getEconomyAdminKey();if(!key)return;try{const r=await fetch('/api/economy/wallets?actor='+encodeURIComponent(me),{headers:{'x-admin-key':key},cache:'no-store'});const d=await r.json().catch(()=>({}));if(!r.ok){try{sessionStorage.removeItem('nx_admin_key')}catch{}if(showPrompt)alert(d.error||'No se pudo cargar la lista de billeteras.');return}SERVER_WALLETS=Array.isArray(d.wallets)?d.wallets:[];const out=$('#serverWalletList');if(out)out.innerHTML=SERVER_WALLETS.map(w=>`<div class="srv"><b>${esc(w.username)}</b><span style="margin-left:auto">💵 ${Number(w.balance)||0} Nixdollar</span><small>${w.updatedAt?new Date(w.updatedAt).toLocaleString():'Persistente'}</small></div>`).join('')||'<small>Todavía no hay billeteras compartidas. Usa Dar/Quitar/Fijar saldo para crear la primera.</small>';const count=$('#serverWalletCount');if(count)count.textContent=SERVER_WALLETS.length+' billeteras';}catch(e){if(showPrompt)alert('No se pudo conectar con el servidor. Comprueba que Render esté Live y que DATABASE_URL esté configurada.')}}
async function eco(k){const u=String($('#au')?.value||'').trim(),n=Math.max(0,Math.floor(Number($('#an')?.value)||0));const perm=k==='add'?'Dar Nixdollar':k==='sub'?'Quitar Nixdollar':'Fijar saldo';if(!need(perm))return;if(!u)return alert('Escribe o selecciona el nombre exacto del jugador.');if(!/^[A-Za-z0-9_]{8,15}$/.test(u))return alert('El nombre debe tener entre 8 y 15 letras, números o guiones bajos.');const known=Object.keys(U).some(x=>x.toLowerCase()===u.toLowerCase())||ONLINE_PLAYERS.some(p=>p.n.toLowerCase()===u.toLowerCase())||SERVER_WALLETS.some(w=>w.username.toLowerCase()===u.toLowerCase());if(!known)return alert('No encuentro ese usuario. Selecciona un jugador conectado, una cuenta local o una billetera del servidor.');const key=getEconomyAdminKey();if(!key)return;const localUser=Object.keys(U).find(x=>x.toLowerCase()===u.toLowerCase());const initialBalance=Math.max(0,Math.floor(Number(localUser?U[localUser].nd:0)||0));try{const r=await fetch('/api/economy/admin-adjust',{method:'POST',headers:{'Content-Type':'application/json','x-admin-key':key},body:JSON.stringify({actor:me,target:u,action:k,amount:n,initialBalance})});const d=await r.json().catch(()=>({}));if(!r.ok){if(r.status===403){try{sessionStorage.removeItem('nx_admin_key')}catch{}}return alert(d.error||'No se pudo ajustar el saldo. Revisa la configuración de Render.')}const local=Object.keys(U).find(x=>x.toLowerCase()===u.toLowerCase());if(local)U[local].nd=Number(d.balance)||0;if(String(me).toLowerCase()===String(u).toLowerCase()&&U[me])U[me].nd=Number(d.balance)||0;save();updWallet();alert('✅ Billetera compartida actualizada. '+d.username+' ahora tiene '+d.balance+' Nixdollar.');await loadServerWallets(false);apr()}catch(e){alert('No se pudo conectar con la economía del servidor. Confirma que Render esté Live y que DATABASE_URL esté configurada.')}}
function usr(k){const u=$('#au').value.trim(),t=U[u];if(!t){alert(ONLINE_PLAYERS.some(p=>p.n.toLowerCase()===u.toLowerCase())?'El jugador está activo, pero esta acción necesita su cuenta guardada en el navegador.':'Usuario no encontrado.');return}if(isOw(u)&&k!='desc'&&k!='ver')return alert('Esa cuenta está protegida.');
 const m={ban:['Banear',()=>{t.ban=1}],unban:['Desbanear',()=>{t.ban=0}],mute:['Silenciar jugador',()=>{t.mute=1}],unmute:['Quitar silencio',()=>{t.mute=0}],ver:['Verificar usuarios',()=>{t.ver=1}],unver:['Quitar verificado',()=>{t.ver=0}],pw:['Restablecer contraseña ajena',()=>{t.h=hs('Nixora1234');alert('Contraseña temporal: Nixora1234')}],desc:['Editar descripción ajena',()=>{const d=prompt('Descripción',t.desc||'');if(d!==null)t.desc=d.slice(0,750)}]}[k];
 if(!need(m[0]))return;m[1]();save();apr()}
function pall(ci){document.querySelectorAll('.pc[data-c="'+ci+'"]').forEach(c=>{c.checked=true})}
function mkRk(){if(!need('Crear rangos'))return;const n=$('#rn').value.trim(),ic=$('#ri').value.trim(),d=$('#rd').value.trim(),p=[...document.querySelectorAll('.pc:checked')].map(c=>+c.value),m=$('#rm');
 if(!n||!d)return m.textContent='El nombre y la descripción son obligatorios.';if(!p.length)return m.textContent='Elige al menos 1 permiso.';if(RK.some(r=>r.n.toLowerCase()==n.toLowerCase()))return m.textContent='Ya existe un rango con ese nombre.';
 RK.splice(RK.length-1,0,{id:'r'+Date.now(),n:n.slice(0,24),ic:ic.slice(0,4),d:d.slice(0,200),p,c:1});save();apr()}
function setRk(clear){const u=$('#au').value,r=clear?'novato':$('#ar').value;if(!U[u])return;if(isOw(u))return alert('El rango DUEÑO de ParaCraftero no se puede cambiar.');if(!need(clear?'Quitar rangos':'Asignar rangos'))return;if(r=='dueno'&&!need('Asignar rango DUEÑO'))return;U[u].rk=r;save();apr()}
function delRk(id){if(!need('Borrar rangos'))return;RK=RK.filter(r=>r.id!=id);Object.values(U).forEach(u=>{if(u.rk==id)u.rk='novato'});save();apr()}
function delMk(id){if(!need('Eliminar publicaciones'))return;MK=MK.filter(m=>m.id!=id);save();apr()}
function adminEdit(id){const g=gmx(id);EDITG=id;SBl=(g.b||[]).map(b=>b.slice(0,20));ST={...STD,...(g.st||{})};SCR=[{n:'Script',c:g.sc||''}];SSEL=0;SEL=-1;SELM=[];LAST=JSON.stringify(SBl);RT='Home';apClose();go('studio')}
function saveGame(){const o=OVR[EDITG]||(OVR[EDITG]={});o.b=SBl.filter(x=>!x[13]).map(x=>x.slice(0,20));o.sc=allSc();o.st={...ST};o.lava=ST.lava?1:0;save();recordBuild(false);alert('Juego actualizado.')}
function gact(id,k){const g=gmx(id),o=OVR[id]||(OVR[id]={}),P={edit:'Editar cualquier juego',hid:'Ocultar juego',feat:'Destacar juego',ren:'Cambiar nombre de juego',desc:'Cambiar descripción de juego',tag:'Cambiar hashtag',lava:'Activar lava',grav:'Cambiar gravedad de un juego',hour:'Cambiar hora de un juego',clone:'Clonar juego',own:'Transferir juego',del:'Borrar juego'}[k];if(!need(P))return;
 const st=()=>(o.st=o.st||{...(g.st||{})});
 if(k=='edit'){adminEdit(id);return}
 if(k=='hid')o.hid=!g.hid;if(k=='feat')o.feat=!g.feat;
 if(k=='ren'){const v=prompt('Nuevo nombre',g.n);if(v)o.n=v.slice(0,40)}
 if(k=='desc'){const v=prompt('Nueva descripción',g.d);if(v)o.d=v.slice(0,300)}
 if(k=='tag'){const v=prompt('Nuevo hashtag',g.h||'');if(v!==null)o.h=(!v||v[0]=='#')?v:'#'+v}
 if(k=='lava'){const l=(g.lava||(g.st&&g.st.lava))?0:1;o.lava=l;st().lava=l}
 if(k=='grav'){const v=+prompt('Gravedad (5-80)',(g.st&&g.st.grav)||28);if(v)st().grav=v}
 if(k=='hour'){const v=+prompt('Hora del día (0-24)',(g.st&&g.st.clock)??14);if(!isNaN(v))st().clock=v}
 if(k=='clone'){const c=JSON.parse(JSON.stringify({...g,id:'u'+Date.now(),n:g.n+' (copia)',by:me}));G.push(c)}
 if(k=='own'){const v=prompt('Nuevo dueño (usuario)',g.by);if(v&&U[v])o.by=v}
 if(k=='del'){if(!confirm('¿Borrar '+g.n+'?'))return;const i=G.findIndex(x=>x.id==id);if(i>=0){G.splice(i,1);delete OVR[id]}else o.hid=true}
 save();apr()}
function bk(){dl('nixora-backup.json',JSON.stringify({U,G,MK,RK,OVR,C,ANN}))}
function restore(o){if(o&&o.U){U=o.U;G=o.G||[];MK=o.MK||[];RK=o.RK||RK;OVR=o.OVR||{};C=o.C||{};ANN=o.ANN||'';save();alert('Datos importados.');location.reload()}}
function cmdA(t){if(!need('Ejecutar comandos'))return;const a=t.trim().replace(/^\//,'').split(/\s+/),c=a.shift(),L=s=>CLG.push(s);CLG.push('> '+t);
 const tgl=(k,p)=>{if(need(p)){ADM[k]=+!ADM[k];L(k+' = '+ADM[k])}},num=(k,p)=>{if(need(p)){ADM[k]=+a[0]||0;L(k+' = '+ADM[k])}},usrc=f=>{const u=a[0];if(!U[u])return L('Usuario no encontrado');if(isOw(u)&&c!='verify')return L('Cuenta protegida');f(U[u],u)};
 const M={help:()=>L('fly noclip god inf invis freeze · speed n · jump n · grav n · size n · tp x y z · heal · give usuario n · setbal usuario n · ban/unban/mute/unmute/verify usuario · rank usuario id · say texto'),
 fly:()=>tgl('fly','Volar'),noclip:()=>tgl('noclip','Atravesar paredes'),god:()=>tgl('god','Inmortalidad'),inf:()=>tgl('inf','Salto infinito'),invis:()=>tgl('invis','Invisibilidad'),freeze:()=>tgl('freeze','Congelar jugador'),
 speed:()=>num('speed','Velocidad personalizada'),jump:()=>num('jump','Salto personalizado'),grav:()=>num('grav','Gravedad baja'),size:()=>num('size','Cambiar tamaño'),
 tp:()=>{if(!GAME)return L('Entra a un juego');if(need('Teletransportarse')){GAME.pl.p.set(+a[0]||0,+a[1]||0,+a[2]||0);L('ok')}},heal:()=>{if(GAME&&need('Curarse')){GAME.pl.hp=100;L('ok')}},
 give:()=>{if(need('Dar Nixdollar'))usrc((t,u)=>{addND(u,+a[1]||0);save();updWallet();L(u+': 💵 '+(t.nd||0))})},setbal:()=>{if(need('Fijar saldo'))usrc((t,u)=>{t.nd=Math.max(0,+a[1]||0);save();updWallet();L(u+': 💵 '+t.nd)})},
 ban:()=>{if(need('Banear'))usrc(t=>{t.ban=1;save();L('baneado')})},unban:()=>{if(need('Desbanear'))usrc(t=>{t.ban=0;save();L('desbaneado')})},mute:()=>{if(need('Silenciar jugador'))usrc(t=>{t.mute=1;save();L('silenciado')})},unmute:()=>{if(need('Quitar silencio'))usrc(t=>{t.mute=0;save();L('ok')})},
 verify:()=>{if(need('Verificar usuarios'))usrc(t=>{t.ver=1;save();L('verificado')})},rank:()=>{if(need('Asignar rangos'))usrc(t=>{const r=a[1];if(!RK.some(x=>x.id==r))return L('Rango no existe: '+RK.map(x=>x.id).join(', '));if(r=='dueno'&&!need('Asignar rango DUEÑO'))return;t.rk=r;save();L('ok')})},
 say:()=>{if(need('Mensaje global')){say('📢 '+me,a.join(' '));L('enviado')}}};
 (M[c]||(()=>L('Comando desconocido. /help')))();apr();const i=$('#ci2');if(i)i.focus()}
function adminCatalog(){return PERM.flatMap(([cat,items])=>items.map(name=>({cat,name,integrated:IMPL.includes(name)})))}
function filterAdminTools(q){const inp=$('#toolSearch'),sel=$('#toolCat');if(inp&&q!==undefined)inp.value=q;const query=(inp?inp.value:q||'').trim().toLowerCase(),category=sel?sel.value:'Todas';const list=adminCatalog().filter(x=>(category==='Todas'||x.cat===category)&&(!query||(x.name+' '+x.cat).toLowerCase().includes(query)));const out=$('#admToolResults');if(!out)return;out.innerHTML=list.map(x=>`<article class="adm-tool-card"><div class="adm-tool-cardtop"><span class="adm-tool-icon">${x.integrated?'✓':'⋯'}</span><span class="adm-status ${x.integrated?'is-present':'is-pending'}">${x.integrated?'En el panel actual':'Pendiente de integración'}</span></div><b>${esc(x.name)}</b><small>${esc(x.cat)}</small><p>${x.integrated?'Existe una entrada o acción relacionada en el panel actual.':'Opción catalogada; necesita implementación adicional o soporte del servidor antes de funcionar.'}</p></article>`).join('')||'<div class="adm-empty">No se encontraron opciones con ese filtro.</div>';const count=$('#admToolCount');if(count)count.textContent=`${list.length} de ${adminCatalog().length} opciones`}
function adminQuick(tab){APT=tab;apr()}
function apr(){const d=$('#ap');if(!d)return;const tabs=['Inicio','Jugador','Economía','Usuarios','Rangos','Juegos','Mercado','Sistema','Studio','Consola','Herramientas','Permisos'],
 SS_='style="background:#241040;color:#fff;border-radius:8px;padding:6px"',U_=()=>{const names=[...new Set([...Object.keys(U),...ONLINE_PLAYERS.map(p=>p.n)])].filter(Boolean);return `<input id="au" list="nixoraTargets" value="${esc(ASEL||me||'')}" placeholder="Escribe o selecciona jugador" oninput="ASEL=this.value" ${SS_} style="max-width:260px"><datalist id="nixoraTargets">${names.map(u=>`<option value="${esc(u)}"></option>`).join('')}</datalist>`},
 tg=(k,l,p)=>`<label class="set">${l}<input type="checkbox" ${ADM[k]?'checked':''} onchange="adm('${k}',this.checked?1:0,'${p}')"></label>`,
 nm=(k,l,p,ph)=>`<label class="set">${l}<input type="number" value="${ADM[k]||''}" placeholder="${ph}" onchange="adm('${k}',+this.value||0,'${p}')" style="width:90px"></label>`;
 const T={
 Inicio:()=>`<section class="adm-welcome"><div><span class="adm-eyebrow">NIXORA BLOX · CONTROL CENTRAL</span><h2>Panel de administración</h2><p>Gestiona jugadores, experiencias, economía y seguridad desde el panel que ya conoces.</p></div><span class="adm-shield">🛡️</span></section><div class="adm-kpis"><article><small>Jugadores conectados</small><b>${ONLINE_PLAYERS.length}</b><span>En los mundos supervisados por este servidor</span></article><article><small>Cuentas locales</small><b>${Object.keys(U).length}</b><span>Guardadas en este navegador</span></article><article><small>Juegos disponibles</small><b>${DEF.length+G.length}</b><span>Incluye juegos predeterminados y creados</span></article><article><small>Catálogo de permisos</small><b>${PN.length}</b><span>Permisos y opciones catalogados</span></article></div><div class="adm-section-head"><div><h3>Acceso rápido</h3><p>Abre una sección sin cambiar el resto del juego.</p></div></div><div class="adm-shortcuts">${[['Usuarios','👥','Jugadores y moderación'],['Jugador','🎮','Herramientas durante una partida'],['Economía','💰','Nixdollar y billeteras'],['Juegos','🌎','Publicaciones y mundos'],['Rangos','🎖️','Rangos y permisos'],['Herramientas','🧰','Catálogo de funciones']].map(([t,i,d])=>`<button class="adm-shortcut" onclick="adminQuick('${t}')"><span>${i}</span><b>${t}</b><small>${d}</small><i>→</i></button>`).join('')}</div><div class="adm-dashboard-grid"><section class="adm-panel-card"><h3>Estado del panel</h3><div class="adm-statusline"><span class="adm-dot"></span><span>Panel cargado</span><b>Local</b></div><div class="adm-statusline"><span class="adm-dot ${ONLINE_PLAYERS.length?'':'is-muted'}"></span><span>Jugadores activos</span><b>${ONLINE_PLAYERS.length}</b></div><div class="adm-statusline"><span class="adm-dot"></span><span>Animaciones del personaje</span><b>Sin cambios</b></div><p class="adm-note">Las funciones marcadas como pendientes en Herramientas son un catálogo de permisos, no acciones activas. Varias operaciones de cuenta todavía dependen del almacenamiento local.</p></section><section class="adm-panel-card"><h3>Última comprobación</h3><p>Los jugadores conectados se actualizan automáticamente mientras el panel está abierto.</p><button class="adm-primary" onclick="refreshOnlinePlayers().then(()=>apr())">↻ Actualizar jugadores</button><button class="adm-secondary" onclick="bk()">⬇ Crear copia de seguridad local</button></section></div>`,
 Jugador:()=>`<small>${GAME?'Conectado al juego actual.':'Entra a un juego y pulsa P para usar los poderes en vivo.'}</small>`+tg('fly','🕊 Volar (Espacio sube, Shift baja)','Volar')+tg('noclip','👻 Atravesar paredes','Atravesar paredes')+tg('god','🛡 Inmortal (sin daño ni lava)','Inmortalidad')+tg('inf','🦘 Salto infinito','Salto infinito')+tg('invis','🫥 Invisible','Invisibilidad')+tg('freeze','🧊 Congelarme','Congelar jugador')+tg('zoom','🔭 Zoom ilimitado','Zoom ilimitado')+nm('speed','🏃 Velocidad (normal 6)','Velocidad personalizada','6')+nm('jump','⬆ Fuerza de salto (normal 10.5)','Salto personalizado','10.5')+nm('grav','🌙 Gravedad (normal 28)','Gravedad baja','28')+nm('size','📏 Tamaño (1 = normal)','Cambiar tamaño','1')+`<div class="rbar">${[['heal','❤ Curarme'],['spawn','📍 Ir al spawn'],['up','⬆ Subir 15'],['sword','⚔ Espada'],['mobH','👹 Enemigo'],['mobP','🐑 Animal'],['killm','☠ Quitar enemigos'],['block','🧱 Bloque bajo mis pies'],['clouds','☁ Nubes'],['night','🌙 Noche'],['day','☀ Día'],['say','📢 Mensaje global']].map(([k,t])=>`<button class="s" onclick="ga('${k}')">${t}</button>`).join('')}</div>`,
 Economía:()=>`<div class="rbar">${U_()}<input id="an" type="number" min="0" max="1000000000" step="1" value="100" style="width:120px"><button onclick="eco('add')">➕ Dar</button><button class="s" onclick="eco('sub')">➖ Quitar</button><button class="s" onclick="eco('set')">= Fijar saldo</button><button class="s" onclick="loadServerWallets()">↻ Actualizar billeteras del servidor</button></div><p class="adm-note">Los ajustes de saldo se guardan en PostgreSQL. La primera vez, el panel pedirá la clave secreta configurada en Render. No la compartas.</p><h3>💾 Billeteras compartidas del servidor <small id="serverWalletCount">${SERVER_WALLETS.length} billeteras</small></h3><div id="serverWalletList">${SERVER_WALLETS.map(w=>`<div class="srv"><b>${esc(w.username)}</b><span style="margin-left:auto">💵 ${Number(w.balance)||0} Nixdollar</span></div>`).join('')||'<small>Pulsa «Actualizar billeteras del servidor» para ver los saldos guardados.</small>'}</div>`+(can('Ver billeteras')?`<h3>💻 Billeteras locales de este navegador</h3>${Object.keys(U).map(u=>`<div class="srv"><b>${esc(u)}</b>${tag(u)}<span style="margin-left:auto">💵 ${U[u].nd||0}</span></div>`).join('')}`:'') ,
 Usuarios:()=>`<h3>🟢 Jugadores activos (${ONLINE_PLAYERS.length})</h3><div class="rbar">${ONLINE_PLAYERS.map(p=>`<button class="s" title="Seleccionar ${esc(p.n)}" onclick="ASEL='${esc(p.n)}';apr()">👤 ${esc(p.n)} · ${esc(p.g||'Mundo')}</button>`).join('')||'<small>No hay jugadores conectados en este momento.</small>'}</div><div class="rbar">${U_()}${[['ban','🚫 Banear'],['unban','✅ Desbanear'],['mute','🔇 Silenciar'],['unmute','🔊 Quitar silencio'],['ver','✔ Verificar'],['unver','✖ Quitar verificado'],['pw','🔑 Reset contraseña'],['desc','📝 Editar descripción']].map(([k,t])=>`<button class="s" onclick="usr('${k}')">${t}</button>`).join('')}</div>`+(can('Ver lista de usuarios')?Object.keys(U).map(u=>`<div class="srv"><b>${esc(u)}</b>${tag(u)}<small>${U[u].ban?'🚫 baneado ':''}${U[u].mute?'🔇 silenciado ':''}</small><span style="margin-left:auto">💵 ${U[u].nd||0}</span></div>`).join(''):'<small>Sin permiso para ver usuarios locales.</small>'),
 Rangos:()=>(can('Ver rangos')?`<h3>🎖 Rangos (${RK.length})</h3>${RK.map(r=>`<details class="set" style="display:block"><summary>${esc(r.ic||'')} <b>${esc(r.n)}</b> — ${esc(r.d)} <small>(${r.p.length} permisos)</small>${r.c?` <button class="s" onclick="event.preventDefault();delRk('${r.id}')">🗑</button>`:''}</summary>${can('Ver permisos')?'<small>'+r.p.map(i=>PN[i]).join(' · ')+'</small>':''}</details>`).join('')}`:'')+`<h3>Asignar rango</h3><div class="rbar">${U_()}<select id="ar" ${SS_}>${RK.map(r=>`<option value="${r.id}">${esc(r.n)}</option>`).join('')}</select><button onclick="setRk()">Asignar</button><button class="s" onclick="setRk(1)">Quitar rango</button></div>
 <h3>Crear rango</h3><div class="set" style="display:grid;gap:6px"><input id="rn" placeholder="Nombre del rango (obligatorio)" maxlength="24"><input id="ri" placeholder="Icono (opcional, ej. 🔥)" maxlength="4"><textarea id="rd" rows="2" placeholder="Descripción (obligatoria)" maxlength="200"></textarea><b>Permisos (elige al menos 1 de ${PN.length})</b>${PERM.map((c,ci)=>`<details><summary>${c[0]} (${c[1].length}) <button class="s" type="button" onclick="event.preventDefault();pall(${ci})">todo</button></summary>${c[1].map(n=>`<label class="set"><span>${n}</span><input type="checkbox" class="pc" data-c="${ci}" value="${PI[n]}"></label>`).join('')}</details>`).join('')}<button onclick="mkRk()">➕ Crear rango</button><small id="rm" style="color:#ff8fa3"></small></div>`,
 Juegos:()=>can('Ver todos los juegos')?[...DEF,...G].map(g=>gmx(g.id)).map(g=>`<div class="set" style="display:block"><b>${esc(g.n)}</b> <small>${esc(g.h||'')} · por ${esc(g.by)} ${g.hid?'· oculto ':''}${g.feat?'· ⭐':''}</small><div class="rbar">${[['edit','✏ Editar en Studio'],['hid',g.hid?'👁 Mostrar':'🙈 Ocultar'],['feat','⭐ Destacar'],['ren','Nombre'],['desc','Descripción'],['tag','Hashtag'],['lava','🔥 Lava'],['grav','Gravedad'],['hour','Hora'],['clone','Clonar'],['own','Transferir'],['del','🗑 Borrar']].map(([k,t])=>`<button class="s" onclick="gact('${g.id}','${k}')">${t}</button>`).join('')}</div></div>`).join(''):'<small>Sin permiso para ver juegos.</small>',
 Mercado:()=>MK.map(m=>`<div class="srv">${esc(m.t)} · <b>${esc(m.n)}</b><small>por ${esc(m.by)}</small><button class="s" style="margin-left:auto" onclick="delMk('${m.id}')">🗑 Eliminar</button></div>`).join('')||'<small>Vacío</small>',
 Sistema:()=>`<label class="set">Anuncio en pantalla<input id="an2" value="${esc(ANN)}" maxlength="140" style="flex:1;margin:0 8px"><button onclick="if(need('Anuncio en pantalla')){ANN=$('#an2').value;save();apr()}">Publicar</button></label><label class="set">Modo mantenimiento<input type="checkbox" ${C.maint?'checked':''} onchange="if(need('Modo mantenimiento')){C.maint=this.checked;save()}else this.checked=!this.checked"></label><div class="rbar"><button onclick="if(need('Exportar datos'))bk()">⬇ Exportar / copia de seguridad</button><button class="s" onclick="if(need('Importar datos'))$('#bki').click()">⬆ Importar datos</button><input id="bki" type="file" accept=".json" hidden onchange="rd(this,restore)"></div>`,
 Studio:()=>`<div class="rbar"><button onclick="if(need('Usar Studio de admin')){apClose();go('studio')}">🛠 Abrir Studio de administrador</button></div><small>Para editar un juego existente usa «Editar en Studio» en la pestaña Juegos; luego, en el Studio, pestaña Publicar → «Guardar cambios en el juego». ${EDITG?'Editando ahora: '+esc((gmx(EDITG)||{}).n||''):''}</small>`,
 Consola:()=>`<div class="set" style="display:block"><div style="height:220px;overflow:auto;font-family:monospace;font-size:13px">${CLG.slice(-60).map(l=>`<div>${esc(l)}</div>`).join('')}</div><input id="ci2" placeholder="/help" onkeydown="if(event.key=='Enter'){cmdA(this.value);this.value=''}"></div>`,
 Herramientas:()=>`<div class="adm-section-head"><div><h2>Catálogo de herramientas</h2><p>Busca entre todas las funciones catalogadas y comprueba cuáles ya tienen una entrada relacionada en el panel.</p></div><span id="admToolCount" class="adm-count">${adminCatalog().length} opciones</span></div><div class="adm-tool-filters"><input id="toolSearch" placeholder="Buscar herramienta, permiso o categoría…" oninput="filterAdminTools()"><select id="toolCat" onchange="filterAdminTools()"><option>Todas</option>${PERM.map(c=>`<option>${esc(c[0])}</option>`).join('')}</select></div><div class="adm-legend"><span class="adm-status is-present">En el panel actual</span><span class="adm-status is-pending">Pendiente de integración</span></div><div id="admToolResults" class="adm-tool-grid">${adminCatalog().map(x=>`<article class="adm-tool-card"><div class="adm-tool-cardtop"><span class="adm-tool-icon">${x.integrated?'✓':'⋯'}</span><span class="adm-status ${x.integrated?'is-present':'is-pending'}">${x.integrated?'En el panel actual':'Pendiente de integración'}</span></div><b>${esc(x.name)}</b><small>${esc(x.cat)}</small><p>${x.integrated?'Existe una entrada o acción relacionada en el panel actual.':'Opción catalogada; necesita implementación adicional o soporte del servidor antes de funcionar.'}</p></article>`).join('')}</div>`,
 Permisos:()=>`<small>${PN.length} permisos catalogados. ✔ = entrada/acción contemplada en el panel actual (${IMPL.length} permisos marcados) · ⏳ = pendiente de integrar.</small>`+PERM.map(c=>`<details class="set" style="display:block"><summary><b>${c[0]}</b> (${c[1].length})</summary>${c[1].map(n=>`<div>${IMPL.includes(n)?'✔':'⏳'} ${n}</div>`).join('')}</details>`).join('')};
 const icons={'Inicio':'⌂','Jugador':'🎮','Economía':'💰','Usuarios':'👥','Rangos':'🎖️','Juegos':'🌎','Mercado':'🛍️','Sistema':'⚙️','Studio':'🧱','Consola':'⌘','Herramientas':'🧰','Permisos':'🔐'};
 const pageTitles={'Inicio':'Resumen del servidor','Jugador':'Herramientas del jugador','Economía':'Economía y billeteras','Usuarios':'Usuarios y moderación','Rangos':'Rangos y permisos','Juegos':'Gestión de experiencias','Mercado':'Mercado','Sistema':'Ajustes del sistema','Studio':'Studio de administrador','Consola':'Consola administrativa','Herramientas':'Catálogo de herramientas','Permisos':'Catálogo de permisos'};
 d.innerHTML=`<div class="adm-shell"><aside class="adm-sidebar"><div class="adm-brand"><span class="adm-brandmark">N</span><div><b>Nixora Blox</b><small>ADMINISTRACIÓN</small></div></div><div class="adm-sidebar-label">PANEL</div><nav class="adm-nav">${tabs.map(t=>`<button class="adm-nav-btn ${APT==t?'active':''}" onclick="APT='${t}';apr()"><span>${icons[t]||'•'}</span><b>${t}</b>${t==='Usuarios'?`<i>${ONLINE_PLAYERS.length}</i>`:''}</button>`).join('')}</nav><div class="adm-sidebar-foot"><span class="adm-online-dot"></span><div><b>Panel activo</b><small>Atajo de teclado: P</small></div></div></aside><main class="adm-main"><header class="adm-topbar"><div><small>ADMINISTRACIÓN / ${esc((APT||'Inicio').toUpperCase())}</small><h1>${pageTitles[APT]||APT}</h1></div><div class="adm-top-actions"><span class="adm-user-chip">🛡 ${esc(me||'Admin')}</span><button class="adm-close" onclick="apClose()" title="Cerrar panel (P)">✕ <span>Cerrar</span></button></div></header><div class="adm-page">${T[APT]?T[APT]():'<div class="adm-empty">Selecciona una sección del panel.</div>'}</div></main></div>`;
 if(APT==='Herramientas')filterAdminTools();
}
addEventListener('keydown',e=>{if(!me||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.code=='KeyP'){const d=$('#ap');if(d&&!d.hidden)apClose();else apOpen()}else if(e.code=='Escape'&&APO)apClose()});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
