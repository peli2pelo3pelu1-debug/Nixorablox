# Skins de Minecraft en Nixora Blox

## Cómo importar una skin
1. Abre Nixora Blox e inicia sesión.
2. Entra en **Avatar**.
3. En **Skins de Minecraft**, pulsa **Importar skin PNG**.
4. Selecciona el archivo PNG de tu skin.
5. La skin se aplica al avatar de jugador y el juego indica si detectó capas exteriores.

## Formatos admitidos
- Skin moderna de 64×64 píxeles.
- Skin clásica de 64×32 píxeles.
- También admite los mismos formatos a resolución doble/cuádruple, por ejemplo 128×128, 128×64 o 256×256; se normalizan a la textura de Minecraft de 64 píxeles.
- Usa PNG. No se admiten archivos ZIP, JPG ni modelos 3D.

## Capas y accesorios
En skins modernas, Nixora Blox inspecciona la transparencia de las zonas de segunda capa (sombrero, chaqueta, mangas y pantalones). Si detecta píxeles visibles, desactiva los accesorios propios de Nixora mientras esa skin esté puesta para evitar superposiciones. El accesorio anterior se restaura cuando quitas la skin.

## Mascotas
La importación de skins solo afecta al avatar del jugador. No aplica texturas de Minecraft a la mascota y no modifica su aspecto.

## Notas
- La textura se guarda en los datos locales del perfil de este navegador.
- La skin se envía con el avatar cuando el cliente se conecta al servidor multijugador, pero esta implementación no crea por sí misma un sistema de cuentas/perfiles persistentes en el servidor.
- Las texturas y capas se renderizan mediante el modelo cúbico existente de Nixora Blox. Las animaciones usan los mismos pivotes de brazos y piernas que antes.
