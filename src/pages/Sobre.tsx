import Layout from "@/components/Layout";
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

const Sobre = () => {
  return (
    <Layout>
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
              className="hidden lg:flex rounded-3xl bg-azul/[0.06] aspect-[3/4] items-center justify-center text-6xl opacity-30"
            >
              {/* SUBSTITUIR pela foto profissional da Dra. Cristiane */}
              👩‍⚕️
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
                    <div className="font-display text-3xl font-bold text-azul">{n.val}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{n.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                <h3 className="text-sm font-bold text-azul mb-1.5">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
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
              className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
            >
              <Wind className="w-4 h-4" /> Marcar Consulta RC360
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
