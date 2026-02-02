import { motion } from "framer-motion";
import { Users, Eye, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export function LiveCounter() {
  const [viewingNow, setViewingNow] = useState(7);
  const [citasHoy, setCitasHoy] = useState(12);

  useEffect(() => {
    // Simulate real-time activity
    const interval = setInterval(() => {
      setViewingNow(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(Math.max(newVal, 3), 15);
      });
    }, 8000);

    return () => clearInterval(interval);
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
          <span className="font-semibold text-foreground">{citasHoy} citas</span>
          <span className="text-muted-foreground text-sm"> agendadas hoy</span>
        </div>
      </div>
    </motion.div>
  );
}
