import { HeroV2 } from "@/components/HeroV2";
import { SocialProofV2 } from "@/components/SocialProofV2";
import { BenefitsV2 } from "@/components/BenefitsV2";
import { ConditionsGrid } from "@/components/ConditionsGrid";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTAV2 } from "@/components/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VersionSwitcher } from "@/components/VersionSwitcher";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <VersionSwitcher currentVersion="v2" />
      <HeroV2 />
      <SocialProofV2 />
      <BenefitsV2 />
      <ConditionsGrid />
      <FAQSection />
      <FinalCTAV2 />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IndexV2;
