import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import AboutPreview from "@/components/landing/AboutPreview";
import PillarsSection from "@/components/landing/PillarsSection";
import MethodSection from "@/components/landing/MethodSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import PodcastPreview from "@/components/landing/PodcastPreview";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <PillarsSection />
      <MethodSection />
      <DifferentialSection />
      <PhilosophySection />
      <PodcastPreview />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
