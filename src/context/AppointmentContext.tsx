// Centralized appointment state management with Bogotá timezone
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppointmentContextType {
  citasDisponibles: number;
  consultasHoy: number;
  capacidadTotal: number;
  registrarConsulta: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

// Capacidad total por día de la semana
const CAPACIDAD_POR_DIA: Record<number, number> = {
  0: 8,   // Domingo - menor demanda
  1: 18,  // Lunes - alta demanda post-fin de semana
  2: 16,  // Martes - demanda media-alta
  3: 14,  // Miércoles - demanda media
  4: 16,  // Jueves - demanda media-alta
  5: 20,  // Viernes - mayor demanda
  6: 12,  // Sábado - demanda moderada
};

// Obtener hora actual en Bogotá (UTC-5)
export const getBogotaHour = (): number => {
  const bogotaTime = new Date().toLocaleString('en-US', { 
    timeZone: 'America/Bogota', 
    hour: 'numeric', 
    hour12: false 
  });
  return parseInt(bogotaTime, 10);
};

// Obtener día de la semana en Bogotá
export const getBogotaDay = (): number => {
  const bogotaTime = new Date().toLocaleString('en-US', { 
    timeZone: 'America/Bogota', 
    weekday: 'short' 
  });
  const dayMap: Record<string, number> = {
    'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6
  };
  return dayMap[bogotaTime] ?? new Date().getDay();
};

// Calcula citas disponibles basado en hora del día (Bogotá)
const calcularCitasIniciales = (): number => {
  const hour = getBogotaHour();
  
  if (hour >= 6 && hour < 8) {
    return 7; // Muy temprano: máxima disponibilidad
  } else if (hour >= 8 && hour < 10) {
    return 6; // Mañana temprana
  } else if (hour >= 10 && hour < 12) {
    return 5; // Media mañana
  } else if (hour >= 12 && hour < 14) {
    return 4; // Mediodía
  } else if (hour >= 14 && hour < 16) {
    return 3; // Tarde temprana
  } else if (hour >= 16 && hour < 18) {
    return 2; // Tarde: alta urgencia
  } else if (hour >= 18 && hour < 20) {
    return 2; // Fin del día: urgente
  }
  // Fuera de horario (8pm - 6am): reinicio para día siguiente
  return 5;
};

// Obtener capacidad del día actual
const getCapacidadDia = (): number => {
  const day = getBogotaDay();
  return CAPACIDAD_POR_DIA[day] ?? 14;
};

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [capacidadTotal] = useState(getCapacidadDia);
  const [citasDisponibles, setCitasDisponibles] = useState(calcularCitasIniciales);
  
  // consultasHoy se deriva de la fórmula: capacidadTotal - citasDisponibles
  const consultasHoy = capacidadTotal - citasDisponibles;

  // Actualizar cada hora para reflejar cambios en disponibilidad real
  useEffect(() => {
    const interval = setInterval(() => {
      const hour = getBogotaHour();
      // Recalcular citas según franja horaria de Bogotá
      if (hour >= 6 && hour <= 20) {
        setCitasDisponibles(calcularCitasIniciales());
      }
    }, 3600000); // Cada hora

    return () => clearInterval(interval);
  }, []);

  const registrarConsulta = () => {
    // Decrementar citas disponibles (mínimo 1)
    setCitasDisponibles(prev => Math.max(1, prev - 1));
    // consultasHoy se actualiza automáticamente por la fórmula
  };

  return (
    <AppointmentContext.Provider value={{ citasDisponibles, consultasHoy, capacidadTotal, registrarConsulta }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointments must be used within an AppointmentProvider");
  }
  return context;
}
