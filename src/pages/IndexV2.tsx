import { useEffect } from "react";
import { HeroV2 } from "@/components/HeroV2";
import { SocialProofV2 } from "@/components/SocialProofV2";
import { DoctorsSection } from "@/components/DoctorsSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { BenefitsV2 } from "@/components/BenefitsV2";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTAV2 } from "@/components/FinalCTAV2";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TrustBadges } from "@/components/TrustBadges";
import { BookingCalendar } from "@/components/BookingCalendar";
import { StickyHeader } from "@/components/StickyHeader";
import { ClickToCallButton } from "@/components/ClickToCallButton";
import { VideoSection } from "@/components/VideoSection";
import { LiveCounter } from "@/components/LiveCounter";

const IndexV2 = () => {
  // Prevent auto-scroll to #agendar on page load/refresh
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      // Remove hash without triggering scroll
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);
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
      <BookingCalendar />
      <FAQSection />
      <FinalCTAV2 />
      <Footer />
      <WhatsAppButton />
      <ClickToCallButton />
      <LiveCounter />
      <ExitIntentPopup />
    </div>
  );
};

export default IndexV2;
