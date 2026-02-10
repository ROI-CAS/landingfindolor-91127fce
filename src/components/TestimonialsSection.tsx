import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Andrea Blanco",
    role: "Local Guide · 120 opiniones",
    initial: "A",
    rating: 5,
    text: "La verdad que no tengo palabras para agradecer al Dr. Luis Garzon quien atendió a mi mamá cuando el dolor era tan intenso (por la artritis la artrosis y el reumatismo) que ella comenzó a hablarnos de la eutanasia por que no aguantaba estar así. Literal mi mamá llego al consultorio encogida casi sin poder caminar y luego de dos horas donde el dr le dio total atención y buenos tratos ella salio muy relajada y hasta el momento no se ha presentado otra crisis similar. De todo corazón lo recomiendo se que hay que esforzarse pero es mejor ir donde el especialista",
  },
  {
    name: "Leidy Escobar",
    role: "Local Guide · 40 opiniones",
    initial: "L",
    rating: 4,
    text: "En general, la atención al cliente es muy buena. Tuve varias sesiones de fisioterapia y los profesionales fueron muy amables y atentos, además de contar con instalaciones limpias y bien cuidadas. Sin embargo, me gustaría que prestaran un poco más de atención a los ejercicios durante las sesiones, ya que en mi caso sentí un nivel de dolor considerable, y la terapia me pareció algo pasiva en relación con el malestar que experimentaba en ese momento. Agradezco el esfuerzo de todo el equipo",
  },
  {
    name: "Claudia Angelica Camargo Molina",
    role: "3 opiniones",
    initial: "C",
    rating: 5,
    text: "Es un lugar fantástico se siente el servicio humano y acogedor!",
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
            valoración médica en FinDolor.
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
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-muted-foreground/30"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
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
