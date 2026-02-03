import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  User, 
  Phone, 
  Mail, 
  Stethoscope,
  Building2,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const especialidades = [
  { id: "dolor", label: "Medicina del dolor", icon: "💊" },
  { id: "paliativos", label: "Cuidados paliativos", icon: "🤲" },
  { id: "anestesia", label: "Anestesia", icon: "💉" },
  { id: "fisioterapia", label: "Fisioterapia", icon: "🏃" },
];

const entidades = [
  { id: "particular", label: "Particular", highlight: true },
  { id: "allianz", label: "Allianz" },
  { id: "bolivar", label: "Seguros Bolívar" },
  { id: "alfa", label: "Seguros Alfa" },
  { id: "sura", label: "Sura" },
];

const steps = [
  { id: 1, title: "Especialidad", icon: Stethoscope },
  { id: 2, title: "Entidad", icon: Building2 },
  { id: 3, title: "Tus datos", icon: User },
  { id: 4, title: "Confirmar", icon: CheckCircle },
];

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    especialidad: "",
    entidad: "",
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    acceptedPolicies: false,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (!formData.acceptedPolicies) return;
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.especialidad !== "";
      case 2: return formData.entidad !== "";
      case 3: return formData.nombre && formData.telefono && formData.email;
      case 4: return formData.acceptedPolicies;
      default: return false;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Te contactaremos en menos de 2 horas para confirmar tu cita.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-primary">
          <Phone className="w-4 h-4" />
          <span>También puedes llamarnos: 318 691 2799</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentStep >= step.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 md:w-16 h-1 mx-1 rounded transition-all duration-300 ${
                  currentStep > step.id ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  ¿Qué tipo de atención necesitas?
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Selecciona la especialidad que mejor se adapte a tu situación
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {especialidades.map((esp) => (
                  <button
                    key={esp.id}
                    type="button"
                    onClick={() => updateFormData("especialidad", esp.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                      formData.especialidad === esp.id
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-2xl block mb-2">{esp.icon}</span>
                    <span className="font-medium text-sm text-foreground">
                      {esp.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  ¿Cómo pagarás tu consulta?
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Trabajamos con las principales aseguradoras
                </p>
              </div>
              <div className="space-y-2">
                {entidades.map((ent) => (
                  <button
                    key={ent.id}
                    type="button"
                    onClick={() => updateFormData("entidad", ent.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                      formData.entidad === ent.id
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium text-foreground">
                      {ent.label}
                    </span>
                    {ent.highlight && (
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        Sin esperas
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Tus datos de contacto
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Para confirmar tu cita
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2">
                    <User className="w-4 h-4" /> Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => updateFormData("nombre", e.target.value)}
                    placeholder="¿Cómo te llamas?"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => updateFormData("telefono", e.target.value)}
                    placeholder="Para llamarte y confirmar"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="Para enviarte los detalles"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Mensaje (opcional)
                  </Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => updateFormData("mensaje", e.target.value)}
                    placeholder="¿Algo que debamos saber?"
                    rows={2}
                    className="text-base resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  ¡Ya casi está!
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Confirma tus datos para agendar
                </p>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Especialidad:</span>
                  <span className="font-medium text-foreground">
                    {especialidades.find(e => e.id === formData.especialidad)?.label}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Entidad:</span>
                  <span className="font-medium text-foreground">
                    {entidades.find(e => e.id === formData.entidad)?.label}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nombre:</span>
                  <span className="font-medium text-foreground">{formData.nombre}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Teléfono:</span>
                  <span className="font-medium text-foreground">{formData.telefono}</span>
                </div>
              </div>

              {/* Urgency message */}
              {(() => {
                const hour = new Date().getHours();
                let citas = 3;
                if (hour >= 8 && hour < 12) citas = 5 + Math.floor(Math.random() * 2);
                else if (hour >= 12 && hour < 15) citas = 3 + Math.floor(Math.random() * 2);
                else if (hour >= 15 && hour < 18) citas = 2 + Math.floor(Math.random() * 2);
                return (
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
                    <p className="text-sm font-medium text-foreground">
                      🕐 Solo quedan <strong className="text-primary">{citas} citas disponibles</strong> hoy
                    </p>
                  </div>
                );
              })()}

              {/* Policy checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="policies"
                  checked={formData.acceptedPolicies}
                  onCheckedChange={(checked) => updateFormData("acceptedPolicies", checked as boolean)}
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
                </Label>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-3 mt-8">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            className="flex-1 h-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Atrás
          </Button>
        )}
        {currentStep < 4 ? (
          <Button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            className="flex-1 h-12 btn-cta"
          >
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="flex-1 h-12 btn-cta"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Confirmar Cita
          </Button>
        )}
      </div>
    </div>
  );
}
