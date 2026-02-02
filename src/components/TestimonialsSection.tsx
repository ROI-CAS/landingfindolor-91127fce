import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Paciente con dolor lumbar",
    image: testimonial1,
    rating: 5,
    text: "Después de años sufriendo de dolor lumbar, encontré en Findolor la atención profesional que necesitaba. El equipo médico me escuchó y diseñó un tratamiento personalizado que cambió mi vida. Hoy puedo disfrutar de mis nietos sin dolor.",
  },
  {
    name: "María Elena Gómez",
    role: "Paciente con fibromialgia",
    image: testimonial2,
    rating: 5,
    text: "La atención en Findolor es excepcional. Me sentí acompañada desde el primer momento. El enfoque integral que manejan me ayudó no solo con el dolor físico sino también con mi bienestar emocional.",
  },
  {
    name: "Roberto Martínez",
    role: "Paciente con síndrome del túnel carpiano",
    image: testimonial3,
    rating: 5,
    text: "Llegué a Findolor sin esperanzas después de visitar varios especialistas. Aquí encontré profesionales comprometidos que lograron aliviar mi dolor sin necesidad de cirugía. Estoy eternamente agradecido.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Historias de éxito
          </span>
          <h2 className="section-heading mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="section-subheading mx-auto">
            Nuestros pacientes destacan la atención profesional, el
            acompañamiento humano y la confianza que sienten al recibir
            valoración en Findolor.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover-lift ${
                activeIndex === index ? "border-primary shadow-glow" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-star text-star"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-light"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
