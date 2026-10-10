# Nixora Blox — Multijugador común para todos los juegos

Esta actualización añade una capa multijugador común al catálogo. Cada experiencia usa su identificador como canal de sala; dos usuarios que abran el mismo juego entran en el mismo mundo público (o en la misma sala privada si usan el mismo código). No es necesario activar cada juego de forma individual.

## Qué sincroniza el servidor

- Presencia y posiciones de los jugadores, nombres y avatares mediante WebSocket.
- Un cliente anfitrión por sala para simular los NPC/enemigos; los demás clientes interpolan su posición sincronizada.
- Daño a NPC validado por el servidor y replicación de la vida/derrota a los jugadores de la sala.
- Bloques creados o eliminados durante la partida, siempre que la experiencia use `game.addBlock()` o `game.removeBlock()`.
- Una API común para eventos y estados de juego: `game.network.emit(type, payload)`, `on(type, fn)`, `set(key, value)`, `get(key)` y `onState(key, fn)`.
- Parcelas distintas por jugador en los tycoons generados, y sincronización de sus construcciones visibles.
- Ruta `/api/multiplayer/health` para comprobar el servicio multijugador.

## Instalación en Render

1. Guarda una copia del proyecto actual.
2. Descomprime este ZIP y abre `nixora-mobile`.
3. Sube el contenido de esa carpeta a la raíz del repositorio de GitHub que ya usa Render. Incluye `server.js`, `script.js`, `sw.js` y `package.json`; no subas una carpeta duplicada dentro del repositorio.
4. No borres las variables existentes `DATABASE_URL`, `NIXORA_ADMIN_USER`, `NIXORA_ADMIN_KEY` y `NIXORA_ADMIN_PASSWORD`.
5. Espera a que Render indique **Live** y recarga la web con `Ctrl + F5`.
6. Abre `https://nixorablox.onrender.com/api/multiplayer/health`. Debe devolver JSON con `ok: true`.

## Cómo probarlo

- Abre el mismo juego en dos dispositivos; usa dos cuentas diferentes porque una misma cuenta solo puede tener una sesión activa.
- Primero prueba un modo con NPC/enemigos y una experiencia que construya bloques (por ejemplo, Tycoon).
- Si ambos clientes abren juegos distintos, estarán en salas distintas; para jugar juntos deben seleccionar la misma experiencia y, si es una sala privada, el mismo código.

## Corrección de sesión duplicada

El servidor ahora reemplaza una conexión WebSocket antigua del mismo usuario cuando la sesión actual ya fue validada con PostgreSQL. Esto evita el falso mensaje de “ya hay alguien jugando” al volver a entrar a otro juego mientras el socket anterior todavía se está cerrando. La restricción de una cuenta por dispositivo sigue activa en el inicio de sesión: dos sesiones diferentes al mismo tiempo se rechazan.

Si el mensaje aparece en el formulario de inicio de sesión (antes de que aparezca el mundo), cierra otras pestañas o APKs que usen la misma cuenta y pulsa Cerrar sesión en ellas. Si cerraste todo de golpe, espera hasta 2 minutos para que caduque el bloqueo anterior y vuelve a intentarlo. No compartas tu cuenta con otros jugadores.

## Límites importantes

- El estado de la sala vive en la memoria del proceso de Render. Se reinicia si Render reinicia el servidor o cuando todos los jugadores salen de esa sala; no es un guardado permanente de progreso.
- El catálogo comparte jugadores, NPC/enemigos, daño y cambios de construcción. Contadores de misión, monedas recogidas individualmente, tiempos de carrera y otras reglas específicas siguen siendo progreso individual salvo que el script de ese modo use la API `game.network` para compartir esa regla.
- Mantén el servicio web en una sola instancia mientras el estado se almacena en memoria. Para escalar a varias instancias o regiones, se necesita un almacén/event bus compartido (por ejemplo, Redis o PostgreSQL con una estrategia de difusión en tiempo real).
- El multijugador depende de que cada red permita WSS/HTTPS. Las redes que bloqueen WebSockets pueden impedir que se conecten.

## Validación realizada

- `node --check` pasó para `server.js`, `script.js` y `sw.js`.
- Se compilaron 138 scripts generados para 23 familias de juegos con `new Function` sin errores de sintaxis.
- El ZIP se comprobará después de empaquetar. No se ha podido probar la conexión contra la base de datos ni una partida desplegada con dos dispositivos reales desde este entorno.
