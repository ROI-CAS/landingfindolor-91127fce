
## Plan de mejoras UX/UI

### Problema 1: Formulario del Hero - Espaciado excesivo
El formulario en el hero tiene demasiado espacio interno entre elementos. Se reducira el `min-h` del contenedor de tabs y se ajustaran los espacios internos para que el contenido sea mas compacto y proporcionado.

### Problema 2: Los 3 cards de beneficios - Layout 2+1
Cambiar el grid de `sm:grid-cols-3` (3 columnas iguales) a un layout de 2 arriba + 1 abajo que ocupe el ancho completo de las 2 columnas superiores. Esto mejora la legibilidad y rompe la monotonia visual.

### Detalles tecnicos

**HeroV2.tsx:**
- Reducir `min-h-[400px]` a `min-h-[380px]` en el contenedor de tabs
- Reducir `space-y-4` a `space-y-3` en la pestana "Prefiero elegir"
- Reducir `min-h-[360px]` a `min-h-[340px]` en el contenido de calendario
- Reducir el icono central de `w-14 h-14` a `w-12 h-12` y el icono interno de `w-7 h-7` a `w-6 h-6`
- Reducir `mb-5` del TabsList a `mb-4`

**BenefitsV2.tsx:**
- Cambiar el grid de `sm:grid-cols-3` a `grid-cols-2` con el tercer card usando `col-span-2` para ocupar el ancho completo
- Aumentar ligeramente el padding y tipografia del tercer card para que se vea equilibrado como card destacado
- Centrar el contenido del tercer card horizontalmente para que no se vea estirado

**MultiStepForm.tsx:**
- Reducir `mb-6` del progress steps a `mb-5`
- Reducir `mb-4` de los encabezados de cada step a `mb-3`

**BookingCalendar.tsx:**
- Aplicar los mismos ajustes de espaciado que en el hero para mantener consistencia visual entre ambos formularios
