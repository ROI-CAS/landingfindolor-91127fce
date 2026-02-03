import { motion } from "framer-motion";
import { TestimonialCardV2 } from "./TestimonialCardV2";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "María García",
    condition: "Dolor crónico de espalda",
    quote: "El equipo de Findolor me brindó un diagnóstico claro y un plan de tratamiento que se adaptó a mis necesidades. La atención fue excepcional.",
    image: testimonial1,
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    condition: "Fibromialgia",
    quote: "El trato humano y profesional es excepcional. Me explicaron cada paso del tratamiento y me sentí acompañado en todo momento.",
    image: testimonial2,
    rating: 5,
  },
  {
    name: "Ana Martínez",
    condition: "Migraña crónica",
    quote: "Encontré un equipo que realmente escucha y entiende mi condición. El enfoque multidisciplinario me dio nuevas opciones de tratamiento.",
    image: testimonial3,
    rating: 5,
  },
];

const stats = [
  { value: "4.9/5", label: "Calificación promedio" },
  { value: "2hrs", label: "Tiempo de respuesta" },
  { value: "20+", label: "Años de experiencia" },
  { value: "2,500+", label: "Pacientes atendidos" },
];

export function SocialProofV2() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencias de Nuestros Pacientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce las experiencias de quienes han confiado en nuestro equipo médico especializado
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCardV2 key={index} {...testimonial} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trabajamos con las principales aseguradoras de Colombia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["allianz", "seguros-bolivar", "seguros-alfa", "sura"].map((insurer) => (
              <img
                key={insurer}
                src={`/images/insurers/${insurer}.png`}
                alt={insurer}
                className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
