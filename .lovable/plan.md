
# Plan: Agregar formulario de contacto en la parte inferior y conectar boton "Agendar Cita"

## Resumen
Se agregara una seccion con el mismo formulario "Te llamamos" (MultiStepForm) en la parte inferior de la pagina, antes del FinalCTAV2. El boton "Agendar Cita" del menu sticky navegara a esta seccion.

---

## Cambios tecnicos

### 1. `src/pages/IndexV2.tsx`
- Agregar una nueva seccion con `id="agendar"` que contenga el `MultiStepForm` con el mismo estilo glassmorphism del Hero
- Ubicarla entre `<FAQSection />` y `<FinalCTAV2 />`
- Incluir titulo, icono de telefono y el mensaje de proteccion de datos, igual que en el Hero
- Importar `MultiStepForm` y los iconos necesarios (`Phone`)

### 2. `src/components/StickyHeader.tsx`
- El boton "Agendar Cita" ya apunta a `#agendar`, asi que funcionara automaticamente con la nueva seccion

### 3. `src/components/FinalCTAV2.tsx`
- El boton "Solicitar Valoracion Medica" ya apunta a `#agendar`, tambien funcionara automaticamente

### Notas
- El formulario inferior usara `formSource="booking"` para diferenciarlo del Hero en analytics
- Se mantiene el mismo diseno visual (glassmorphism card) para consistencia
- No se modifica ningun componente existente, solo se agrega la seccion en IndexV2
