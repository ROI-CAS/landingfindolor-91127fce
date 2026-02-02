import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const especialidades = [
  "Medicina del dolor",
  "Cuidados paliativos",
  "Anestesia",
  "Fisioterapia",
];

const entidades = [
  "Particular",
  "Allianz",
  "Seguros Bolivar",
  "Seguros Alfa",
  "Sura",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPolicies) return;
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="especialidad" className="text-sm font-medium">
              Seleccione una Especialidad *
            </Label>
            <Select required>
              <SelectTrigger className="input-premium">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                {especialidades.map((especialidad) => (
                  <SelectItem key={especialidad} value={especialidad}>
                    {especialidad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entidad" className="text-sm font-medium">
              Seleccione una Entidad *
            </Label>
            <Select required>
              <SelectTrigger className="input-premium">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                {entidades.map((entidad) => (
                  <SelectItem key={entidad} value={entidad}>
                    {entidad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="input-premium"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-sm font-medium">
            Mensaje *
          </Label>
          <Textarea
            id="mensaje"
            placeholder="Cuéntanos brevemente sobre tu situación..."
            rows={3}
            required
            className="input-premium resize-none"
          />
        </div>

        {/* Policy checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="policies"
            checked={acceptedPolicies}
            onCheckedChange={(checked) => setAcceptedPolicies(checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="policies" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            Acepto las{" "}
            <a
              href="https://www.findolor.com/manual-de-politicas-de-tratamiento/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Políticas de tratamiento de datos
            </a>
            .
          </Label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitted || !acceptedPolicies}
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
              ¡Agenda tu cita hoy!
            </span>
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Responderemos en menos de 24 horas.
      </p>
    </motion.div>
  );
}
