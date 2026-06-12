import Layout from "@/components/Layout";
import Providers from "@/views/Providers";
import PageHero from "@/components/PageHero";
import MetodologiaSection from "@/components/landing/MetodologiaSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ciclo = ["Respiração", "Crescimento", "Mordida", "Função", "Sono"];

const Metodologia = () => {
  return (
    <Providers>
    <Layout pathname="/metodologia/">
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
                  <span className="px-3.5 py-1.5 rounded-full text-[13px] font-semibold bg-salvia/15 text-azul">{c}</span>
                  {i < ciclo.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-ouro" />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <MetodologiaSection />

      {/* Onde nasceu o método — liga o método à pessoa (→ Sobre) */}
      <section className="py-20 md:py-24 bg-[#EDE5D5]">
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
            <span className="eyebrow mb-3.5 block">Onde nasceu o método</span>
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15] mb-6">
              Porque é que este método <span className="italic text-ouro">existe.</span>
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-8">
              O RC360 não é uma marca à procura de um problema. Nasceu ao contrário: de 25 anos a ver,
              na mesma criança, sinais que as especialidades tratavam em separado. Foi a Dra. Cristiane
              que ligou os pontos — e transformou esse raciocínio num sistema replicável.
            </p>
            <a href="/sobre/" className="btn-outline">
              Conhecer a Dra. Cristiane <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Teaser para a oferta */}
      <section className="py-16 md:py-20 px-6 text-center bg-[linear-gradient(135deg,#2C5F6F_0%,#244E5A_100%)]">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-4">
            Vê a Consulta RC360 <span className="italic text-ouro-light">em detalhe.</span>
          </h2>
          <p className="text-[17px] text-white/75 leading-relaxed max-w-lg mx-auto mb-8">
            Para quem é, o que acontece e o que a família leva — tudo na página da consulta.
          </p>
          <a href="/consulta/" className="btn-primary">Ver a Consulta RC360 →</a>
        </div>
      </section>
    </Layout>
    </Providers>
  );
};

export default Metodologia;
