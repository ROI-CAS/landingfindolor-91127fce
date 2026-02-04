
# Plan: Sistema de FOMO Sincronizado y Coherente

## Resumen

Mejorar el sistema de urgencia/FOMO para que los 3 indicadores clave esten matematicamente relacionados y reflejen una logica de negocio realista usando la zona horaria de Bogota.

---

## Los 3 Indicadores y su Relacion

```text
+---------------------------+     +---------------------------+
|      CITAS DISPONIBLES    |     |      CONSULTAS HOY        |
|   (Hero + Formulario)     |     |      (LiveCounter)        |
+---------------------------+     +---------------------------+
         |                                    |
         |  Inversamente proporcionales       |
         +-------------- + -------------------+
                         |
                         v
              CAPACIDAD TOTAL DEL DIA
              (Fija por dia de semana)

Logica: consultasHoy = capacidadTotal - citasDisponibles
```

---

## Capacidad Total por Dia de Semana

| Dia | Capacidad Total | Razonamiento |
|-----|-----------------|--------------|
| Domingo | 8 | Dia de menor demanda |
| Lunes | 18 | Dia de alta demanda post-fin de semana |
| Martes | 16 | Demanda media-alta |
| Miercoles | 14 | Demanda media |
| Jueves | 16 | Demanda media-alta |
| Viernes | 20 | Dia de mayor demanda |
| Sabado | 12 | Demanda moderada |

---

## Logica de Citas Disponibles por Hora

La disponibilidad disminuye conforme avanza el dia:

| Franja Horaria | Citas Disponibles | FOMO Level |
|----------------|-------------------|------------|
| 6am - 8am | 6-7 | Bajo |
| 8am - 10am | 5-6 | Bajo |
| 10am - 12pm | 4-5 | Medio |
| 12pm - 2pm | 3-4 | Medio-Alto |
| 2pm - 4pm | 2-3 | Alto |
| 4pm - 6pm | 1-2 | Muy Alto |
| 6pm - 8pm | 1-2 | Urgente |
| 8pm - 6am | 5 | Reinicio (dia siguiente) |

---

## Formula de Sincronizacion

```text
capacidadDia = getCapacidadPorDia(diaSemana)
citasDisponibles = calcularPorHora(hora)  // Disminuye durante el dia
consultasHoy = capacidadDia - citasDisponibles

Ejemplo Viernes 3pm:
- capacidadDia = 20
- citasDisponibles = 3 (tarde, alta urgencia)
- consultasHoy = 20 - 3 = 17 consultas realizadas
```

---

## Comportamiento del Contador "Viendo Ahora"

Mantener la simulacion actual pero con limites coherentes:

| Franja | Rango "Viendo Ahora" | Razonamiento |
|--------|---------------------|--------------|
| 6am - 10am | 4-8 | Inicio de actividad |
| 10am - 2pm | 7-14 | Pico de busqueda |
| 2pm - 6pm | 5-12 | Actividad moderada |
| 6pm - 10pm | 3-8 | Fin del dia |
| 10pm - 6am | 2-5 | Actividad baja |

---

## Zona Horaria Bogota (UTC-5)

Crear funcion helper que obtiene la hora en Bogota:

```typescript
const getBogotaHour = (): number => {
  return new Date().toLocaleString('en-US', { 
    timeZone: 'America/Bogota', 
    hour: 'numeric', 
    hour12: false 
  });
};
```

---

## Cuando se Agenda una Cita Real

Al llamar `registrarConsulta()`:
1. citasDisponibles -= 1 (minimo 1)
2. consultasHoy += 1 (automatico por la formula)

Esto ya funciona actualmente, solo necesita mantener la coherencia con la nueva formula.

---

## Cambios por Archivo

### 1. `src/context/AppointmentContext.tsx`

**Cambios principales:**
- Agregar funcion `getBogotaHour()` para zona horaria correcta
- Agregar funcion `getBogotaDay()` para dia de semana
- Nueva constante `CAPACIDAD_POR_DIA` con capacidad total por dia
- Modificar `calcularCitasIniciales()` para usar hora de Bogota con mas granularidad
- Modificar `calcularConsultasIniciales()` para usar formula: `capacidad - citas`
- Asegurar que `registrarConsulta()` mantiene la coherencia

### 2. `src/components/LiveCounter.tsx`

**Cambios principales:**
- Ajustar rangos de "viendo ahora" segun franja horaria de Bogota
- Usar `getBogotaHour()` del contexto (o crear localmente)

---

## Ejemplo de Comportamiento

```text
Viernes 9:00 AM (Bogota):
- Citas disponibles: 6
- Consultas hoy: 20 - 6 = 14
- Viendo ahora: 7-12

Viernes 4:00 PM (Bogota):
- Citas disponibles: 2
- Consultas hoy: 20 - 2 = 18
- Viendo ahora: 5-10

Usuario agenda cita:
- Citas disponibles: 1
- Consultas hoy: 20 - 1 = 19
```

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| `src/context/AppointmentContext.tsx` | Nueva logica de calculo con zona horaria Bogota, formula sincronizada |
| `src/components/LiveCounter.tsx` | Rangos de "viendo ahora" basados en hora de Bogota |

