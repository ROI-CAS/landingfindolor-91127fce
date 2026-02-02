import { motion } from "framer-motion";
import {
  Stethoscope,
  Heart,
  Users,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Equipo médico especializado",
    description:
      "Profesionales expertos en el manejo de condiciones complejas relacionadas con el dolor.",
  },
  {
    icon: Heart,
    title: "Enfoque integral",
    description:
      "Orientado al bienestar físico y emocional del paciente.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description:
      "Basada en la experiencia y la ética profesional.",
  },
  {
    icon: Sparkles,
    title: "Opciones no quirúrgicas",
    description:
      "Alternativas de tratamiento bajo valoración médica individual.",
  },
  {
    icon: Clock,
    title: "20+ años de experiencia",
    description:
      "Trayectoria sólida en manejo clínico del dolor y cuidados paliativos.",
  },
  {
    icon: Shield,
    title: "Acompañamiento ético",
    description:
      "Compromiso con tu calidad de vida y bienestar en cada paso.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Atención profesional para personas con dolor crónico
          </span>
          <h2 className="section-heading mb-4">¿Por qué elegir Findolor?</h2>
          <p className="section-subheading mx-auto">
            Somos un centro médico interdisciplinario con más de 20 años de
            experiencia en el manejo clínico del dolor y en el acompañamiento en
            cuidados paliativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover-lift hover:border-primary/30 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
