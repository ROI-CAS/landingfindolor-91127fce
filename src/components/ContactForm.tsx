import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const conditions = [
  "Dolor lumbar (lumbalgia)",
  "Dolor de hombro",
  "Epicondilitis",
  "Síndrome del Túnel Carpiano",
  "Neuralgia por Herpes Zóster",
  "Discopatía lumbar",
  "Síndrome del Piriforme",
  "Dolor crónico oncológico",
  "Fibromialgia",
  "Dolor neuropático",
  "Otra condición",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would handle the form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card rounded-2xl p-6 md:p-8 shadow-elevated"
    >
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Agenda tu Cita
        </h3>
        <p className="text-muted-foreground text-sm">
          Completa el formulario y te contactaremos pronto.
        </p>
      </div>

      {/* Phone numbers */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <a
          href="tel:+573186912799"
          className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-lg text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          318 6912799
        </a>
        <a
          href="tel:+576016736707"
          className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-lg text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          601 6736707
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-sm font-medium">
              Nombre Completo *
            </Label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              required
              className="input-premium"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-sm font-medium">
              Teléfono *
            </Label>
            <Input
              id="telefono"
              type="tel"
              placeholder="Tu teléfono"
              required
              className="input-premium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Correo Electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="input-premium"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="condicion" className="text-sm font-medium">
            ¿Qué condición deseas tratar?
          </Label>
          <Select>
            <SelectTrigger className="input-premium">
              <SelectValue placeholder="Selecciona una condición" />
            </SelectTrigger>
            <SelectContent>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>
                  {condition}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-sm font-medium">
            Mensaje (opcional)
          </Label>
          <Textarea
            id="mensaje"
            placeholder="Cuéntanos brevemente sobre tu situación..."
            rows={3}
            className="input-premium resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitted}
          className="w-full btn-cta h-12 text-base rounded-xl"
        >
          {isSubmitted ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              ¡Mensaje Enviado!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Enviar y Agendar Cita
            </span>
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Al enviar aceptas nuestra política de privacidad. Responderemos en menos de 24 horas.
      </p>
    </motion.div>
  );
}
