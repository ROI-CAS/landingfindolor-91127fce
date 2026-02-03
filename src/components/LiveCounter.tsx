import { motion } from "framer-motion";
import { Eye, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppointments } from "@/context/AppointmentContext";

export function LiveCounter() {
  const { consultasHoy } = useAppointments();
  const [viewingNow, setViewingNow] = useState(7);

  useEffect(() => {
    // Simulate real-time viewers (mantener solo esta simulación)
    const viewerInterval = setInterval(() => {
      setViewingNow(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(Math.max(newVal, 3), 15);
      });
    }, 8000);

    return () => clearInterval(viewerInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 left-4 z-40 bg-white rounded-xl shadow-xl border border-border p-3 sm:p-4 max-w-[200px] sm:max-w-xs"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="relative flex-shrink-0">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-foreground">{viewingNow}</span>
          <span className="text-muted-foreground"> viendo ahora</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-border">
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-foreground">{consultasHoy}</span>
          <span className="text-muted-foreground"> consultas hoy</span>
        </div>
      </div>
    </motion.div>
  );
}
