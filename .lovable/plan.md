
# Plan: Sincronización de Información y Mejoras de Conversión

## Resumen

Corregir inconsistencias de información en toda la landing, agregar teléfono fijo donde falta, unificar formatos de teléfono, agregar dirección completa, incluir el programa "Paciente Experto" en beneficios, y cambiar "Respuesta en 2 horas" a "menos de 2 horas".

---

## Cambios por Archivo

### 1. `src/components/FinalCTAV3.tsx`
**Problema**: Dirección solo dice "Bogotá, Colombia"
**Corrección**: Agregar dirección completa

| Línea | Antes | Después |
|-------|-------|---------|
| 102 | `Bogotá, Colombia` | `Cra 16 # 97-46, Torre 97` |

---

### 2. `src/components/HeroV2.tsx`
**Problema**: "Respuesta en 2 horas" en trustPoints
**Corrección**: Cambiar a "menos de 2 horas"

| Línea | Antes | Después |
|-------|-------|---------|
| 12 | `Respuesta en 2 horas` | `Respuesta en menos de 2 horas` |

---

### 3. `src/components/HeroV3.tsx`
**Problema**: "Respuesta en 2 horas" en trustPoints
**Corrección**: Cambiar a "menos de 2 horas"

| Línea | Antes | Después |
|-------|-------|---------|
| 10 | `Respuesta en 2 horas` | `Respuesta en menos de 2 horas` |

---

### 4. `src/components/BenefitsV3.tsx`
**Problema**: Falta "Programa Paciente Experto" como diferenciador
**Corrección**: Reemplazar "Convenios con aseguradoras" (ítem 6) con Paciente Experto

| Línea | Antes | Después |
|-------|-------|---------|
| 42-47 | `title: "Convenios con aseguradoras"` + descripción aseguradoras | `title: "Programa Paciente Experto"` + `description: "Pacientes que culminaron su tratamiento se convierten en guías y testimonio para otros que inician su camino hacia el bienestar."` |

Se usará el icono `Users` (importar) en lugar de `BadgeCheck`.

---

### 5. `src/components/BenefitsV2.tsx`
**Problema**: Beneficio "Convenios con EPS" menciona aseguradoras (omitir por ahora según instrucciones)
**Corrección**: Reemplazar con Paciente Experto

| Línea | Antes | Después |
|-------|-------|---------|
| 28-31 | `title: "Convenios con EPS"` + Sura, Seguros Bolívar, etc. | `title: "Programa Paciente Experto"` + descripción del programa |

Cambiar icono de `Shield` a `Users` para este beneficio.

---

### 6. `src/components/Footer.tsx`
**Problema**: Formato de teléfonos inconsistente (sin espacios correctos)
**Corrección**: Unificar formato a `318 691 2799` y `601 673 6707`

| Línea | Antes | Después |
|-------|-------|---------|
| 102 | `318 6912799` | `318 691 2799` |
| 111 | `601 6736707` | `601 673 6707` |

---

### 7. `src/components/ContactForm.tsx`
**Problema**: Formato de teléfonos inconsistente
**Corrección**: Unificar formato

| Línea | Antes | Después |
|-------|-------|---------|
| 67 | `318 6912799` | `318 691 2799` |
| 74 | `601 6736707` | `601 673 6707` |

---

### 8. `src/components/ClickToCallButton.tsx`
**Problema**: Falta teléfono fijo en tooltip
**Corrección**: Mantener solo celular en tooltip (es botón de llamada móvil)

Sin cambio necesario - el botón es específico para llamar al celular desde móvil.

---

### 9. `src/components/FinalCTAV2.tsx`
**Problema**: No tiene información de contacto (teléfonos/dirección)
**Corrección**: Agregar sección de contacto similar a FinalCTAV3

Agregar después de los botones CTA (después de línea 58):
- Teléfono celular: 318 691 2799
- Teléfono fijo: 601 673 6707
- Dirección resumida

---

### 10. `src/components/MultiStepForm.tsx`
**Problema**: Solo muestra un teléfono en el mensaje de confirmación
**Corrección**: Agregar también el teléfono fijo

| Línea | Antes | Después |
|-------|-------|---------|
| 115 | `También puedes llamarnos: 318 691 2799` | `También puedes llamarnos: 318 691 2799 / 601 673 6707` |

---

### 11. `src/components/EmpathySection.tsx`
**Problema**: Teléfono con formato incorrecto
**Corrección**: Unificar formato

| Línea | Antes | Después |
|-------|-------|---------|
| 82 | `318 6912799` | `318 691 2799` |

---

### 12. `src/components/QuickBenefits.tsx`
**Problema**: Menciona "Convenio con principales EPS"
**Corrección**: Cambiar a algo neutral o relacionado con Paciente Experto

| Línea | Antes | Después |
|-------|-------|---------|
| 13-16 | `text: "Convenio con principales EPS"` | `text: "Programa Paciente Experto"` + `highlight: "Paciente Experto"` |

---

## Resumen de Cambios

| Archivo | Tipo de Cambio |
|---------|----------------|
| FinalCTAV3.tsx | Dirección completa |
| HeroV2.tsx | "menos de 2 horas" |
| HeroV3.tsx | "menos de 2 horas" |
| BenefitsV3.tsx | Paciente Experto reemplaza aseguradoras |
| BenefitsV2.tsx | Paciente Experto reemplaza aseguradoras |
| Footer.tsx | Formato teléfonos |
| ContactForm.tsx | Formato teléfonos |
| FinalCTAV2.tsx | Agregar info contacto |
| MultiStepForm.tsx | Agregar teléfono fijo |
| EmpathySection.tsx | Formato teléfono |
| QuickBenefits.tsx | Paciente Experto |

---

## Notas Técnicas

### Programa Paciente Experto - Descripción a usar:
> "Pacientes que culminaron su tratamiento se convierten en guías y testimonio para otros que inician su camino hacia el bienestar."

### Formato de teléfonos estándar:
- Celular: `318 691 2799` (con espacios)
- Fijo: `601 673 6707` (con espacios)

### Dirección estándar corta (para CTAs):
- `Cra 16 # 97-46, Torre 97, Bogotá`

### Dirección completa (para Footer/contacto):
- `Carrera 16 # 97-46, Edificio Torre 97, Torre 2, Consultorios 705-706, Bogotá`

---

## Componentes que mantienen aseguradoras (según instrucciones):

Los siguientes componentes seguirán mostrando logos de aseguradoras hasta nueva orden:
- `TrustBar.tsx`
- `TrustBadges.tsx`
- `SocialProofV2.tsx` (sección de convenios al final)
- `MultiStepForm.tsx` (opciones de entidad en paso 2)
- `ContactForm.tsx` (opciones de entidad en select)
