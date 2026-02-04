import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const benefits = [
  {
    text: "Atención sin cirugía",
    highlight: "sin cirugía",
  },
  {
    text: "Más de 20 años de experiencia",
    highlight: "20 años",
  },
  {
    text: "Programa Paciente Experto",
    highlight: "Paciente Experto",
  },
];

export function QuickBenefits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="relative">
        {/* Glassmorphism container */}
        <div
          className="relative overflow-hidden rounded-3xl p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, hsla(199, 76%, 52%, 0.08) 0%, hsla(145, 58%, 58%, 0.05) 100%)",
            border: "1px solid hsla(199, 76%, 52%, 0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Decorative element */}
          <div className="absolute top-4 right-4 opacity-10">
            <Sparkles className="w-16 h-16 text-primary" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                {/* Checkmark icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-secondary" strokeWidth={3} />
                </div>

                {/* Text */}
                <span className="text-sm md:text-base font-medium text-foreground">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
