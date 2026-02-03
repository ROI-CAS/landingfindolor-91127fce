import { motion } from "framer-motion";
import { Eye, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

// Rangos de consultas por día de la semana
const BASE_BY_DAY: Record<number, { min: number; max: number }> = {
  0: { min: 5, max: 8 },    // Domingo
  1: { min: 14, max: 18 },  // Lunes
  2: { min: 12, max: 16 },  // Martes
  3: { min: 10, max: 14 },  // Miércoles
  4: { min: 13, max: 17 },  // Jueves
  5: { min: 15, max: 20 },  // Viernes
  6: { min: 8, max: 12 },   // Sábado
};

const getDailyConsultas = (): number => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  const dayConfig = BASE_BY_DAY[day];
  // Incremento progresivo según hora del día (8am-8pm)
  const hourFactor = Math.max(0, Math.min(hour - 8, 12)) / 12;
  const range = dayConfig.max - dayConfig.min;
  
  return Math.floor(dayConfig.min + (range * hourFactor));
};

export function LiveCounter() {
  const [viewingNow, setViewingNow] = useState(7);
  const [citasHoy, setCitasHoy] = useState(getDailyConsultas);

  useEffect(() => {
    // Simulate real-time viewers
    const viewerInterval = setInterval(() => {
      setViewingNow(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(Math.max(newVal, 3), 15);
      });
    }, 8000);

    // Incrementar consultas cada ~3 minutos durante horario laboral
    const consultasInterval = setInterval(() => {
      const hour = new Date().getHours();
      if (hour >= 8 && hour <= 20) {
        setCitasHoy(prev => prev + 1);
      }
    }, 180000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(consultasInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 left-4 z-40 bg-white rounded-xl shadow-xl border border-border p-4 max-w-xs"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <Eye className="w-5 h-5 text-primary" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
        <div>
          <span className="font-semibold text-foreground">{viewingNow} personas</span>
          <span className="text-muted-foreground text-sm"> viendo esta página</span>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <Calendar className="w-5 h-5 text-secondary" />
        <div>
          <span className="font-semibold text-foreground">{citasHoy} consultas</span>
          <span className="text-muted-foreground text-sm"> solicitadas hoy</span>
        </div>
      </div>
    </motion.div>
  );
}
