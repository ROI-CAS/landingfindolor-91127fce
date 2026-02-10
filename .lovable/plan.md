
# Plan: Actualizar sección BenefitsV2

## Cambios en `src/components/BenefitsV2.tsx`

### 1. Etiqueta superior (línea 58)
- **Antes:** "¿Por qué elegirnos?"
- **Después:** "¿Por qué elegir FinDolor?"

### 2. Título con degradé (líneas 61-64)
- **Antes:** `Centro Especializado en` + `<span class="text-gradient">Manejo del Dolor</span>`
- **Después:** `IPS especializada en` + `<span class="text-gradient">dolor crónico y cuidados paliativos</span>`

### 3. Párrafo descriptivo (líneas 66-69)
- **Antes:** "No solo tratamos el dolor, tratamos a la persona completa. Nuestro enfoque integral busca mejorar tu calidad de vida."
- **Después:** "En FinDolor no ofrecemos soluciones genéricas. Evaluamos tu caso de forma integral y diseñamos un plan de manejo personalizado para aliviar el dolor, mejorar tu funcionalidad y elevar tu calidad de vida, con acompañamiento cercano en cada etapa."

### 4. Lista de garantías (líneas 33-37)
- **Antes:** 3 items
- **Después:** 4 items:
  1. "Valoración médica integral (historia clínica, examen y definición del plan)"
  2. "Plan de tratamiento personalizado según tu diagnóstico y objetivos"
  3. "Atención oportuna, sin esperas innecesarias"
  4. "Acompañamiento continuo y seguimiento con ajustes según tu evolución"

### 5. Quitar "Enfoque Multidisciplinario" de los cuadros (líneas 10-31)
- Eliminar el card de "Enfoque Multidisciplinario" del array `benefits`
- Quedan 3 cards: Atención Humanizada, Equipo con +20 Años, Programa Paciente Experto
- Eliminar import de `Brain` (ya no se usa)

## Detalle técnico

Solo se modifica `src/components/BenefitsV2.tsx`. Los 3 cards restantes seguirán en grid de 2 columnas (el tercero ocupará la primera celda de la segunda fila).
