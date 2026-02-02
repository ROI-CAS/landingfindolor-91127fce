import { motion } from "framer-motion";
import {
  Activity,
  Hand,
  Zap,
  Brain,
  Flame,
  Disc,
  Target,
  Ribbon,
  Sparkles,
  Cable,
} from "lucide-react";

const conditions = [
  {
    icon: Activity,
    title: "Dolor lumbar (lumbalgia)",
    description: "Tratamiento especializado para aliviar el dolor en la espalda baja.",
  },
  {
    icon: Hand,
    title: "Dolor de hombro",
    description: "Manguito rotador, artrosis y otras condiciones del hombro.",
  },
  {
    icon: Zap,
    title: "Epicondilitis",
    description: "Codo de tenista y otras lesiones por uso repetitivo.",
  },
  {
    icon: Cable,
    title: "Síndrome del Túnel Carpiano",
    description: "Alivio para la compresión del nervio mediano en la muñeca.",
  },
  {
    icon: Flame,
    title: "Neuralgia por Herpes Zóster",
    description: "Manejo del dolor post-herpético y neuralgia.",
  },
  {
    icon: Disc,
    title: "Discopatía lumbar",
    description: "Tratamiento para hernias y degeneración discal.",
  },
  {
    icon: Target,
    title: "Síndrome del Piriforme",
    description: "Alivio del dolor ciático por compresión muscular.",
  },
  {
    icon: Ribbon,
    title: "Dolor crónico oncológico",
    description: "Cuidados paliativos y manejo del dolor en pacientes oncológicos.",
  },
  {
    icon: Sparkles,
    title: "Fibromialgia",
    description: "Enfoque integral para el manejo del dolor muscular generalizado.",
  },
  {
    icon: Brain,
    title: "Dolor neuropático",
    description: "Tratamiento especializado para dolor de origen nervioso.",
  },
];

export function ConditionsGrid() {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Tratamientos especializados
          </span>
          <h2 className="section-heading mb-4">¿Qué condiciones abordamos?</h2>
          <p className="section-subheading mx-auto">
            Nuestro equipo está capacitado para tratar una amplia variedad de
            condiciones de dolor crónico y agudo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-5 rounded-2xl bg-card border border-border hover-lift hover:border-primary/30 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <condition.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">
                {condition.title}
              </h3>
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
