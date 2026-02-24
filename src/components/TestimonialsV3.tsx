import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "María Elena García",
    role: "Profesional de 52 años",
    image: testimonial1,
    quote:
      "Después de años sufriendo dolor lumbar, finalmente encontré una solución. El equipo de Findolor me devolvió la movilidad y la tranquilidad que necesitaba.",
    condition: "Dolor lumbar crónico",
  },
  {
    name: "Carlos Andrés Mejía",
    role: "Empresario de 45 años",
    image: testimonial2,
    quote:
      "La atención fue excepcional desde el primer momento. El tratamiento personalizado marcó la diferencia. Hoy puedo trabajar sin limitaciones.",
    condition: "Cervicalgia",
  },
  {
    name: "Ana Lucía Rodríguez",
    role: "Profesora de 38 años",
    image: testimonial3,
    quote:
      "El seguimiento continuo y el trato humano del equipo médico superaron mis expectativas. Recomiendo Findolor a cualquier persona que busque una solución real.",
    condition: "Fibromialgia",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function TestimonialsV3() {
  return (
    <section id="testimonios" className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Historias de{" "}
            <span className="text-primary">transformación</span>
          </h2>
          <p className="section-subheading text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Conoce las experiencias de pacientes que recuperaron su calidad de
            vida
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-background rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground text-sm md:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <span className="inline-block mt-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                    {testimonial.condition}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-1 mt-4">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
