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
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Hand,
    title: "Dolor de hombro",
    description: "Manguito rotador, artrosis y otras condiciones del hombro.",
    color: "from-teal-500/20 to-teal-600/10",
  },
  {
    icon: Zap,
    title: "Epicondilitis",
    description: "Codo de tenista y otras lesiones por uso repetitivo.",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Cable,
    title: "Síndrome del Túnel Carpiano",
    description: "Alivio para la compresión del nervio mediano en la muñeca.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Flame,
    title: "Neuralgia por Herpes Zóster",
    description: "Manejo del dolor post-herpético y neuralgia.",
    color: "from-red-500/20 to-red-600/10",
  },
  {
    icon: Disc,
    title: "Discopatía lumbar",
    description: "Tratamiento para hernias y degeneración discal.",
    color: "from-indigo-500/20 to-indigo-600/10",
  },
  {
    icon: Target,
    title: "Síndrome del Piriforme",
    description: "Alivio del dolor ciático por compresión muscular.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Ribbon,
    title: "Dolor crónico oncológico",
    description: "Cuidados paliativos y manejo del dolor en pacientes oncológicos.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Sparkles,
    title: "Fibromialgia",
    description: "Enfoque integral para el manejo del dolor muscular generalizado.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Brain,
    title: "Dolor neuropático",
    description: "Tratamiento especializado para dolor de origen nervioso.",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
];

export function ConditionsGrid() {
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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4">
            Tratamientos especializados
          </span>
          <h2 className="section-heading mb-4">¿Qué condiciones abordamos?</h2>
          <p className="section-subheading mx-auto">
            Nuestro equipo está capacitado para tratar una amplia variedad de
            condiciones de dolor crónico y agudo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card with glassmorphism effect */}
              <div
                className="relative h-full p-6 rounded-3xl bg-card border border-border/60 hover-lift hover:border-primary/40 cursor-pointer transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: "0 4px 24px -4px hsla(0, 0%, 0%, 0.06)",
                }}
              >
                {/* Gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${condition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with enhanced styling */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm">
                    <condition.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Title with better typography */}
                  <h3 className="font-bold text-foreground mb-2 text-base leading-tight">
                    {condition.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
