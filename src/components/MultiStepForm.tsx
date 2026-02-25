import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, User, Phone, Mail, Stethoscope, Building2, MessageSquare, Sparkles, Activity, HeartHandshake, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppointments } from "@/context/AppointmentContext";
const especialidades = [{
  id: "dolor",
  label: "Medicina del dolor",
  icon: Activity
}, {
  id: "paliativos",
  label: "Cuidados paliativos",
  icon: HeartHandshake
}, {
  id: "anestesia",
  label: "Anestesia",
  icon: Syringe
}];
const entidades = [{
  id: "particular",
  label: "Particular"
}, {
  id: "allianz",
  label: "Allianz"
}, {
  id: "bolivar",
  label: "Seguros Bolívar"
}, {
  id: "alfa",
  label: "Seguros Alfa"
}, {
  id: "sura",
  label: "Sura"
}, {
  id: "otro",
  label: "Otro"
}];
const steps = [{
  id: 1,
  title: "Especialidad",
  icon: Stethoscope
}, {
  id: 2,
  title: "Entidad",
  icon: Building2
}, {
  id: 3,
  title: "Tus datos",
  icon: User
}, {
  id: 4,
  title: "Confirmar",
  icon: CheckCircle
}];
interface MultiStepFormProps {
  formSource?: "hero" | "booking-section";
}
export function MultiStepForm({
  formSource = "hero"
}: MultiStepFormProps) {
  const navigate = useNavigate();
  const {
    citasDisponibles,
    registrarConsulta
  } = useAppointments();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    especialidad: "",
    entidad: "",
    entidadOtra: "",
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    acceptedPolicies: false
  });
  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };
  const handleSubmit = () => {
    if (!formData.acceptedPolicies) return;

    const payload = {
      formSource,
      especialidad: especialidades.find(e => e.id === formData.especialidad)?.label || formData.especialidad,
      entidad: formData.entidad === "otro" ? formData.entidadOtra : entidades.find(e => e.id === formData.entidad)?.label || formData.entidad,
      nombre: formData.nombre,
      telefono: formData.telefono,
      email: formData.email,
      mensaje: formData.mensaje,
    };

    // Fire-and-forget: no bloquea la navegación
    fetch("https://services.leadconnectorhq.com/hooks/6jIqC8dVIpPZSaRRRora/webhook-trigger/37367ef5-1ca4-4cad-acb8-23fbfb8f033a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(err => console.error("[Webhook] Error:", err));

    console.log("[Lead] Form submitted", payload);
    registrarConsulta();
    navigate("/gracias");
  };
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.especialidad !== "";
      case 2:
        {
          if (formData.entidad === "otro") return formData.entidadOtra.trim() !== "";
          return formData.entidad !== "";
        }
      case 3:
        return formData.nombre && formData.telefono && formData.email;
      case 4:
        return formData.acceptedPolicies;
      default:
        return false;
    }
  };
  return <div className="w-full max-w-lg mx-auto my-0 mb-[35px]">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-5">
        {steps.map((step, index) => <div key={step.id} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
            </div>
            {index < steps.length - 1 && <div className={`w-8 md:w-16 h-1 mx-1 rounded transition-all duration-300 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />}
          </div>)}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -20
      }} transition={{
        duration: 0.3
      }}>
          {currentStep === 1 && <div className="space-y-3 my-0">
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold text-foreground px-0 py-[16px] pt-[24px] pb-0">
                  ¿Qué tipo de atención necesitas?
                </h3>
                <p className="text-muted-foreground text-sm mt-1 mb-[23px]">
                  Selecciona la especialidad que mejor se adapte a tu situación
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-[42px]">
                {especialidades.map(esp => {
              const isSelected = formData.especialidad === esp.id;
              return <button key={esp.id} type="button" onClick={() => updateFormData("especialidad", esp.id)} className={`p-3 rounded-xl border-2 text-center transition-all duration-200 hover:scale-[1.02] ${isSelected ? "border-primary bg-primary/10 shadow-md" : "border-border hover:border-primary/50"}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1.5 transition-colors ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                        <esp.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-sm text-foreground">
                        {esp.label}
                      </span>
                    </button>;
            })}
              </div>
            </div>}

          {currentStep === 2 && <div className="space-y-3">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-foreground">
                  Selecciona tu cobertura
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Elige cómo cubrirás tu consulta
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {entidades.map(ent => <button key={ent.id} type="button" onClick={() => updateFormData("entidad", ent.id)} className={`p-2.5 rounded-xl border-2 text-center transition-all duration-200 ${formData.entidad === ent.id ? "border-primary bg-primary/10 shadow-md" : "border-border hover:border-primary/50"}`}>
                    <span className="font-medium text-sm text-foreground">
                      {ent.label}
                    </span>
                  </button>)}
              </div>
              {/* Campo condicional para "Otro" */}
              {formData.entidad === "otro" && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: "auto"
          }} exit={{
            opacity: 0,
            height: 0
          }} className="mt-3">
                  <Input value={formData.entidadOtra} onChange={e => updateFormData("entidadOtra", e.target.value)} placeholder="Especifica tu cobertura" className="h-12 text-base" />
                </motion.div>}
            </div>}

          {currentStep === 3 && <div className="space-y-3">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-foreground">
                  Tus datos de contacto
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Para confirmar tu cita
                </p>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="flex items-center gap-2">
                    <User className="w-4 h-4" /> Nombre completo
                  </Label>
                  <Input id="nombre" value={formData.nombre} onChange={e => updateFormData("nombre", e.target.value)} placeholder="¿Cómo te llamas?" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Teléfono
                  </Label>
                  <Input id="telefono" type="tel" value={formData.telefono} onChange={e => updateFormData("telefono", e.target.value)} placeholder="Para llamarte y confirmar" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => updateFormData("email", e.target.value)} placeholder="Para enviarte los detalles" className="h-12 text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Mensaje (opcional)
                  </Label>
                  <Textarea id="mensaje" value={formData.mensaje} onChange={e => updateFormData("mensaje", e.target.value)} placeholder="¿Algo que debamos saber?" rows={2} className="text-base resize-none" />
                </div>
              </div>
            </div>}

          {currentStep === 4 && <div className="space-y-4">
              <div className="text-center mb-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  ¡Ya casi está!
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Confirma tus datos para que te contactemos tan pronto como sea posible
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
                  <span className="text-muted-foreground">Cobertura:</span>
                  <span className="font-medium text-foreground">
                    {formData.entidad === "otro" ? formData.entidadOtra : entidades.find(e => e.id === formData.entidad)?.label}
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

              {/* Policy checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox id="policies" checked={formData.acceptedPolicies} onCheckedChange={checked => updateFormData("acceptedPolicies", checked as boolean)} className="mt-0.5" />
                <Label htmlFor="policies" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Acepto las{" "}
                  <a href="https://www.findolor.com/manual-de-politicas-de-tratamiento/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    Políticas de tratamiento de datos
                  </a>
                </Label>
              </div>
            </div>}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-3 mt-4">
        {currentStep > 1 && <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Atrás
          </Button>}
        {currentStep < 4 ? <Button type="button" onClick={nextStep} disabled={!canProceed()} className="flex-1 h-12 btn-cta">
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button> : <Button type="button" onClick={handleSubmit} disabled={!canProceed()} className="flex-1 h-12 btn-cta">
            <CheckCircle className="w-4 h-4 mr-2" />
            Confirmar Cita
          </Button>}
      </div>
    </div>;
}