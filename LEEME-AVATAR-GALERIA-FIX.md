NIXORA BLOX — ARREGLO DE GALERÍA Y EDITOR DE AVATAR

Cambios
- Corregido el error `avatar is not a function` en `previewGalleryItem`: se renombró el objeto local a `previewAvatar` para no tapar la función global `avatar()`.
- Editor visual renovado con fondo celeste, vista previa del avatar y una plataforma decorativa morada, catálogo de tarjetas brillantes y accesos circulares a categorías.
- Esta edición conserva el cambio anterior que desactiva los efectos atmosféricos, el sol, la luna, la niebla de escena y las nubes atmosféricas. Las plataformas y nubes que forman parte de mapas concretos se conservan.
- Actualizada la versión de `script.js` y la caché del Service Worker para que no se reutilice el código anterior.

Instalación
1. Extrae el ZIP.
2. Sube el contenido de `nixora-mobile` al mismo repositorio de GitHub conectado a Render, reemplazando los archivos existentes. Conserva las variables de entorno en Render.
3. Espera a que Render termine el despliegue.
4. En el navegador usa Ctrl+F5. Si es PWA/APK, cierra y vuelve a abrir la aplicación.
5. Abre Avatar, entra en la galería completa y pulsa un avatar para comprobar la vista previa.

Validación
- `node --check` en `script.js`, `server.js` y `sw.js`.
- Integridad del ZIP comprobada.
- No se ha probado en la instancia real de Render; la comprobación final debe hacerse una vez desplegado.
