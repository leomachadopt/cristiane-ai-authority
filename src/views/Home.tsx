import Providers from "./Providers";
import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import PainSection from "@/components/landing/PainSection";
import AboutPreview from "@/components/landing/AboutPreview";
import MetodologiaSection from "@/components/landing/MetodologiaSection";
import SinaisSection from "@/components/landing/SinaisSection";
import ConsultaSection from "@/components/landing/ConsultaSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection"; // oculto até haver depoimentos reais
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import FAQSection from "@/components/landing/FAQSection";
import PodcastPreview from "@/components/landing/PodcastPreview";
import CTASection from "@/components/landing/CTASection";

const Home = () => (
  <Providers>
    <Layout pathname="/">
      <HeroSection />
      <SocialProofBar />
      <PainSection />
      <AboutPreview />
      <MetodologiaSection />
      <SinaisSection />
      <ConsultaSection />
      {/* <TestimonialsSection /> — oculto até haver 2–3 depoimentos reais autorizados */}
      <LeadMagnetSection />
      <FAQSection />
      <PodcastPreview />
      <CTASection />
    </Layout>
  </Providers>
);

export default Home;
