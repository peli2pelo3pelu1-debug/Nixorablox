NIXORA BLOX — CATÁLOGO AMPLIADO DE EXPERIENCIAS

CONTENIDO
- 34 juegos originales conservados.
- 136 experiencias nuevas en el catálogo, para un total de 170 juegos oficiales antes de contar los mundos publicados por jugadores.
- Las experiencias agregadas incluyen 8 obbys infinitos temáticos; carreras; tycoons de construcción; supervivencia por oleadas; aventura y expedición; laberintos; roleplay de ciudades; búsqueda de tesoros; desafíos deportivos; mazmorras con jefes; granjas; islas celestes; exploración submarina; juegos de escape; puzzles de runas y modos de defensa.
- Los juegos agregados tienen identificadores y nombres distintos, semilla de mapa propia, paleta temática, objetivo y script de juego.

MAPAS Y SISTEMAS
- Los mapas normales tienen terreno amplio, caminos, plaza, casas, árboles, faroles, puntos de interés y coleccionables.
- Los mapas de laberinto y escape usan pasillos generados por una semilla con entrada y salida. Los obbys infinitos crean nuevas secciones a medida que el jugador avanza y retiran secciones antiguas para limitar el uso de memoria.
- Los modos de carrera tienen sectores y meta; los de granja y tesoro permiten recoger elementos; roleplay tiene encargos por barrios; los puzzles tienen runas en orden; los modos de supervivencia, mazmorra y defensa generan oleadas y jefes.
- Los NPC se crean con el sistema de personajes humanoides de estilo Minecraft ya presente en Nixora Blox: hay NPC pacíficos y enemigos hostiles según el modo.
- En el modo aéreo, caer del recorrido reinicia al punto de aparición. En el modo submarino se activa una zona de agua para explorar nadando.
- El filtro «Parkour» encuentra experiencias con hashtags #obby y/o #parkour.

INSTALACIÓN
1. Descomprime el ZIP.
2. Abre la carpeta nixora-mobile.
3. Sube el contenido de esa carpeta a la raíz del repositorio de GitHub conectado a Render; no crees una carpeta duplicada nixora-mobile/nixora-mobile.
4. Espera a que Render termine el despliegue y muestre Live.
5. Recarga la web con Ctrl+F5. El caché de la app también se versionó para que el navegador pueda descargar los archivos actualizados.
6. Entra a algunos modos de cada familia y prueba controles, checkpoints, coleccionables, enemigos, salida y meta.
7. Si tu APK contiene los archivos del juego empaquetados localmente, debes crear un APK nuevo. Si solo abre la web, prueba primero la web actualizada.

ALCANCE Y VALIDACIÓN
- Las 136 experiencias son mapas distintos generados por código a partir de varias familias de diseño, con semillas, distribuciones y objetivos diferentes. No son 136 niveles dibujados manualmente y no tienen 136 motores independientes: comparten el motor 3D y varios sistemas para mantener controles y animaciones consistentes.
- Se comprobó la sintaxis de script.js y server.js, que hay 136 IDs y nombres nuevos únicos, que cada script de juego se compila y que las funciones de inicio y un callback HUD por modo se ejecutan con un API simulado.
- Esta prueba automática no sustituye una partida real con WebGL, dispositivos móviles, conexión multijugador o física completa. Conviene probar los mapas después de desplegar y corregir cualquier salto, colisión o NPC que se comporte mal.
