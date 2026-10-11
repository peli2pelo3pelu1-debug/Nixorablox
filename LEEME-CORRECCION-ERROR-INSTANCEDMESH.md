# Corrección de error al iniciar juegos

## Error corregido

La versión anterior llamaba `mesh.computeBoundingSphere()` sobre un `THREE.InstancedMesh`. El proyecto carga Three.js r128, en el cual ese método no existe; por eso la creación de algunos grupos de mallas terminaba con `TypeError: mesh.computeBoundingSphere is not a function` y no se podía iniciar el juego.

## Solución

Cada grupo de instancias ahora utiliza una geometría clonada con una esfera envolvente calculada a partir de las transformaciones de todas sus instancias. Se conserva el frustum culling, sin usar un método ausente en Three.js r128. También se actualizó la versión de los archivos del cliente y de la caché del service worker.

## Instalación

1. Reemplaza los archivos del proyecto con el contenido de esta carpeta.
2. Sube los cambios al repositorio de GitHub conectado a Render.
3. Espera a que el servicio muestre `Live`.
4. Recarga el sitio con `Ctrl + F5`.

La sintaxis se comprobó estáticamente; la prueba final debe realizarse en el navegador y en Render.
