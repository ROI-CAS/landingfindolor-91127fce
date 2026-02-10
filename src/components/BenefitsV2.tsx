import { motion } from "framer-motion";
import { 
  Heart, 
  Users,
  Sparkles,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atención Humanizada",
    description: "Entendemos tu dolor. Cada paciente recibe un trato personalizado y empático.",
  },
  {
    icon: Users,
    title: "Equipo con +20 Años",
    description: "Experiencia sólida en el manejo clínico del dolor y cuidados paliativos.",
  },
  {
    icon: Users,
    title: "Programa Paciente Experto",
    description: "Pacientes que culminaron su tratamiento guían y acompañan a quienes inician su camino.",
  },
];

const guarantees = [
  "Valoración médica integral",
  "Atención personalizada sin largas esperas",
  "Acompañamiento continuo durante tu proceso",
];

export function BenefitsV2() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-muted/80 via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              ¿Por qué elegirnos?
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Centro Especializado en{" "}
              <span className="text-gradient">Manejo del Dolor</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              No solo tratamos el dolor, tratamos a la persona completa. 
              Nuestro enfoque integral busca mejorar tu calidad de vida.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 mb-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 btn-cta px-8 py-4 rounded-xl text-lg"
            >
              Agenda Tu Cita Ahora
            </a>
          </motion.div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
