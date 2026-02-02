import { HeroV3 } from "@/components/HeroV3";
import { SocialProofV3 } from "@/components/SocialProofV3";
import { BenefitsV3 } from "@/components/BenefitsV3";
import { ConditionsGrid } from "@/components/ConditionsGrid";
import { TestimonialsV3 } from "@/components/TestimonialsV3";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTAV3 } from "@/components/FinalCTAV3";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VersionSwitcherV3 } from "@/components/VersionSwitcherV3";

const IndexV3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <VersionSwitcherV3 currentVersion="v3" />
      <HeroV3 />
      <SocialProofV3 />
      <BenefitsV3 />
      <ConditionsGrid />
      <TestimonialsV3 />
      <FAQSection />
      <FinalCTAV3 />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IndexV3;
