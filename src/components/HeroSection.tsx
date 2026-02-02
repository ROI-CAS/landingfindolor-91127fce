import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { Check, Heart, Users, Activity, Brain } from "lucide-react";
const logo = "/images/findolor-logo.svg";

const benefits = [
  { icon: Heart, text: "Atención en cuidados paliativos" },
  { icon: Activity, text: "Valoración médica especializada en dolor" },
  { icon: Users, text: "Fisioterapia y rehabilitación funcional" },
  { icon: Brain, text: "Apoyo integral en salud física y emocional" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen section-gradient overflow-hidden">
      {/* Decorative blobs */}
      <div className="decorative-blob w-96 h-96 -top-48 -right-48" />
      <div className="decorative-blob w-64 h-64 bottom-20 -left-32 opacity-10" />

      <div className="container relative z-10 py-8 lg:py-16">
        {/* Header with logo */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-start mb-8 lg:mb-12"
        >
          <img
            src={logo}
            alt="Findolor - Calidad de Vida"
            className="h-16 md:h-20 w-auto"
          />
        </motion.header>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-6">
                Centro médico especializado en manejo del dolor
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Recupera tu bienestar y{" "}
                <span className="text-gradient">vuelve a disfrutar</span> tu vida
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                En Findolor, comprendemos tu situación y estamos comprometidos en
                brindarte una atención integral que mejore tu bienestar y calidad
                de vida. Contamos con un equipo profesional altamente capacitado
                y un enfoque personalizado para acompañarte de forma ética y
                responsable.
              </p>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Condiciones tratadas
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Enfoque personalizado
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
