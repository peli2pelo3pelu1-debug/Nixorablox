NIXORA BLOX — EDICIÓN ESTABLE Y CATÁLOGO REDUCIDO

Cambios de esta edición
- Se redujo el catálogo integrado de 124 a 59 experiencias por defecto para evitar variantes redundantes. Los juegos que el usuario haya creado no se eliminan de su almacenamiento local.
- Se reforzó la compatibilidad de InstancedMesh con la versión de Three.js que usa el proyecto. Los lotes proporcionan sus propios métodos de cálculo de límites y no alteran la esfera local de la geometría compartida.
- Si el renderizador falla por límites o por InstancedMesh, el motor activa un modo de compatibilidad y convierte los lotes existentes en mallas normales antes de reintentar.
- Si una zona procedural falla al generarse, se revierten los bloques parcialmente registrados y se omite solo esa zona, en vez de cortar toda la partida.
- Un error de ejecución transitorio ya no detiene inmediatamente la animación: se muestra la pantalla de recuperación si el mismo error se repite tres fotogramas seguidos.
- Se actualizó el identificador de caché y la URL de script.js para que Render/navegador no reutilicen los archivos de la versión anterior.

Instalación
1. Descomprime el ZIP.
2. Sube el contenido de la carpeta nixora-mobile a la raíz del mismo repositorio de GitHub conectado a Render.
3. Conserva las variables de entorno actuales de Render.
4. Espera a que el servicio quede Live y recarga el sitio con Ctrl+F5.
5. Prueba al menos un juego social, uno de supervivencia y Parkour Infinito.

Limitaciones y diagnóstico
- Se validó la sintaxis de script.js, server.js y sw.js; index.html pasó una comprobación estructural y el ZIP pasó una prueba de integridad.
- No se ejecutó una partida real conectada a la instancia del usuario de Render, por lo que la corrección aún debe confirmarse en ese entorno.
- Los errores HTTP 401 y 409 de /api/auth/session/open son de autenticación/sesión y son distintos de un fallo del renderizador. Si persisten, cierra pestañas duplicadas de Nixora Blox e inicia sesión una sola vez; revisa ese endpoint por separado.
