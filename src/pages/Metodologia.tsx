import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import MetodologiaSection from "@/components/landing/MetodologiaSection";
import ConsultaSection from "@/components/landing/ConsultaSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ciclo = ["Respiração", "Crescimento", "Mordida", "Função", "Sono"];

const Metodologia = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Metodologia Respira e Cresce 360"
        title={<>O desenvolvimento do teu filho é um sistema — <span className="italic text-ouro-light">não partes isoladas.</span></>}
        subtitle="A RC360 organiza a observação clínica numa lógica integrada, preventiva e acessível. Porque o que acontece na boca, na respiração, no crescimento e na função está profundamente ligado."
      />

      {/* Abertura emocional — as conexões */}
      <section className="py-20 md:py-24">
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
            <span className="eyebrow mb-3.5 block">As conexões são a chave</span>
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15] mb-6">
              Quando olhamos para cada pilar isolado, <span className="italic text-ouro">perdemos o sistema.</span>
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-8">
              Uma criança que respira pela boca tende a dormir mal. Dormir mal compromete o
              crescimento. O crescimento da face alterado afecta a mordida e a função. E a função
              comprometida perpetua a respiração oral. É um ciclo — e quebrá-lo a tempo muda o caminho.
            </p>
            <div className="inline-flex items-center gap-2 flex-wrap justify-center">
              {ciclo.map((c, i) => (
                <span key={c} className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-salvia/15 text-azul">{c}</span>
                  {i < ciclo.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-ouro" />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <MetodologiaSection />
      <ConsultaSection />
    </Layout>
  );
};

export default Metodologia;
