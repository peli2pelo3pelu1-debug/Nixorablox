# Menú de pausa y mapas urbanos — Nixora Blox

## Cambios
- Menú al estilo del panel clásico de jugadores, abierto con Esc o el botón Menú. Contiene Players, Settings, Report, Help y Record; acciones inferiores Reset Character, Leave Game, Instructions y Resume Game.
- La lista incluye la cuenta local y las demás conexiones WebSocket presentes en la sala activa. NPC, zombis y mascotas no aparecen como jugadores.
- La lista se actualiza cuando entra o sale una conexión real.
- La acción View muestra el perfil básico del jugador conectado. La solicitud Add Friend se notifica si el destinatario permanece en la misma sala; para solicitudes persistentes entre sesiones se necesita un sistema social en servidor/DB.
- Report se retransmite únicamente como aviso de sala al usuario ParaCraftero conectado en la misma sala y se guarda una copia local en ese cliente; no es todavía un sistema global de moderación persistente.
- La grabación exporta el canvas del juego a WebM en navegadores compatibles.
- Ciudades con calles organizadas y manzanas reservadas para edificios. Los mundos identificados como supervivencia/zombis también generan barrios en los sectores procedurales. Los obbys, duelos, laberintos y puzzles conservan sus áreas temáticas.

## Instalación
1. Extrae el ZIP.
2. Sube el contenido de `nixora-mobile` a la raíz del mismo repositorio GitHub conectado a Render.
3. Conserva las variables de entorno existentes.
4. Espera que Render indique Live y recarga con Ctrl+F5.

## Validación
La sintaxis de JavaScript se puede comprobar con `node --check script.js` y `node --check server.js`. Deben probarse visualmente el diseño, las colisiones de edificios y los eventos de jugadores reales en la instancia desplegada.
