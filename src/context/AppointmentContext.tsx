import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppointmentContextType {
  citasDisponibles: number;
  consultasHoy: number;
  registrarConsulta: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

// Calcula citas disponibles basado en hora del día (sin Math.random para consistencia)
const calcularCitasIniciales = (): number => {
  const hour = new Date().getHours();
  
  if (hour >= 8 && hour < 12) {
    // Mañana: más disponibilidad
    return 5;
  } else if (hour >= 12 && hour < 15) {
    // Mediodía: disponibilidad media
    return 4;
  } else if (hour >= 15 && hour < 18) {
    // Tarde: menos disponibilidad (urgencia)
    return 2;
  }
  // Fuera de horario
  return 3;
};

// Calcula consultas del día basado en hora y día de semana
const calcularConsultasIniciales = (): number => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  // Rangos de consultas base por día de la semana
  const baseByDay: Record<number, { min: number; max: number }> = {
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
  const hourFactor = Math.max(0, Math.min(hour - 8, 12)) / 12;
  const range = dayConfig.max - dayConfig.min;
  
  return Math.floor(dayConfig.min + (range * hourFactor));
};

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [citasDisponibles, setCitasDisponibles] = useState(calcularCitasIniciales);
  const [consultasHoy, setConsultasHoy] = useState(calcularConsultasIniciales);

  // Actualizar cada hora para reflejar cambios en disponibilidad real
  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      // Recalcular citas solo al cambiar de franja horaria
      if (hour >= 8 && hour <= 18) {
        setCitasDisponibles(calcularCitasIniciales());
      }
    }, 3600000); // Cada hora

    return () => clearInterval(interval);
  }, []);

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

export function useAppointments() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointments must be used within an AppointmentProvider");
  }
  return context;
}
