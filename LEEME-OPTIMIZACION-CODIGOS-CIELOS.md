# Nixora Blox — optimización, cielos y códigos

## Catálogo y rendimiento

El catálogo se simplificó a 106 experiencias oficiales integradas (34 originales y 72 nuevas), para reducir variantes repetitivas y la cantidad de tarjetas repetidas en la pantalla principal. Se conservan el sistema de mundos creados por jugadores y los ocho estilos de obby infinito del generador.

La escena decorativa del menú usa menos geometría, renderizado más lento y pausa completa mientras hay una partida. El terreno adicional mantiene un anillo de 3 x 3 sectores y menos decoraciones por sector. Los dispositivos táctiles usan menor pixel ratio, sin sombras dinámicas y con menos nubes.

## Cielos

El catálogo contiene 80 gradientes: 20 paletas base con variaciones suave, viva y clara. Los detalles del juego permiten seleccionar una vista previa local; Studio → Lighting permite elegir un preset para guardarlo en el proyecto al usar Guardar/Publicar.

## Modos

- Tycoon: cuatro parcelas, compras de mejoras e ingresos.
- Supervivencia, defensa y mazmorra: oleadas y jefes.
- Duelos 1v1: dos jugadores por arena; los golpes se comprueban en el servidor por tiempo de ataque, proximidad y pertenencia al mismo mundo.
- Espada táctil: solo cuando el juego llama al sistema de combate. Interactuar: solo en juegos que lo soliciten.

## Códigos promocionales

La función usa cuatro rutas del servidor: `/api/codes/admin-list`, `/api/codes/admin-create`, `/api/codes/admin-toggle` y `/api/codes/redeem`. Los códigos, límites de canje, redenciones por cuenta y saldo de Nixdollars se guardan en PostgreSQL. Las credenciales se validan con la sesión activa del servidor; no se guardan códigos de administrador en los archivos.

En Render, conserva `DATABASE_URL`, `NIXORA_ADMIN_USER` y `NIXORA_ADMIN_KEY`. La cuenta cuyo nombre coincide con `NIXORA_ADMIN_USER` obtiene el panel de administración de códigos. `NIXORA_ADMIN_KEY` debe permanecer secreta; si estuvo compartida, cámbiala por una nueva.

## Instalar

1. Sube los archivos dentro de `nixora-mobile` a la raíz del repo de GitHub conectado a Render.
2. Espera que Render esté en estado Live y recarga con Ctrl+F5. La caché del service worker tiene una nueva versión.
3. Prueba primero los códigos en una cuenta de administrador y otra cuenta normal. Comprueba que el canje repetido no abone Nixdollars otra vez.
4. Prueba cada modo de juego, especialmente las interacciones, la física y los duelos desde dos sesiones distintas.
5. Si el APK incluye el juego dentro del paquete, vuelve a generarlo. Si solo envuelve la web alojada, comprueba la web nueva antes de rehacerlo.

## Estado de validación

La sintaxis de `script.js` y `server.js` se comprueba con Node y los scripts procedurales nuevos se compilan en una prueba automática. Sin embargo, no se ha podido hacer una partida real con WebGL ni conectarse al PostgreSQL de Render desde este entorno. La física, los emparejamientos, los controles móviles y los códigos deben probarse en el despliegue real. Las optimizaciones reducen trabajo gráfico, pero ningún cambio estático puede garantizar que el lag desaparezca por completo en cualquier dispositivo.
