import ContactSection from "@/components/layout/ContactSection";
import CallToAction from "@/components/layout/CtaSection";
import FeaturesSection from "@/components/layout/FeaturesSection";
import FooterSection from "@/components/layout/FooterSection";
import HeroSection from "@/components/layout/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <ContactSection />
      <FooterSection />
    </>
  );
}
