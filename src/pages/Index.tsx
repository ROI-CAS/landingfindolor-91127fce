import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ConditionsGrid } from "@/components/ConditionsGrid";
import { EmpathySection } from "@/components/EmpathySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StepsSection } from "@/components/StepsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VersionSwitcher } from "@/components/VersionSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VersionSwitcher currentVersion="v1" />
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <ConditionsGrid />
      <EmpathySection />
      <TestimonialsSection />
      <StepsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
