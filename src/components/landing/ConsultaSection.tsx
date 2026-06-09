import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { LOCATION } from "@/lib/site";

const colunas = [
  {
    title: "Para quem é",
    items: [
      "Criança que respira pela boca com frequência",
      "Ronco ou sono agitado recorrente",
      "Palato alto, arcada estreita ou mordida cruzada",
      "Assimetria facial ou postura que preocupa",
      "Dificuldades de atenção ou comportamento",
      "Bruxismo — de dia ou de noite",
      "Pais com dúvidas sobre o crescimento do filho",
    ],
  },
  {
    title: "O que acontece",
    items: [
      "Anamnese completa orientada pelos 4 pilares",
      "Observação da cavidade oral e função mastigatória",
      "Avaliação do padrão respiratório e vedamento labial",
      "Análise do crescimento craniofacial e simetria facial",
      "Leitura da função oral — mastigação, deglutição, fala",
      "Plano por fases construído com a família",
    ],
  },
  {
    title: "O que a família leva",
    items: [
      "Clareza sobre o que está a acontecer e porquê",
      "Prioridades definidas — o que é essencial agora",
      "Plano por fases com próximos passos concretos",
      "Referenciação para outros profissionais quando necessário",
      "Acompanhamento periódico ao longo do crescimento",
      "Nenhuma dúvida sem resposta",
    ],
  },
];

const ConsultaSection = ({ ctaHref = "/contacto" }: { ctaHref?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="consulta" className="py-20 md:py-24 bg-salvia/10">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-9"
        >
          <span className="eyebrow mb-3.5 block">A consulta</span>
          <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15]">
            Consulta Respira e Cresce <span className="italic text-ouro">360</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="bg-azul-dark rounded-3xl p-8 md:p-12 mb-9 relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-salvia/[0.06]" />
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-salvia mb-3.5 relative z-10">
            Avaliação integrada · Metodologia exclusiva
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-white mb-4 leading-snug relative z-10">
            “A consulta que liga o que outros vêem separado.”
          </h3>
          <p className="text-[15px] text-white/65 leading-relaxed max-w-xl relative z-10">
            A Consulta Respira e Cresce 360 é uma avaliação clínica integrada que observa os quatro
            pilares em conjunto. O resultado não é uma lista de problemas — é um plano com clareza,
            prioridades definidas e próximos passos concretos. A família não sai com dúvidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {colunas.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-2xl p-6"
            >
              <h4 className="text-[15px] font-bold tracking-wider uppercase text-ouro pb-2.5 mb-3.5 border-b border-border">
                {c.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-2 items-start text-[15px] text-muted-foreground leading-relaxed">
                    <ArrowRight className="w-3 h-3 text-salvia shrink-0 mt-1" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-9">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral text-white active:scale-[0.97] px-9 py-4 rounded-full text-[17px] font-semibold shadow-[0_8px_24px_hsl(var(--coral)/0.32)] transition-[transform,box-shadow] ease-out-expo hover:-translate-y-0.5"
          >
            <CalendarDays className="w-5 h-5" /> Marcar Consulta Respira e Cresce 360
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Disponível em {LOCATION} · Escreve RESPIRA por mensagem para mais informações
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultaSection;
