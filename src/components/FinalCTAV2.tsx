import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTAV2() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Availability */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Clock className="w-4 h-4" />
            Agenda disponible esta semana
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para dar el primer paso?
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            Solicita tu valoración inicial con nuestros especialistas. 
            <strong className="text-white"> Te contactamos hoy</strong> para orientarte sobre tu caso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              <a href="#agendar">
                Solicitar Valoración
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20BD5A] text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              <a href="https://wa.me/573186912799?text=Hola%2C%20quiero%20agendar%20mi%20cita%20para%20valoraci%C3%B3n%20del%20dolor.%20%C2%BFCu%C3%A1les%20son%20los%20horarios%20disponibles%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="tel:+573186912799"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>318 691 2799</span>
            </a>
            <a
              href="tel:+576016736707"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>601 673 6707</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
