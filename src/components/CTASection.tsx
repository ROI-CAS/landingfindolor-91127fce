import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function CTASection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-blob w-96 h-96 -top-48 -left-48" />
      <div className="decorative-blob w-64 h-64 bottom-0 right-0 opacity-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-6">Reserva Tu Cita Ahora</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nuestro equipo está disponible para acompañarte en cada paso. Ya
              sea que necesites agendar una consulta, conocer más sobre nuestros
              servicios o comunicarte con nosotros, estamos aquí para ti.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-primary-light rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ubicación</h4>
                  <p className="text-muted-foreground">Bogotá, Colombia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-primary-light rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Horario</h4>
                  <p className="text-muted-foreground">Lunes a Viernes, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
