# Nixora Blox — rendimiento, modelos y gizmo de Studio

## Cambios incluidos

- Renderizado por instancias para agrupar muchas piezas estáticas con el mismo material y forma, por celdas del mapa; las piezas interactivas se mantienen como mallas separadas.
- La carga inicial monta por lotes tanto piezas sólidas como detalles visuales (ventanas, muebles y remates), evitando que los modelos se vean como estructuras incompletas.
- Los segmentos nuevos se agrupan y se incorporan a escena gradualmente; al retirar un segmento, se eliminan sus mallas y sus colisiones.
- Índice espacial para reducir el número de bloques revisados en colisiones, movimiento, y búsqueda de caminos de NPC. El índice se actualiza con piezas dinámicas y plataformas móviles.
- Calidad de render adaptada para mejorar FPS en móvil y escritorio; luz ambiental más uniforme para que los interiores no se vean tan oscuros.
- En Nixora Studio, la selección queda como herramienta inicial. Al seleccionar una pieza, aparece el gizmo de tres ejes (X rojo, Y verde, Z azul). Arrastra una flecha con el mouse para mover el objeto en ese eje; los campos de posición muestran las coordenadas.
- La vista de Studio actualiza las mallas existentes en lugar de recrearlas cada vez que editas una propiedad.
- Caché del service worker renovada para que el navegador detecte estos archivos.

## Instalación

1. Descomprime este ZIP.
2. Abre `nixora-mobile` y sube **su contenido** a la raíz del repositorio de GitHub conectado a Render, reemplazando los archivos anteriores.
3. No cambies las variables de entorno de Render ni la base PostgreSQL para esta actualización.
4. Espera a que Render muestre `Live` y recarga la web con `Ctrl + F5`.
5. En Studio, selecciona una pieza y arrastra las flechas X/Y/Z. También puedes escribir las posiciones X/Y/Z en el panel Propiedades.

## Nota de pruebas

Se ha revisado la sintaxis del cliente y servidor y la integridad del ZIP. La generación visual y el gizmo deben verificarse en el navegador real, especialmente en mapas grandes; los FPS dependen del dispositivo y de la cantidad de objetos visibles. Las instancias agrupan geometría estática, mientras que los elementos interactivos permanecen separados para conservar sus funciones.
