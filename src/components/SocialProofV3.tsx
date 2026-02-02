import { motion } from "framer-motion";
import { TrendingUp, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Pacientes atendidos",
    description: "Han recuperado su bienestar",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfacción",
    description: "Recomiendan nuestros servicios",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Mejora significativa",
    description: "En las primeras 4 semanas",
  },
  {
    icon: Award,
    value: "20+",
    label: "Años de experiencia",
    description: "Equipo médico especializado",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SocialProofV3() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Resultados que{" "}
            <span className="text-primary">hablan por sí solos</span>
          </h2>
          <p className="section-subheading text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Miles de pacientes han transformado su calidad de vida con nuestros
            tratamientos especializados
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-background rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
