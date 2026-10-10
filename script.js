if(!window.THREE)document.body.insertAdjacentHTML('afterbegin','<div style="background:#b00020;color:#fff;padding:10px;text-align:center;position:relative;z-index:9">⚠ No cargó el motor 3D (Three.js). Conéctate a internet y recarga la página.</div>');
const $=s=>document.querySelector(s),
ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},
sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
hs=s=>{let x=7;for(const c of s)x=(x*31+c.charCodeAt(0))|0;return x},
esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
let OVR=ld('nx_o',{}),ANN=ld('nx_a',''),RK=ld('nx_r',null),MK=ld('nx_m',[]),U=ld('nx_u',{}),G=ld('nx_g',[]),C=ld('nx_c',{}),FR=ld('nx_f',['Ana_Blox','LunaPixel','Kratos_77']),me,cur='home',B=[],GR,quit=()=>{};
const save=()=>{sv('nx_u',U);sv('nx_g',G);sv('nx_c',C);sv('nx_f',FR);sv('nx_m',MK);sv('nx_r',RK);sv('nx_o',OVR);sv('nx_a',ANN)},
cv=(k,d)=>C[k]??d,A=()=>U[me].av,
AV0={skin:'#e0ac69',hair:'#4a2c0a',shirt:'#9d4edd',pants:'#2b2b6e',eyes:0,hairT:1,top:0,bot:0,acc:0,mouth:1,pet:0,petA:0},
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
const isOw=u=>u=='ParaCraftero',rk=u=>RK.find(r=>r.id==(isOw(u)?'dueno':((U[u]||{}).rk||'novato')))||RK[RK.length-1],
can=p=>!!me&&(isOw(me)||(rk(me).p||[]).includes(PI[p])),need=p=>can(p)||(alert('No tienes el permiso: '+p),false),
VBS=c=>`<svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align:-3px;margin-left:4px"><g transform="rotate(12 12 12)"><rect x="2.5" y="2.5" width="19" height="19" rx="1.5" fill="${c}"/></g><path d="M7 12.5l3.2 3.2L17 8.8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
tag=u=>{const r=rk(u),ow=isOw(u);return (ow?VBS('#dc3d3d'):((U[u]||{}).ver?VBS('#3b82f6'):''))+(r&&r.id!='novato'?` <small style="color:${ow?'#ff6b6b':'#c9a6ff'}">[${r.id=='dueno'?'':esc(r.ic||'')+' '}${esc(r.n)}]</small>`:'')},
nd=()=>(U[me]||{}).nd||0,addND=(u,n)=>{U[u].nd=Math.max(0,(U[u].nd||0)+n)},
updWallet=()=>{const w=$('#wal');if(w)w.textContent='💵 '+nd()+' Nixdollar';const l=$('#wl');if(l)l.textContent='💵 '+nd()},
own=()=>U[me].own||(U[me].own={}),BASE={eyes:5,mouth:5,hairT:10,top:15,bot:10,acc:20,pet:25,petA:15,ch:50,petT:40,aw:10,aj:10,ac:10},
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
function buy(t,i){const k=t+':'+i,p=price(t,i);if(!own()[k]&&A()[t]!=i&&p>0){if(!can('Tienda gratis')){if(nd()<p){alert('Necesitas '+p+' Nixdollar (tienes '+nd()+')');return}addND(me,-p)}own()[k]=1}A()[t]=i;if(t=='pet')delete A().petC;save();updWallet();avatar()}
/* ---------- Cuenta ---------- */
const BAD=/admin|root|<|>|script|\s/i;
function chk(){const u=$('#u').value;$('#hint').textContent=!u?'':U[u]?'⚠ Ese usuario ya existe (si es tuyo, inicia sesión; si no, elige otro nombre)':'✓ Nombre disponible'}
function auth(reg){const u=$('#u').value,p=$('#pw').value,e=$('#err');
 if(reg&&U[u])return e.textContent='Ese usuario ya existe. Elige otro nombre.';
 if(reg&&(!/^\w{8,15}$/.test(u)||p.length<8||p.length>15||BAD.test(u)||BAD.test(p)))return e.textContent='No puedes escribir ese usuario/contraseña!';
 if(reg){if(U[u])return e.textContent='Ese usuario ya existe';U[u]={h:hs(p),av:{...AV0},createdAt:Date.now(),desc:'',stats:{totalPlays:0,coinsCollected:0,projectsSaved:0,worldsPublished:0,friendRequestsSent:0,worldsVisited:[]},achievements:[],favGames:[]}}
 else if(!U[u]||U[u].h!==hs(p))return e.textContent='Usuario o contraseña incorrectos';
 else if(U[u].ban)return e.textContent='Esta cuenta está baneada.';else if(C.maint&&!isOw(u)&&rk(u).id!='dueno')return e.textContent='🛠 Mantenimiento: vuelve más tarde.';
 me=u;ensureUser(u);dailyState(U[u]);save();$('#auth').hidden=true;$('#app').hidden=false;$('#who').innerHTML='👤 '+esc(u)+tag(u);go('home')}

/* ---------- Juegos incluidos ---------- */
const isla=[],tor=[],are=[];
for(let i=0;i<10;i++){const a=i*.63,x=Math.cos(a)*14,z=Math.sin(a)*14;isla.push([x,1,z,.6,2,.6,'#6b4423'],[x,2.8,z,2.4,1.6,2.4,'#2d8a3e'])}
isla.push([0,.5,0,6,1,6,'#c9b27c'],[0,1,0,4,1,4,'#d9c690'],[0,1.5,0,2,1,2,'#e8d9a8'],[8,.05,-8,6,.1,6,'#3a86ff',.7,0],
 [-13.6,1.5,-4,1.8,3,.4,'#c9a66b'],[-10.4,1.5,-4,1.8,3,.4,'#c9a66b'],[-12,1.5,-8,5,3,.4,'#c9a66b'],[-14.3,1.5,-6,.4,3,4,'#c9a66b'],[-9.7,1.5,-6,.4,3,4,'#c9a66b'],[-12,3.2,-6,6,.4,5,'#a23b3b'],
 [-12,.5,-6,.6,.6,.6,'#ffd166',1,0,'',2,1,6],[16,3,16,2.2,6,2.2,'#e9ecef'],[16,6.4,16,3,.8,3,'#ffd166',1,1,'',0,1]);
for(let i=0;i<26;i++){const a=i*.55,c=i==25?'#ffd700':i%8==7?'#2fbf5b':`hsl(${270+i*4},75%,${45+i}%)`;tor.push([Math.cos(a)*6,i*.45,Math.sin(a)*6,3,.5,3,c,1,1,'',0,i==25?1:0,i==25?7:i%8==7?2:0])}
are.push([0,1.5,-20,40,3,1,'#6c757d'],[0,1.5,20,40,3,1,'#6c757d'],[-20,1.5,0,1,3,40,'#6c757d'],[20,1.5,0,1,3,40,'#6c757d'],[10,2,10,2,4,2,'#9d4edd'],[-10,2,10,2,4,2,'#9d4edd'],[10,2,-10,2,4,2,'#9d4edd'],[-10,2,-10,2,4,2,'#9d4edd'],[0,.25,0,6,.5,6,'#ffd166']);
const RS=s=>()=>(s=(s*16807)%2147483647)/2147483647,
box=(a,x,y,z,w,h,d,c,...r)=>a.push([x,y,z,w,h,d,c,...r]),
house=(a,x,z,c)=>{box(a,x,1.5,z-2,5,3,.4,c);box(a,x-1.6,1.5,z+2,1.8,3,.4,c);box(a,x+1.6,1.5,z+2,1.8,3,.4,c);box(a,x-2.3,1.5,z,.4,3,4,c);box(a,x+2.3,1.5,z,.4,3,4,c);box(a,x,3.2,z,6,.4,5,'#a23b3b')};
const maze=[],city=[],obby=[],vil=[],space=[],forest=[],desert=[],ice=[],castle=[],zomb=[];
{const N=10,W=2*N+1,g=Array.from({length:W},()=>Array(W).fill(1)),R=RS(7),st=[[1,1]];g[1][1]=0;
 while(st.length){const[x,y]=st[st.length-1],d=[[2,0],[-2,0],[0,2],[0,-2]].filter(([a,b])=>x+a>0&&y+b>0&&x+a<W&&y+b<W&&g[y+b][x+a]);if(!d.length){st.pop();continue}const[a,b]=d[R()*d.length|0];g[y+b/2][x+a/2]=0;g[y+b][x+a]=0;st.push([x+a,y+b])}
 for(let y=0;y<W;y++)for(let x=0;x<W;x++)if(g[y][x])box(maze,(x-1)*2,1.5,(y-1)*2,2,3,2,'#2d6a4f');
 box(maze,(W-2-1)*2,.1,(W-2-1)*2,2,.2,2,'#ffd700',1,1,'',0,1,7);for(let i=0;i<8;i++){const cx=1+2*(R()*N|0),cy=1+2*(R()*N|0);box(maze,(cx-1)*2,.6,(cy-1)*2,.6,.6,.6,'#ffd166',1,0,'',2,1,6)}}
{const R=RS(11);for(let i=-3;i<=3;i++)for(let j=-3;j<=3;j++){const h=3+(((i*7+j*13)%4)+4)%4*2,c=`hsl(${(i*40+j*25+360)%360},80%,50%)`;box(city,i*14,h/2,j*14,8,h,8,c,1,1,'',0,1);box(city,i*14,h+.6,j*14,.6,.6,.6,'#ffd166',1,0,'',2,1,6);box(city,i*14+7,.2,j*14+7,3,.4,3,'#ff00aa',1,1,'',0,1,4);if((i+j)%3==0)box(city,i*14+7,.1,j*14,3,.2,3,'#00e5ff',1,1,'',0,1,5)}}
for(let i=0;i<=30;i++){const z=-6-i*5,x=Math.sin(i*1.7)*4,t=1+Math.floor(i/3)*.3,k=i%6,w=i==30?6:k==1?1.4:3;box(obby,x,t-.5,z,w,1,i==30?6:3,i==30?'#ffd700':k==5?'#2fbf5b':`hsl(${i*12},70%,55%)`,1,1,'',0,i==30?1:0,i==30?7:k==5?2:k==2?4:k==3?5:0);if(k==4&&i<30)box(obby,x,t+.2,z,3,.4,.8,'#e63946',1,1,'',0,1,3)}
[[10,10],[-10,10],[10,-10],[-10,-10],[22,0],[-22,0]].forEach(([x,z],i)=>{house(vil,x,z,['#c9a66b','#b08968','#d4a373'][i%3]);box(vil,x,.5,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6)});
box(vil,0,.8,0,3,1.6,3,'#8d99ae');box(vil,0,1.7,0,2,.3,2,'#4895ef',.7,0);box(vil,-9,3,-40,12,6,2,'#adb5bd');box(vil,9,3,-40,12,6,2,'#adb5bd');box(vil,-16,5,-40,4,10,4,'#6c757d');box(vil,16,5,-40,4,10,4,'#6c757d');
for(let k=0;k<6;k++)box(vil,0,.5+k,-42-k*1.2,4,1,1.2,'#9a8c98');box(vil,0,5.5,-52,8,1,8,'#6c757d');box(vil,0,6.6,-52,.8,.8,.8,'#ffd700',1,0,'',2,1,6);
for(let i=0;i<18;i++){const a=i*2.4,r=30+i%5*3,x=Math.cos(a)*r,z=Math.sin(a)*r;box(vil,x,1,z,.6,2,.6,'#6b4423');box(vil,x,2.8,z,2.4,1.6,2.4,'#2d8a3e')}
{let a=0,r=8;for(let i=0;i<26;i++){const x=Math.cos(a)*r,z=Math.sin(a)*r,y=1.5+i*1.1;box(space,x,y,z,4,.6,4,`hsl(${200+i*6},80%,60%)`,1,1,'',i%3,1,i%7==6?2:0);if(i%2)box(space,x,y+1.2,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6);a+=4.2/r;r+=.45}box(space,Math.cos(a)*r,1.5+26*1.1,Math.sin(a)*r,6,.8,6,'#ffd700',1,1,'',0,1,7)}
{const R=RS(21);for(let i=0;i<70;i++){const a=R()*6.28,r=8+R()*45,x=Math.cos(a)*r,z=Math.sin(a)*r,h=2+R()*2;box(forest,x,h/2,z,.7,h,.7,'#5e3b1f');box(forest,x,h+.8,z,2.6,1.8,2.6,['#1b5e20','#2e7d32','#33691e'][i%3])}
 for(let i=0;i<12;i++){const a=i*.55+.2,r=6+i%4*2;box(forest,Math.cos(a)*r,1.2,Math.sin(a)*r,.35,.35,.35,'#b5ff4d',1,0,'',0,1,6)}
 for(let i=0;i<6;i++)box(forest,Math.cos(i*1.05)*5,.4,Math.sin(i*1.05)*5,1,.8,1,'#6c757d');box(forest,0,.35,0,2,.7,2,'#8d99ae');box(forest,0,1,0,.7,.7,.7,'#ffd700',1,0,'',2,1,6)}
{const pyr=(x,z,n)=>{for(let k=0;k<n;k++)box(desert,x,.5+k,z,(n-k)*2.4,1,(n-k)*2.4,'#e9c46a')};pyr(25,0,6);pyr(-25,10,5);pyr(0,-35,7);for(let i=0;i<6;i++)box(desert,Math.cos(i)*14,.6,Math.sin(i)*14,.6,.6,.6,'#ffd166',1,0,'',2,1,6);box(desert,25,6.6,0,1.2,.7,1.2,'#ffd700',1,0,'',2,1,6)}
{let a=0,r=7;for(let i=0;i<22;i++){const x=Math.cos(a)*r,z=Math.sin(a)*r;box(ice,x,.4+i*.35,z,3.2,.8,3.2,'#a8dadc',.75,1,'',0,2,i%6==5?2:0);if(i%3==1)box(ice,x,1.2+i*.35,z,.6,.6,.6,'#ffd166',1,0,'',2,1,6);a+=4/r;r+=.4}
 box(ice,12,1.5,-12,6,3,6,'#ffffff',1,1,'',1);box(ice,-14,1.5,10,6,3,6,'#ffffff',1,1,'',1);box(ice,Math.cos(a)*r,.4+22*.35,Math.sin(a)*r,5,.8,5,'#ffd700',1,1,'',0,1,7)}
for(let i=0;i<10;i++)box(castle,0,.4+i*.9,-6-i*5.5,4,.8,4,'#6c757d',1,1,'',0,0,i%4==3?2:0);box(castle,0,9.2,-66,16,1,16,'#495057');box(castle,0,10.2,-66,1,1,1,'#ffd700',1,0,'',2,1,6);box(castle,-8,12,-74,1.2,6,1.2,'#adb5bd');box(castle,8,12,-74,1.2,6,1.2,'#adb5bd');
for(let i=0;i<12;i++){const a=i/12*6.28;box(zomb,Math.cos(a)*16,.8,Math.sin(a)*16,2.6,1.6,.7,'#5d4037')}box(zomb,0,.25,0,5,.5,5,'#6c757d');
const DAYNIGHT="const T=game.THREE;game.onTick((dt,t)=>{const h=(8+t/4)%24,f=Math.max(0,Math.sin((h-6)/12*Math.PI));game.sky(new T.Color(.15+.85*f,.15+.85*f,.2+.8*f));game.light(.25+.55*f)});";
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
const DEF=[
{id:'d1',n:'Parkour Infinito',h:'#parkour',lava:1,d:'Un camino infinito que se genera mientras avanzas. El suelo es lava: si lo tocas mueres y vuelves a tu spawn. Cada 10 plataformas hay un checkpoint verde.',gr:'#5c0a0a',b:[],by:'Nixora',th:'linear-gradient(135deg,#ff6b35,#7b2cbf)',sc:`const P=game.player,R=i=>{const s=Math.sin(i*127.1+311.7)*43758.5453;return s-Math.floor(s)},pf={};
let gen=0,x=0,best=0,deaths=0;
const add=i=>{const c=i>0&&i%10==0,top=1+i*.08,z=-6-i*4.5,w=c?5:2.6+R(i+9)*1.6;x=Math.max(-8,Math.min(8,x+(R(i)-.5)*5));
 const col=c?'#2fbf5b':'hsl('+((250+i*7)%360)+',70%,55%)',m=[game.addBlock(c?[x,top-.5,z,w,1,w,col,1,1,'',0,0,2]:[x,top-.5,z,w,1,w,col])];
 if(c){m.push(game.addBlock([x,top+1.5,z,.2,3,.2,'#ffffff',1,0]),game.addBlock([x+.55,top+2.6,z,1,.6,.1,'#2fbf5b',1,0]))}
 else if(i%4==2)m.push(game.addBlock([x,top+.8,z,.5,.5,.5,'#ffd166',1,0,'',2,1,6]));
 pf[i]=m};
game.setSpawn(0,.25,0);game.onDie(()=>{deaths++});
for(;gen<25;gen++)add(gen);
game.say('🌋 El suelo es lava. Cada 10 plataformas hay un checkpoint verde. ¡El camino es infinito!');
game.onTick(()=>{const i=Math.max(0,Math.floor((-P.p.z-6)/4.5));while(gen<i+25){add(gen);gen++}
 if(i>best){best=i;if(best%25==0)game.say('🏁 ¡Plataforma '+best+'!')}
 const cpI=Math.max(0,Math.floor((-game.spawn()[2]-6)/4.5));
 for(const k in pf)if(+k<cpI-8){pf[k].forEach(game.removeBlock);delete pf[k]}
 game.hud('🏁 '+best+' · 🚩 '+cpI+' · 🪙 '+game.coins()+' · 💀 '+deaths)});`},
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
const spawn=()=>{wv++;const boss=wv%5==0,n=boss?1:2+wv*2;
 for(let i=0;i<n;i++){const a=i/n*6.28;alive++;game.mob(Math.cos(a)*14,Math.sin(a)*14,{hp:boss?150+wv*15:20+wv*8,size:boss?2.2:(i%3==0?1.3:.9),speed:boss?2.2:1.8+wv*.25+(i%3==1?1:0),dmg:boss?18:4+wv*2,color:boss?'#111111':(i%3==0?'#7b2cbf':'#c1121f')})}
 if(wv>1)game.addBlock([R(),.6,R(),.5,.5,.5,'#ff4d6d',1,0,'',2,1,8]);
 game.say(boss?'👹 ¡Jefe! Oleada '+wv:'🌊 Oleada '+wv)};
game.onKill(()=>{alive--;kills++;game.sound('Explosión');if(!alive)setTimeout(spawn,2500)});
spawn();game.onTick(()=>game.hud('Oleada '+wv+' · Bajas '+kills+' · Enemigos '+alive));`},
{id:'d5',n:'Laberinto Esmeralda',h:'#laberinto',d:'Un laberinto generado al azar. Encuentra las monedas escondidas y llega a la baldosa dorada del fondo.',gr:'#1b4332',b:maze,sp:[0,.05,0],by:'Nixora',th:'linear-gradient(135deg,#2d6a4f,#95d5b2)',sc:`game.say('🌿 Encuentra la salida dorada del laberinto.');game.onTick(()=>game.hud('🪙 '+game.coins()+' monedas'))`},
{id:'d6',n:'Ciudad Neón',h:'#ciudad',d:'Una ciudad de neón de noche con trampolines para saltar a los techos, aceleradores en las avenidas y monedas en los edificios.',gr:'#0b0b1a',b:city,sp:[0,.05,7],st:{clock:22,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#ff00aa,#00e5ff)',sc:`game.say('🌃 Usa los trampolines rosas y los aceleradores azules. ¡Junta las monedas!');game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d7',n:'Carrera de Obstáculos',h:'#obby',lava:1,d:'Obby de 30 etapas sobre lava: tablones angostos, ladrillos asesinos, trampolines, aceleradores y checkpoints. Meta dorada al final.',gr:'#5c0a0a',b:obby,by:'Nixora',th:'linear-gradient(135deg,#ff6b35,#2fbf5b)',sc:`game.say('🏁 Evita los ladrillos rojos. Checkpoints verdes cada 6 etapas.');game.onDie(()=>game.say('💀 ¡Otra vez!'));game.onTick(()=>game.hud('🏁 Etapa '+Math.max(0,Math.floor((-game.player.p.z-6)/5))+'/30'))`},
{id:'d8',n:'Pueblo Medieval',h:'#pueblo',d:'Un pueblo con casas, pozo, bosque, animales y un castillo con tesoro en lo alto. Tiene ciclo de día y noche.',gr:'#4a7c3a',b:vil,by:'Nixora',th:'linear-gradient(135deg,#b08968,#4a7c3a)',sc:`game.say('🏘 Explora el pueblo y sube al castillo del norte.');for(let i=0;i<8;i++)game.mob(Math.cos(i)*14,Math.sin(i)*14,{peaceful:true,speed:1,size:.6+i%3*.15,color:['#ffffff','#f4a261','#8d99ae'][i%3]});`+DAYNIGHT+`game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d9',n:'Espacio Gravedad Baja',h:'#espacio',lava:1,d:'Plataformas flotantes en espiral con gravedad baja. Cae en el vacío de plasma y vuelves al checkpoint. Meta dorada arriba.',gr:'#2b1055',b:space,st:{grav:8,clock:0,clouds:0},by:'Nixora',th:'linear-gradient(135deg,#240046,#7b2cbf)',sc:`game.say('🚀 Gravedad baja: ¡salta lejos! Cuidado con el plasma.');game.onTick(()=>game.hud('⬆ '+game.player.p.y.toFixed(1)+' m · 🪙 '+game.coins()))`},
{id:'d10',n:'Bosque Encantado',h:'#bosque',d:'Un bosque de noche con luciérnagas que son monedas, círculo de piedras y venados pacíficos. Busca el tesoro dorado en el centro.',gr:'#14301a',b:forest,st:{clock:21},by:'Nixora',th:'linear-gradient(135deg,#1b5e20,#b5ff4d)',sc:`game.say('🌲 Sigue las luciérnagas verdes.');for(let i=0;i<7;i++)game.mob(Math.cos(i*.9)*18,Math.sin(i*.9)*18,{peaceful:true,speed:1.2,size:.9,color:'#8d6e63'});game.onTick(()=>game.hud('✨ '+game.coins()+' luciérnagas'))`},
{id:'d11',n:'Desierto de Pirámides',h:'#desierto',d:'Pirámides que se escalan caminando, tesoros en la cima y escorpiones hostiles. Te dan una espada para defenderte.',gr:'#e9c46a',b:desert,st:{clock:12},by:'Nixora',th:'linear-gradient(135deg,#e9c46a,#e76f51)',sc:`game.sword();game.say('🏜 Escala las pirámides, junta el tesoro y defiéndete con F o clic.');for(let i=0;i<6;i++)game.mob(Math.cos(i*1.05)*20,Math.sin(i*1.05)*20,{hp:30,size:.6,speed:1.6,dmg:6,color:'#6d4c41'});game.onKill(()=>game.sound('Explosión'));game.onTick(()=>game.hud('🪙 '+game.coins()))`},
{id:'d12',n:'Mundo de Hielo',h:'#hielo',d:'Plataformas de cristal helado en espiral, iglús y una meta dorada en la cima nevada.',gr:'#e0f7fa',b:ice,st:{clock:10},by:'Nixora',th:'linear-gradient(135deg,#caf0f8,#48cae4)',sc:`game.say('❄ Sube por las plataformas de hielo.');game.onTick(()=>game.hud('⬆ '+game.player.p.y.toFixed(1)+' m · 🪙 '+game.coins()))`},
{id:'d13',n:'Castillo del Jefe',h:'#jefe',lava:1,d:'Cruza la lava hasta el castillo, derrota al jefe con tu espada y reclama el tesoro. Hay checkpoints en el camino.',gr:'#3a0d0d',b:castle,by:'Nixora',th:'linear-gradient(135deg,#6a040f,#ffba08)',sc:`const P=game.player;game.sword();let boss=null,done=0;game.say('🏰 Sube al castillo, derrota al jefe y reclama el tesoro. Ataca con F o clic.');game.onDie(()=>game.say('💀 Caíste en la lava.'));game.onTick(()=>{if(!boss&&P.p.z<-55&&P.p.y>8){boss=game.mob(0,-66,{y:9.7,hp:260,size:2.4,speed:2.2,dmg:14,color:'#111111'});game.say('👹 ¡El jefe despierta!')}if(boss&&boss.dead&&!done){done=1;game.say('🏆 ¡Derrotaste al jefe!');game.sound('Victoria')}game.hud(boss?(boss.dead?'🏆 Jefe derrotado':'👹 Jefe: '+Math.max(0,boss.hp|0)):'🏰 Sube al castillo')})`},
{id:'d14',n:'Zona de Zombis',h:'#zombis',d:'Sobrevive a 10 oleadas de zombis de noche, con zombi jefe cada 5 oleadas. Recoge corazones para curarte.',gr:'#2d3a2d',b:zomb,st:{clock:22},by:'Nixora',th:'linear-gradient(135deg,#1b5e20,#212529)',sc:`let wv=0,alive=0,kills=0;game.sword();game.say('🧟 Sobrevive a las oleadas. Ataca con F o clic. Recoge ❤ para curarte.');const R=()=>(Math.random()-.5)*34;
const spawn=()=>{wv++;const n=3+wv*2,boss=wv%5==0;for(let i=0;i<(boss?1:n);i++){const a=Math.random()*6.28;alive++;game.mob(Math.cos(a)*22,Math.sin(a)*22,{hp:boss?200:25+wv*6,size:boss?2:.9,speed:boss?2.4:1.4+wv*.2,dmg:boss?16:4+wv,color:boss?'#1b5e20':'#4caf50'})}if(wv>1)game.addBlock([R(),.6,R(),.5,.5,.5,'#ff4d6d',1,0,'',2,1,8]);game.say(boss?'👹 Zombi jefe · Oleada '+wv:'🧟 Oleada '+wv)};
game.onKill(()=>{alive--;kills++;game.sound('Explosión');if(!alive){if(wv==10)game.say('🏆 ¡Sobreviviste las 10 oleadas!');else setTimeout(spawn,2500)}});spawn();game.onTick(()=>game.hud('Oleada '+wv+'/10 · Bajas '+kills+' · Zombis '+alive))`},
{id:'d15',n:'Ruta de Cristal',h:'#parkour #cristal',d:'Cruza una ruta de plataformas brillantes sobre el vacío y recoge cristales de energía.',gr:'#101936',b:moon,sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#00e5ff,#273469)',sc:`game.say('💎 Cruza la ruta y recoge los cristales.');game.onTick(()=>game.hud('🪙 '+game.coins()+' cristales'))`},
{id:'d16',n:'Islas Dulces',h:'#aventura #exploración',d:'Salta por islas de colores pastel y encuentra los objetos brillantes.',gr:'#ffd6e0',b:candy,sp:[0,.2,0],by:'Nixora',th:'linear-gradient(135deg,#ff8fab,#ffd166)',sc:`game.say('🍬 Explora las islas dulces y encuentra sus monedas.');game.onTick(()=>game.hud('🍬 '+game.coins()+' dulces'))`}] ;

/* ---------- Navegación ---------- */
let HOME_FILTER='all';
const NV=[['home','🏠','Descubrir'],['avatar','🧍','Avatar'],['shop','🛍','Tienda'],['studio','🛠','Crear'],['chat','💬','Chat'],['store','🏪','Mercado'],['friends','👥','Amigos'],['inventory','🎒','Inventario'],['missions','🏆','Misiones'],['profile','👤','Mi perfil'],['cfg','⚙','Ajustes']],
V={home:()=>home(),avatar:()=>avatar(),shop:()=>{tab='eyes';avatar()},studio:()=>studio(),friends:()=>friends(),store:()=>store(),chat:()=>chat(),inventory:()=>inventory(),missions:()=>missions(),profile:()=>prof(me),cfg:()=>cfg()},
nb=n=>`<button class="nv" data-v="${n[0]}" onclick="go('${n[0]}')">`;
$('#nav').innerHTML=NV.slice(0,4).map(n=>nb(n)+n[2]+'</button>').join('');
$('#side').innerHTML=NV.map(n=>nb(n)+n[1]+' '+n[2]+'</button>').join('');
function go(v){cur=v;applyBG();updWallet();const ab=$('#admbtn');if(ab)ab.hidden=!can('Usar panel de administrador');document.documentElement.style.fontSize=cv('ui',100)+'%';
 document.querySelectorAll('.nv').forEach(b=>b.classList.toggle('on',b.dataset.v==v));V[v]()}
const QI='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#fff"/><rect x="24" y="24" width="52" height="52" rx="6" transform="rotate(45 50 50)" fill="#fff" stroke="#000" stroke-width="5"/><text x="50" y="64" font-size="40" font-weight="700" text-anchor="middle" font-family="Arial">?</text></svg>'),
thS=g=>g.img?`background-image:url(${g.img})`:g.th?`background:${g.th}`:`background:#fff url("${QI}") center/contain no-repeat`,
card=g=>`<div class="card2" onclick="det('${g.id}')"><div class="th" style="${thS(g)}"></div><b>${esc(g.n)}</b><small>${esc(g.h||'')}</small></div>`;
function home(){PVU=null;ensureUser(me);const u=U[me],q=($('#q').value||'').trim().toLowerCase(),all=[...DEF,...G].map(g=>gmx(g.id)).filter(g=>!g.hid),matches=all.filter(g=>[g.n,g.d,g.h,g.by].some(v=>String(v||'').toLowerCase().includes(q))),L=matches.filter(g=>{
 if(HOME_FILTER==='fav')return u.favGames.includes(g.id);
 if(HOME_FILTER==='parkour')return /parkour|obby|escalada|obstáculo|cristal/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='adventure')return /aventura|explora|bosque|isla|pueblo|desierto|hielo|laberinto|dulces/i.test([g.n,g.h,g.d].join(' '));
 if(HOME_FILTER==='created')return g.by===me;
 return true;
 }).sort((a,b)=>(b.feat|0)-(a.feat|0)),
 row=(t,l)=>`<h3>${t}</h3><div class="row">${l.map(card).join('')||'<i>Nada aún</i>'}</div>`,
 filters=[['all','Todos'],['fav','⭐ Favoritos'],['parkour','🏃 Parkour'],['adventure','🌎 Aventura'],['created','🛠 Mis mundos']];
 $('#main').innerHTML=`${ANN?`<div class="hero" style="background:#7a1f1f;margin-bottom:8px">📢 ${esc(ANN)}</div>`:''}<div class="hero" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><h2 style="margin:0 0 6px">¡Hola, ${esc(me)}!</h2><small>Explora mundos, crea los tuyos y juega con tus amigos.</small><div style="margin-top:8px">${fr().filter(f=>U[f]&&!bl().includes(f)).slice(0,5).map(f=>`<span class="fr">👤 ${esc(f)}</span>`).join('')}</div></div><div id="pvh"></div></div><div class="rbar">${filters.map(([k,t])=>`<button class="${HOME_FILTER===k?'':'s'}" onclick="homeFilter('${k}')">${t}</button>`).join('')}<button onclick="go('missions')">🏆 Misiones</button><button class="s" onclick="go('profile')">👤 Mi perfil</button><button class="s" onclick="go('inventory')">🎒 Inventario</button></div>`+row(HOME_FILTER==='fav'?'Tus favoritos':HOME_FILTER==='created'?'Tus mundos':HOME_FILTER==='all'?'Recomendados':'Resultados',L)+row('Favoritos',[...all].filter(g=>u.favGames.includes(g.id)))+row('Más mundos para descubrir',all.filter(g=>!u.favGames.includes(g.id)).slice().reverse())+row('Creados por jugadores',all.filter(g=>g.by!== 'Nixora'));pvw()}

let CNT=null;
async function cnt(id){try{const r=await fetch(cv('srv',SRV0).replace(/^ws/,'http')+'/count?g='+encodeURIComponent(id));return (await r.json()).n}catch(e){return 0}}
function det(id){const g=gmx(id);if(!g)return;clearInterval(CNT);const u=ensureUser(me),isFav=u.favGames.includes(id),ban=g.ban?`background-image:url(${g.ban})`:`background:#fff url("${QI}") center/contain no-repeat`;
 $('#main').innerHTML=`<div class="th" style="height:150px;${ban};margin-bottom:12px"></div><div class="det"><div class="th big" style="${thS(g)}"></div><div style="flex:1;min-width:220px"><h2 style="margin:0">${esc(g.n)}</h2><small>por ${esc(g.by)} ${esc(g.h||'')}</small><p>${esc(g.d)}</p><p>👥 Jugadores ahora: <b id="cn">…</b></p><button class="play" onclick="play('${id}')">▶ Jugar</button> <button class="s" onclick="toggleFavorite('${id}')">${isFav?'★ En favoritos':'☆ Añadir a favoritos'}</button><div class="rbar" style="margin-top:10px"><button onclick="createPrivateRoom('${id}')">🔒 Crear sala privada</button><button class="s" onclick="joinPrivateRoom('${id}')">🔑 Unirse con código</button></div><small>Comparte el código de una sala privada con tus amigos por mensaje privado.</small></div></div>`;
 const up=async()=>{const el=$('#cn');if(!el){clearInterval(CNT);return}el.textContent=await cnt(id)};up();CNT=setInterval(up,30000)}
function createPrivateRoom(id){const random=Math.random().toString(36).slice(2,8).toUpperCase(),v=prompt('Elige un código privado de 4 a 12 letras o números para compartir con tus amigos',random);if(v===null)return;const code=v.trim().toUpperCase();if(!/^[A-Z0-9]{4,12}$/.test(code))return alert('El código debe tener de 4 a 12 letras o números.');U[me].lastPrivateRoom={world:id,code};save();play(id,code,true)}
function joinPrivateRoom(id){const v=prompt('Escribe el código de la sala privada');if(v===null)return;const code=v.trim().toUpperCase();if(!/^[A-Z0-9]{4,12}$/.test(code))return alert('El código debe tener de 4 a 12 letras o números.');play(id,code,false)}

/* ---------- Personaje estilo Minecraft ---------- */
function mk(s){s=CHO[s.ch|0]?{...s,...CHO[s.ch|0]}:s;const g=new THREE.Group(),u={},
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
const anim=(e,t,dt)=>{const m=e.m,u=m.userData,L=(a,b,k)=>a+(b-a)*Math.min(1,k*dt),P=e.pk||{},W=wp(P.aw|0),J=jp(P.aj|0),K=cpk(P.ac|0);
 e.sw=L(e.sw||0,e.sp,10);e.ph=(e.ph||0)+dt*(5+e.sp*7)*W.f;e.ja=L(e.ja||0,e.g?0:1,12);e.ca=L(e.ca||0,e.cr?1:0,10);
 if(e.g&&!e.wg)e.sq=1;e.wg=e.g;e.sq=L(e.sq||0,0,9);
 const w=Math.sin(e.ph)*e.sw*(1-e.ja),s=W.ph?-1:1,idle=Math.sin(t*2)*.05*(1-e.sw),a=J.ax*e.ja+K.ax*e.ca;
 u.ra.rotation.x=w*W.aa*s+a+idle+(e.ax||0);u.la.rotation.x=-w*W.aa*s+a-idle;u.ra.rotation.z=J.az*e.ja;u.la.rotation.z=-J.az*e.ja;
 u.rl.rotation.x=-w*W.la+J.lx*e.ja;u.ll.rotation.x=w*W.la+J.ly*e.ja;u.rl.rotation.z=K.lx*e.ca;u.ll.rotation.z=-K.lx*e.ca;
 m.scale.y=1-K.dp*e.ca-.12*e.sq+J.st*e.ja;m.rotation.z=Math.sin(e.ph)*W.sw*e.sw;m.position.y+=Math.abs(Math.sin(e.ph))*W.bn*e.sw;e.so=L(e.so||0,0,14);m.position.y+=e.so;
 if(e.ty!=null){let d=(e.ty-m.rotation.y)%(2*Math.PI);if(d>Math.PI)d-=2*Math.PI;if(d<-Math.PI)d+=2*Math.PI;m.rotation.y+=d*Math.min(1,dt*14)}};

/* ---------- Avatar y tienda gratuita ---------- */
let tab='eyes',part='skin',mode=0,PR,PS,PC,PM,PA=0,PP;
const SH={eyes:['Normales','Grandes','Sonrientes','Brillantes','Gato','Rojos','Verdes','Cansados'],mouth:['Normal','Sonrisa','Abierta','Dientes','Lengua'],hairT:['Calvo','Corto','Largo','Punk','Mohicano','Cola','Afro','Flequillo'],top:['Camiseta','Sudadera','Armadura','Chaleco','Vestido','Traje'],bot:['Pantalón','Shorts','Falda','Botas'],acc:['Ninguno','Gorra','Corona','Gafas','Capa','Casco','Orejas','Mochila','Alas','Bufanda','Antenas'],pet:['Predeterminado','Neón','Oro','Rojo','Verde','Hielo','Noche'],petA:['Nada','Gorrito','Corona','Antena','Gafas','Cuernos','Orejas','Halo']},
TN={eyes:'Ojos',mouth:'Boca',hairT:'Pelo',top:'Ropa',bot:'Pantalón',acc:'Accesorios',pet:'Mascota',petA:'Acc. mascota'},PT={skin:'Piel',hair:'Pelo',shirt:'Camisa',pants:'Pantalón'},
PAL=['#ffdbac','#e0ac69','#c68642','#8d5524','#3b2219','#ff595e','#ffca3a','#8ac926','#1982c4','#9d4edd','#f8f9fa','#212529'],
cp=()=>{if(PM)PS.remove(PM);if(PP)PS.remove(PP);PM=mk(PVU||A());PM.position.x=-.4;PP=mkPet(PVU||A());PP.position.set(.95,0,.3);PS.add(PM,PP)};
const rg=n=>{let a=n*2654435761>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},
AN1=['Neón','Cósmico','Pixel','Mágico','Salvaje','Veloz','Épico','Sombrío','Dorado','Helado'],AN2=['Zorro','Dragón','Ninja','Robot','Pirata','Mago','Gato','Lobo','Astronauta','Guerrero'],
hx6=(r,s,l)=>'#'+new THREE.Color().setHSL(r(),s,l).getHexString(),
presetAv=n=>{const r=rg(n+1),p=k=>r()*k|0;return{n:AN1[n%10]+' '+AN2[(n/10|0)%10]+' #'+(n+1),skin:PAL[p(5)],hair:hx6(r,.65,.35+r()*.3),shirt:hx6(r,.65,.35+r()*.3),pants:hx6(r,.6,.25+r()*.3),eyes:p(8),mouth:p(5),hairT:p(8),top:p(6),bot:p(4),acc:p(11),ch:n%14}},
presetPet=n=>{const r=rg(n+5000);return{n:AN1[(n+3)%10]+' '+['Minion','Cubo','Robot','Fantasma','Slime','Dragón','Gatito','Pollito','Búho','Cohete','Calabaza','Dado'][n%12]+' #'+(n+1),petC:hx6(r,.7,.35+r()*.3),petA:r()*8|0,petT:n%12}};
let GK=0,GP=0;
function galHTML(){const L=GK?presetPet:presetAv;return `<p>${[0,1].map(k=>`<button class="${GK==k?'':'s'}" onclick="GK=${k};GP=0;avatar()">${k?'Mascotas':'Avatares'}</button>`).join(' ')} <button class="s" onclick="GP=Math.max(0,GP-1);avatar()">◀</button> Página ${GP+1}/38 <button class="s" onclick="GP=Math.min(37,GP+1);avatar()">▶</button></p><div style="display:flex;flex-wrap:wrap;gap:6px">${Array.from({length:24},(_,i)=>{const n=GP*24+i;if(n>=900)return'';const a=L(n),c=GK?[a.petC]:[a.skin,a.shirt,a.pants,a.hair];return `<button class="s" style="width:112px;padding:6px;font-size:12px" onclick="eq(${n})"><span style="display:flex;height:14px;margin-bottom:4px">${c.map(x=>`<i style="flex:1;background:${x}"></i>`).join('')}</span>${a.n}<br>${own()['g'+GK+':'+n]?'Tuyo':'💵 '+(GK?25:30)}</button>`}).join('')}</div>`}
function eq(n){const k='g'+GK+':'+n,p=GK?25:30;if(!own()[k]){if(!can('Tienda gratis')){if(nd()<p){alert('Necesitas '+p+' Nixdollar (tienes '+nd()+')');return}addND(me,-p)}own()[k]=1;updWallet()}const o=GK?presetPet(n):presetAv(n);delete o.n;if(GK){A().petC=o.petC;A().petA=o.petA;A().petT=o.petT}else Object.assign(A(),o);save();avatar()}
const CK=['skin','hair','shirt','pants','petC'],NK=['eyes','mouth','hairT','top','bot','acc','pet','petA','ch','petT','aw','aj','ac'];
function applyAv(o){if(!o||typeof o!='object')return;CK.forEach(k=>{if(/^#[0-9a-f]{6}$/i.test(o[k]))A()[k]=o[k]});NK.forEach(k=>{if(Number.isInteger(o[k])&&o[k]>=0&&o[k]<100)A()[k]=o[k]});save()}
const dl=(n,t)=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'application/json'}));a.download=n;a.click()},
rd=(i,f)=>{const x=i.files[0];if(!x)return;const r=new FileReader();r.onload=()=>{try{f(JSON.parse(r.result))}catch(e){}};r.readAsText(x)},
expA=()=>dl('avatar-'+me+'.json',JSON.stringify(A())),impA=i=>rd(i,o=>{applyAv(o);avatar()});
const CHO={1:{skin:'#9aa5b1',eyes:1,mouth:2,hairT:0},2:{skin:'#7fb069',mouth:4,eyes:7},3:{skin:'#f4a261',hairT:0},4:{skin:'#e9ecef'},5:{skin:'#f1f1f1',eyes:1,mouth:3,hairT:0},6:{},7:{shirt:'#1b1b1b',pants:'#1b1b1b'},8:{shirt:'#5a189a'},9:{top:2,pants:'#aab4c0'},10:{skin:'#7bd389'},11:{skin:'#e8e8f0',shirt:'#111111',pants:'#111111'},12:{skin:'#ffffff',pants:'#e63946'},13:{skin:'#ffd700',eyes:1,mouth:2,hairT:0}},
PKA=['Suave','Elegante','Robótica','Zombi','Soldado','Modelo','Saltarina','Perezosa','Veloz','Pingüino','Ninja','Bailarina'],PK=Array.from({length:60},(_,i)=>i?PKA[i%12]+' '+i:'Predeterminada'),ACH={},
wp=n=>ACH['w'+n]||(ACH['w'+n]=n?(r=>({f:.6+r()*1.2,aa:.3+r()*1.3,la:.3+r()*.9,ph:r()<.3,bn:r()*.1,sw:r()*.15}))(rg(n+9000)):{f:1,aa:.9,la:.9,ph:0,bn:0,sw:0}),
jp=n=>ACH['j'+n]||(ACH['j'+n]=n?(r=>({ax:-.3-r()*2.6,az:r()*1.6-.2,lx:r()*1.4-.4,ly:r()*1.4-.7,st:r()*.12}))(rg(n+19000)):{ax:-2.5,az:0,lx:.5,ly:-.4,st:.05}),
cpk=n=>ACH['c'+n]||(ACH['c'+n]=n?(r=>({dp:.1+r()*.25,ax:-r()*1.4,lx:r()*.5}))(rg(n+29000)):{dp:.2,ax:-.5,lx:0});
Object.assign(SH,{ch:['Jugador','Robot','Zombi','Gato','Astronauta','Esqueleto','Pirata','Ninja','Mago','Caballero','Alien','Vampiro','Payaso','Robot Dorado'],petT:['Minion','Cubo','Robot','Fantasma','Slime','Dragoncito','Gatito','Pollito','Búho','Cohete','Calabaza','Dado'],aw:PK,aj:PK,ac:PK});
Object.assign(TN,{ch:'Personaje',petT:'Minion: tipo',aw:'Anim. caminar',aj:'Anim. saltar',ac:'Anim. agacharse'});
function avatar(){PVU=null;const a=A(),b=(on,t,f)=>`<button class="${on?'':'s'}" onclick="${f}">${t}</button> `;
 $('#main').innerHTML=`<div class="av"><div id="pvh"></div><div style="flex:1;min-width:260px"><h3>🎨 Color</h3>${Object.keys(PT).map(k=>b(part==k,PT[k],`part='${k}';avatar()`)).join('')}<p>${b(!mode,'Paleta simple','mode=0;avatar()')}${b(mode,'Personalizado','mode=1;avatar()')}</p>${mode?`<input type="color" value="${a[part]}" oninput="setC(this.value)" style="width:140px;height:70px">`:PAL.map(c=>`<i class="sw" style="background:${c}" onclick="setC('${c}')"></i>`).join('')}<h3>🛍 Tienda (Nixdollar)</h3>${Object.keys(TN).map(k=>b(tab==k,TN[k],`tab='${k}';avatar()`)).join('')}<p>${SH[tab].map((n,i)=>b(a[tab]==i,n+' · '+lbl(tab,i),`buy('${tab}',${i})`)).join('')}</p><button onclick="rnd()">🎲 Aleatorio</button> <button class="s" onclick="expA()">⬇ Exportar</button> <button class="s" onclick="$('#imf').click()">⬆ Importar</button><input id="imf" type="file" accept=".json" hidden onchange="impA(this)"><h3>🧬 Galería: 900 avatares y 900 mascotas</h3>${galHTML()}</div></div>`;pvw()}
function setC(c){A()[part]=c;save();cp()}
function rnd(){const r=n=>Math.random()*n|0,hx=()=>'#'+r(16777216).toString(16).padStart(6,'0');
 Object.assign(A(),{skin:PAL[r(5)],hair:hx(),shirt:hx(),pants:hx(),eyes:r(8),mouth:r(5),hairT:r(8),top:r(6),bot:r(4),acc:r(11),pet:r(7),petA:r(8),ch:r(14),petT:r(12)});delete A().petC;save();avatar()}
function pvw(){if(!PR){PR=new THREE.WebGLRenderer({alpha:true,antialias:true});PR.setSize(280,360);PS=new THREE.Scene();PS.add(new THREE.AmbientLight(0xffffff,.8));
 const l=new THREE.DirectionalLight(0xffffff,.8);l.position.set(2,4,3);PS.add(l);PC=new THREE.PerspectiveCamera(35,280/360,.1,50);PC.position.set(0,1.1,6);PC.lookAt(0,.95,0)}
 $('#pvh').appendChild(PR.domElement);cp();
 if(!PA){PA=1;(function f(){const h=$('#pvh');if(!h||!h.contains(PR.domElement)){PA=0;return}PM.rotation.y+=.02;PP.rotation.y-=.02;PR.render(PS,PC);requestAnimationFrame(f)})()}}

const PETC=['#9d4edd','#00e5ff','#ffd166','#ff595e','#8ac926','#bde0fe','#1b1b3a'];
function mkPet(a){const g=new THREE.Group(),T=a.petT|0,H=[.9,.7,.8,1,.4,.8,.8,.7,.85,1.3,.75,.7][T]||.9,h=a.petA|0,d=()=>({rotation:{x:0,z:0}}),
 col=a.petC||(T==0&&!a.pet?'#ffd23f':PETC[a.pet|0])||'#9d4edd',
 b=(w,hh,dd,c,x,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,hh,dd),new THREE.MeshLambertMaterial({color:c}));m.position.set(x,y,z);m.castShadow=true;g.add(m)};
 if(T==0){b(.55,.9,.55,col,0,.45,0);b(.57,.35,.57,'#2b59c3',0,.18,0);b(.58,.1,.58,'#333',0,.68,0);b(.3,.3,.1,'#e8e8e8',0,.68,.3);b(.12,.12,.1,'#222',0,.68,.34);b(.2,.03,.05,'#222',0,.4,.29);b(.12,.3,.12,col,-.34,.4,0);b(.12,.3,.12,col,.34,.4,0);[-.1,0,.1].forEach(x=>b(.03,.15,.03,'#222',x,H+.07,0))}
 if(T==1){b(.7,.7,.7,col,0,.35,0);b(.1,.1,.02,'#000',-.15,.45,.36);b(.1,.1,.02,'#000',.15,.45,.36);b(.22,.04,.02,'#000',0,.25,.36)}
 if(T==2){b(.7,.7,.7,'#9aa5b1',0,.35,0);b(.5,.15,.02,col,0,.45,.36);b(.2,.04,.02,'#000',0,.2,.36);b(.04,.2,.04,'#ddd',0,.8,0);b(.1,.1,.1,'#f00',0,.95,0)}
 if(T==3){b(.6,.8,.6,'#f4f4ff',0,.4,0);b(.1,.15,.02,'#222',-.14,.55,.31);b(.1,.15,.02,'#222',.14,.55,.31);b(.15,.1,.02,'#222',0,.35,.31);b(.5,.1,.5,col,0,.05,0)}
 if(T==4){b(.9,.4,.9,col,0,.2,0);b(.1,.1,.02,'#000',-.2,.28,.46);b(.1,.1,.02,'#000',.2,.28,.46)}
 if(T==5){b(.65,.65,.65,col,0,.33,0);b(.1,.1,.02,'#ff0',-.15,.45,.33);b(.1,.1,.02,'#ff0',.15,.45,.33);b(.25,.1,.1,col,0,.2,.4);b(.05,.5,.35,'#fff',-.38,.5,-.1);b(.05,.5,.35,'#fff',.38,.5,-.1)}
 if(T==6){b(.7,.7,.7,col,0,.35,0);b(.14,.2,.1,col,-.22,.8,0);b(.14,.2,.1,col,.22,.8,0);b(.1,.1,.02,'#2ecc71',-.15,.45,.36);b(.1,.1,.02,'#2ecc71',.15,.45,.36);b(.08,.06,.02,'#ff8fab',0,.32,.36)}
 if(T==7){b(.6,.6,.6,col,0,.3,0);b(.2,.1,.15,'#ff9f1c',0,.28,.36);b(.08,.08,.02,'#000',-.14,.4,.31);b(.08,.08,.02,'#000',.14,.4,.31)}
 if(T==8){b(.7,.8,.6,col,0,.4,0);b(.22,.22,.02,'#fff',-.17,.55,.31);b(.22,.22,.02,'#fff',.17,.55,.31);b(.1,.1,.03,'#000',-.17,.55,.32);b(.1,.1,.03,'#000',.17,.55,.32);b(.12,.12,.05,'#ff9f1c',0,.38,.31)}
 if(T==9){b(.5,1,.5,'#f8f9fa',0,.5,0);b(.4,.3,.4,col,0,1.15,0);b(.2,.3,.1,col,-.35,.15,0);b(.2,.3,.1,col,.35,.15,0);b(.2,.2,.02,'#4cc9f0',0,.7,.26)}
 if(T==10){b(.9,.7,.9,'#f77f00',0,.35,0);b(.12,.2,.12,'#2d6a4f',0,.8,0);b(.12,.12,.02,'#222',-.2,.45,.46);b(.12,.12,.02,'#222',.2,.45,.46);b(.4,.1,.02,'#222',0,.22,.46)}
 if(T==11){b(.7,.7,.7,'#f8f9fa',0,.35,0);[[-.2,.2],[.2,.2],[0,0],[-.2,-.2],[.2,-.2]].forEach(([x,y])=>b(.1,.1,.02,col,x,.35+y,.36))}
 if(h==1)b(.4,.2,.4,'#e63946',0,H+.1,0);if(h==2)b(.5,.15,.5,'#ffd166',0,H+.08,0);if(h==3){b(.04,.3,.04,'#ddd',0,H+.15,0);b(.1,.1,.1,'#0ff',0,H+.35,0)}if(h==4)b(.62,.1,.03,'#111',0,H*.7,.34);
 if(h==5){b(.1,.2,.1,'#fff',-.2,H+.1,0);b(.1,.2,.1,'#fff',.2,H+.1,0)}if(h==6){b(.15,.25,.1,'#fff',-.22,H+.12,0);b(.15,.25,.1,'#fff',.22,H+.12,0)}if(h==7)b(.5,.05,.5,'#ffd166',0,H+.3,0);
 g.userData={ra:d(),la:d(),rl:d(),ll:d()};return g}
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
function say(n,m){const l=$('#log');m=bad(m);if(!l)return;l.innerHTML+=`<div><b>${esc(n)}${tag(n)}:</b> ${esc(m)}</div>`;l.scrollTop=1e9;popupGameChat()}
function play(id,roomCode='',createRoom=false){
 const g=typeof id=='object'?id:gmx(id);if(!g)return;roomCode=String(roomCode||'').trim().toUpperCase();if(roomCode&&!/^[A-Z0-9]{4,12}$/.test(roomCode))return alert('Código de sala inválido.');const roomKey=roomCode?g.id+'::'+roomCode:g.id;ACTIVE_WORLD=g.id;ACTIVE_ROOM=roomCode;B=g.b.filter(b=>b[8]!==0);recordPlay(g.id);
 $('#app').hidden=true;$('#play').hidden=false;$('#pm').hidden=true;$('#gt').textContent=g.n;$('#log').innerHTML='';setGameChat(false,false);
 if(!GR)GR=new THREE.WebGLRenderer({canvas:$('#cv'),antialias:true});
 GR.setSize(innerWidth,innerHeight);GR.shadowMap.enabled=cv('0_0',true);
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(cv('fov',70),innerWidth/innerHeight,.1,700);
 const S=g.st||{},df=Math.max(0,Math.sin(((S.clock??14)-6)/12*Math.PI)),tv=Math.min(1,.2+df),tint=S.sky?new THREE.Color(S.sky):new THREE.Color(tv,tv,tv),HZ=new THREE.Color('#d4ecfb');
 sc.background=HZ.clone().multiply(tint);sc.fog=new THREE.Fog(HZ.clone().multiply(tint),40,S.fog||150);
 const amb=new THREE.AmbientLight(0xffffff,(.25+.5*df)*(S.bright??1));sc.add(amb);
 const skyM=new THREE.MeshBasicMaterial({side:THREE.BackSide,fog:false,depthWrite:false,color:tint.clone()});
 {const cn=document.createElement('canvas');cn.width=2;cn.height=256;const cx=cn.getContext('2d'),gr=cx.createLinearGradient(0,0,0,256);gr.addColorStop(0,'#0a3d9c');gr.addColorStop(.35,'#2a8fe0');gr.addColorStop(.5,'#d4ecfb');gr.addColorStop(1,'#d4ecfb');cx.fillStyle=gr;cx.fillRect(0,0,2,256);skyM.map=new THREE.CanvasTexture(cn)}
 const sim=S.skyImg&&MK.find(x=>x.id==S.skyImg);if(sim){const tx=new THREE.TextureLoader().load(sim.d);tx.wrapS=THREE.RepeatWrapping;tx.repeat.x=-1;skyM.map=tx;skyM.color.set(0xffffff)}
 const skyD=new THREE.Mesh(new THREE.SphereGeometry(450,24,16),skyM);skyD.renderOrder=-1;sc.add(skyD);
 const cmat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.55,fog:false,depthWrite:false}),cl=[];cmat.color.copy(tint);
 if(S.clouds!==0)for(let i=0;i<16;i++){const q=new THREE.Group();for(let k=0;k<5;k++){const p=new THREE.Mesh(new THREE.SphereGeometry(1,10,8),cmat);p.position.set(k*3-6+Math.random()*2,Math.random()*1.5,Math.random()*3);p.scale.set(4+Math.random()*3,1.6+Math.random(),3+Math.random()*2);q.add(p)}q.position.set((Math.random()-.5)*440,45+Math.random()*25,(Math.random()-.5)*440);sc.add(q);cl.push(q)}
 const dl=new THREE.DirectionalLight(0xffffff,.8),sd=dl.shadow.camera;dl.castShadow=true;sd.left=sd.bottom=-30;sd.right=sd.top=30;sd.updateProjectionMatrix();dl.shadow.mapSize.set(1024,1024);sc.add(dl,dl.target);
 const gm=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshLambertMaterial({color:(g.lava||S.lava)?'#c62828':g.gr,emissive:(g.lava||S.lava)?0x661100:0}));gm.rotation.x=-Math.PI/2;gm.receiveShadow=true;sc.add(gm);
 const gd=new THREE.GridHelper(400,200,0x9d4edd,0x4b2a7a);gd.position.y=.01;sc.add(gd);
 const addM=b=>{const m=shp(b);m.position.set(b[0],b[1],b[2]);m.castShadow=m.receiveShadow=true;m.userData.b=b;b.m=m;sc.add(m);return m};g.b.forEach(addM);
 const mkE=(av,x,z,name,pet)=>{const m=pet?mkPet(av):mk(av);sc.add(m);return {p:new THREE.Vector3(x,0,z),tp:new THREE.Vector3(x,0,z),vy:0,g:1,m,name,sp:0,s:0,pk:pet?null:av}},
 mkNameplate=(r)=>{if(r.label)r.m.remove(r.label);const c=document.createElement('canvas');c.width=512;c.height=96;const x=c.getContext('2d');x.fillStyle='rgba(18,6,31,.78)';x.fillRect(0,0,512,96);x.font='bold 34px Arial';x.textAlign='center';x.fillStyle='#ffffff';x.fillText((r.rank?'['+r.rank+'] ':'')+r.name,256,59,490);const tx=new THREE.CanvasTexture(c),sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,transparent:true,depthTest:false}));sp.scale.set(4.5,.85,1);sp.position.set(0,3.2,0);r.m.add(sp);r.label=sp;},
 pl=mkE(A(),0,0,me),
 bot=mkE(A(),2,2,'Minion',1);
 let k={},yaw=0,pitch=.4,dist=cv('dist',8),follow=cv('11_1',true),bj=0,dr=0,hooks=[],raf,last=performance.now(),t=0,fc=0,ft=0,dn_=0,ns=0,cid=0,px=0,py=0,touchPts=new Map(),pinchD=0,jumpLatch=false,mobs=[],atk=0,hasSword=0,kf=null,stp=0,boost=0,coins=0,won=0,kd2=null,nds=[],ndT=3;
 const lava=g.lava||S.lava,RL=g.b.filter(b=>b[12]),sb=g.b.find(b=>b[12]==1),SP=sb?[sb[0],sb[1]+sb[4]/2+.05,sb[2]]:(g.sp?[...g.sp]:[0,lava?.25:.05,0]);
 GRAV=S.grav||28;JP=S.jump||10.5;WS=S.walk||6;
 if(lava&&!sb){const pb=[SP[0],SP[1]-.15,SP[2],10,.3,10,'#3a3a5c',1,1];B.push(pb);addM(pb)}
 pl.p.set(SP[0],SP[1],SP[2]);unst(pl);
 const die=()=>{pl.p.set(SP[0],SP[1],SP[2]);pl.vy=0;pl.vx=pl.vz=0;unst(pl);beep(140,.25);say('Juego','💀 Has muerto');kd2&&kd2()};
 const spawnND=()=>{if(nds.length>=6||!B.length)return;const b=B[Math.random()*B.length|0],d=Math.hypot(b[0]-pl.p.x,b[2]-pl.p.z);if(d<4||d>40)return;const m=addM([b[0],b[1]+b[4]/2+.9,b[2],.55,.55,.55,'#00ff88',1,0,'',0,1,0]);m.userData.t0=performance.now();nds.push(m)};
 pl.hp=100;const sw=new THREE.Group();[[.08,.9,.08,'#dfe6ee',-.95],[.3,.06,.1,'#8d6e63',-.5]].forEach(([w,h,d,c,y])=>{const q=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshLambertMaterial({color:c}));q.position.set(0,y,.1);sw.add(q)});sw.visible=false;pl.m.userData.ra.add(sw);
 const hit=()=>{if(!hasSword||atk>0)return;atk=.35;mobs.forEach(m=>{if(!m.dead&&!m.pc&&m.p.distanceTo(pl.p)<3.2+m.h/2){m.hp-=15;m.fl=.15;if(m.hp<=0){m.dead=1;sc.remove(m.m);kf&&kf(m)}}});beep(300,.1)};
 let ws=null;const rp={},net=o=>{if(ws&&ws.readyState==1)ws.send(JSON.stringify(o))},
 updPl=()=>{$('#pl').textContent='👥 '+[me,'Minion',...Object.values(rp).map(r=>r.name+(r.rank?' ['+r.rank+']':''))].join(' · ')};updPl();
 try{ws=new WebSocket(cv('srv',SRV0));
  ws.onopen=()=>{say('Sistema','Conectado al servidor ✔');if(ACTIVE_ROOM)say('Sistema',(createRoom?'Sala privada creada':'Entrando a sala privada')+' · Código: '+ACTIVE_ROOM);net({t:'join',n:me,g:roomKey,world:g.id,room:ACTIVE_ROOM,owner:!!createRoom,av:A(),rank:rk(me).n})};
  ws.onclose=()=>say('Sistema','Sin servidor: juegas solo. Inicia server.js y revisa Ajustes → Servidor.');
  ws.onmessage=ev=>{let d;try{d=JSON.parse(ev.data)}catch(e){return}
   if(d.t=='chat')say(d.n,d.m);
   if(d.t=='st'){let r=rp[d.id];if(!r){r=rp[d.id]=mkE(d.av||AV0,d.x,d.z,d.n);r.rank=d.rank||'';mkNameplate(r);r.p.set(d.x,d.y,d.z);updPl()}r.tp.set(d.x,d.y,d.z);if(d.rank&&d.rank!==r.rank){r.rank=d.rank;mkNameplate(r)}r.ry=d.ry;r.sp=d.sp;r.g=d.g;r.cr=d.cr}
   if(d.t=='bye'&&rp[d.id]){sc.remove(rp[d.id].m);delete rp[d.id];updPl()}}}catch(e){}
 const api={say:m=>say('Juego',m),player:pl,bot,scene:sc,THREE,onTick:f=>hooks.push(f),sound:snd,hud:s=>{$('#sc').textContent=s},coins:()=>coins,sky:c=>{skyM.color.set(c);cmat.color.set(c);sc.background.copy(HZ).multiply(skyM.color);sc.fog.color.copy(sc.background)},light:v=>{amb.intensity=v},spawn:()=>SP,setSpawn:(x,y,z)=>{SP[0]=x;SP[1]=y;SP[2]=z},die,onDie:f=>{kd2=f},removeBlock:m=>{const b=m.userData.b,i=B.indexOf(b);if(i>=0)B.splice(i,1);const q=RL.indexOf(b);if(q>=0)RL.splice(q,1);sc.remove(m)},addBlock:b=>{if(b[8]!==0)B.push(b);if(b[12])RL.push(b);return addM(b)},sword:()=>{hasSword=1;sw.visible=true},onKill:f=>{kf=f},
  mob:(x,z,o={})=>{const zz=o.size||.9,m=new THREE.Mesh(new THREE.BoxGeometry(zz,zz,zz),new THREE.MeshLambertMaterial({color:o.color||'#c1121f'}));m.castShadow=true;sc.add(m);const e={m,p:new THREE.Vector3(x,o.y||0,z),hp:o.hp||30,sp:o.speed||2.5,dm:o.dmg||8,cd:0,fl:0,pc:o.peaceful,h:zz};mobs.push(e);return e}};
 GAME={api,pl,mobs,cl,SP,sc,nds};try{new Function('game',g.sc||'')(api)}catch(e){say('Error en script',e.message)}
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
 const kd=e=>{if((e.key==='-'||e.code==='Minus'||e.code==='NumpadSubtract')&&!e.ctrlKey&&!e.altKey){e.preventDefault();toggleGameChat();if(!$('#chat').classList.contains('chat-hidden'))setTimeout(()=>$('#ci')?.focus(),0);return}if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.code=='Escape'){if(APO)return;$('#pm').hidden=!$('#pm').hidden;return}k[e.code]=1;if(e.code=='KeyF')hit();if(e.code=='Space'||e.code.startsWith('Arrow'))e.preventDefault()},
 ku=e=>k[e.code]=0,pu=e=>{if(touchPts.has(e.pointerId)){touchPts.delete(e.pointerId);pinchD=0;if(touchPts.size<2&&e.pointerId===cid)dr=0}if(e.pointerId==cid)dr=0},
 pm=e=>{if(touchPts.has(e.pointerId)){touchPts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touchPts.size>=2){const pts=[...touchPts.values()],d=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);if(pinchD)dist=Math.max(0,Math.min(ADM.zoom?200:25,dist-(d-pinchD)*.035));pinchD=d;dr=0;return}}if(document.pointerLockElement){const s=.003*cv('sens',1);yaw-=e.movementX*s;pitch=Math.max(-1.2,Math.min(1.3,pitch+e.movementY*s));return}if(dr&&e.pointerId==cid){const s=.005*cv('sens',1);yaw-=(e.clientX-px)*s;pitch=Math.max(-1.2,Math.min(1.3,pitch+(e.clientY-py)*s));px=e.clientX;py=e.clientY}},
 rs=()=>{GR.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};
 addEventListener('keydown',kd);addEventListener('keyup',ku);addEventListener('pointerup',pu);addEventListener('pointercancel',pu);addEventListener('pointermove',pm);addEventListener('resize',rs);document.onpointerlockchange=()=>{if(!document.pointerLockElement&&!$('#play').hidden&&!APO)$('#pm').hidden=false};
 $('#cv').onpointerdown=e=>{if(e.pointerType==='touch'){touchPts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touchPts.size>=2){dr=0;const pts=[...touchPts.values()];pinchD=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);e.preventDefault();return}}dr=1;cid=e.pointerId;px=e.clientX;py=e.clientY};$('#cv').onclick=()=>{if(TOUCH)return;if(document.pointerLockElement)hit();else if($('#cv').requestPointerLock)$('#cv').requestPointerLock()};$('#cv').onwheel=e=>{dist=Math.max(0,Math.min(ADM.zoom?200:25,dist+e.deltaY*.01))};
 const frame=now=>{raf=requestAnimationFrame(frame);if(now-last<1000/cv('fps',60)-1)return;
  const dt=Math.min((now-last)/1000,.05);last=now;t+=dt;fc++;
  if(now-ft>1000){$('#fps').textContent=cv('0_5',false)?fc+' FPS':'';fc=0;ft=now}
  GRAV=ADM.grav||S.grav||28;const f=(k.KeyW||k.ArrowUp||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyW?1:0)-(k.KeyS||k.ArrowDown||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyS?1:0)-JV.y,r=(k.KeyD||k.ArrowRight||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyD?1:0)-(k.KeyA||k.ArrowLeft||document.body.classList.contains('controls-buttons')&&window.__nxDir?.KeyA?1:0)+JV.x,sy=Math.sin(yaw),cy=Math.cos(yaw);
  let dx=-f*sy+r*cy,dz=-f*cy-r*sy;const l=Math.hypot(dx,dz)||1,sp=f||r?((!ADM.fly&&(k.ShiftLeft||k.ShiftRight||JC))?2.5:(ADM.speed||WS)*(t<boost?1.8:1)):0;dx=dx/l*sp;dz=dz/l*sp;
  pl.cr=!!(!ADM.fly&&(k.ShiftLeft||k.ShiftRight||JC));if(sp)pl.ty=Math.atan2(dx,dz);
  const jumpPressed=!!(k.Space||JJ);if(jumpPressed&&!jumpLatch&&(pl.g||ADM.inf)&&!ADM.fly){pl.vy=ADM.jump||JP;beep(520)}jumpLatch=jumpPressed;
  if(ADM.fly)pl.vy=((k.Space||JJ)?9:0)-((k.ShiftLeft||k.ShiftRight||JC)?9:0)+GRAV*dt;if(ADM.freeze){dx=dz=0;pl.vx=pl.vz=0}const ac=Math.min(1,dt*(pl.g?12:4));pl.vx=(pl.vx||0)+(dx-(pl.vx||0))*ac;pl.vz=(pl.vz||0)+(dz-(pl.vz||0))*ac;pl.sp=Math.hypot(pl.vx,pl.vz)/6;if(ADM.noclip){const sb=B;B=[];mv(pl,pl.vx,pl.vz,dt);B=sb}else mv(pl,pl.vx,pl.vz,dt);if(lava&&pl.p.y<=.02&&!ADM.god)die();stp-=dt;if(pl.g&&pl.sp>.3&&stp<=0){beep(90+Math.random()*40,.04);stp=.38/(pl.sp+.3)}
  if(bj===1)bj=t+.6;
  const tg=new THREE.Vector3(pl.p.x+Math.sin(yaw+.9)*2.2,pl.p.y+2.2+Math.sin(t*2)*.25+(t<bj?1.5:0),pl.p.z+Math.cos(yaw+.9)*2.2),od=bot.p.clone();
  if(follow)bot.p.lerp(tg,Math.min(1,dt*3));
  bot.sp=Math.min(1,od.distanceTo(bot.p)/dt/6);bot.g=1;bot.vy=0;
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
  mobs.forEach(m=>{if(m.dead)return;m.fl-=dt;const y=m.h/2+Math.abs(Math.sin(t*6))*.1;
   if(m.pc){if(t>(m.tt||0)){m.tt=t+2+Math.random()*3;m.a=Math.random()*6.28}m.p.x+=Math.sin(m.a)*m.sp*dt;m.p.z+=Math.cos(m.a)*m.sp*dt;if(m.p.length()>35)m.a=Math.atan2(-m.p.x,-m.p.z);m.m.rotation.y=m.a;m.m.position.set(m.p.x,m.p.y+y,m.p.z);return}
   const d=pl.p.clone().sub(m.p);d.y=0;const l=d.length();if(l<25&&l>1.2+m.h/2)m.p.addScaledVector(d,m.sp*dt/l);m.cd-=dt;if(l<1.5+m.h/2&&m.cd<=0){m.cd=1;pl.hp-=m.dm;beep(160,.12)}m.m.position.set(m.p.x,m.p.y+y,m.p.z);m.m.scale.setScalar(m.fl>0?1.2:1)});
  pl.hp=ADM.god?100:Math.min(100,pl.hp+2*dt);if(pl.hp<=0){pl.hp=100;pl.p.set(0,1,0);pl.vy=0;say('Juego','Has caído. ¡Reapareces!')}
  $('#hp').textContent=mobs.length||hasSword?'❤ '+Math.ceil(pl.hp):'';
  hooks.forEach(h=>h(dt,t));
  Object.values(rp).forEach(r=>{r.p.lerp(r.tp,.25);r.ty=r.ry||0});[pl,bot,...Object.values(rp)].forEach(e=>{e.m.position.copy(e.p);anim(e,t,dt)});pl.m.scale.x=pl.m.scale.z=ADM.size||1;pl.m.scale.y*=ADM.size||1;bot.m.position.y+=Math.abs(Math.sin(t*8))*.12*bot.sp;
  if(now-ns>66){ns=now;net({t:'st',x:pl.p.x,y:pl.p.y,z:pl.p.z,ry:pl.m.rotation.y,sp:pl.sp,g:pl.g?1:0,cr:pl.cr?1:0})}
  if(k.KeyI)dist=Math.min(ADM.zoom?200:25,dist+dt*8);if(k.KeyO)dist=Math.max(0,dist-dt*8);
  const c=Math.cos(pitch),fp=dist<1,hy=pl.p.y+(pl.so||0)+1.6*pl.m.scale.y;pl.m.visible=!fp&&!ADM.invis;
  if(fp){cam.position.set(pl.p.x,hy,pl.p.z);cam.lookAt(pl.p.x-Math.sin(yaw)*c,hy-Math.sin(pitch),pl.p.z-Math.cos(yaw)*c)}
  else{cam.position.set(pl.p.x+Math.sin(yaw)*c*dist,Math.max(.3,hy-.1+Math.sin(pitch)*dist),pl.p.z+Math.cos(yaw)*c*dist);cam.lookAt(pl.p.x,hy-.2,pl.p.z)}
  dl.position.set(pl.p.x+15,pl.p.y+30,pl.p.z+10);dl.target.position.copy(pl.p);skyD.position.copy(pl.p);gm.position.x=pl.p.x;gm.position.z=pl.p.z;gd.position.x=Math.round(pl.p.x/2)*2;gd.position.z=Math.round(pl.p.z/2)*2;cl.forEach(c=>{c.position.x+=dt*1.5;if(c.position.x>pl.p.x+220)c.position.x-=440;if(c.position.x<pl.p.x-220)c.position.x+=440;if(c.position.z>pl.p.z+220)c.position.z-=440;if(c.position.z<pl.p.z-220)c.position.z+=440});GR.render(sc,cam)};
 raf=requestAnimationFrame(frame);
 quit=()=>{GAME=null;ACTIVE_WORLD='';ACTIVE_ROOM='';window.__nixoraGameChatSend=null;setGameChat(false,false);document.onpointerlockchange=null;document.exitPointerLock&&document.exitPointerLock();$('#sc').textContent='';$('#hp').textContent='';try{ws&&ws.close()}catch(e){}cancelAnimationFrame(raf);removeEventListener('keydown',kd);removeEventListener('keyup',ku);removeEventListener('pointerup',pu);removeEventListener('pointercancel',pu);removeEventListener('pointermove',pm);removeEventListener('resize',rs);
  $('#play').hidden=true;$('#app').hidden=false;go(cur)}}

const PF={'Casa':[[0,1.5,-2,5,3,.4,'#c9a66b'],[-1.6,1.5,2,1.8,3,.4,'#c9a66b'],[1.6,1.5,2,1.8,3,.4,'#c9a66b'],[-2.3,1.5,0,.4,3,4,'#c9a66b'],[2.3,1.5,0,.4,3,4,'#c9a66b'],[0,3.2,0,6,.4,5,'#a23b3b']],
'Torre':[[0,1,0,3,2,3,'#8d99ae'],[0,3,0,2.5,2,2.5,'#adb5bd'],[0,5,0,2,2,2,'#ced4da']],
'Escalera':Array.from({length:8},(_,i)=>[0,.25*(i+1),-i,3,.5*(i+1),1,'#9d4edd']),
'Puente':[[0,2,0,3,.4,10,'#6b4423'],[-1.4,1,-4.5,.3,2,.3,'#444'],[1.4,1,-4.5,.3,2,.3,'#444'],[-1.4,1,4.5,.3,2,.3,'#444'],[1.4,1,4.5,.3,2,.3,'#444']],
'Árbol':[[0,1,0,.6,2,.6,'#6b4423'],[0,2.8,0,2.4,1.6,2.4,'#2d8a3e']],
'Muro':[[0,1,0,8,2,.5,'#888']],
'Pirámide':[[0,.5,0,7,1,7,'#e9c46a'],[0,1.5,0,5,1,5,'#e9c46a'],[0,2.5,0,3,1,3,'#e9c46a'],[0,3.5,0,1,1,1,'#e9c46a']],
'Meta':[[0,.1,0,3,.2,3,'#2fbf5b']],
'Plataforma flotante':[[0,4,0,4,.5,4,'#00e5ff']]};
const mat=b=>{const k=b[11]|0,o={color:b[6],transparent:b[7]<1||k==2,opacity:k==2?Math.min(.4,b[7]??1):(b[7]??1)},m=k==1?new THREE.MeshBasicMaterial(o):new THREE.MeshLambertMaterial(o),it=b[9]&&MK.find(x=>x.id==b[9]);
 if(it){m.map=new THREE.TextureLoader().load(it.d,()=>{try{sr()}catch(e){}});m.color.set(0xffffff)}return m},
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
TN2={sel:'Seleccionar',mv:'Mover',del:'Borrar',add:'Insertar',pf:'Modelo'},
OPT=(a,v)=>a.map((t,i)=>`<option value="${i}" ${v==i?'selected':''}>${t}</option>`).join(''),SELC='style="background:#241040;color:#fff;border-radius:8px;padding:6px"',
allSc=()=>SCR.map(s=>'(function(){'+s.c+'\n})();').join('\n');
let RT='Home',TBT='Modelos',SNAP=1,ISZ=[1,1,1],ICOL='#9d4edd',ISH=0,IMT=0,IR=0,SELS='Workspace',SSEL=0,PFS='Casa',LAST='[]',HI=[],HR=[],
ST={clock:14,bright:1,fog:150,sky:'',walk:6,jump:10.5,grav:28,lava:0,gcol:'#2a1245',hud:'',msg:'',clouds:1,skyImg:''},SCR=[{n:'Script',c:"game.say('¡Bienvenido!');"}];
let CLIP=null,CTX=null,SELM=[],DR='',STG=[0,0,0],PLD=0;
const sel=()=>SELM.length?SELM:(SBl[SEL]?[SEL]:[]),OBJL=['Bloque','Esfera','Cilindro','Pirámide',...FN.map(f=>f[0]),'Script'];
function cpy(){CLIP=sel().map(i=>SBl[i].slice(0,13))}
function cut(){cpy();delS()}
function delS(){if(CTX&&CTX.k=='sky'){ST.skyImg='';ssync();return}if(CTX&&CTX.k=='scr'){if(SCR.length>1){SCR.splice(CTX.i,1);SSEL=0}ssync();return}sel().sort((a,b)=>b-a).forEach(i=>SBl.splice(i,1));SEL=-1;SELM=[];ssync()}
function pst(f){if(!CLIP)return;const fo=f??(CTX&&CTX.f)??'',n0=SBl.length;CLIP.forEach(b=>{const n=b.slice(0,13);n[0]+=SNAP;n[13]=(fo&&fo!='Workspace')?fo:'';SBl.push(n)});SELM=SBl.map((b,i)=>i).filter(i=>i>=n0);SEL=n0;ssync()}
function ren(){if(CTX&&CTX.k=='scr'){const n=prompt('Nuevo nombre',SCR[CTX.i].n);if(n){SCR[CTX.i].n=n.slice(0,20);ssync()}return}const i=sel()[0];if(i==null)return;const n=prompt('Nuevo nombre',SBl[i][14]||'');if(n!==null){SBl[i][14]=n.slice(0,24);ssync()}}
function grp(){const g='g'+Date.now()%1e6;sel().forEach(i=>{SBl[i][15]=g});ssync()}
function ugrp(){sel().forEach(i=>{delete SBl[i][15]});ssync()}
function selCh(){if(CTX&&CTX.k=='fold'){const f=CTX.f;SELM=SBl.map((b,i)=>i).filter(i=>f=='Workspace'?!SBl[i][13]:SBl[i][13]==f)}else{const g=sel().map(i=>SBl[i][15]).filter(Boolean);SELM=SBl.map((b,i)=>i).filter(i=>g.includes(SBl[i][15]))}SEL=SELM[0]??-1;ssync()}
function zoomTo(){const s=sel();if(!s.length)return;const b=SBl[s[0]];STG=[b[0],b[1],b[2]];sdi=Math.max(6,Math.max(b[3],b[4],b[5])*3);ssync()}
function insPart(){SBl.push([Math.round(STG[0]),ISZ[1]/2,Math.round(STG[2]),...ISZ,ICOL,1,1,'',ISH,IMT,0]);SEL=SBl.length-1;SELM=[];ssync()}
function insObj(k){if(k==99){SCR.push({n:'Script'+(SCR.length+1),c:''});ssync();return}if(k<4){const o=ISH;ISH=k;insPart();ISH=o}else{const f=FN[k-4],[w,h,d]=f[1];SBl.push([Math.round(STG[0]),h/2,Math.round(STG[2]),w,h,d,f[2],1,(f[3]==6||f[3]==8)?0:1,'',f[4]||0,f[5]||0,f[3]]);SEL=SBl.length-1;SELM=[];ssync()}}
function insFile(i){const f=i.files[0];i.value='';if(!f)return;if(f.type.startsWith('image/')){if(f.size>6e5)return alert('Máximo 600 KB');const r=new FileReader();r.onload=()=>{const id='m'+Date.now();MK.push({id,t:'imagen',n:f.name.slice(0,20),d:r.result,by:me});save();if((CTX&&CTX.f=='Lighting')||(SELS=='Lighting'&&!sel().length))ST.skyImg=id;else if(SBl[SEL])SBl[SEL][9]=id;ssync()};r.readAsDataURL(f)}else rd({files:[f]},o=>{if(okB(o)){o.forEach(b=>SBl.push(b.slice(0,13)));ssync()}})}
function saveLocal(n){const s=sel();if(!s.length)return;n=(typeof n=='string'?n:prompt('Nombre del plugin/modelo','Mi modelo'));if(!n)return;n=n.slice(0,20);const o=SBl[s[0]],bl=s.map(i=>{const b=SBl[i].slice(0,13);b[0]-=o[0];b[2]-=o[2];return b});(U[me].plug=U[me].plug||{})[n]=bl;PF['⭐ '+n]=bl;save();studio()}
function toPkg(){const n=prompt('Nombre del paquete','Paquete');if(!n)return;grp();saveLocal(n)}
function pubPlug(){const n=prompt('Nombre para publicar','Mi modelo');if(!n)return;MK.push({id:'m'+Date.now(),t:'modelo',n:n.slice(0,24),d:JSON.stringify(sel().map(i=>SBl[i].slice(0,13))),by:me});save();recordBuild(false);alert('Publicado en el Mercado')}
function saveSel(){dl('seleccion.json',JSON.stringify(sel().map(i=>SBl[i].slice(0,13))))}
function saveProj(){U[me].proj={b:SBl.map(x=>x.slice(0,16)),st:ST,sc:SCR};save();recordBuild(false);alert('Proyecto guardado en tu cuenta')}
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
function dup(){const s=sel();if(!s.length)return;const n0=SBl.length;s.forEach(i=>{const n=SBl[i].slice(0,13);n[0]+=SNAP;SBl.push(n)});SELM=SBl.map((b,i)=>i).filter(i=>i>=n0);SEL=n0;ssync()}
function props(){const b=SBl[SEL];
 if(b){const E=(i,v)=>`<input type="number" step=".5" value="${v}" onchange="pr(${i},this.value)" style="width:62px">`;
  return `<div>Posición ${E(0,b[0])}${E(1,b[1])}${E(2,b[2])}</div><div>Tamaño ${E(3,b[3])}${E(4,b[4])}${E(5,b[5])}</div><div>Color <input type="color" value="${b[6]}" onchange="SBl[SEL][6]=this.value;ssync()"></div><div>Transparencia <input type="range" min="0" max="1" step=".1" value="${1-(b[7]??1)}" onchange="SBl[SEL][7]=1-this.value;ssync()"></div>
<div>Forma <select ${SELC} onchange="SBl[SEL][10]=+this.value;ssync()">${OPT(['Bloque','Esfera','Cilindro','Pirámide'],b[10]|0)}</select></div><div>Material <select ${SELC} onchange="SBl[SEL][11]=+this.value;ssync()">${OPT(['Plástico','Neón','Cristal'],b[11]|0)}</select></div><div>Función <select ${SELC} onchange="SBl[SEL][12]=+this.value;ssync()">${OPT(ROLES,b[12]|0)}</select></div>
<label>Colisión (Anchored) <input type="checkbox" ${b[8]===0?'':'checked'} onchange="SBl[SEL][8]=this.checked?1:0;ssync()"></label><div>Textura <select ${SELC} onchange="SBl[SEL][9]=this.value;ssync()"><option value="">Ninguna</option>${MK.filter(m=>m.t=='imagen'||m.t=='gif').map(m=>`<option value="${m.id}" ${b[9]==m.id?'selected':''}>${esc(m.n)}</option>`).join('')}</select></div><button class="s" onclick="SBl.splice(SEL,1);SEL=-1;ssync()">Eliminar</button> <button class="s" onclick="dup()">Duplicar</button>`}
 const N=(k,l,mn,mx,st)=>`<label class="set">${l}<input type="number" min="${mn}" max="${mx}" step="${st}" value="${ST[k]}" onchange="ST['${k}']=+this.value" style="width:80px"></label>`;
 if(SELS=='Lighting')return N('clock','ClockTime',0,24,.5)+N('bright','Brightness',0,2,.1)+N('fog','FogEnd',30,400,10)+`<label class="set">Nubes <input type="checkbox" ${ST.clouds===0?'':'checked'} onchange="ST.clouds=this.checked?1:0"></label><small>🖼 Arrastra una imagen (Toolbox → Imágenes) a Lighting para usarla de cielo.</small>`+`<label class="set">SkyColor <span><input type="color" value="${ST.sky||'#6a3dad'}" onchange="ST.sky=this.value"><button class="s" onclick="ST.sky='';epr()">auto</button></span></label>`;
 if(SELS=='StarterPlayer')return N('walk','WalkSpeed',2,30,1)+N('jump','JumpPower',4,30,.5);
 if(SELS=='Workspace')return N('grav','Gravity',5,80,1)+`<label class="set">Suelo de lava <input type="checkbox" ${ST.lava?'checked':''} onchange="ST.lava=this.checked?1:0"></label><label class="set">Color del suelo <input type="color" value="${ST.gcol}" onchange="ST.gcol=this.value"></label>`;
 if(SELS=='StarterGui')return `<label class="set">HUD <input value="${esc(ST.hud)}" onchange="ST.hud=this.value"></label><label class="set">Bienvenida <input value="${esc(ST.msg)}" onchange="ST.msg=this.value"></label>`;
 return `<small>${SELS} no tiene propiedades editables todavía.</small>`}
const rbar=()=>({
 Home:`<button onclick="setT('sel')">🖱 Seleccionar</button><button onclick="setT('mv')">✥ Mover</button><button onclick="scl(1.25)">⤢ Escalar +</button><button onclick="scl(.8)">⤡ Escalar −</button><button class="s" onclick="setT('del')">🗑 Borrar</button><label>Snap <select ${SELC} onchange="SNAP=+this.value">${[.25,.5,1,2].map(v=>`<option ${v==SNAP?'selected':''}>${v}</option>`).join('')}</select></label><label>Forma <select ${SELC} onchange="ISH=+this.value">${OPT(['Bloque','Esfera','Cilindro','Pirámide'],ISH)}</select></label><label>Material <select ${SELC} onchange="IMT=+this.value">${OPT(['Plástico','Neón','Cristal'],IMT)}</select></label><label>Color <input type="color" value="${ICOL}" oninput="ICOL=this.value"></label><label>Tamaño ${[0,1,2].map(i=>`<input type="number" min=".2" max="40" step=".5" value="${ISZ[i]}" onchange="ISZ[${i}]=+this.value" style="width:58px">`).join('')}</label><button onclick="IR=0;setT('add')">➕ Parte</button><button class="s" onclick="undo()">↩</button><button class="s" onclick="redo()">↪</button><button class="play" onclick="testG()">▶ Probar</button><b id="tm"></b>`,
 Model:`<button onclick="dup()">⧉ Duplicar (Ctrl+D)</button><button class="s" onclick="SBl=[];SEL=-1;ssync()">Limpiar mapa</button><button class="s" onclick="dl('mapa.json',JSON.stringify(SBl))">⬇ Exportar mapa</button><button class="s" onclick="$('#imm').click()">⬆ Importar mapa</button><input id="imm" type="file" accept=".json" hidden onchange="impM(this)"><small>Teclas: flechas y AvPág/RePág mueven la parte, Supr borra, Ctrl+Z deshace, Ctrl+Y rehace.</small>`,
 Avatar:`<button onclick="fnSel(0)">📍 Spawn</button><button onclick="fnSel(1)">🚩 Checkpoint</button><label>WalkSpeed <input type="number" value="${ST.walk}" onchange="ST.walk=+this.value" style="width:64px"></label><label>JumpPower <input type="number" value="${ST.jump}" onchange="ST.jump=+this.value" style="width:64px"></label><button class="s" onclick="go('avatar')">🧍 Editar mi avatar</button>`,
 UI:`<label>Texto del HUD <input value="${esc(ST.hud)}" onchange="ST.hud=this.value" style="width:220px"></label><label>Mensaje de bienvenida <input value="${esc(ST.msg)}" onchange="ST.msg=this.value" style="width:260px"></label>`,
 Script:`<select ${SELC} onchange="SSEL=+this.value;studio()">${SCR.map((s,i)=>`<option value="${i}" ${i==SSEL?'selected':''}>${esc(s.n)}</option>`).join('')}</select><button onclick="SCR.push({n:'Script'+(SCR.length+1),c:''});SSEL=SCR.length-1;studio()">➕ Nuevo</button><button class="s" onclick="if(SCR.length>1){SCR.splice(SSEL,1);SSEL=0;studio()}">🗑</button><input value="${esc(SCR[SSEL].n)}" onchange="SCR[SSEL].n=this.value.slice(0,20);epr()" style="width:130px"><textarea rows="7" style="flex:1 1 100%;font-family:monospace" oninput="SCR[SSEL].c=this.value">${esc(SCR[SSEL].c)}</textarea><small>API: game.say(t) · hud(t) · sound(n) · coins() · sword() · mob(x,z,{hp,speed,dmg,size,color,peaceful}) · onKill(f) · onTick((dt,t)=>…) · addBlock([x,y,z,w,h,d,color,op,col,tex,forma,mat,función]) · removeBlock(m) · setSpawn(x,y,z) · die() · onDie(f) · sky(color) · light(n) · player</small>`,
 Plugins:`<button onclick="go('store')">🏪 Abrir Mercado</button><button class="s" onclick="dl('mapa.json',JSON.stringify(SBl))">⬇ Exportar mapa</button><button class="s" onclick="$('#imm').click()">⬆ Importar</button><input id="imm" type="file" accept=".json" hidden onchange="impM(this)"><small>Los plugins externos no están disponibles; usa el Mercado para modelos, imágenes y sonidos.</small>`,
 Publicar:`${EDITG?`<button class="play" onclick="saveGame()">💾 Guardar cambios en «${esc((gmx(EDITG)||{}).n||'')}»</button><button class="s" onclick="EDITG=''">Dejar de editar</button>`:''}<input id="pt" placeholder="Nombre del juego" style="width:200px"><input id="ph" placeholder="#hashtag" style="width:140px"><textarea id="pd" placeholder="Descripción" rows="2" style="flex:1 1 220px"></textarea><label>Logo (obligatorio) <input type="file" id="pi" accept="image/*"></label><label>Banner (opcional) <input type="file" id="pb" accept="image/*"></label><button onclick="pub()">🚀 Publicar juego</button><small id="pe" style="color:#ff8fa3"></small>`})[RT],
tbox=()=>{const t=['Modelos','Funciones','Sonidos','Imágenes'].map(x=>`<button class="${TBT==x?'':'s'}" style="padding:5px 8px" onclick="TBT='${x}';studio()">${x}</button>`).join(' ');let b='';
 if(TBT=='Modelos')b=Object.keys(PF).map(k=>`<button class="s" onclick="PFS='${k}';setT('pf')">🧰 ${k}</button>`).join('');
 if(TBT=='Funciones')b=FN.map((f,i)=>`<button class="s" onclick="fnSel(${i})">${f[0]}</button>`).join('');
 if(TBT=='Sonidos')b=Object.keys(SND).map(k=>`<button class="s" onclick="snd('${k}')">🔊 ${k}</button>`).join('')+MK.filter(m=>m.t=='sonido').map(m=>`<button class="s" onclick="snd('${m.id}')">🔊 ${esc(m.n)}</button>`).join('');
 if(TBT=='Imágenes')b=MK.filter(m=>m.t=='imagen'||m.t=='gif').map(m=>`<button class="s" draggable="true" ondragstart="DR='i${m.id}'" onclick="if(SBl[SEL]){SBl[SEL][9]='${m.id}';ssync()}">🖼 ${esc(m.n)}</button>`).join('')||'<small>Publica imágenes en el Mercado y aplícalas al bloque seleccionado.</small>';
 return `<div class="set" style="display:block"><b>🧰 Toolbox</b><div style="margin:6px 0">${t}</div><div style="display:grid;gap:4px;max-height:430px;overflow:auto">${b}</div></div>`};
const impM=i=>rd(i,o=>{if(okB(o)){SBl=o.map(b=>b.slice(0,13));ssync()}});
/* ---------- Mercado ---------- */
function store(){$('#main').innerHTML=`<h2>🏪 Mercado</h2><div class="set" style="display:grid;gap:4px"><b>Publicar</b><select id="mt" style="background:#241040;color:#fff;border-radius:8px;padding:6px">${['imagen','gif','video','sonido','avatar','mascota','modelo'].map(t=>`<option>${t}</option>`).join('')}</select><input id="mn" placeholder="Nombre"><input id="mf" type="file" accept="image/*,video/*,audio/*"><small>Imagen, gif, video o sonido: sube un archivo (máx. 600 KB). Avatar, mascota y modelo: publican el tuyo actual (tu avatar, tu mascota o el mapa del Studio).</small><button onclick="pubM()">Publicar</button><small id="me2" style="color:#ff8fa3"></small></div><h3>🔊 Sonidos incluidos</h3>${Object.keys(SND).map(k=>`<button class="s" onclick="snd('${k}')">${k}</button> `).join('')}<h3>Publicado</h3><div class="row" style="flex-wrap:wrap">${MK.map(mc).join('')||'<i>Aún no hay nada publicado</i>'}</div>`}
function mc(m){let v='';if(m.t=='imagen'||m.t=='gif')v=`<img src="${m.d}" style="height:90px;max-width:100%">`;else if(m.t=='video')v=`<video src="${m.d}" controls style="height:90px;max-width:100%"></video>`;else if(m.t=='sonido')v=`<audio src="${m.d}" controls style="width:100%"></audio>`;else if(m.t=='modelo')v='🧱 modelo';else v=m.t=='avatar'?'🧍 avatar':'🟪 mascota';
 return `<div class="card2">${v}<b>${esc(m.n)}</b><small>${m.t} · por ${esc(m.by)}</small>${['avatar','mascota','modelo'].includes(m.t)?`<button onclick="useM('${m.id}')">Usar</button>`:''}${m.by==me?`<button class="s" onclick="MK=MK.filter(x=>x.id!='${m.id}');save();store()">Quitar</button>`:''}</div>`}
function useM(id){const m=MK.find(x=>x.id==id);if(!m)return;if((m.t=='avatar'||m.t=='mascota')&&m.by!=me&&!own()['m:'+id]){if(!can('Tienda gratis')){if(nd()<10)return alert('Cuesta 10 Nixdollar (tienes '+nd()+')');addND(me,-10)}own()['m:'+id]=1;save();updWallet()}try{const o=JSON.parse(m.d);if(m.t=='modelo'){if(okB(o)){SBl=o.map(b=>b.slice(0,13));go('studio')}}else{applyAv(o);go('avatar')}}catch(e){}}
function pubM(){const t=$('#mt').value,n=$('#mn').value.trim(),f=$('#mf').files[0],e=$('#me2');if(!n)return e.textContent='Falta el nombre';
 const add=d=>{MK.push({id:'m'+Date.now(),t,n,d,by:me});save();store()};
 if(t=='avatar'){if(!can('Publicar gratis')){if(nd()<5){e.textContent='Publicar un avatar cuesta 5 Nixdollar (tienes '+nd()+')';return}addND(me,-5)}updWallet();return add(JSON.stringify(A()))}if(t=='mascota')return add(JSON.stringify({petC:A().petC,pet:A().pet,petA:A().petA}));if(t=='modelo')return add(JSON.stringify(SBl));
 if(!f)return e.textContent='Elige un archivo';if(f.size>6e5)return e.textContent='Máximo 600 KB';
 const r=new FileReader();r.onload=()=>add(r.result);r.readAsDataURL(f)}
/* ---------- Nixora Studio ---------- */
let SR,SS,SM=[],SBl=[],tool='add',gp,SCm,sa=.8,sp_=.7,sdi=18;
const rc=window.THREE&&new THREE.Raycaster(),m2=window.THREE&&new THREE.Vector2(),setT=t=>{tool=t;const e=$('#tm');if(e)e.textContent='Herramienta: '+TN2[t]};
function studio(){if(!PLD){PLD=1;const p=U[me].proj;if(p&&!SBl.length){SBl=p.b;Object.assign(ST,p.st);SCR=p.sc;LAST=JSON.stringify(SBl)}Object.entries(U[me].plug||{}).forEach(([n,b])=>{PF['⭐ '+n]=b})}
 $('#main').innerHTML=`<div class="rbar">${['Home','Model','Avatar','UI','Script','Plugins','Publicar'].map(t=>`<button class="${RT==t?'':'s'}" onclick="RT='${t}';studio()">${t}</button>`).join('')}</div><div class="rbar">${rbar()}</div><div class="stg"><div>${tbox()}</div><div id="shd"></div><div id="ep"></div></div><input id="ifl" type="file" accept="image/*,.json" hidden onchange="insFile(this)">`;setT(tool);
 if(!SR){SR=new THREE.WebGLRenderer({antialias:true});SS=new THREE.Scene();SS.background=new THREE.Color('#2a1245');SS.add(new THREE.AmbientLight(0xffffff,.75));
  const l=new THREE.DirectionalLight(0xffffff,.7);l.position.set(5,10,7);SS.add(l,new THREE.GridHelper(60,60,0x9d4edd,0x4b2a7a));
  gp=new THREE.Mesh(new THREE.PlaneGeometry(60,60).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({visible:false}));SS.add(gp);SCm=new THREE.PerspectiveCamera(60,1,.1,200);
  const d=SR.domElement;let dn=0,mx=0;
  d.onpointerdown=()=>{dn=1;mx=0};
  d.onpointermove=e=>{if(!dn)return;mx+=Math.abs(e.movementX)+Math.abs(e.movementY);sa-=e.movementX*.01;sp_=Math.max(.05,Math.min(1.5,sp_+e.movementY*.01));sr()};
  d.onpointerup=e=>{dn=0;if(mx<5&&e.button==0)sclick(e)};d.onpointerleave=()=>dn=0;d.oncontextmenu=e=>{e.preventDefault();const h=pick(e),i=h?SM.indexOf(h.object):-1;if(i>=0&&!sel().includes(i)){SEL=i;SELM=[];ssync()}ctxm(e,{k:'blk',i})};
  d.onwheel=e=>{e.preventDefault();sdi=Math.max(4,Math.min(60,sdi+e.deltaY*.02));sr()}}
 const h=$('#shd'),w=h.clientWidth||600,ht=Math.max(320,Math.min(560,innerHeight-230));h.appendChild(SR.domElement);SR.setSize(w,ht);SCm.aspect=w/ht;SCm.updateProjectionMatrix();ssync()}
function sr(){SCm.position.set(STG[0]+Math.sin(sa)*Math.cos(sp_)*sdi,STG[1]+Math.sin(sp_)*sdi,STG[2]+Math.cos(sa)*Math.cos(sp_)*sdi);SCm.lookAt(STG[0],STG[1],STG[2]);SR.render(SS,SCm)}
const GEO=window.THREE?[new THREE.BoxGeometry(1,1,1),new THREE.SphereGeometry(.5,16,12),new THREE.CylinderGeometry(.5,.5,1,16),new THREE.ConeGeometry(.5,1,4).rotateY(Math.PI/4)]:[],
shp=b=>{const m=new THREE.Mesh(GEO[b[10]|0]||GEO[0],mat(b));m.scale.set(b[3],b[4],b[5]);return m};
let STUDIO_SAVE_TIMER=null;
function scheduleStudioAutosave(){if(!me||cur!=='studio'||!U[me])return;clearTimeout(STUDIO_SAVE_TIMER);STUDIO_SAVE_TIMER=setTimeout(()=>{if(cur==='studio'&&U[me]){U[me].proj={b:SBl.map(x=>x.slice(0,16)),st:{...ST},sc:SCR.map(x=>({...x}))};save()}},1600)}
function ssync(){const curS=JSON.stringify(SBl);if(curS!=LAST){HI.push(LAST);if(HI.length>60)HI.shift();HR=[]}LAST=curS;
 SM.forEach(m=>SS.remove(m));SM=SBl.map((b,i)=>{const m=shp(b);m.position.set(b[0],b[1],b[2]);if(b[13])m.layers.set(1);if(m.material.emissive&&sel().includes(i))m.material.emissive.set(0x555555);SS.add(m);return m});sr();epr();scheduleStudioAutosave()}
function undo(){if(!HI.length)return;HR.push(LAST);SBl=JSON.parse(HI.pop());LAST=JSON.stringify(SBl);SEL=-1;ssync()}
function redo(){if(!HR.length)return;HI.push(LAST);SBl=JSON.parse(HR.pop());LAST=JSON.stringify(SBl);SEL=-1;ssync()}
function sclick(e){const r=SR.domElement.getBoundingClientRect();m2.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);rc.setFromCamera(m2,SCm);
 const h=rc.intersectObjects([...SM,gp])[0];if(!h)return;const i=SM.indexOf(h.object),p=h.point.toArray(),sn=v=>Math.round(v/SNAP)*SNAP;
 if(tool=='sel'){SEL=i;SELS='';ssync();return}
 if(tool=='del'){if(i>=0){SBl.splice(i,1);SEL=-1;ssync()}return}
 if(tool=='mv'){const b=SBl[SEL];if(!b)return;if(i<0){b[0]=sn(p[0]);b[2]=sn(p[2]);b[1]=b[4]/2}else if(i!=SEL){const o=SBl[i];b[0]=sn(p[0]);b[2]=sn(p[2]);b[1]=o[1]+o[4]/2+b[4]/2}ssync();return}
 if(tool=='pf'){const oy=i<0?0:Math.round(p[1]);PF[PFS].forEach(b=>SBl.push([b[0]+sn(p[0]),b[1]+oy,b[2]+sn(p[2]),b[3],b[4],b[5],b[6]]));ssync();return}
 const s=[...ISZ];let b;
 if(i<0)b=[sn(p[0]),s[1]/2,sn(p[2])];
 else{const o=SBl[i],n=h.face.normal.toArray(),os=[o[3],o[4],o[5]];b=[0,1,2].map(a=>n[a]?o[a]+n[a]*(os[a]+s[a])/2:(a==1?o[1]:sn(p[a])))}
 SBl.push([...b,...s,ICOL,1,IR==6||IR==8?0:1,'',ISH,IMT,IR]);SEL=SBl.length-1;ssync()}
function testG(){play({n:'Prueba',by:me,sc:allSc(),b:SBl.filter(x=>!x[13]).map(x=>x.slice(0,13)),gr:ST.gcol,id:'t',st:{...ST},lava:ST.lava?1:0})}
function im2(f,w,h,cb){const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(i,0,0,w,h);cb(c.toDataURL('image/jpeg',.7))};i.src=r.result};r.readAsDataURL(f)}
function pub(){const t=$('#pt').value.trim(),d=$('#pd').value.trim(),h=$('#ph').value.trim(),f=$('#pi').files[0],bn=$('#pb').files[0],e=$('#pe');
 if(!t||!d||!f)return e.textContent='Nombre, descripción y logo son obligatorios.';
 if(h&&!/^#?\w{2,20}$/.test(h))return e.textContent='Hashtag no válido (2-20 caracteres, sin espacios).';
 im2(f,320,180,img=>{const done=ban=>{G.push({id:'u'+Date.now(),n:t,d,h:h?(h[0]=='#'?h:'#'+h):'',img,ban,b:SBl.filter(x=>!x[13]).map(x=>x.slice(0,13)),sc:allSc(),st:{...ST},lava:ST.lava?1:0,by:me,gr:ST.gcol});save();recordBuild(true);go('home')};bn?im2(bn,800,225,done):done('')})}

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
function cfg(){$('#main').innerHTML=`<h2>⚙ Configuración</h2><div class="set" style="display:grid;gap:8px"><b>📱 Controles móviles</b><label>Tipo de movimiento <select id="touchmode" onchange="C.touchmode=this.value;save();document.body.classList.toggle('controls-buttons',this.value==='buttons')"><option value="joystick" ${cv('touchmode','joystick')==='joystick'?'selected':''}>Joystick (predeterminado)</option><option value="buttons" ${cv('touchmode','joystick')==='buttons'?'selected':''}>Botones direccionales</option></select></label><label>Tamaño de controles <input type="range" min="48" max="120" value="${cv('touchsize',80)}" oninput="C.touchsize=+this.value;document.documentElement.style.setProperty('--btn-size',this.value+'px');document.documentElement.style.setProperty('--joy-size',(this.value*1.5)+'px');save()"></label><small>Los cambios se guardan en este dispositivo.</small></div><div class="set" style="display:grid;gap:4px"><b>📝 Mi descripción (máx. 750 letras)</b><textarea id="ds" maxlength="750" rows="4" oninput="$('#dc').textContent=this.value.length+'/750'">${esc(U[me].desc||'')}</textarea><small id="dc">${(U[me].desc||'').length}/750</small><button onclick="U[me].desc=$('#ds').value.slice(0,750);save();$('#dc').textContent='✔ Guardada'">Guardar descripción</button></div>
<div class="set" style="display:grid;gap:4px"><b>🎨 Fondo y ambiente del menú</b>
<label>Color de fondo <input type="color" value="${cv('bgC','#12061f')}" onchange="setBG('bgC',this.value)"></label>
<label>Color de acento <input type="color" value="${cv('acc','#7b2cbf')}" onchange="setBG('acc',this.value)"></label>
<label>Imagen de fondo <input type="file" accept="image/*" onchange="bgImg(this)"></label><button class="s" onclick="setBG('bgI','')">Quitar imagen</button>
<label>Mostrar figuras flotantes <input type="checkbox" ${cv('bgOn',true)?'checked':''} onchange="setBG('bgOn',this.checked)"></label>
<label>Mostrar estrellas y anillo <input type="checkbox" ${cv('bgS',true)?'checked':''} onchange="setBG('bgS',this.checked)"></label>
<label>Forma <select onchange="setBG('bgSh',+this.value)" style="background:#241040;color:#fff;border-radius:8px;padding:6px">${['Cubos','Esferas','Pirámides','Gemas'].map((t,i)=>`<option value="${i}" ${cv('bgSh',0)==i?'selected':''}>${t}</option>`).join('')}</select></label>
<label>Color de las figuras <input type="color" value="${cv('bgCol','#9d4edd')}" onchange="setBG('bgCol',this.value)"></label><button class="s" onclick="setBG('bgCol','')">Colores mixtos</button>
<label>Cantidad <input type="range" min="0" max="120" value="${cv('bgN',45)}" onchange="setBG('bgN',+this.value)"></label></div>
<div class="set" style="display:grid;gap:4px"><b>👤 Cuenta</b><input id="nu" placeholder="Nuevo nombre de usuario"><button onclick="chU()">Cambiar usuario</button><input id="op" type="password" placeholder="Contraseña actual"><input id="np" type="password" placeholder="Nueva contraseña"><button onclick="chP()">Cambiar contraseña</button><small id="am"></small></div><label class="set">🌐 Servidor multijugador<input id="srv" value="${esc(cv('srv',SRV0))}" onchange="C.srv=this.value;save()"></label><input id="cs" placeholder="Buscar ajuste…" oninput="cfs()"><div id="cl"></div>`;cfs()}
function chU(){const n=$('#nu').value,m=$('#am');if(!/^\w{8,15}$/.test(n)||BAD.test(n))return m.textContent='No puedes escribir ese usuario!';if(U[n])return m.textContent='Ese usuario ya existe';U[n]=U[me];delete U[me];G.forEach(g=>{if(g.by==me)g.by=n});me=n;save();$('#who').innerHTML='👤 '+esc(n)+tag(n);m.textContent='✔ Usuario cambiado'}
function chP(){const o=$('#op').value,n=$('#np').value,m=$('#am');if(U[me].h!==hs(o))return m.textContent='La contraseña actual no es correcta';if(n.length<8||n.length>15||BAD.test(n))return m.textContent='No puedes escribir esa contraseña!';U[me].h=hs(n);save();m.textContent='✔ Contraseña cambiada'}
function cfs(){const q=$('#cs').value.toLowerCase();
 $('#cl').innerHTML=CF.map((s,i)=>{
  const R=(s[1]?s[1].split(','):[]).map(r=>r.split(':')).filter(r=>r[1].toLowerCase().includes(q)).map(r=>`<label class="set">${r[1]}<span><input type="range" min="${r[2]}" max="${r[3]}" step="${r[3]-r[2]<5?.1:1}" value="${cv(r[0],+r[4])}" oninput="C['${r[0]}']=+this.value;save();this.nextSibling.textContent=this.value"><b>${cv(r[0],+r[4])}</b></span></label>`),
  T=s[2].split(',').map((t,j)=>[t,j]).filter(x=>x[0].toLowerCase().includes(q)).map(([t,j])=>`<label class="set">${t}<input type="checkbox" ${cv(i+'_'+j,!OFF.test(t))?'checked':''} onchange="C['${i}_${j}']=this.checked;save()"></label>`);
  return R.length+T.length?`<h3>${s[0]}</h3>`+R.join('')+T.join(''):''}).join('')}

/* ---------- Fondo 3D del menú ---------- */
function bgBuild(){if(!BGS)return;BGU.forEach(m=>BGS.remove(m));BGU=[];const n=cv('bgN',45),sh=cv('bgSh',0),col=cv('bgCol','');
 for(let i=0;i<n;i++){const z=Math.random()*2+.5,g=[new THREE.BoxGeometry(z,z,z),new THREE.SphereGeometry(z/2,12,10),new THREE.ConeGeometry(z/2,z,4),new THREE.IcosahedronGeometry(z/2)][sh],
  m=new THREE.Mesh(g,new THREE.MeshLambertMaterial({color:col?new THREE.Color(col):new THREE.Color().setHSL((260+Math.random()*50)/360,.7,.35+Math.random()*.25),transparent:true,opacity:.75}));
  m.position.set((Math.random()-.5)*40,(Math.random()-.5)*24,-Math.random()*20);m.userData={v:(Math.random()+.3)*.01,y:m.position.y};m.visible=cv('bgOn',true);BGS.add(m);BGU.push(m)}
 BGS.userData.ex.visible=cv('bgS',true)}
function bg3d(){const r=new THREE.WebGLRenderer({canvas:$('#bg'),alpha:true,antialias:true}),s=BGS=new THREE.Scene(),cm=new THREE.PerspectiveCamera(60,1,.1,100);cm.position.z=14;
 s.add(new THREE.AmbientLight(0xffffff,.6));const l=new THREE.DirectionalLight(0xffffff,.9);l.position.set(5,8,10);s.add(l);
 const ex=new THREE.Group(),sp=new Float32Array(1200);for(let i=0;i<1200;i++)sp[i]=(Math.random()-.5)*(i%3==2?30:90);
 const st=new THREE.Points(new THREE.BufferGeometry().setAttribute('position',new THREE.BufferAttribute(sp,3)),new THREE.PointsMaterial({color:0xe0c3ff,size:.12})),
 ring=new THREE.Mesh(new THREE.TorusGeometry(9,.06,8,100),new THREE.MeshBasicMaterial({color:0xc77dff}));ring.position.z=-8;ring.rotation.x=1.1;
 ex.add(st,ring);s.add(ex);s.userData.ex=ex;bgBuild();
 const rs=()=>{r.setSize(innerWidth,innerHeight);cm.aspect=innerWidth/innerHeight;cm.updateProjectionMatrix()};rs();addEventListener('resize',rs);
 (function f(t){requestAnimationFrame(f);if(!$('#play').hidden)return;BGU.forEach(m=>{const u=m.userData;m.rotation.x+=u.v;m.rotation.y+=u.v*1.4;m.position.y=u.y+Math.sin(t/1000+u.v*500)*.8});ring.rotation.z=t/6000;st.rotation.y=t/40000;r.render(s,cm)})()}
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
const STD={clock:14,bright:1,fog:150,sky:'',walk:6,jump:10.5,grav:28,lava:0,gcol:'#2a1245',hud:'',msg:'',clouds:1,skyImg:''};
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
function eco(k){const u=$('#au').value.trim(),n=Math.max(0,+$('#an').value||0);if(!U[u]){alert(ONLINE_PLAYERS.some(p=>p.n.toLowerCase()===u.toLowerCase())?'Ese jugador está conectado, pero su cuenta no está guardada en este navegador; las acciones de cuenta requieren una base de datos compartida.':'Usuario no encontrado.');return}if(k=='add'&&need('Dar Nixdollar'))addND(u,n);if(k=='sub'&&need('Quitar Nixdollar'))addND(u,-n);if(k=='set'&&need('Fijar saldo'))U[u].nd=n;save();updWallet();apr()}
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
function adminEdit(id){const g=gmx(id);EDITG=id;SBl=(g.b||[]).map(b=>b.slice(0,16));ST={...STD,...(g.st||{})};SCR=[{n:'Script',c:g.sc||''}];SSEL=0;SEL=-1;SELM=[];LAST=JSON.stringify(SBl);RT='Home';apClose();go('studio')}
function saveGame(){const o=OVR[EDITG]||(OVR[EDITG]={});o.b=SBl.filter(x=>!x[13]).map(x=>x.slice(0,13));o.sc=allSc();o.st={...ST};o.lava=ST.lava?1:0;save();recordBuild(false);alert('Juego actualizado.')}
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
 Economía:()=>`<div class="rbar">${U_()}<input id="an" type="number" min="0" value="100" style="width:100px"><button onclick="eco('add')">➕ Dar</button><button class="s" onclick="eco('sub')">➖ Quitar</button><button class="s" onclick="eco('set')">= Fijar saldo</button></div>`+(can('Ver billeteras')?`<h3>💵 Billeteras</h3>${Object.keys(U).map(u=>`<div class="srv"><b>${esc(u)}</b>${tag(u)}<span style="margin-left:auto">💵 ${U[u].nd||0}</span></div>`).join('')}`:''),
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
