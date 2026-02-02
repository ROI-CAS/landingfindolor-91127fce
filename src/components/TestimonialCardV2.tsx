import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardV2Props {
  name: string;
  condition: string;
  quote: string;
  image: string;
  rating: number;
  index: number;
}

export function TestimonialCardV2({
  name,
  condition,
  quote,
  image,
  rating,
  index,
}: TestimonialCardV2Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
        <Quote className="w-5 h-5 text-primary-foreground" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 pt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground leading-relaxed mb-6 text-base">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-primary">{condition}</p>
        </div>
      </div>
    </motion.div>
  );
}
