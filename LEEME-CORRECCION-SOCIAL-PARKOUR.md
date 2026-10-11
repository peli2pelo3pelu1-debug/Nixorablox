# Corrección de juegos sociales y Parkour Infinito

## Cambios

- La clasificación del mundo (`worldType`) se calcula al comienzo de `chunkBuild`, antes de cualquier generación de sector. Esto evita referencias a la variable local anterior y reconoce temas sociales/simuladores como urbanos.
- La plataforma de seguridad de mapas con lava ahora se registra también en el índice espacial de colisiones. Antes solo se añadía a la lista `B` y a la escena visual; el motor de físicas consulta el índice, por lo que el jugador podía caer a través de la plataforma inicial y morir/reaparecer en bucle en Parkour Infinito.
- La plataforma inicial es un poco más amplia para conectar con seguridad con el primer tramo del obby.
- Se cambió la versión de caché y la URL del script para que el navegador no siga usando el JavaScript viejo que podía contener el error `type is not defined`.

## Instalar

1. Descomprime el ZIP.
2. Sube el contenido de `nixora-mobile` a la raíz del repositorio conectado a Render, reemplazando los archivos anteriores.
3. No cambies las variables de entorno ni la base de datos.
4. Espera `Live`; abre la web y recarga con `Ctrl+F5`.
5. Prueba Parkour Infinito: deberías aparecer en la plataforma inicial. Camina hacia delante para alcanzar el primer tramo; si caes más tarde, la muerte por caer al vacío sigue siendo intencional.
6. Prueba un juego social/simulador y camina hacia el borde del mapa para activar la generación de sectores.

## Comprobaciones

El cliente y el servidor pasan `node --check`; la estructura HTML se revisó y el ZIP pasó la prueba de integridad. El proyecto no fue ejecutado en la instancia desplegada de Render, así que el resultado debe confirmarse en el navegador real.
