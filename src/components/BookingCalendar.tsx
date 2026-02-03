import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { QuickBenefits } from "./QuickBenefits";

export function BookingCalendar() {
  useEffect(() => {
    // Cargar el script de GHL solo una vez
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="agendar" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Agenda en línea
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda Tu Cita Ahora
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecciona el horario que mejor se ajuste a tu disponibilidad. Te confirmaremos tu cita de inmediato.
          </p>
        </motion.div>

        {/* Quick Benefits Section - NEW */}
        <QuickBenefits />

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
        >
          {[
            { icon: Clock, text: "Confirmación inmediata" },
            { icon: Calendar, text: "Horarios flexibles" },
            { icon: CheckCircle, text: "Sin filas ni esperas" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-card rounded-3xl py-3 px-4 border border-border/60">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Calendar iframe container with custom styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-xl border border-border/60 overflow-hidden">
            {/* Custom header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Selecciona fecha y hora
              </h3>
              <p className="text-sm text-primary-foreground/80">Elige el momento más conveniente para tu valoración</p>
            </div>
            
            {/* Iframe with custom styling wrapper */}
            <div className="booking-calendar-wrapper p-4 md:p-6">
              <style>{`
                .booking-calendar-wrapper iframe {
                  width: 100%;
                  min-height: 600px;
                  border: none;
                  border-radius: 12px;
                  background: transparent;
                }
                
                /* Estilos para mejorar la integración visual */
                .booking-calendar-wrapper {
                  background: linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--muted)/0.3) 100%);
                }
              `}</style>
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/eXMBIpszBnRoCNW5sp4N" 
                scrolling="no" 
                id="eXMBIpszBnRoCNW5sp4N_1770078616894"
                title="Calendario de citas Findolor"
              />
            </div>
          </div>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
        </motion.p>
      </div>
    </section>
  );
}
