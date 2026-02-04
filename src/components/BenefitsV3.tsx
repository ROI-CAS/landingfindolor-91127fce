import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Clock,
  UserCheck,
  HeartPulse,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Tratamientos de última generación",
    description:
      "Técnicas mínimamente invasivas con tecnología avanzada para resultados más efectivos y recuperación rápida.",
  },
  {
    icon: ShieldCheck,
    title: "Equipo médico certificado",
    description:
      "Especialistas con formación internacional y más de 20 años de experiencia en manejo del dolor.",
  },
  {
    icon: Clock,
    title: "Atención prioritaria",
    description:
      "Agenda disponible en menos de 48 horas. Valoramos tu tiempo y tu bienestar.",
  },
  {
    icon: UserCheck,
    title: "Plan de tratamiento personalizado",
    description:
      "Cada paciente es único. Diseñamos un protocolo específico según tu condición y objetivos.",
  },
  {
    icon: HeartPulse,
    title: "Seguimiento continuo",
    description:
      "Te acompañamos en cada etapa de tu recuperación con controles periódicos y ajustes de tratamiento.",
  },
  {
    icon: Users,
    title: "Programa Paciente Experto",
    description:
      "Pacientes que culminaron su tratamiento se convierten en guías y testimonio para otros que inician su camino hacia el bienestar.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BenefitsV3() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            ¿Por qué elegir{" "}
            <span className="text-primary">Findolor</span>?
          </h2>
          <p className="section-subheading text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Combinamos experiencia médica de alto nivel con un enfoque humano
            centrado en tu recuperación
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-background rounded-xl md:rounded-2xl p-5 md:p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-4 transition-colors duration-300">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
