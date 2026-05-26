import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pilares = [
  {
    icon: "🦷",
    num: "Pilar 1",
    title: "Cavidade Oral",
    desc: "Palato, arcada, vedamento labial, mordida — tudo conta uma história sobre o desenvolvimento.",
    tags: ["Palato alto", "Mordida cruzada"],
    cls: "bg-teal/10 border-teal/30",
    numCls: "text-[#0F6E56]",
    tagCls: "bg-teal/20 text-[#0F6E56]",
  },
  {
    icon: "🌬️",
    num: "Pilar 2",
    title: "Respiração",
    desc: "A forma como a criança respira influencia o sono, a função oral e o crescimento da face.",
    tags: ["Respiração oral", "Ronco"],
    cls: "bg-ouro/10 border-ouro/30",
    numCls: "text-[#854F0B]",
    tagCls: "bg-ouro/20 text-[#854F0B]",
  },
  {
    icon: "📈",
    num: "Pilar 3",
    title: "Crescimento Craniofacial",
    desc: "A face ainda está em desenvolvimento — e esse crescimento responde ao sistema inteiro.",
    tags: ["Assimetria", "Timing"],
    cls: "bg-rosa/10 border-rosa/30",
    numCls: "text-[#993556]",
    tagCls: "bg-rosa/20 text-[#993556]",
  },
  {
    icon: "⚙️",
    num: "Pilar 4",
    title: "Função Oral",
    desc: "Mastigação, deglutição, fala e posição da língua mostram o que a estrutura sozinha não explica.",
    tags: ["Mastigação", "Deglutição"],
    cls: "bg-azul/[0.07] border-azul/15",
    numCls: "text-azul",
    tagCls: "bg-azul/10 text-azul",
  },
];

const flow = [
  { t: "Escutamos a história da criança", d: "Cada família traz uma história única. A consulta começa por aqui — com atenção e sem pressa." },
  { t: "Observamos os 4 pilares em conjunto", d: "Cavidade oral, respiração, crescimento craniofacial e função oral — avaliados como sistema." },
  { t: "Construímos um plano por fases", d: "O que é essencial agora · O que é recomendado · O que pode ser acompanhado com calma." },
  { t: "A família sai com clareza", d: "Não vendemos tempo de consulta. Vendemos compreensão. Nenhuma dúvida por responder." },
  { t: "Acompanhamento periódico", d: "O crescimento tem fases — e nós acompanhamos todas elas. O método não termina na primeira consulta." },
];

const MetodologiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="metodologia" className="py-20 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* Intro + Pilares */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-3.5 block">Metodologia Respira e Cresce 360</span>
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15] mb-4">
              A única leitura que observa tudo <span className="italic text-ouro">em conjunto.</span>
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-7">
              A Metodologia RC360 nasce de uma convicção: a criança não deve ser observada por partes.
              O que acontece na boca, na respiração, no crescimento e na função estão profundamente
              relacionados. A minha leitura clínica organiza-se em quatro pilares — não como lista,
              mas como sistema.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pilares.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                  className={`rounded-2xl p-6 border ${p.cls} transition-transform hover:-translate-y-1`}
                >
                  <div className="text-[26px] mb-2.5">{p.icon}</div>
                  <div className={`text-[10px] font-bold tracking-wider uppercase mb-1.5 ${p.numCls}`}>{p.num}</div>
                  <h3 className="font-display text-base font-bold text-azul mb-1.5">{p.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${p.tagCls}`}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flow da consulta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-azul-dark rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-2xl text-ouro-light mb-8">O que acontece na Consulta RC360</h3>
            <div className="flex flex-col">
              {flow.map((s, i) => (
                <div key={s.t} className="flex gap-5 relative">
                  {i < flow.length - 1 && (
                    <span className="absolute left-[19px] top-11 bottom-0 w-px bg-white/[0.08]" />
                  )}
                  <div className="w-10 h-10 rounded-[10px] bg-ouro/15 border border-ouro/25 text-ouro-light flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="pb-6 flex-1">
                    <p className="text-[15px] font-bold text-white mb-1">{s.t}</p>
                    <p className="text-[13px] text-white/50 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 bg-ouro/[0.08] border border-ouro/20 rounded-xl px-4 py-3.5">
              <p className="text-[13px] text-ouro-light leading-relaxed">
                <strong className="font-bold">Regra de ouro:</strong> Nenhum sinal é interpretado
                isolado. A leitura integrada dos 4 pilares é o que nos permite ver o que outros não vêem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
