# Nixora Blox — corrección de carga y avatares de jugadores

## Cambios
- Se muestra una pantalla de carga mientras el mapa construye sus mallas por lotes. El indicador permanece encima del canvas hasta que se dibuja el primer mundo completo.
- Los bloques desactivados no se vuelven a construir al iniciar la partida, reduciendo trabajo innecesario.
- Si falla el inicio o el bucle de renderizado, aparece una pantalla de error con opción para volver al menú, en lugar de dejar al jugador atrapado en una pantalla negra.
- En la lista de jugadores del menú Esc, el icono emoji se reemplazó por una vista del modelo del avatar. Si el navegador no puede renderizar esa miniatura 3D, dibuja una vista estilizada 2D basada en los colores/apariencia de la cuenta.
- Se cambió la versión de caché del service worker para solicitar los archivos actualizados.

## Instalar
1. Descomprime el ZIP.
2. Sube el contenido de `nixora-mobile` a la raíz del repositorio de GitHub que usa Render, reemplazando los archivos correspondientes.
3. Conserva las variables actuales de Render.
4. Espera a que el servicio esté `Live` y recarga con `Ctrl + F5`.
5. Si el APK empaqueta los archivos del juego localmente, vuelve a generar el APK.

## Comprobaciones y límites
- `script.js` y `server.js` pasan `node --check`.
- El ZIP y el HTML pasan las comprobaciones estructurales básicas.
- No se ha probado una partida real desde el servidor Render en esta sesión. Si el navegador no puede cargar Three.js desde su CDN, el juego no podrá renderizar 3D y mostrará el aviso/recuperación disponible.
