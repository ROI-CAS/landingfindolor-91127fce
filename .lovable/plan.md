
# Plan: Actualizar textos del ProcessTimeline

## Cambios en `src/components/ProcessTimeline.tsx`

Solo se actualizan las descripciones de los 4 pasos (lineas 4-29):

| Paso | Antes | Despues |
|------|-------|---------|
| 01 | "Completa el formulario y te contactamos en menos de 2 horas para confirmar." | "Completa el formulario y te contactaremos lo antes posible para confirmar." |
| 02 | "Evaluacion integral con nuestros especialistas para entender tu caso." | "Evaluacion integral para entender tu caso y tus objetivos de manejo." |
| 03 | "Disenamos un plan personalizado con las mejores opciones para tu caso." | "Definimos un plan personalizado con las opciones mas adecuadas para ti." |
| 04 | "Te acompanamos durante tu proceso de recuperacion con seguimiento personalizado." | "Seguimiento y ajustes segun tu evolucion, con acompanamiento cercano durante el proceso." |

Los titulos, iconos y estructura visual se mantienen sin cambios.

## Detalle tecnico

Se modifica unicamente el array `steps` en las lineas 4-29 del archivo `src/components/ProcessTimeline.tsx`, actualizando el campo `description` de cada paso.
