import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, CalendarDays, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MultiStepForm } from "./MultiStepForm";
import { QuickBenefits } from "./QuickBenefits";

export function BookingCalendar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Cargar el script de GHL solo cuando el drawer está abierto
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

  return (
    <section id="agendar" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Agenda en línea
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda Tu Cita Ahora
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elige cómo prefieres agendar tu valoración médica
          </p>
        </motion.div>

        {/* Quick Benefits Section */}
        <QuickBenefits />

        {/* Tabs for booking options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Tabs defaultValue="callback" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8 h-auto p-1">
              <TabsTrigger 
                value="callback" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Te llamamos</span>
                <span className="sm:hidden">Llamada</span>
              </TabsTrigger>
              <TabsTrigger 
                value="calendar" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <CalendarDays className="w-4 h-4" />
                <span className="hidden sm:inline">Prefiero elegir</span>
                <span className="sm:hidden">Elegir hora</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Callback form */}
            <TabsContent value="callback" className="mt-0">
              <Card className="border-border/60 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <MultiStepForm formSource="booking-section" />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Self-scheduling */}
            <TabsContent value="calendar" className="mt-0">
              <Card className="border-border/60 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <CalendarDays className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Elige tu horario ideal
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Visualiza nuestra disponibilidad y selecciona el día y hora que mejor se ajuste a ti
                      </p>
                    </div>

                    {/* Benefits list */}
                    <div className="grid sm:grid-cols-3 gap-3 text-left">
                      {[
                        { icon: Clock, text: "Confirmación inmediata" },
                        { icon: Calendar, text: "Horarios flexibles" },
                        { icon: CheckCircle, text: "Sin filas ni esperas" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-xl py-3 px-4">
                          <item.icon className="w-4 h-4 text-primary shrink-0" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto btn-cta"
                      onClick={() => setDrawerOpen(true)}
                    >
                      Abrir Calendario
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Drawer with calendar iframe */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerContent className="max-h-[90vh]">
            <DrawerHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-[10px] -mt-2 mx-0">
              <DrawerTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5" />
                Selecciona fecha y hora
              </DrawerTitle>
              <p className="text-sm text-primary-foreground/80">
                Elige el momento más conveniente para tu valoración
              </p>
            </DrawerHeader>
            
            <div className="p-4 md:p-6 overflow-y-auto">
              {drawerOpen && (
                <div className="booking-calendar-wrapper">
                  <style>{`
                    .booking-calendar-wrapper iframe {
                      width: 100%;
                      min-height: 550px;
                      border: none;
                      border-radius: 12px;
                      background: transparent;
                    }
                  `}</style>
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/eXMBIpszBnRoCNW5sp4N" 
                    scrolling="no" 
                    id="eXMBIpszBnRoCNW5sp4N_1770078616894"
                    title="Calendario de citas Findolor"
                  />
                </div>
              )}
            </div>
          </DrawerContent>
        </Drawer>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
        </motion.p>
      </div>
    </section>
  );
}
