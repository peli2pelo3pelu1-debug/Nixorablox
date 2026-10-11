# Nixora Blox — recuperación del renderizado, sol/luna y clima

## Cambios
- Ruta de renderizado instanciado protegida: verifica las capacidades de Three.js r128 y pasa a mallas individuales si un lote falla, en vez de lanzar un error que detenga la creación del mundo.
- Los errores de lotes iniciales/procedurales se aíslan para evitar bloquear toda la partida.
- Sol y luna visibles con posición orbital ligada al reloj del mundo, ciclo día/noche (activado por defecto) e iluminación nocturna.
- Clima de Studio > Lighting: Automático, Despejado, Lluvia o Tormenta. Los mapas guardan el ajuste con sus propiedades de Lighting.
- Lluvia con 2.200 gotas dibujadas en un solo LineSegments en PC y 720 en dispositivos táctiles para limitar el coste; las gotas se reciclan mientras cae lluvia.
- Tormentas con relámpagos y truenos breves. En modo Automático los mapas exteriores alternan entre despejado, lluvia y tormenta. Mapas de espacio y submarinos permanecen despejados en modo automático.
- Versión de caché actualizada para solicitar el JavaScript nuevo.

## Instalación
1. Descomprime el ZIP.
2. Sube el contenido de `nixora-mobile` a la raíz del mismo repositorio de GitHub.
3. Espera a que Render esté `Live`.
4. Abre la web y recarga con `Ctrl + F5`. Si persiste un error viejo, cierra las pestañas de Nixora Blox y vuelve a abrir la página.

## Verificación
El cliente y el servidor deben pasar `node --check`; eso valida sintaxis, no sustituye una partida real. Prueba un mapa exterior, el cambio automático de clima y la opción Tormenta en Studio > Lighting.
