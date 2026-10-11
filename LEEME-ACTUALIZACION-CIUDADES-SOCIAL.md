# Nixora Blox — actualización de ciudades y funciones sociales

## Contenido
- Menú de pausa con pestañas Players, Settings, Report, Help y Record; cuatro acciones inferiores.
- Lista de jugadores obtenida de las conexiones reales del servidor de la misma sala. La vista de perfil muestra avatar 3D, mascota, descripción y equipamiento reportado por el cliente.
- Solicitudes de amistad persistentes en PostgreSQL y tarjeta de solicitud con estilo amatista. Ajuste para permitir o rechazar solicitudes.
- Bloqueo/desbloqueo persistente. El servidor filtra el chat en ambos sentidos cuando uno de los dos jugadores bloqueó al otro.
- Reportes enviados al servidor y almacenados en PostgreSQL; se valida que el objetivo siga conectado a la sala.
- Barrios y mapas con parcelas distintas de calles; supermercados y shoppings tienen entrada, escaleras y detalles comerciales.
- Casas de dos plantas, árboles detallados, arbustos, flores y zonas verdes; NPC de ciudad aparecen fuera de las huellas de los edificios.
- Variantes de zombis con tamaños/velocidades distintas y barras de vida; los enemigos jefe usan una barra de vida más grande.
- Ciclos de amanecer, día, atardecer y noche en tipos de mapa apropiados.

## Instalar
1. Descomprime el ZIP.
2. Sube el contenido de `nixora-mobile` a la raíz del repositorio conectado a Render.
3. Conserva las variables de entorno existentes. No publiques sus valores.
4. Espera a que Render aparezca como Live; luego recarga la web con Ctrl+F5.

## Alcance de la validación
Se validó la sintaxis JavaScript del cliente y servidor y la integridad del ZIP. La vista gráfica, colisiones, mensajería y sincronización multijugador deben comprobarse en una sesión real de Render con dos cuentas. La ubicación de reportes se almacena en PostgreSQL; esta versión no añade un panel de administración completo para revisar/archivar reportes.
