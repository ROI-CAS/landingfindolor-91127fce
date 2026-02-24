import { motion } from "framer-motion";
import { Shield, Clock, Award, ChevronDown, Phone } from "lucide-react";
import { MultiStepForm } from "./MultiStepForm";
import heroImage from "@/assets/hero-findolor-bg.jpg";
import heroImageMobile from "@/assets/hero-findolor-mobile.jpg";
const logo = "/images/findolor-logo.webp";
const trustPoints = [{
  icon: Shield,
  text: "Médicos especialistas en tratamiento del dolor crónico"
}, {
  icon: Clock,
  text: "Respuesta oportuna"
}, {
  icon: Award,
  text: "+20 años de experiencia"
}];
export function HeroV2() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageMobile} />
          <img src={heroImage} alt="Paciente aliviado" className="w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/80 to-[#1a2332]/60" />
      </div>

      <div className="container relative z-10 py-6 lg:py-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="flex items-center justify-between mb-8">
          <img src={logo} alt="Findolor" className="w-auto brightness-200" style={{ width: '190px', height: 'auto' }} />
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Messaging */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="text-white">

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Especialistas en el{" "}
              <span className="text-secondary">Manejo del Dolor Crónico y Cuidados Paliativos</span>
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              IPS especializada en dolor crónico y cuidados paliativos en Bogotá. En FinDolor realizamos valoración médica, diagnóstico y tratamiento con enfoque integral, combinando estrategias farmacológicas e intervencionistas según cada paciente.
              <span className="block mt-3">
                Acompañamos de forma cercana y segura a pacientes y familias durante todo el proceso.
              </span>
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              {trustPoints.map((point, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm text-white/90">{point.text}</span>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Right - CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative rounded-3xl p-6 md:p-8 w-full max-w-md" style={{
              background: "hsla(0, 0%, 100%, 0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(0, 0%, 100%, 0.2)",
            }}>
              <h3 className="text-white text-xl font-bold mb-2 text-center">¿Necesitas una valoración?</h3>
              <p className="text-white/70 text-sm mb-6 text-center">Contáctanos y te orientamos sin compromiso</p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full btn-cta text-base" asChild>
                  <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Escríbenos por WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-base border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="tel:+573001234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Llámanos ahora
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button onClick={scrollToContent} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </div>
    </section>;
}