NIXORA BLOX — OBBYS Y PARKOUR PROCEDURAL

CAMBIOS
- Parkour Infinito y Carrera de Obstáculos utilizan un generador procedural con 12 familias de obstáculos y 128 variaciones parametrizadas: 1.536 combinaciones base por modo.
- Se añadieron Obby de Lava Infinito, Parkour de Escalada, Parkour Neón Infinito, Obby de Gravedad, Carrera Parkour Turbo y Parkour del Bosque Infinito. Los seis usan hashtags #obby y/o #parkour, por lo que aparecen al filtrar Parkour.
- Los tramos conservan una distancia de salto manejable, ruta lateral gradual, puntos de control, elementos móviles, trampolines, túneles y tramos de escaleras con subida y escaleras de descenso.
- Las secciones viejas se eliminan del escenario al avanzar para limitar la memoria utilizada.

INSTALACIÓN
1. Descomprime el ZIP.
2. Sube el contenido de nixora-mobile a la raíz del repositorio GitHub, sin crear nixora-mobile/nixora-mobile.
3. Espera que Render termine el deploy y muestre Live.
4. Abre primero la web y prueba cada modo. Si el APK contiene archivos locales del juego, crea uno nuevo para incluir los cambios.

ALCANCE Y PRUEBAS
- Las 1.536 combinaciones son configuraciones generadas por código (12 tipos de desafío × 128 perfiles paramétricos), no 1.536 mapas dibujados manualmente. La ruta sigue generándose mientras avanzas, así que no tiene un final fijo.
- Se revisó sintaxis JavaScript y que todos los scripts incluidos se puedan compilar con new Function; esto no sustituye probar el juego en un navegador con WebGL y controles reales.
- Debido a que cada jugador puede tener rendimiento distinto, prueba saltos, escaleras y puntos de control después del despliegue.
