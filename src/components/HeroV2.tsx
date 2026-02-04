import { motion } from "framer-motion";
import { MultiStepForm } from "./MultiStepForm";
import { Shield, Clock, Award, Star, ChevronDown } from "lucide-react";
import { useAppointments } from "@/context/AppointmentContext";
import heroImage from "@/assets/hero-latina.jpg";

const logo = "/images/findolor-logo.svg";

const trustPoints = [
  { icon: Shield, text: "Médicos certificados" },
  { icon: Clock, text: "Respuesta en menos de 2 horas" },
  { icon: Award, text: "+20 años experiencia" },
];

export function HeroV2() {
  const { citasDisponibles } = useAppointments();
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Paciente aliviado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/80 to-[#1a2332]/60" />
      </div>

      <div className="container relative z-10 py-6 lg:py-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <img
            src={logo}
            alt="Findolor"
            className="h-12 md:h-14 w-auto brightness-200"
          />
          <div className="hidden md:flex items-center gap-2 text-white/80">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.9/5 en Google Reviews</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Urgency Badge - sincronizado con contexto global */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Solo {citasDisponibles} citas disponibles hoy
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Especialistas en{" "}
              <span className="text-secondary">Manejo del Dolor</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Centro especializado en diagnóstico y tratamiento del dolor en Bogotá. 
              Confía en nuestro equipo médico certificado.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm text-white/90">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div
              className="relative rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
              style={{
                background: "hsla(0, 0%, 100%, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid hsla(0, 0%, 100%, 0.6)",
                boxShadow: "0 25px 50px -12px hsla(0, 0%, 0%, 0.25), 0 0 0 1px hsla(0, 0%, 100%, 0.1) inset",
              }}
            >
              {/* Decorative gradient overlay */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, hsla(199, 76%, 52%, 0.08), transparent 50%)",
                }}
              />

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Solicita tu Valoración
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Te contactamos para agendar tu cita
                  </p>
                </div>
                <MultiStepForm />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
