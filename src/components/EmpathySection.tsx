import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-relief.jpg";

const highlights = [
  "Atención clínica personalizada brindada por profesionales en el manejo integral del dolor.",
  "Ofrecemos opciones de atención no quirúrgica, según evaluación médica individual.",
];

export function EmpathySection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Paciente feliz caminando con su familia después del tratamiento"
                className="w-full h-auto aspect-[16/10] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-light rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-6">
              Tu bienestar es nuestra prioridad
            </span>

            <h2 className="section-heading mb-6">
              Vuelve a disfrutar los momentos que importan
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sabemos lo difícil que puede ser vivir con dolor crónico. Por eso,
              nuestro equipo se dedica a escucharte, entenderte y acompañarte en
              cada paso de tu tratamiento. No estás solo en este camino hacia
              una mejor calidad de vida.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="btn-cta rounded-xl px-8"
              >
                <a href="#contacto">Agenda tu Cita</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-8 border-2"
              >
                <a href="tel:+573186912799" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  318 691 2799
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
