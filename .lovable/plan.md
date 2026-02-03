

## Plan: Mejorar LiveCounter con Variación por Día + Corregir Contraste del Botón

### Problema 1: LiveCounter sin variación por día
El contador de consultas está fijo en 12. No hay lógica para variar según el día de la semana.

### Problema 2: Botón de WhatsApp sin contraste
El botón secundario tiene `text-white` sobre fondo transparente con borde blanco, haciendo el texto difícil de leer.

---

## Cambios Propuestos

### 1. LiveCounter.tsx - Variación Inteligente por Día

Se implementará lógica para que las consultas varíen según el día de la semana:

| Día | Rango Base | Ejemplo |
|-----|------------|---------|
| Lunes | 14-18 | "16 consultas solicitadas" |
| Martes | 12-16 | "14 consultas solicitadas" |
| Miércoles | 10-14 | "12 consultas solicitadas" |
| Jueves | 13-17 | "15 consultas solicitadas" |
| Viernes | 15-20 | "18 consultas solicitadas" |
| Sábado | 8-12 | "10 consultas solicitadas" |
| Domingo | 5-8 | "6 consultas solicitadas" |

Adicionalmente:
- El contador incrementará gradualmente durante el día (simula actividad real)
- Se añadirá variación cada ciertos minutos para dar sensación de actividad continua

```typescript
// Lógica propuesta
const getDailyBase = () => {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  
  const baseByDay = {
    0: { min: 5, max: 8 },    // Domingo
    1: { min: 14, max: 18 },  // Lunes
    2: { min: 12, max: 16 },  // Martes
    3: { min: 10, max: 14 },  // Miércoles
    4: { min: 13, max: 17 },  // Jueves
    5: { min: 15, max: 20 },  // Viernes
    6: { min: 8, max: 12 },   // Sábado
  };
  
  const dayConfig = baseByDay[day];
  // Incremento progresivo según hora del día (8am-8pm)
  const hourFactor = Math.min(hour - 8, 12) / 12;
  const range = dayConfig.max - dayConfig.min;
  
  return Math.floor(dayConfig.min + (range * hourFactor));
};
```

### 2. FinalCTAV2.tsx - Corregir Contraste del Botón WhatsApp

Cambiar el botón secundario de outline transparente a fondo sólido con buen contraste:

**Antes:**
```tsx
className="border-2 border-white text-white hover:bg-white/10"
```

**Después:**
```tsx
className="bg-[#25D366] text-white hover:bg-[#20BD5A] border-0"
```

Esto usa el verde oficial de WhatsApp, mejorando:
- Contraste de lectura
- Reconocimiento de marca (verde = WhatsApp)
- Accesibilidad WCAG

---

## Archivos a Modificar

1. **src/components/LiveCounter.tsx**
   - Agregar función `getDailyBase()` con rangos por día
   - Agregar efecto para incremento gradual durante el día
   - Mantener variación en tiempo real de personas viendo

2. **src/components/FinalCTAV2.tsx**
   - Cambiar clases del botón de WhatsApp a fondo verde sólido
   - Ajustar hover state para mejor interacción

---

## Resultado Esperado

- El contador mostrará números realistas según el día (más consultas lunes/viernes, menos domingo)
- El número incrementará naturalmente durante el día
- El botón de WhatsApp será claramente visible con verde distintivo
- Mejor UX y conversión al destacar la opción de contacto rápido

