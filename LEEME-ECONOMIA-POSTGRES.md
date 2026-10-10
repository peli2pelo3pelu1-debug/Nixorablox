# Nixora Blox — economía compartida con PostgreSQL

Esta actualización añade billeteras persistentes para las acciones **Dar / Quitar / Fijar saldo** del panel de administrador. También guarda un historial de ajustes y envía el nuevo saldo a los jugadores conectados.

## 1. Crear la base de datos en Render

1. Abre https://dashboard.render.com/ y pulsa **New → PostgreSQL**.
2. Nombre: `nixora-db`.
3. Región: la misma del Web Service de Nixora Blox (**Virginia / US East**, según lo que indicó el propietario).
4. Elige el plan que hayas decidido y crea la base.
5. Cuando esté disponible, abre **Connect** y copia **Internal Database URL**. No publiques ese enlace: contiene credenciales.

## 2. Variables de entorno del servicio web

En Render abre el Web Service de Nixora Blox → **Environment** y añade: 

- `DATABASE_URL`: pega la **Internal Database URL** de `nixora-db`.
- `NIXORA_ADMIN_USER`: el nombre exacto de la cuenta dueña autorizada (por defecto el proyecto usa `ParaCraftero`).
- `NIXORA_ADMIN_PASSWORD`: contraseña de inicio de sesión de ParaCraftero, entre 8 y 15 caracteres para ajustarse al formulario.
- `NIXORA_ADMIN_KEY`: una llave administrativa diferente, de al menos 24 caracteres. No la pegues en GitHub o en el código; el panel la pedirá para operaciones protegidas.

Guarda los cambios y deja que Render complete el despliegue. `package.json` incorpora `pg`, así que Render instalará el cliente PostgreSQL al desplegar.

## 3. Comprobar conexión

Después del despliegue, abre `https://TU-SITIO-RENDER/api/economy/health`. Debe responder con `ok: true` y `PostgreSQL conectado`. Si muestra error, revisa las variables de entorno y los logs del Web Service.

## 4. Dar dinero desde el juego

1. Inicia sesión con la cuenta que coincida con `NIXORA_ADMIN_USER` y abre Admin → Economía.
2. Selecciona un jugador conectado o una cuenta local / billetera ya registrada.
3. Escribe la cantidad y pulsa **Dar**, **Quitar** o **Fijar saldo**.
4. La primera vez se solicitará la `NIXORA_ADMIN_KEY` configurada en Render. Introdúcela en el cuadro emergente; el navegador la conserva solo en `sessionStorage` de esa sesión.
5. La respuesta de éxito confirma el saldo compartido. Los usuarios conectados reciben el nuevo saldo; los desconectados lo reciben cuando vuelvan a entrar. Puedes revisar la lista con **Actualizar billeteras del servidor**.

## Límites actuales que debes conocer

- Las acciones administrativas `Dar / Quitar / Fijar saldo` usan la base de datos compartida. Las cuentas, perfiles y contraseñas del juego siguen usando el sistema local antiguo; esta actualización no las migra a PostgreSQL.
- Los saldos antiguos solo existían en `localStorage` y no se pueden importar automáticamente desde otros dispositivos. En la primera operación, si la cuenta destinataria existe en el navegador administrador, el saldo local que allí se conoce se usa como saldo inicial; para un jugador que solo existe en otro dispositivo, el saldo inicial será 0 más el ajuste indicado. Revisa y fija los saldos de migración desde el panel según corresponda.
- Compras, misiones, logros y otras recompensas siguen usando la economía local existente; aún no están completamente migradas al backend. No asumas que toda la economía ya está centralizada.
- El servidor usa `NIXORA_ADMIN_KEY` para autorizar los ajustes y proteger la cuenta `ParaCraftero`. No publiques la llave. Consulta `LEEME-MAPAS-ANIMACIONES-SEGURIDAD.md` para el historial y el bloqueo de sesiones.

## Respaldo y solución de problemas

Antes de actualizar GitHub, conserva el ZIP anterior. Si la API da error, revisa Render → **Logs** y abre `/api/economy/health`. Nunca pegues `DATABASE_URL` ni `NIXORA_ADMIN_KEY` en capturas o chats.
