import { motion } from "framer-motion";
import { TestimonialCardV2 } from "./TestimonialCardV2";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "María García",
    condition: "Dolor crónico de espalda",
    quote: "Después de 5 años sufriendo, finalmente puedo dormir sin dolor. El equipo de Findolor cambió mi vida completamente.",
    image: testimonial1,
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    condition: "Fibromialgia",
    quote: "El trato humano y profesional es excepcional. Me explicaron cada paso del tratamiento y los resultados fueron inmediatos.",
    image: testimonial2,
    rating: 5,
  },
  {
    name: "Ana Martínez",
    condition: "Migraña crónica",
    quote: "Pasé de tener migrañas diarias a vivir semanas enteras sin dolor. No puedo agradecer lo suficiente a este equipo.",
    image: testimonial3,
    rating: 5,
  },
];

const stats = [
  { value: "98%", label: "Pacientes satisfechos" },
  { value: "2hrs", label: "Tiempo de respuesta" },
  { value: "20+", label: "Años de experiencia" },
  { value: "10k+", label: "Vidas mejoradas" },
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
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de personas han recuperado su calidad de vida gracias a nuestro tratamiento especializado
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
