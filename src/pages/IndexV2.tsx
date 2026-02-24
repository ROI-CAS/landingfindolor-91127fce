import { Phone } from "lucide-react";
import { Phone } from "lucide-react";
import { HeroV2 } from "@/components/HeroV2";
import { SocialProofV2 } from "@/components/SocialProofV2";
import { DoctorsSection } from "@/components/DoctorsSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { BenefitsV2 } from "@/components/BenefitsV2";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTAV2 } from "@/components/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { MultiStepForm } from "@/components/MultiStepForm";
import { TrustBadges } from "@/components/TrustBadges";
import { StickyHeader } from "@/components/StickyHeader";
import { ClickToCallButton } from "@/components/ClickToCallButton";
import { VideoSection } from "@/components/VideoSection";
import { LiveCounter } from "@/components/LiveCounter";

const IndexV2 = () => {
  // No useEffect that strips hash — allow anchor navigation
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroV2 />
      <TrustBadges />
      <SocialProofV2 />
      <VideoSection />
      <DoctorsSection />
      <ProcessTimeline />
      <BenefitsV2 />
      <FAQSection />

      {/* Sección de agendamiento inferior */}
      <section id="agendar" className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-lg mx-auto">
          <div
            className="relative rounded-3xl p-5 md:p-7 shadow-2xl overflow-hidden"
            style={{
              background: "hsla(0, 0%, 100%, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(0, 0%, 100%, 0.6)",
              boxShadow: "0 25px 50px -12px hsla(0, 0%, 0%, 0.25), 0 0 0 1px hsla(0, 0%, 100%, 0.1) inset",
            }}
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, hsla(199, 76%, 52%, 0.08), transparent 50%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Te llamamos</h3>
              </div>
              <MultiStepForm formSource="booking-section" />
              <p className="text-center text-xs text-muted-foreground mt-2">
                🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTAV2 />
      <Footer />
      
      <ClickToCallButton />
      <LiveCounter />
    </div>
  );
};

export default IndexV2;
