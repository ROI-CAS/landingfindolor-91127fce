

## Análisis UX: Validación de campos obligatorios

### Problema actual
Los mensajes de error aparecen inmediatamente al llegar al paso 3, antes de que el usuario intente escribir. Esto es mala práctica UX — genera ansiedad y sensación negativa desde el inicio.

### Mejor práctica: Validación "on blur" + "on submit"

El estándar UX es mostrar errores solo cuando:
1. El usuario toca un campo y lo deja vacío (blur), o
2. El usuario intenta avanzar al siguiente paso sin completar los campos

### Cambios propuestos

**`src/components/MultiStepForm.tsx`**:
- Agregar estado `touchedFields` que rastrea qué campos el usuario ya tocó (onBlur)
- Agregar estado `attemptedNext` que se activa cuando intenta hacer clic en "Continuar" sin completar campos
- Mostrar mensaje "Campo requerido" solo si el campo está vacío Y (`touchedFields[campo]` es true O `attemptedNext` es true)
- Resetear `attemptedNext` cuando el usuario empieza a escribir
- Texto del error: **"Campo requerido"** (corto, directo, sin redundancia)

### Flujo resultante
1. Usuario llega al paso 3 → no ve errores
2. Toca "Nombre", escribe, y pasa a "Teléfono" → no ve errores
3. Deja "Teléfono" vacío y pasa a "Email" → aparece error en Teléfono
4. O intenta dar "Continuar" con campos vacíos → aparecen todos los errores de campos vacíos

