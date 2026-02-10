import { motion } from "framer-motion";
import { MultiStepFormV3 } from "./MultiStepFormV3";
import { Shield, Clock, Award, CheckCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-relief.jpg";

const logo = "/images/findolor-logo.svg";

const trustPoints = [
  { icon: Shield, text: "Médicos certificados" },
  { icon: Clock, text: "Respuesta en menos de 2 horas" },
  { icon: Award, text: "+20 años de experiencia" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export function HeroV3() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Paciente aliviado recibiendo tratamiento profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
      </div>

      <div className="container relative z-10 py-6 lg:py-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-6 md:mb-8"
        >
          <img
            src={logo}
            alt="Findolor - Centro de Manejo del Dolor"
            className="h-10 md:h-12 lg:h-14 w-auto brightness-200"
          />
          <div className="hidden md:flex items-center gap-2 text-background/80">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Centro certificado</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center py-4">
          {/* Left - Messaging */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-background order-2 lg:order-1"
          >
            {/* Professional Badge */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 text-background px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Centro #1 en manejo del dolor en Bogotá
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6"
            >
              Recupera tu calidad de vida.{" "}
              <span className="text-secondary">Vive sin dolor.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-background/80 mb-6 md:mb-8 max-w-lg leading-relaxed"
            >
              Tratamientos especializados respaldados por{" "}
              <strong className="text-background font-semibold">
                más de 2,500 pacientes
              </strong>{" "}
              que han transformado su bienestar con nuestro equipo médico.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8 md:mb-10"
            >
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.15,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <point.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm md:text-base text-background/90 font-medium">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-3 text-background/70"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">
                4.9/5 basado en opiniones de pacientes
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="bg-background rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-border/50">
              <div className="text-center mb-5 md:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                  Agenda tu Valoración Médica
                </h2>
                <p className="text-sm text-muted-foreground">
                  Primera consulta sin compromiso
                </p>
              </div>
              <MultiStepFormV3 />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-background/50 hover:text-background/80 transition-colors duration-300"
          aria-label="Ver más contenido"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
