import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MultiStepForm } from "./MultiStepForm";
import { Shield, Clock, Award, ChevronDown, Phone, CalendarDays, ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@/assets/hero-latina.jpg";

const logo = "/images/findolor-logo.svg";

const trustPoints = [
  { icon: Shield, text: "Médicos especialistas en tratamiento del dolor crónico" },
  { icon: Clock, text: "Respuesta oportuna" },
  { icon: Award, text: "+20 años de experiencia" },
];

export function HeroV2() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [drawerOpen]);
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
              className="relative rounded-3xl p-5 md:p-7 shadow-2xl overflow-hidden"
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
                <Tabs defaultValue="callback" className="w-full">
                  <TabsList className="grid grid-cols-2 w-full mb-5 h-auto p-1">
                    <TabsTrigger 
                      value="callback" 
                      className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Te llamamos</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="calendar" 
                      className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>Prefiero elegir</span>
                    </TabsTrigger>
                  </TabsList>

                  <div className="min-h-[400px] flex flex-col">
                    <TabsContent value="callback" className="mt-0 flex-1 data-[state=inactive]:hidden animate-fade-in">
                      <MultiStepForm formSource="hero" />
                    </TabsContent>

                    <TabsContent value="calendar" className="mt-0 flex-1 data-[state=inactive]:hidden animate-fade-in">
                      <div className="text-center space-y-5 flex flex-col items-center justify-center min-h-[380px]">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <CalendarDays className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            Elige tu horario ideal
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Visualiza nuestra disponibilidad y selecciona el día y hora que mejor se ajuste a ti
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-left w-full">
                          {[
                            { icon: Clock, text: "Confirmación inmediata" },
                            { icon: Calendar, text: "Horarios flexibles" },
                            { icon: CheckCircle, text: "Sin filas ni esperas" },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-lg py-2 px-2.5">
                              <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          size="lg" 
                          className="w-full btn-cta"
                          onClick={() => setDrawerOpen(true)}
                        >
                          Abrir Calendario
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Drawer with calendar iframe */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerContent className="h-[95vh]">
            <DrawerHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-[10px] -mt-2 mx-0">
              <DrawerTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5" />
                Selecciona fecha y hora
              </DrawerTitle>
              <p className="text-sm text-primary-foreground/80">
                Elige el momento más conveniente para tu valoración médica
              </p>
            </DrawerHeader>
            <div className="p-4 md:p-6 overflow-y-auto flex-1">
              {drawerOpen && (
                <div className="booking-calendar-wrapper">
                  <style>{`
                    .booking-calendar-wrapper iframe {
                      width: 100%;
                      min-height: 700px;
                      height: calc(95vh - 120px);
                      border: none;
                      border-radius: 12px;
                      background: white;
                    }
                    @media (max-width: 768px) {
                      .booking-calendar-wrapper iframe {
                        min-height: 600px;
                        height: calc(90vh - 100px);
                        border-radius: 8px;
                      }
                    }
                  `}</style>
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/eXMBIpszBnRoCNW5sp4N" 
                    id="hero-calendar-iframe"
                    title="Calendario de citas Findolor"
                  />
                </div>
              )}
            </div>
          </DrawerContent>
        </Drawer>

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
