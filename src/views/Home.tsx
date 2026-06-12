import Providers from "./Providers";
import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import PainSection from "@/components/landing/PainSection";
import AboutPreview from "@/components/landing/AboutPreview";
import MetodologiaSection from "@/components/landing/MetodologiaSection";
import SinaisSection from "@/components/landing/SinaisSection";
// ConsultaSection movido para a página /consulta/ (oferta) — na home fica só o teaser (CTASection)
// import TestimonialsSection from "@/components/landing/TestimonialsSection"; // oculto até haver depoimentos reais
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import FAQSection from "@/components/landing/FAQSection";
import PodcastPreview from "@/components/landing/PodcastPreview";
import CTASection from "@/components/landing/CTASection";

const Home = () => (
  <Providers>
    <Layout pathname="/">
      {/* Sequência: Autoridade → Oportunidade → O que faço */}
      <HeroSection />          {/* 1. Autoridade (Dra. + missão) */}
      <SocialProofBar />       {/*    credibilidade rápida */}
      <PainSection />          {/* 2. "Reconheces isto?" (dores dos pais) */}
      <SinaisSection />        {/* 3. Estes sinais estão ligados */}
      <MetodologiaSection />   {/*    + os 4 pilares */}
      <AboutPreview />         {/* 4. Quem sou (mini-bio) */}
      {/* 5. A ciência por trás do método — bloco a adicionar (precisa de referências) */}
      <PodcastPreview />       {/* 6. Prova social + Podcast */}
      <LeadMagnetSection />
      <FAQSection />
      <CTASection />           {/*    CTA final */}
      {/* <TestimonialsSection /> — oculto até haver 2–3 depoimentos reais autorizados */}
    </Layout>
  </Providers>
);

export default Home;
