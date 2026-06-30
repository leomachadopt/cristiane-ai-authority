import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Providers from "./Providers";
import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import PainSection from "@/components/landing/PainSection";
import AboutPreview from "@/components/landing/AboutPreview";
import SinaisSection from "@/components/landing/SinaisSection";
import PodcastPreview from "@/components/landing/PodcastPreview";
import CTASection from "@/components/landing/CTASection";
// Metodologia completa, checklist e FAQ vivem nas suas páginas (Metodologia / Famílias).
// ConsultaSection vive em /consulta/. A home é só teasers que ligam às páginas profundas.

/** Bloco 3 — A ligação (teaser → Metodologia) */
const LigacaoTeaser = () => (
  <section className="py-20 md:py-24 bg-[#EDE5D5]">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="eyebrow mb-3.5 block">A ligação</span>
        <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15] mb-6">
          Estes sinais não são coincidência — <span className="italic text-ouro">estão todos ligados.</span>
        </h2>
        <p className="text-[17px] text-muted-foreground leading-relaxed mb-8">
          A respiração influencia o crescimento da face. O crescimento influencia a mordida. A mordida
          influencia a função. A função influencia o sono. E o sono influencia o desenvolvimento e o
          comportamento. É um sistema — e é exatamente isso que a Metodologia Respira e Cresce 360 observa.
        </p>
        <a href="/metodologia/" className="btn-primary">
          Ver como funciona a metodologia <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

type SiteImage = { url: string; alt: string };

const Home = ({ images }: { images?: Record<string, SiteImage> }) => (
  <Providers>
    <Layout pathname="/">
      {/* Home = trailer: cada bloco é um teaser que liga à página profunda */}
      <HeroSection image={images?.hero} />          {/* 1. Autoridade (Dra. + missão) */}
      <SocialProofBar />       {/*    faixa de prova */}
      <PainSection />          {/* 2. "Reconheces isto?" (dores dos pais) */}
      <LigacaoTeaser />        {/* 3. A ligação → Metodologia */}
      <SinaisSection teaser /> {/* 4. 3 sinais → Famílias (+ checklist) */}
      <AboutPreview image={images?.sobre_home} /> {/* 5. Quem sou → Sobre */}
      <PodcastPreview />       {/* 6. Podcast */}
      <CTASection />           {/* 7. Oferta + stakes → Consulta */}
      {/* <TestimonialsSection /> — oculto até haver 2–3 depoimentos reais autorizados */}
    </Layout>
  </Providers>
);

export default Home;
