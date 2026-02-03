import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  Clock, 
  Shield,
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
    icon: Brain,
    title: "Enfoque Multidisciplinario",
    description: "Médicos, fisioterapeutas y psicólogos trabajando juntos por tu bienestar.",
  },
  {
    icon: Activity,
    title: "Tecnología Avanzada",
    description: "Equipos de última generación para diagnósticos precisos y tratamientos efectivos.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Más de 20 años de experiencia en el manejo del dolor crónico.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Confirmamos tu cita en menos de 2 horas. Tu tiempo es valioso.",
  },
  {
    icon: Shield,
    title: "Seguros Aceptados",
    description: "Trabajamos con las principales aseguradoras del país.",
  },
];

const guarantees = [
  "Valoración inicial de orientación",
  "Atención sin largas esperas",
  "Plan de tratamiento personalizado",
  "Seguimiento continuo incluido",
];

export function BenefitsV2() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              El Centro de Dolor Más{" "}
              <span className="text-gradient">Confiable</span> de Bogotá
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              No solo tratamos el dolor, tratamos a la persona completa. 
              Nuestro enfoque integral garantiza resultados duraderos.
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
