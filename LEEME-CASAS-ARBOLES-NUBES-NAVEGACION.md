# Nixora Blox — casas, árboles, ambiente y navegación de NPC

## Cambios incluidos

- Las rutinas de movimiento de NPC y minions comprueban el volumen del personaje contra bloques sólidos antes de moverse. La navegación usa una cuadrícula A* local, por lo que puede buscar la abertura de un muro en lugar de atravesarlo.
- El desplazamiento se muestrea desde la posición inicial fija de cada paso. Esto evita acumular desplazamientos y saltarse una colisión.
- Antes de escalar, el NPC comprueba el espacio del cuerpo durante la subida y el cruce. Si un techo o forjado ocupa ese volumen, no inicia esa escalada; vuelve a intentar la navegación local. Los muros con huecos transitables se consideran rutas normales.
- Hay más nubes de bajo coste: 24 grupos en equipos de escritorio y 10 en dispositivos táctiles, reutilizando geometrías. Se puede desactivarlas desde las opciones de Lighting del Studio.
- Se mantienen cuatro estilos de niebla: suave, bruma, densa y desactivada. Las opciones forman parte de la configuración de iluminación del proyecto publicado.
- Las casas de mapas de pueblo/naturaleza son más grandes y tienen dos plantas, ventanas con huecos reales, una entrada abierta sin puerta, escalera interior, sala, sofá, mesa, cocina, dormitorio, cama, armario, biblioteca, porche, faroles y jardineras.
- Los árboles tienen tronco y copas redondeadas con variantes de follaje y tamaños; se usan en bosques, aldeas y zonas generadas.
- En Nixora Studio → Toolbox → Modelos se pueden colocar las plantillas: Casa, Casa familiar de dos pisos, Casa moderna de dos pisos, Villa de dos pisos, Cabaña de dos pisos, Árbol detallado, Roble frondoso, Árbol de bosque y Árbol joven. La colocación conserva tamaño, forma, transparencia, colisión y nombre de cada parte.
- Se cambió la versión de caché del service worker para que el navegador solicite los archivos actualizados después del despliegue.

## Instalación en Render

1. Haz una copia de seguridad del proyecto actual.
2. Descarga el ZIP y descomprímelo.
3. Abre la carpeta `nixora-mobile` y sube su contenido a la raíz del repositorio de GitHub que ya está conectado a Render; no subas otra carpeta `nixora-mobile` dentro del repositorio.
4. Conserva las variables de entorno actuales. Esta actualización no necesita una base de datos nueva ni cambios en las variables.
5. Espera a que Render muestre `Live` y recarga la web con `Ctrl + F5`. Si hay una PWA instalada, ciérrala por completo y vuelve a abrirla para que se retire el caché anterior.

## Qué comprobar dentro del juego

1. En un mapa con una pared que tenga abertura, observa si el NPC atraviesa el hueco.
2. En un recinto cerrado, comprueba que el NPC rodee el muro y no aparezca al otro lado de una pared sólida.
3. Cerca de un techo bajo, verifica que no escale hacia el espacio ocupado por el techo.
4. En Studio, abre Toolbox → Modelos y coloca una casa o un árbol; comprueba que se conserven las ventanas, las partes redondeadas y el hueco de entrada.
5. En Studio → Lighting, prueba Nubes y cada tipo de niebla, y después pulsa Probar juego.

## Validación y límites

Se revisó la sintaxis de `script.js`, `server.js` y `sw.js`. También se ejecutó una pequeña simulación de navegación: el A* escogió la abertura de una pared; el desplazamiento se detuvo frente a una pared sólida; y la comprobación de espacio rechazó una escalada que chocaría con un techo. El ZIP se comprueba después de crearlo. Estas pruebas no sustituyen una partida visual en el servidor real. Mapas con formas no rectangulares, plataformas móviles o rutas entre distintos pisos pueden necesitar ajustes adicionales.
