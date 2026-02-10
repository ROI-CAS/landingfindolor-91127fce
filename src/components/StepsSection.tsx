import { motion } from "framer-motion";
import { FileText, Phone, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Llena el formulario",
    description: "Completa el formulario en esta página con tus datos básicos.",
  },
  {
    icon: Phone,
    step: "2",
    title: "Te contactamos",
    description: "Un asesor te contactará para confirmar la cita y resolver dudas.",
  },
  {
    icon: CalendarCheck,
    step: "3",
    title: "Asiste a tu cita",
    description: "Visítanos y comienza tu camino hacia el alivio del dolor.",
  },
];

export function StepsSection() {
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
          <h2 className="section-heading mb-4">
            Reserva Tu Cita en 3 Sencillos Pasos
          </h2>
          <p className="section-subheading mx-auto">
            Agendar tu valoración médica es fácil y rápido.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              {/* Icon with step number */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full bg-card border-2 border-primary shadow-soft flex items-center justify-center mx-auto">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-soft">
                  {step.step}
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
