import Layout from "@/components/Layout";
import Providers from "@/views/Providers";
import PageHero from "@/components/PageHero";
import SinaisSection from "@/components/landing/SinaisSection";
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import FAQSection from "@/components/landing/FAQSection";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Mic } from "lucide-react";

const educationalContent = [
  {
    title: "Respiração oral: o que os pais devem saber",
    summary: "A respiração pela boca não é apenas um hábito — é um sinal clínico que pode afectar o sono, o crescimento facial e o desenvolvimento global da criança.",
  },
  {
    title: "Sinais de alerta no sono infantil",
    summary: "Ronco, sono agitado e transpiração excessiva podem indicar perturbações respiratórias do sono que merecem atenção clínica.",
  },
  {
    title: "O papel da amamentação no desenvolvimento facial",
    summary: "A amamentação natural estimula o crescimento harmonioso dos maxilares e estabelece padrões funcionais saudáveis desde cedo.",
  },
];

const Familias = () => {
  return (
    <Providers>
    <Layout pathname="/familias/">
      <PageHero
        eyebrow="Para famílias · Sinais a observar"
        title={<>O que observar em casa — <span className="italic text-ouro-light">e quando procurar ajuda.</span></>}
        subtitle="Não para assustar. Para dar clareza. Reúne aqui os sinais que merecem atenção no desenvolvimento do teu filho — e percebe como a leitura integrada RC360 os interpreta."
      />

      {/* Os 6 sinais (reutiliza a secção do site) */}
      <SinaisSection ctaHref="/contacto" />

      {/* Checklist gratuito */}
      <LeadMagnetSection />

      {/* Conteúdo educativo */}
      <section className="py-20 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3.5 block">Conteúdo educativo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-azul">
              Compreender melhor é <span className="italic text-ouro">cuidar melhor.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {educationalContent.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-2xl p-6 border border-border/70 hover:shadow-lg transition-[box-shadow] duration-200 ease-out-expo"
              >
                <div className="w-10 h-10 rounded-lg bg-salvia/12 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-salvia" />
                </div>
                <h3 className="font-display font-bold text-azul mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
              </motion.div>
            ))}
          </div>

          {/* Podcast mini */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-azul-dark rounded-3xl overflow-hidden grid md:grid-cols-5"
          >
            <div className="md:col-span-2 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/[0.08]">
              <div className="w-16 h-16 rounded-2xl bg-salvia/12 flex items-center justify-center mb-4">
                <Mic className="w-8 h-8 text-salvia" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Família 360</h3>
              <p className="text-[15px] text-white/60">Saúde Integrada</p>
            </div>
            <div className="md:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl text-white mb-2">Oiça o nosso podcast</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Conversas claras sobre respiração, sono, função e crescimento infantil — para pais
                que querem perceber melhor.
              </p>
              <a
                href="/podcast/"
                className="inline-flex items-center gap-2 border-2 border-white/35 text-white hover:bg-white/10 active:scale-[0.97] px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo w-fit"
              >
                Conhecer o Podcast <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ — 6 objecções */}
      <FAQSection subtitle="As dúvidas mais comuns das famílias antes de marcar a Consulta RC360." />
    </Layout>
    </Providers>
  );
};

export default Familias;
