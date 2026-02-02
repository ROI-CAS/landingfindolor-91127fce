import { motion } from "framer-motion";

// Insurance company logos represented as text (would be replaced with actual logos)
const insurers = [
  { name: "Seguros Alfa", logo: "SEGUROS ALFA" },
  { name: "Sura", logo: "SURA" },
  { name: "Seguros Bolívar", logo: "BOLIVAR" },
  { name: "Allianz", logo: "ALLIANZ" },
  { name: "Colsanitas", logo: "COLSANITAS" },
  { name: "Compensar", logo: "COMPENSAR" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Contamos con convenios con diferentes entidades de salud
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {insurers.map((insurer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="trust-logo cursor-pointer"
            >
              <div className="px-6 py-3 border border-border rounded-lg bg-muted/30 hover:bg-primary-light hover:border-primary/30 transition-all duration-300">
                <span className="font-semibold text-lg tracking-wide text-muted-foreground hover:text-primary transition-colors">
                  {insurer.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
