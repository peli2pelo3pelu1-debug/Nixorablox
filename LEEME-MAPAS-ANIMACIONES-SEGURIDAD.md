# Nixora Blox — mundos, obbys, animaciones y seguridad de cuentas

Esta actualización está basada en la versión anterior de Nixora Blox e intenta conservar el modelo y las animaciones que ya tenía el proyecto.

## Mundos y obbys

- **Parkour Infinito** y **Carrera de Obstáculos** generan tramos por delante del jugador. Los tramos alternan plataformas para saltar, vigas estrechas, paredes peligrosas, plataformas móviles, trampolines, monedas, escaleras y checkpoints. Los tramos antiguos se eliminan para controlar el uso de memoria.
- Los demás mundos amplían el terreno al explorar. Los objetos generados dependen del tema del juego: naturaleza y casas, edificios neón, desierto, ruinas, nieve, arrecife o islas espaciales.
- Los enemigos creados con `game.mob()` usan personajes de cabeza, torso, brazos y piernas con textura de estilo skin de Minecraft en lugar de un cubo sólido sin cuerpo. Los NPC pacíficos se mueven sin perseguir al jugador. En las oleadas, la cantidad y velocidad tienen límites para evitar un crecimiento excesivo del costo por oleada.

## Nadar y escalar

- En el juego **Arrecife Azul**, la zona de agua permite nadar: usa **W/A/S/D** para moverte, **Espacio** para subir y **Shift** para bajar.
- En las escaleras de los obbys, mantén **W** para subir. Al alcanzar la parte superior, el personaje sale hacia la plataforma de aterrizaje.
- En **Avatar**, los selectores **Pack de nadar** y **Pack de escalar** aparecen junto a los packs de caminar, saltar y agacharse. Cada catálogo ofrece 40 variaciones. Los movimientos se mezclan de forma gradual para evitar cambios bruscos.
- Las mascotas no importan skins de Minecraft; sus modelos siguen siendo independientes.

## Sesiones y protección de cuentas

### Variables necesarias en Render

En el Web Service de Nixora Blox → **Environment**, conserva:

- `DATABASE_URL`: **Internal Database URL** de PostgreSQL.
- `NIXORA_ADMIN_USER`: debe ser exactamente `ParaCraftero` para proteger esa cuenta.
- `NIXORA_ADMIN_PASSWORD`: contraseña de inicio de sesión de ParaCraftero (usa entre 8 y 15 caracteres para coincidir con el formulario).
- `NIXORA_ADMIN_KEY`: llave administrativa independiente, de al menos 24 caracteres; no va en GitHub ni dentro de estos archivos.

No hay secretos escritos en el código del proyecto. Para iniciar sesión en `ParaCraftero` se exigen dos comprobaciones separadas: la contraseña de cuenta `NIXORA_ADMIN_PASSWORD` en el formulario y la llave `NIXORA_ADMIN_KEY` cuando se solicita. Si cambias la llave en Render, se volverá a pedir en el siguiente inicio.

### Cómo funciona

- Las credenciales nuevas se verifican en el servidor y se guardan en PostgreSQL mediante hash con sal; no se almacena la contraseña en texto plano.
- Las cuentas antiguas que solo existían en un navegador se sincronizan cuando se inicia sesión correctamente desde ese navegador con la contraseña local que ya tenían. Después, esa cuenta puede autenticar en otro dispositivo con la contraseña sincronizada. Si nunca se sincronizó una cuenta antigua, el servidor no puede saber de forma fiable quién era su propietario histórico; inicia sesión primero desde el navegador original.
- `ParaCraftero` valida la contraseña configurada en `NIXORA_ADMIN_PASSWORD` y, además, exige `NIXORA_ADMIN_KEY` como segunda barrera. Una contraseña incorrecta debe rechazar el inicio de sesión.
- El servidor reserva una sesión por nombre de usuario, guarda un latido cada 30 segundos y expira la reserva tras dos minutos sin latidos. Si la cuenta ya tiene una sesión activa, se muestra: **“Perdon, pero ya hay alguien jugando en esta cuenta. Por favor, vuelve más tarde.”** También se verifica la sesión antes de aceptar la conexión WebSocket del juego.
- El botón **Salir** cierra la sesión del servidor. Si se cierra el navegador inesperadamente, el bloqueo se libera después de que expire la reserva.
- **Configuración → Seguridad de cuenta** permite dar un nombre al dispositivo, activar opcionalmente la ubicación aproximada y consultar el historial desde la cuenta administradora. Por defecto no se comparte ubicación. Si se autoriza, las coordenadas se redondean a grados enteros antes de enviarse. El código de la aplicación no guarda ni lee la IP.
- El historial del administrador enseña los últimos 150 intentos (incluidos inicios correctos y fallidos), el tipo de dispositivo/sistema y navegador, fecha/hora y ubicación aproximada si se compartió.

## Despliegue en Render y APK

1. Conserva una copia del ZIP anterior.
2. Descomprime este ZIP y sube los archivos que están dentro de `nixora-mobile` a la raíz del repositorio GitHub del juego, reemplazando los archivos existentes. Evita crear otra carpeta `nixora-mobile/nixora-mobile`.
3. Confirma que Render complete el nuevo despliegue y muestre **Live**.
4. Revisa `https://TU-SITIO-RENDER/api/economy/health`; debe indicar que PostgreSQL está conectado.
5. Prueba primero en la web: registrarse, iniciar sesión, entrar en un obby, nadar, escalar, revisar historial y probar el acceso duplicado con dos navegadores/dispositivos.
6. Si tu APK contiene una copia de los archivos del juego, vuelve a generarlo y reinstálalo para incluir esta versión. Si solo abre la web de Render, recárgala y comprueba que se haya actualizado; el nombre nuevo del caché del service worker ayuda a descargar los archivos recientes.

## Límites importantes

- La persistencia de las credenciales y sesiones ahora usa PostgreSQL, pero el perfil, los avatares, amigos, inventario y progreso general todavía no se sincronizan automáticamente entre dispositivos.
- Los saldos administrativos `Dar / Quitar / Fijar saldo` se guardan en PostgreSQL, pero las compras, misiones y recompensas del juego todavía no están completamente trasladadas a la economía del servidor.
- El diseño, el código generado y las animaciones se han revisado estáticamente, pero no se pudo ejecutar una partida real contra la instancia de PostgreSQL de Render desde este entorno. Antes de anunciarlo como verificado, prueba las funciones enumeradas arriba en un navegador y en dos sesiones separadas.


ACTUALIZACIÓN DE OBBYS (octubre 2026)
Consulta LEEME-OBBYS-INFINITOS.md para los 1.536 perfiles procedurales base por modo, los seis nuevos mundos obby/parkour y las instrucciones de prueba.
