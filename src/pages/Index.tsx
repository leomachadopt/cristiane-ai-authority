import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import PainSection from "@/components/landing/PainSection";
import AboutPreview from "@/components/landing/AboutPreview";
import MetodologiaSection from "@/components/landing/MetodologiaSection";
import SinaisSection from "@/components/landing/SinaisSection";
import ConsultaSection from "@/components/landing/ConsultaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import FAQSection from "@/components/landing/FAQSection";
import PodcastPreview from "@/components/landing/PodcastPreview";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SocialProofBar />
      <PainSection />
      <AboutPreview />
      <MetodologiaSection />
      <SinaisSection />
      <ConsultaSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FAQSection />
      <PodcastPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
