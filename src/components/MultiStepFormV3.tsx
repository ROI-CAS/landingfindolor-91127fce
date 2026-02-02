import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Phone,
  Calendar,
  Stethoscope,
} from "lucide-react";

const steps = [
  { id: 1, title: "Especialidad", icon: Stethoscope },
  { id: 2, title: "Datos", icon: User },
  { id: 3, title: "Contacto", icon: Phone },
  { id: 4, title: "Confirmar", icon: Calendar },
];

const specialties = [
  "Dolor de espalda y columna",
  "Dolor cervical",
  "Dolor articular",
  "Fibromialgia",
  "Dolor neuropático",
  "Migraña y cefaleas",
  "Otro tipo de dolor",
];

const insurers = [
  "Particular",
  "Sura",
  "Allianz",
  "Seguros Bolívar",
  "Seguros Alfa",
  "Otra entidad",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

export function MultiStepFormV3() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    specialty: "",
    insurer: "",
    name: "",
    phone: "",
    email: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Aquí se integraría con el backend
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.specialty !== "";
      case 2:
        return formData.insurer !== "";
      case 3:
        return formData.name !== "" && formData.phone !== "";
      default:
        return true;
    }
  };

  return (
    <div className="space-y-5 md:space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-between px-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              initial={false}
              animate={{
                scale: currentStep === step.id ? 1.1 : 1,
                backgroundColor:
                  currentStep >= step.id
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted))",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
            >
              {currentStep > step.id ? (
                <Check className="w-4 h-4 text-primary-foreground" />
              ) : (
                <step.icon
                  className={`w-4 h-4 ${
                    currentStep >= step.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                />
              )}
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={false}
                animate={{
                  backgroundColor:
                    currentStep > step.id
                      ? "hsl(var(--primary))"
                      : "hsl(var(--border))",
                }}
                transition={{ duration: 0.4 }}
                className="w-6 sm:w-8 md:w-12 h-0.5 mx-1"
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[220px] sm:min-h-[200px] relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="space-y-4"
          >
            {currentStep === 1 && (
              <div className="space-y-4">
                <Label className="text-sm font-semibold text-foreground">
                  ¿Qué tipo de dolor te afecta?
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {specialties.map((specialty) => (
                    <motion.button
                      key={specialty}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => updateField("specialty", specialty)}
                      className={`w-full p-3 text-left rounded-xl border-2 transition-all duration-200 text-sm ${
                        formData.specialty === specialty
                          ? "border-primary bg-primary/5 text-foreground font-medium"
                          : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {specialty}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <Label className="text-sm font-semibold text-foreground">
                  ¿A través de qué entidad deseas agendar?
                </Label>
                <Select
                  value={formData.insurer}
                  onValueChange={(value) => updateField("insurer", value)}
                >
                  <SelectTrigger className="h-12 rounded-xl border-2 focus:border-primary transition-colors">
                    <SelectValue placeholder="Selecciona tu entidad" />
                  </SelectTrigger>
                  <SelectContent>
                    {insurers.map((insurer) => (
                      <SelectItem key={insurer} value={insurer}>
                        {insurer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Contamos con convenios con las principales aseguradoras del
                  país para brindarte la mejor atención.
                </p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-semibold text-foreground"
                  >
                    Teléfono / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="300 123 4567"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground flex items-center gap-1"
                  >
                    Correo electrónico
                    <span className="text-muted-foreground font-normal">
                      (opcional)
                    </span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                  />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">
                    Resumen de tu solicitud
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Especialidad:
                      </span>
                      <span className="font-medium text-foreground text-right max-w-[60%]">
                        {formData.specialty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entidad:</span>
                      <span className="font-medium text-foreground">
                        {formData.insurer}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nombre:</span>
                      <span className="font-medium text-foreground">
                        {formData.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Teléfono:</span>
                      <span className="font-medium text-foreground">
                        {formData.phone}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Te contactaremos en las próximas 2 horas para confirmar tu
                  cita. Tu información está protegida.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            className="flex-1 h-12 rounded-xl border-2 font-medium transition-all duration-200 hover:border-primary/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
        )}
        {currentStep < 4 ? (
          <Button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            className="flex-1 h-12 rounded-xl font-semibold bg-primary hover:bg-primary/90 transition-all duration-200 disabled:opacity-50"
          >
            Siguiente
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            className="flex-1 h-12 rounded-xl font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-200"
          >
            <Check className="w-4 h-4 mr-2" />
            Confirmar Solicitud
          </Button>
        )}
      </div>
    </div>
  );
}
