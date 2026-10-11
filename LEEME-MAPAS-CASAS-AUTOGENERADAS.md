# Nixora Blox — barrios y edificios autogenerados

## Qué cambió

- Los modos de roleplay, reparto, cocina, pesca, granja, rescate, escondite, tycoon y supervivencia generan un entorno adicional apropiado al tema del mapa.
- Otros modos cuyo nombre/tema menciona una ciudad, pueblo, villa, puerto, granja, hotel, refugio, bosque, fábrica, estación, centro comercial o zonas similares pueden generar elementos urbanos o rurales cuando encaja con la experiencia.
- Cada mapa usa una semilla propia. La ubicación de los edificios, selección de colores, mezcla de casas de dos/tres plantas, tiendas, edificios de varios pisos, árboles, arbustos y jardines cambia entre juegos. La semilla es determinista para que las personas en la misma experiencia vean la misma distribución.
- Las calles y rutas principales se mantienen despejadas; los barrios se concentran alrededor de los laterales y el perímetro del mapa. Los modos centrados en obbys, duelos, parkour celeste, laberintos y puzzles mantienen sus recorridos y no se llenan de casas innecesarias.
- Al salir del mapa inicial, los chunks exteriores siguen generándose automáticamente. La selección de estilo ahora considera también el nombre y el género de la experiencia, por lo que los mapas urbanos generan zonas urbanas, los de nieve generan nieve, los submarinos generan áreas marinas, etc.
- Las plantillas siguen disponibles en Studio para editar mapas manualmente, pero ya no necesitas colocarlas para que los mapas temáticos incluyan sus barrios predeterminados.

## Instalación

1. Haz una copia de seguridad del repositorio actual.
2. Descomprime el ZIP y abre la carpeta `nixora-mobile`.
3. Sube todo el contenido de esa carpeta a la raíz del repositorio conectado a Render, reemplazando los archivos anteriores; no anides una segunda carpeta `nixora-mobile`.
4. Conserva las variables de entorno que ya tienes. No hace falta crear otra base de datos para esta mejora.
5. Espera a que Render muestre `Live` y recarga la web con `Ctrl + F5`. Se cambió la versión del service worker para forzar la descarga de los archivos nuevos.

## Validación y límites

- La sintaxis de los archivos JavaScript se comprobó con Node.
- Se hicieron pruebas aisladas de la función generadora, confirmando que los tipos de mapas previstos crean contenido y que distintas semillas producen distribuciones distintas. Los modos de obby siguen vacíos en el generador general porque su curso se crea mediante su generador específico; los duelos conservan su arena.
- Los mapas residenciales incluyen más piezas que antes. Si un dispositivo móvil de gama baja pierde FPS, se puede bajar la densidad gráfica en una siguiente revisión.
- Aún se debe probar visualmente en Render el solapamiento con elementos preexistentes, las colisiones de interiores y el rendimiento real en teléfonos antes de considerar todas las experiencias completamente verificadas.
