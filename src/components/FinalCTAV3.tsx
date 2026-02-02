import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTAV3() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-80 md:w-96 h-80 md:h-96 bg-background rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
            Da el primer paso hacia tu bienestar
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 leading-relaxed">
            Nuestro equipo está listo para acompañarte. Agenda tu valoración
            inicial y descubre cómo podemos ayudarte.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/95 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <a href="#contacto">
                Agendar Valoración
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl transition-all duration-300"
            >
              <a
                href="https://wa.me/573186912799"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          >
            <a
              href="tel:+573186912799"
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">318 691 2799</span>
            </a>
            <a
              href="tel:+576016736707"
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">601 673 6707</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Bogotá, Colombia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
