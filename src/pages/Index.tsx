import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import AboutPreview from "@/components/landing/AboutPreview";
import PillarsSection from "@/components/landing/PillarsSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <PillarsSection />
      <DifferentialSection />
      <PhilosophySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
