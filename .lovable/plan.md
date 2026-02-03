
## Plan: Badge de Citas por Día + Disclaimer Legal

### Cambio 1: Badge Dinámico por Hora del Día

**Archivo:** `src/components/HeroV2.tsx`

**Lógica propuesta:**
- En la mañana (8am-12pm): más citas disponibles (4-6)
- Al mediodía (12pm-3pm): disponibilidad media (3-4)
- En la tarde (3pm-6pm): menos citas (2-3)
- Fuera de horario (6pm-8am): número fijo (3)

```text
Horario         Citas Disponibles
─────────────────────────────────
08:00 - 12:00   5-6 citas
12:00 - 15:00   3-4 citas
15:00 - 18:00   2-3 citas
18:00 - 08:00   3 citas (fijo)
```

**Código simplificado:**
```typescript
const getCitasDisponiblesHoy = () => {
  const hour = new Date().getHours();
  
  if (hour >= 8 && hour < 12) {
    // Mañana: más disponibilidad
    return 5 + Math.floor(Math.random() * 2); // 5-6
  } else if (hour >= 12 && hour < 15) {
    // Mediodía: disponibilidad media
    return 3 + Math.floor(Math.random() * 2); // 3-4
  } else if (hour >= 15 && hour < 18) {
    // Tarde: menos disponibilidad (urgencia)
    return 2 + Math.floor(Math.random() * 2); // 2-3
  }
  // Fuera de horario
  return 3;
};
```

**Texto actualizado:**
```
Antes: "Solo X citas disponibles esta semana"
Después: "Solo X citas disponibles hoy"
```

---

### Cambio 2: Disclaimer Legal en Footer

**Archivo:** `src/components/Footer.tsx`

Agregar un texto legal después del copyright, antes de los links de políticas:

```text
"Los resultados del tratamiento pueden variar según las 
condiciones individuales de cada paciente."
```

**Ubicación en el diseño:**
```
┌─────────────────────────────────────────────────────────────┐
│ © 2024 Findolor. Todos los derechos reservados.             │
│                                                             │
│ Los resultados del tratamiento pueden variar según las      │
│ condiciones individuales de cada paciente.                  │
│                                                             │
│ Política de uso de contenidos  |  Políticas de tratamiento  │
└─────────────────────────────────────────────────────────────┘
```

---

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/HeroV2.tsx` | Actualizar lógica del badge con `getCitasDisponiblesHoy()` y cambiar texto a "hoy" |
| `src/components/Footer.tsx` | Agregar disclaimer legal sobre variabilidad de resultados |

---

## Resultado Esperado

- El badge mostrará "Solo 5 citas disponibles hoy" en la mañana
- A las 4pm mostrará "Solo 2 citas disponibles hoy" (mayor urgencia)
- El footer tendrá un texto legal cumpliendo con normativas médicas y Google Ads
