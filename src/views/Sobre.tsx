import Layout from "@/components/Layout";
import Providers from "@/views/Providers";
import PageHero from "@/components/PageHero";
import { motion, type Variants } from "framer-motion";
import { Shield, Eye, Layers, HeartHandshake, Star, Wind } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

const credenciais = [
  { icon: "🦷", title: "Odontopediatria Integrativa", desc: "Saúde oral da criança com visão sistémica do desenvolvimento" },
  { icon: "🔧", title: "Ortopedia Funcional dos Maxilares", desc: "Orientação do crescimento — não apenas alinhamento dos dentes" },
  { icon: "😴", title: "Medicina do Sono", desc: "Avaliação e tratamento das perturbações do sono infantil" },
  { icon: "🌬️", title: "Metodologia RC360", desc: "Criadora do único método que observa os 4 pilares em conjunto" },
];

const numeros = [
  { val: "25", label: "Anos de experiência" },
  { val: "4", label: "Pilares observados" },
  { val: "1", label: "Metodologia exclusiva" },
];

const values = [
  { icon: Shield, title: "Rigor", text: "Cada observação clínica é fundamentada. Sem suposições, sem modas." },
  { icon: Eye, title: "Clareza", text: "Comunico de forma que as famílias entendem. Sem jargão desnecessário." },
  { icon: Layers, title: "Prevenção", text: "Identificar sinais precoces antes que se tornem problemas instalados." },
  { icon: HeartHandshake, title: "Integração", text: "Olho para o todo — respiração, sono, face e função oral como um sistema." },
  { icon: Star, title: "Confiança", text: "Construída através de resultados consistentes e transparência total." },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] } }),
};

const Sobre = ({ image }: { image?: { url: string; alt: string } }) => {
  return (
    <Providers>
    <Layout pathname="/sobre/">
      <PageHero
        eyebrow="Quem sou"
        title={<>Eu não olho só para dentes.<br /><span className="italic text-ouro-light">Eu observo desenvolvimento.</span></>}
        subtitle="Sou a Dra. Cristiane Martins — especialista em Odontopediatria Integrativa, Ortopedia Funcional dos Maxilares e Medicina do Sono."
      />

      {/* Bio em 1ª pessoa */}
      <section className="py-20 md:py-24 bg-[#EDE5D5]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className={`hidden lg:flex rounded-3xl bg-salvia/10 border border-border aspect-[3/4] items-center justify-center overflow-hidden ${image ? "" : "p-6 text-center"}`}
            >
              {image ? (
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">[ FOTO: retrato da Dra. + contexto clínico / a dar formação ]</p>
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}>
              <blockquote className="font-display text-[22px] italic text-azul leading-[1.5] pl-7 border-l-4 border-ouro mb-6">
                “Ao longo de 25 anos a trabalhar com crianças, fui percebendo que muitos sinais que
                aparecem na boca e na face estavam ligados à forma como a criança respira, dorme,
                funciona e cresce.”
              </blockquote>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Comecei a minha carreira na odontopediatria clássica. Ao longo dos anos, percebi que
                muitos dos problemas que tratava na boca tinham raízes mais profundas — na respiração,
                no sono, no crescimento da face. Não eram peças soltas: eram partes do mesmo sistema.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-7">
                Foi dessa convicção que nasceu a Metodologia Respira e Cresce 360. Hoje, o meu trabalho
                é ajudar famílias a perceber esses sinais com mais clareza, antes de se tornarem
                problemas maiores.
              </p>
              <div className="flex gap-8 pt-6 border-t border-border">
                {numeros.map((n) => (
                  <div key={n.label}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-azul">{n.val}</div>
                    <div className="text-[15px] text-muted-foreground mt-0.5">{n.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Percurso e credenciais (PREENCHER com dados reais — [A CONFIRMAR]) */}
      <section className="py-20 md:py-24 bg-[#EDE5D5]">
        <div className="container max-w-3xl">
          <div className="mb-10">
            <span className="eyebrow mb-3.5 block">Percurso e credenciais</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-azul">
              A prova por trás da <span className="italic text-ouro">autoridade.</span>
            </h2>
          </div>
          <div className="bg-card rounded-2xl border border-border/60 p-7 md:p-9 flex flex-col gap-4">
            {[
              { l: "Médica dentista", v: "[curso · Universidade — A CONFIRMAR · ano]" },
              { l: "Cédula da Ordem dos Médicos Dentistas", v: "n.º [A CONFIRMAR]" },
              { l: "Odontopediatria", v: "[instituição · ano — A CONFIRMAR]" },
              { l: "Ortopedia Funcional dos Maxilares", v: "[instituição · ano — A CONFIRMAR]" },
              { l: "Medicina do Sono", v: "[instituição · ano — A CONFIRMAR]" },
              { l: "Laserterapia (LiteTouch / LLLT)", v: "[instituição · ano — A CONFIRMAR]" },
              { l: "Formadora", v: "[cursos · n.º de formandos — A CONFIRMAR]" },
            ].map((c) => (
              <div key={c.l} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 border-b border-border/50 last:border-0 pb-4 last:pb-0">
                <span className="text-[15px] font-semibold text-azul sm:w-72 shrink-0">{c.l}</span>
                <span className="text-[15px] text-muted-foreground">{c.v}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div><div className="font-display text-4xl md:text-5xl font-bold text-azul">25</div><div className="text-[13px] text-muted-foreground mt-0.5">Anos de prática</div></div>
            <div><div className="font-display text-4xl md:text-5xl font-bold text-azul">[—]</div><div className="text-[13px] text-muted-foreground mt-0.5">Famílias acompanhadas</div></div>
            <div><div className="font-display text-4xl md:text-5xl font-bold text-azul">1</div><div className="text-[13px] text-muted-foreground mt-0.5">Metodologia própria</div></div>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="py-20 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3.5 block">Áreas de especialidade</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-azul">
              Quatro olhares, uma <span className="italic text-ouro">leitura só.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credenciais.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl p-6 border border-border/70 hover:shadow-lg transition-[box-shadow] duration-200 ease-out-expo"
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="text-base font-bold text-azul mb-1.5">{c.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-24 bg-[#EDE5D5]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3.5 block">Como trabalho</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-azul">
              Valores que guiam a <span className="italic text-ouro">minha prática.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl p-6 border border-border/70 hover:shadow-lg transition-[box-shadow] duration-200 ease-out-expo"
              >
                <div className="w-10 h-10 rounded-lg bg-ouro/12 flex items-center justify-center mb-3">
                  <v.icon className="w-5 h-5 text-ouro" />
                </div>
                <h3 className="font-display font-bold text-azul mb-1.5">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral text-white active:scale-[0.97] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
            >
              <Wind className="w-4 h-4" /> Marcar Consulta RC360
            </a>
          </div>
        </div>
      </section>
    </Layout>
    </Providers>
  );
};

export default Sobre;
