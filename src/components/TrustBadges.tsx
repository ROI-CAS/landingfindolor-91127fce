import { motion } from "framer-motion";
import { ShieldCheck, Lock, Award, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    text: "Habeas Data Certificado",
  },
  {
    icon: Lock,
    text: "Conexión Segura SSL",
  },
  {
    icon: Award,
    text: "Registro REPS Vigente",
  },
  {
    icon: BadgeCheck,
    text: "Médicos especializados",
  },
];

export function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 py-6"
    >
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-muted-foreground text-xs bg-muted/50 px-3 py-2 rounded-full"
        >
          <badge.icon className="w-4 h-4" />
          <span>{badge.text}</span>
        </div>
      ))}
    </motion.div>
  );
}
