# Nixora Blox — Ciudad, casas, zombis y catálogo de avatar

## Construcción y mundo

- Se añadieron variantes de casas de dos y tres pisos con fachadas diferenciadas, ventanas, hueco de entrada, escaleras y decoración interior; además hay plantillas de edificios residenciales, oficinas, torres y shoppings.
- En Nixora Studio → Toolbox → Modelos hay casas de distintos estilos, una casa de tres pisos, edificios de 5, 8, 10, 12 y 15 pisos (algunos cerrados como decoración y otros transitables), árboles, arbustos y jardineras.
- Los edificios decorativos tienen un volumen sólido para que no se pueda entrar. Los edificios transitables reservan un hueco de escalera y tienen suelos y escaleras por planta. Las casas residenciales mantienen la entrada sin hoja de puerta para conservar el requisito anterior.
- El mapa urbano contiene terreno, cuadrícula de calles, asfalto, aceras, señalización, zonas verdes, parque, bancos, fuente, farolas, arbustos, flores, casas y edificios comerciales. Los fragmentos de ciudad continúan generándose al explorar.
- Se mantiene el sistema de cielo de gradiente con 80 variantes y efectos de niebla; las nubes usan cantidades distintas según la clase de dispositivo.

## NPC y zombis

- El modo Zona de Zombis genera enemigos a una distancia horizontal de entre 4.5 y 6 unidades del jugador.
- Hay enemigos rápidos, lentos, normales, de tamaño pequeño, grandes y jefes con más salud.
- Se integran las tres texturas PNG 64×64 que se facilitaron en el chat como skins de zombi. Cada enemigo zombi lleva una barra de vida sobre la cabeza.
- Las barras se actualizan con los puntos de vida y desaparecen al morir. La apariencia y los datos esenciales se envían en los snapshots multijugador del mundo.

## Avatar y tienda

- El catálogo organiza artículos por categoría, ofrece vista previa antes de la compra y presenta los botones Comprar, Cancelar y Llevar al carrito.
- El carrito admite varios elementos, permite quitarlos individualmente o vaciarlo, calcula el total de Nixdollars y permite comprar el conjunto cuando el saldo alcanza.
- La sección de avatar utiliza una previsualización 3D del personaje/mascota elegido y una cuadrícula de catálogo inspirada en tiendas de avatares.
- Los ajustes se presentan en tarjetas separadas, con una cabecera y opciones avanzadas organizadas.

## Instalación

1. Haz una copia de seguridad del repo actual.
2. Descomprime el ZIP y abre `nixora-mobile`.
3. Sube todo el contenido de esa carpeta a la raíz del repo de GitHub conectado a Render, reemplazando los archivos anteriores; no anides una segunda carpeta `nixora-mobile`.
4. Conserva las variables existentes de Render y espera hasta que el servicio muestre `Live`. No se necesita una nueva base de datos para los modelos, skins y catálogo visuales.
5. Recarga la web con `Ctrl + F5`. La versión de caché del service worker se actualizó para forzar la descarga de los archivos nuevos.

## Pruebas y límites

- Se verificó la sintaxis de `script.js`, `main.js`, `server.js` y `sw.js`, la estructura JSON de los manifiestos y la integridad del archivo ZIP.
- Las dimensiones de las tres texturas incluidas son 64×64.
- No se ha ejecutado una partida visual real en el Render del usuario. La colisión de escaleras, la navegación por pisos superiores, la carga simultánea de muchos edificios y las acciones de compra deben probarse en la web publicada. La tienda actualmente calcula y descuenta el saldo según el sistema de economía ya presente en el cliente; no debe asumirse que cada artículo se ha convertido en un inventario autoritativo de servidor sin ampliar su API.
