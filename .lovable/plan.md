

# Plan: Quitar secciones, unificar formulario y corregir ortografia

## 1. Quitar seccion "¿Que condiciones abordamos?" (ConditionsGrid)

**Archivo:** `src/pages/IndexV2.tsx`
- Eliminar la linea `import { ConditionsGrid }` y `<ConditionsGrid />` del render

## 2. Quitar etiqueta "Agenda en linea" del BookingCalendar

**Archivo:** `src/components/BookingCalendar.tsx`
- Eliminar el `div` con "Agenda en linea" (lineas 37-40)

## 3. Unificar formulario del Hero con el de BookingCalendar

El formulario que se muestra en la imagen de referencia ya es el mismo `MultiStepForm` que esta en el hero y en la seccion de agendamiento. No se requiere ningun cambio estructural, ya que ambos usan el mismo componente.

## 4. Corregir "valoracion" a "valoracion medica" en todo el sitio

| Archivo | Antes | Despues |
|---------|-------|---------|
| `HeroV2.tsx` (linea 117) | "Solicita tu Valoracion" | "Solicita tu Valoracion Medica" |
| `FinalCTAV2.tsx` (linea 32) | "Solicita tu valoracion inicial" | "Solicita tu valoracion medica inicial" |
| `FinalCTAV2.tsx` (linea 44) | "Solicitar Valoracion" | "Solicitar Valoracion Medica" |
| `BookingCalendar.tsx` (linea 145) | "tu valoracion" | "tu valoracion medica" |
| `FAQSection.tsx` (linea 20) | "tu valoracion inicial" | "tu valoracion medica inicial" |
| `StepsSection.tsx` (linea 40) | "tu valoracion es facil" | "tu valoracion medica es facil" |
| `TestimonialsSection.tsx` (linea 51) | "valoracion en Findolor" | "valoracion medica en FinDolor" |
| `WhatsAppButton.tsx` (linea 7) | "valoracion del dolor" | "valoracion medica del dolor" |
| `FinalCTAV3.tsx` (lineas 39, 57) | "valoracion" sin "medica" | Agregar "medica" |
| `HeroV3.tsx` (linea 171) | "Agenda tu Valoracion" | "Agenda tu Valoracion Medica" |

**Nota:** `VideoSection.tsx` usa "valoracion clinica" que es correcto y no requiere cambio. `BenefitsV2.tsx` ya tiene "Valoracion medica integral".

## 5. Revision de ortografia general

- `ExitIntentPopup.tsx` (linea 91): "Descargar Guia Gratis" -- la palabra "Gratis" viola las restricciones de Google Ads. Cambiar a "Descargar Guia Informativa".
- No se detectaron errores ortograficos adicionales (tildes, caracteres especiales estan correctos en el codigo fuente).

## Detalle tecnico

Archivos modificados:
1. `src/pages/IndexV2.tsx` -- eliminar ConditionsGrid
2. `src/components/BookingCalendar.tsx` -- quitar "Agenda en linea"
3. `src/components/HeroV2.tsx` -- "Valoracion Medica"
4. `src/components/FinalCTAV2.tsx` -- "valoracion medica"
5. `src/components/FAQSection.tsx` -- "valoracion medica"
6. `src/components/StepsSection.tsx` -- "valoracion medica"
7. `src/components/TestimonialsSection.tsx` -- "valoracion medica"
8. `src/components/WhatsAppButton.tsx` -- "valoracion medica"
9. `src/components/ExitIntentPopup.tsx` -- quitar "Gratis"
10. `src/components/FinalCTAV3.tsx` -- "valoracion medica"
11. `src/components/HeroV3.tsx` -- "valoracion medica"

