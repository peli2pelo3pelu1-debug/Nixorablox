# Navegación inteligente de NPC y bots

Esta actualización cambia el movimiento directo de los NPC por navegación basada en rutas locales. Los bots analizan los bloques sólidos alrededor del camino, buscan una ruta alternativa alrededor de paredes y vuelven a calcularla periódicamente si el jugador se mueve.

- Los muros sólidos bloquean el movimiento; los NPC ya no se desplazan en línea recta a través de ellos.
- La búsqueda de ruta usa una cuadrícula A* local y evita atravesar esquinas de pared en diagonal.
- Los NPC pacíficos también intentan vagar por rutas transitables en lugar de atravesar construcciones.
- El minion que sigue al jugador usa navegación alrededor de muros.
- Si no se encuentra un camino alternativo, los NPC hostiles y pacíficos pueden acercarse al muro, escalarlo con la animación de manos, cruzarlo por arriba y bajar al otro lado.
- El combate cuerpo a cuerpo comprueba que no haya un muro entre el enemigo y el jugador.

## Instalación

1. Conserva una copia del ZIP anterior.
2. Descomprime este ZIP y abre `nixora-mobile`.
3. Sube el contenido a la raíz del repositorio de GitHub conectado a Render, conservando la estructura de carpetas.
4. Espera a que Render esté `Live`. El `sw.js` tiene una nueva versión de caché; después del despliegue, recarga la web con `Ctrl + F5`.
5. Prueba primero un mapa con muros estrechos, luego un área cerrada y finalmente un muro muy ancho para verificar tanto el rodeo como la escalada.

## Pruebas realizadas y límites

Se verificó la sintaxis de `script.js`, `server.js` y `sw.js`; también se probó el algoritmo en una simulación pequeña: un muro con espacio lateral produjo una ruta alrededor, y un muro que cerraba el área produjo la secuencia de escalada y descenso. Aún falta probarlo visualmente en el motor WebGL real de Nixora Blox. En mapas con plataformas a diferentes alturas o colisiones muy especiales puede necesitarse ajuste adicional.
