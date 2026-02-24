
# Plan: Ocultar popup de salida y formularios de citas

## Resumen
Se ocultaran temporalmente tres elementos de la pagina:
1. **Popup de salida (Exit Intent)** - la ventana que aparece al intentar salir
2. **Formulario del Hero** - el formulario de agendamiento en la parte superior
3. **Seccion "Agenda Tu Cita Ahora"** - la seccion completa con las pestanas de agendamiento

Los componentes no se eliminaran, solo se comentaran/removeran de `IndexV2.tsx` y `HeroV2.tsx` para poder reactivarlos facilmente en el futuro.

---

## Cambios tecnicos

### 1. `src/pages/IndexV2.tsx`
- Remover `<ExitIntentPopup />` del render (linea 45)
- Remover `<BookingCalendar />` del render (linea 38)
- Limpiar los imports correspondientes (lineas 11, 13)

### 2. `src/components/HeroV2.tsx`
- Remover el formulario `<MultiStepForm />` y las pestanas de agendamiento del Hero
- Reemplazar esa area con un CTA simple (boton de WhatsApp o llamada) para que el Hero no quede vacio en ese lado
- Mantener la estructura visual del Hero (titulo, subtitulo, badges de confianza)

### Notas
- Los archivos de componentes (`ExitIntentPopup.tsx`, `BookingCalendar.tsx`, `MultiStepForm.tsx`) se mantienen intactos para poder reactivarlos despues
- Los botones de CTA en `FinalCTAV2` que apuntan a `#agendar` seguiran funcionando pero no encontraran la seccion; se pueden ajustar para que apunten a WhatsApp directamente
