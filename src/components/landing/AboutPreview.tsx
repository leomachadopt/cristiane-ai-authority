import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="sobre" className="py-20 md:py-24 bg-[#EDE5D5]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:flex rounded-3xl bg-azul/[0.06] aspect-[3/4] items-center justify-center text-6xl opacity-30"
          >
            {/* SUBSTITUIR pela foto profissional da Dra. Cristiane */}
            👩‍⚕️
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="eyebrow mb-4 block">Quem sou</span>
            <blockquote className="font-display text-[22px] italic text-azul leading-[1.5] pl-7 border-l-4 border-ouro mb-6">
              “Ao longo de 25 anos a trabalhar com crianças, fui percebendo que muitos sinais que
              aparecem na boca e na face estavam ligados à forma como a criança respira, dorme,
              funciona e cresce.”
            </blockquote>
            <p className="text-base text-muted-foreground leading-relaxed mb-7">
              Sou a Dra. Cristiane Martins — especialista em Odontopediatria Integrativa, Ortopedia
              Funcional dos Maxilares e Medicina do Sono. Criei a Metodologia Respira e Cresce 360
              porque precisava de uma forma de observar a criança como sistema — não por
              especialidades separadas. Hoje, o meu trabalho é ajudar famílias a perceber esses
              sinais com mais clareza, antes de se tornarem problemas maiores.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {credenciais.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-white rounded-xl p-4 border border-border/70"
                >
                  <div className="text-lg mb-1.5">{c.icon}</div>
                  <p className="text-base font-bold text-azul mb-0.5">{c.title}</p>
                  <p className="text-[15px] text-muted-foreground leading-snug">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-8 mt-6 pt-6 border-t border-border">
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
  );
};

export default AboutPreview;
