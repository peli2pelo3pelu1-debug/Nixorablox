NIXORA BLOX — CATÁLOGO OPTIMIZADO DE EXPERIENCIAS

CONTENIDO
- 34 juegos originales conservados.
- 72 experiencias procedurales nuevas elegidas para reducir duplicados: 106 juegos oficiales antes de contar los mundos publicados por jugadores.
- Familias: obbys infinitos, carreras, tycoons, supervivencia por oleadas, aventuras, laberintos, roleplay, tesoros, deportes, mazmorras, granjas, islas celestes, exploración submarina, escapes, puzzles, defensa y duelos 1 contra 1.
- Los 72 modos nuevos cuentan con IDs distintos, variación de semilla, paletas temáticas y scripts asociados. Comparten el motor 3D para reducir duplicación y mantener los mismos controles.

RENDIMIENTO Y MAPAS
- Se redujo el número de tarjetas duplicadas de la página principal.
- El fondo animado del menú se pausa durante las partidas y limita su refresco a aproximadamente 30 FPS.
- En el mundo procedural se generan menos decoraciones por sector y solo se mantiene un anillo cercano de 3 x 3 sectores.
- En dispositivos táctiles, el juego limita la resolución de renderizado, apaga las sombras dinámicas y reduce nubes; estas opciones reducen carga gráfica, pero el rendimiento depende del equipo y del navegador.
- Los obbys infinitos crean tramos mientras se avanza y eliminan tramos antiguos para limitar el uso de memoria.

CIELOS
- Hay 80 presets de gradiente basados en 20 paletas, cada una con variaciones suave, viva y clara.
- Se pueden elegir en los detalles de un juego y en Studio → Lighting. El guardado de un juego de Studio incluye el preset seleccionado.

MODOS DESTACADOS
- Tycoon: cuatro parcelas con compras de mejoras e ingresos por segundo de juego.
- Supervivencia/defensa/mazmorra: oleadas limitadas con enemigos humanoides y jefes.
- Duelo 1 contra 1: empareja dos usuarios dentro del mismo mundo, valida distancia y cadencia de los ataques en el servidor y termina al llegar a tres derribos. Es un sistema inicial, no un anticheat completo.
- Los NPC se crean con el sistema humanoide de estilo skin de Minecraft ya existente.
- El botón táctil de espada solo se muestra cuando el script del juego activa el sistema de combate. El botón Interactuar aparece únicamente en los juegos que lo solicitan.

CÓDIGOS PROMOCIONALES
- La sección Códigos permite a una cuenta canjear códigos creados en el servidor; una cuenta solo puede canjear cada código una vez.
- Solo la cuenta configurada en NIXORA_ADMIN_USER (por defecto ParaCraftero) puede crear, activar o desactivar códigos. La recompensa en Nixdollars, límite de canjes y saldo se validan en PostgreSQL.
- La llave no está escrita en los archivos. Debe estar guardada en Render como NIXORA_ADMIN_KEY junto con DATABASE_URL. No compartas esos valores.

INSTALACIÓN
1. Descomprime el ZIP.
2. Sube el contenido de la carpeta nixora-mobile a la raíz del repositorio de GitHub conectado a Render (sin anidar otra carpeta nixora-mobile).
3. Espera que Render marque Live.
4. Recarga la web con Ctrl+F5. También se cambió el nombre del caché del service worker para pedir los archivos nuevos.
5. Entra primero a Códigos y prueba crear un código con un límite pequeño; canjéalo con otra cuenta una sola vez y comprueba el saldo de servidor. Después prueba un tycoon y un duelo con dos cuentas diferentes.
6. Si tu APK lleva una copia local de los archivos, genera e instala una APK nueva. Si solo abre la web publicada, prueba la web primero.

VALIDACIÓN Y LÍMITES
- Se comprueba la sintaxis de los archivos script.js y server.js, y se compilan mediante prueba automática los scripts procedurales nuevos. También se comprueban los IDs generados y las 80 paletas.
- No fue posible ejecutar una partida real en WebGL ni conectarse a la base PostgreSQL de Render desde este entorno. Por eso hay que probar en la web publicada: saltos y colisiones, interacción del tycoon, matchmaking y golpes 1v1, y el flujo completo de códigos.
- Reducir objetos y renderizado ayuda con el lag, pero no se puede garantizar cero lag en todos los dispositivos. Si persiste, el siguiente paso es perfilar el juego en el navegador/dispositivo donde ocurre.
