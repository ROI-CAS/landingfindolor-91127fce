import { motion } from "framer-motion";

const insurers = [
  { name: "Allianz", logo: "/images/insurers/allianz.png" },
  { name: "Seguros Alfa", logo: "/images/insurers/seguros-alfa.png" },
  { name: "Seguros Bolívar", logo: "/images/insurers/seguros-bolivar.png" },
  { name: "Sura", logo: "/images/insurers/sura.png" },
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Contamos con convenios con diferentes entidades de salud
          </h3>
          <p className="text-muted-foreground">
            Facilitamos el acceso a nuestros servicios
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14"
        >
          {insurers.map((insurer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="px-8 py-6 md:px-10 md:py-8 border-2 border-border rounded-2xl bg-white hover:bg-primary-light hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <img
                  src={insurer.logo}
                  alt={insurer.name}
                  className="h-14 md:h-20 lg:h-24 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
