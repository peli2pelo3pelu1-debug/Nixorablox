# Corrección del error `type is not defined`

La pantalla de error se debía a que `type` y `themeText` se declaraban dentro de un `if`, pero luego el código los usaba fuera de ese bloque para generar NPC y animales.

La corrección mueve ambas variables al ámbito de `chunkBuild`, antes del condicional. Así el generador puede decidir el tipo de terreno y el tema del mapa en todas las ramas, sin lanzar `ReferenceError`.

## Instalación

Sube los archivos del ZIP a la raíz del repositorio de GitHub conectado a Render y espera a que el servicio vuelva a estar `Live`. Luego recarga la web con `Ctrl + F5`. Conserva las variables de entorno actuales.

## Prueba recomendada

Abre un mapa de Supervivencia, uno Social y uno Simulador; camina unos pasos para que genere nuevos chunks. La comprobación de sintaxis confirma que el archivo puede analizarse, pero la prueba definitiva debe hacerse dentro del navegador conectado a Render.
