import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Puedo agendar mi primera cita sin remisión médica?",
    answer:
      "Sí, puedes agendar tu cita directamente con nosotros sin necesidad de una remisión previa. Nuestro equipo médico realizará una valoración completa para determinar el mejor plan de tratamiento para tu caso.",
  },
  {
    question: "¿Qué tipos de dolor y pacientes atendemos?",
    answer:
      "Atendemos pacientes con dolor crónico y agudo de diversas causas, incluyendo dolor lumbar, dolor de hombro, síndrome del túnel carpiano, fibromialgia, dolor neuropático, dolor oncológico y muchas otras condiciones. Nuestro enfoque es integral y personalizado.",
  },
  {
    question: "¿Qué especialistas estarán en mi proceso?",
    answer:
      "Contamos con un equipo interdisciplinario que incluye médicos especialistas en dolor, fisioterapeutas, y profesionales de apoyo emocional. El equipo que te acompañe dependerá de las necesidades específicas de tu caso.",
  },
  {
    question: "¿Cuál es el costo y cómo pago?",
    answer:
      "Los costos varían según el tipo de consulta y tratamiento requerido. Trabajamos con diferentes modalidades de pago y contamos con convenios con varias aseguradoras y EPS. Te recomendamos contactarnos para recibir información detallada sobre costos.",
  },
  {
    question: "¿Atienden modalidad particular o por aseguradora?",
    answer:
      "Sí, atendemos tanto pacientes particulares como aquellos que vienen a través de convenios con aseguradoras y EPS. Contamos con convenios con Sura, Seguros Bolívar, Allianz, entre otras entidades.",
  },
  {
    question: "¿Cómo debo prepararme y qué documentos llevar?",
    answer:
      "Para tu primera cita, te recomendamos traer todos los exámenes, imágenes diagnósticas y estudios previos relacionados con tu condición. También es importante traer tu documento de identidad y, si aplica, tu carné de aseguradora o EPS.",
  },
  {
    question: "¿Ofrecen telemedicina, segunda opinión y apoyo psicológico?",
    answer:
      "Sí, ofrecemos diferentes modalidades de atención para tu comodidad. Contamos con opciones de telemedicina, consultas de segunda opinión, y apoyo integral que incluye el componente emocional del paciente.",
  },
  {
    question:
      "¿Los procedimientos son ambulatorios/hospitalarios y requieren cuidados especiales?",
    answer:
      "La mayoría de nuestros procedimientos son ambulatorios, lo que significa que puedes regresar a casa el mismo día. Tu médico te indicará si tu caso particular requiere algún cuidado especial antes o después del procedimiento.",
  },
  {
    question: "¿Cuándo veré resultados y cómo es el seguimiento?",
    answer:
      "Los resultados varían según cada paciente y condición. Nuestro equipo realizará un seguimiento continuo de tu evolución y ajustará el tratamiento según sea necesario para optimizar tus resultados.",
  },
  {
    question: "¿Cómo solicito historia clínica, resultados o certificados?",
    answer:
      "Puedes solicitar tu historia clínica, resultados de exámenes o certificados comunicándote con nuestra línea de atención. El proceso es sencillo y respetamos todas las normativas de protección de datos.",
  },
  {
    question: "¿Ofrecen accesibilidad, estacionamiento y ubicación clara?",
    answer:
      "Nuestra sede está ubicada en Bogotá con fácil acceso y contamos con facilidades de parqueo cercano. Las instalaciones están diseñadas para facilitar el acceso a todos nuestros pacientes.",
  },
  {
    question: "¿Qué sucede si necesito cancelar o si hay una urgencia médica?",
    answer:
      "Si necesitas cancelar o reprogramar tu cita, te pedimos informarnos con al menos 24 horas de anticipación. En caso de urgencia médica, te orientaremos sobre los pasos a seguir o te referiremos a un centro de atención de urgencias.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Resolvemos tus dudas
          </span>
          <h2 className="section-heading mb-4">Preguntas Frecuentes</h2>
          <p className="section-subheading mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y atención.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:bg-primary-light/30 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
