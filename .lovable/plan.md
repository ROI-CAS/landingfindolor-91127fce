

# Plan: Sistema Centralizado de Disponibilidad de Citas

## Problema Identificado

Actualmente hay **3 componentes** mostrando números de disponibilidad **desconectados**:

| Componente | Ubicación | Problema |
|------------|-----------|----------|
| Hero Badge | "Solo 4 citas disponibles hoy" | Usa `getCitasDisponiblesHoy()` con `Math.random()` |
| Formulario | "Solo quedan 3 citas disponibles" | Calcula internamente con `Math.random()` diferente |
| LiveCounter | "14 consultas hoy" | Lógica completamente diferente |

Esto genera **inconsistencias visibles** que restan credibilidad.

---

## Solución Propuesta

Crear un **Context de React** centralizado que:
- Mantenga un estado global sincronizado
- Calcule disponibilidad basada en hora del dia
- Reaccione a envios de formulario (descontar citas, sumar consultas)

---

## Arquitectura

```text
+----------------------------------+
|     AppointmentProvider          |
|  (Context global en App.tsx)     |
+----------------------------------+
         |
         v
+----------------------------------+
|   useAppointments() Hook         |
|                                  |
|  - citasDisponibles: number      |
|  - consultasHoy: number          |
|  - registrarConsulta(): void     |
+----------------------------------+
         |
    +----+----+----+
    |         |    |
    v         v    v
  Hero    Form   LiveCounter
  Badge   Step4   Widget
```

---

## Logica de Disponibilidad

**Citas disponibles segun hora (conservador):**
- 8am-11am: 4-5 citas (mas disponibilidad)
- 12pm-2pm: 3-4 citas (media)
- 3pm-6pm: 2-3 citas (urgencia)
- Fuera de horario: 3 citas

**Al enviar formulario:**
- `citasDisponibles` se descuenta en 1 (minimo 1)
- `consultasHoy` se incrementa en 1

---

## Implementacion

### Paso 1: Crear Context y Hook

Nuevo archivo: `src/context/AppointmentContext.tsx`

```tsx
// Estado inicial calculado por hora
// Sin Math.random() para consistencia
// Funciones para registrar consultas

export function AppointmentProvider({ children }) {
  const [citasDisponibles, setCitasDisponibles] = useState(calcularCitasIniciales);
  const [consultasHoy, setConsultasHoy] = useState(calcularConsultasIniciales);

  const registrarConsulta = () => {
    setCitasDisponibles(prev => Math.max(1, prev - 1));
    setConsultasHoy(prev => prev + 1);
  };

  return (
    <AppointmentContext.Provider value={{ citasDisponibles, consultasHoy, registrarConsulta }}>
      {children}
    </AppointmentContext.Provider>
  );
}
```

### Paso 2: Integrar en App.tsx

Envolver la aplicacion con el Provider.

### Paso 3: Actualizar HeroV2.tsx

- Eliminar funcion `getCitasDisponiblesHoy()`
- Usar `useAppointments().citasDisponibles`

### Paso 4: Actualizar MultiStepForm.tsx

- Usar `useAppointments().citasDisponibles` para mostrar urgencia
- Llamar `registrarConsulta()` al confirmar envio

### Paso 5: Actualizar LiveCounter.tsx

- Eliminar logica duplicada de consultas
- Usar `useAppointments().consultasHoy`
- Mantener solo la simulacion de "viendo ahora"

---

## Cambios Adicionales Solicitados

**Texto del formulario paso 2:**
- Cambiar "Trabajamos con las principales aseguradoras" por texto mas amigable como "Selecciona tu forma de pago"

**Texto del Hero:**
- Eliminar "+2,500 pacientes atendidos este ano" (inicio de ano, poco convincente)

---

## Archivos a Modificar

| Archivo | Accion |
|---------|--------|
| `src/context/AppointmentContext.tsx` | **Crear** - Context centralizado |
| `src/App.tsx` | Agregar Provider |
| `src/components/HeroV2.tsx` | Usar hook, eliminar stats de pacientes |
| `src/components/MultiStepForm.tsx` | Usar hook, actualizar texto |
| `src/components/LiveCounter.tsx` | Usar hook para consultasHoy |

---

## Resultado Esperado

- Badge del Hero y formulario mostraran **el mismo numero**
- Al enviar un formulario, las citas bajan y las consultas suben
- Numeros prudentes y realistas (no mas de 5-6 citas disponibles)
- Sin `Math.random()` que cause inconsistencias entre renders

