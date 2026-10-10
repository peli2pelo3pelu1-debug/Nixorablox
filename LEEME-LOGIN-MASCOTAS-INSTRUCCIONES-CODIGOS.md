# Nixora Blox — Inicio de sesión, mascotas, instrucciones y códigos

## Corregir el inicio de sesión de ParaCraftero

El inicio de sesión del propietario exige dos secretos diferentes. En Render → Web Service de Nixora Blox → Environment, configura:

- `NIXORA_ADMIN_USER`: `ParaCraftero`.
- `NIXORA_ADMIN_PASSWORD`: la contraseña de la cuenta que se escribe en el formulario (usa entre 8 y 15 caracteres para encajar con el formulario).
- `NIXORA_ADMIN_KEY`: la llave de administración para el segundo control; debe ser distinta y tener al menos 24 caracteres.
- `DATABASE_URL`: la URL interna de la base PostgreSQL.

Guarda y espera a que Render esté Live. Una contraseña incorrecta para ParaCraftero debe recibir rechazo del servidor. La llave no sustituye a la contraseña de la cuenta y ningún secreto debe añadirse al repositorio.

## Mascotas y avatar

El editor ofrece 24 tipos de mascota/minion con siluetas diferenciadas y 16 tipos de accesorio para mascota: 384 combinaciones tipo/accesorio, antes de las variaciones de color y apariencia. Las mascotas no heredan skins PNG de Minecraft; la importación de skins se aplica al avatar de jugador.

## Instrucciones de los juegos

Al comenzar una partida se muestra una tarjeta con objetivo, controles y consejos por género. Se puede cerrar con el botón de cerrar o «¡Entendido, jugar!». El menú de pausa (Esc o Menú) incluye «Instrucciones» para volver a abrirla.

## Navegación inteligente de NPC y bots

Los enemigos y NPC usan navegación A* sobre una cuadrícula local para rodear paredes y muros sólidos del mapa. La ruta se vuelve a calcular de forma periódica, y el contacto con obstáculos se comprueba antes de permitir daño cuerpo a cuerpo para evitar golpear a través de una pared. Si no se encuentra una ruta alrededor de un muro atravesado por la línea directa, el NPC ejecuta una secuencia de aproximación, escalada con animación de manos, cruce por encima y descenso. El minion seguidor también evita atravesar muros e intenta seguir una ruta alrededor.

La navegación reduce el uso de cálculo al recalcular rutas por intervalos, pero hay que probar mapas concretos: diseños cerrados, plataformas elevadas y muros muy anchos pueden necesitar ajustes de colisiones o puntos de navegación.

## Nuevos modos

El catálogo actual contiene 124 experiencias oficiales integradas: 34 originales y 90 generadas por familias de modo. Incluye parkour/obby, carreras, tycoon, supervivencia, defensa, mazmorras, deportes, aventuras, laberintos, granjas, roleplay, pesca, cocina, escondite, rescate, ritmo, reparto y duelos. Comparten el motor 3D; no son 124 motores independientes.

## Códigos promocionales

Los códigos no caducan por fecha. Se conservan en PostgreSQL hasta que ParaCraftero los elimine; no existe una acción de desactivar en el panel. Cada cuenta solo puede canjear un código una vez. El límite máximo de canjes es opcional (`0` significa ilimitado). En el panel, ParaCraftero puede editar el nombre, la recompensa y el límite, o eliminar el código permanentemente. Si se cambia el nombre, el historial de canje se migra al código renombrado.

## Instalar

1. Conserva tu ZIP anterior.
2. Descomprime este ZIP y abre `nixora-mobile`.
3. Sube los archivos dentro de esa carpeta a la raíz del repositorio conectado a Render, sin crear una carpeta duplicada.
4. En Render conserva las variables anteriores y añade `NIXORA_ADMIN_PASSWORD`. No compartas ni publiques los secretos.
5. Espera el estado Live y abre la web con `Ctrl + F5`. El caché del service worker se ha actualizado.
6. Prueba primero el inicio de sesión con una contraseña incorrecta (debe fallar), después una correcta y luego la sección Códigos con una cuenta normal. Si el APK contiene archivos dentro del paquete, genera una APK nueva.

## Validación y límites

Se comprobaron la sintaxis de `script.js` y `server.js`, el JSON de `package.json`, la sintaxis de los 90 scripts generados, y la unicidad de sus identificadores y nombres. También se revisó la integridad del ZIP. No se pudo ejecutar el juego real en WebGL ni probar el servicio contra tu PostgreSQL de Render; verifica login, canjes, controles táctiles, colisiones y multijugador después del despliegue.
