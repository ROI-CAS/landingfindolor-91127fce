import { motion } from "framer-motion";
import { Shield, Clock, Award, Heart, Zap, RefreshCcw } from "lucide-react";

const guarantees = [
  {
    icon: Clock,
    title: "Respuesta en 2 horas",
    description: "Te contactamos el mismo día para agendar tu cita",
  },
  {
    icon: Shield,
    title: "Confidencialidad Total",
    description: "Tu información médica está 100% protegida",
  },
  {
    icon: RefreshCcw,
    title: "Seguimiento Continuo",
    description: "Te acompañamos durante todo tu proceso de recuperación",
  },
  {
    icon: Heart,
    title: "Trato Humanizado",
    description: "Cada paciente es tratado como familia",
  },
  {
    icon: Award,
    title: "Médicos Certificados",
    description: "Especialistas con formación internacional",
  },
  {
    icon: Zap,
    title: "Tecnología Avanzada",
    description: "Equipos de última generación para diagnóstico y tratamiento",
  },
];

export function GuaranteeSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Promesa Contigo
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Nos comprometemos a brindarte la mejor experiencia en cada paso de tu tratamiento
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
