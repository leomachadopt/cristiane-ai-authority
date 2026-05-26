import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const dores = [
  {
    icon: "😮",
    title: "“O meu filho dorme de boca aberta e ressona”",
    desc: "Disseram-te que é normal. Mas há noites que ouves e preocupas-te. E de manhã ele acorda como se não tivesse dormido.",
  },
  {
    icon: "🦷",
    title: "“Os dentes estão tortos mas não sei se é cedo de mais”",
    desc: "O dentista disse para esperar. Mas a arcada parece estreita, a mordida não encaixa bem e tens dúvidas se o timing é mesmo o certo.",
  },
  {
    icon: "🧠",
    title: "“É distraído, agitado, e ninguém liga”",
    desc: "Os professores referem falta de atenção. Tu perguntas-te se há uma ligação entre o sono, a respiração e o comportamento. Há.",
  },
];

const respostas = [
  "Observo os quatro pilares em simultâneo — não por fragmentos",
  "Construo um plano por fases com prioridades claras",
  "A família sai com clareza — não com mais dúvidas",
  "O acompanhamento ao longo do crescimento é parte do método",
];

const PainSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="para-ti" className="py-20 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Dores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="eyebrow mb-3.5">Reconheces isto?</span>
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15] mb-5">
              Quando a resposta que precisavas ainda não chegou.
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-6 max-w-lg">
              Muitas famílias chegam à minha consulta depois de anos a ouvir &ldquo;é normal&rdquo; ou
              &ldquo;passa com o tempo&rdquo;. Não passou. E tu sabias que havia algo mais.
            </p>
            <div className="flex flex-col gap-3.5">
              {dores.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-white rounded-2xl p-5 border border-border/70 flex gap-3.5 items-start hover:border-ouro hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
                >
                  <span className="text-[22px] shrink-0 leading-none mt-0.5">{d.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-azul mb-1">{d.title}</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resposta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="bg-azul-dark rounded-3xl p-8 md:p-9 text-white"
          >
            <span className="eyebrow mb-3 text-ouro">A minha resposta</span>
            <h3 className="font-display text-2xl text-white leading-snug mb-4">
              Estes sinais não são coincidência — estão todos ligados.
            </h3>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              A respiração oral influencia o crescimento da face. O crescimento da face influencia a
              mordida. A mordida influencia a função. A função influencia o sono. O sono influencia o
              desenvolvimento e o comportamento. Tudo está ligado — e é exactamente isso que a
              Metodologia Respira e Cresce 360 observa.
            </p>
            <div className="flex flex-col gap-2.5">
              {respostas.map((r) => (
                <div key={r} className="flex gap-2.5 items-start text-[13px] text-white/75">
                  <ArrowRight className="w-4 h-4 text-teal shrink-0 mt-0.5" strokeWidth={2.5} />
                  {r}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
