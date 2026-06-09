import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind } from "lucide-react";

const sinais = [
  { ico: "😮", title: "Boca aberta com frequência", desc: "Respiração oral em repouso — durante o dia e a noite. Lábios frequentemente secos ou gretados.", alert: "→ Pilar 2: Respiração" },
  { ico: "😴", title: "Ronco ou sono agitado", desc: "Ronco frequente, pausas na respiração, movimento excessivo durante o sono, acordar cansado.", alert: "→ Pilares 1, 2 e 3" },
  { ico: "🦷", title: "Mordida cruzada ou arcada estreita", desc: "Mordida que não encaixa bem, dentes muito juntos, palato que parece alto ou estreito.", alert: "→ Pilares 1 e 3" },
  { ico: "🧠", title: "Dificuldades de atenção ou comportamento", desc: "Falta de concentração, agitação, irritabilidade — especialmente associada a sono de má qualidade.", alert: "→ Ligação com o Pilar 2" },
  { ico: "🪞", title: "Assimetria facial ou postura curvada", desc: "Olhos ou ouvidos em alturas diferentes, mandíbula assimétrica, cabeça projetada à frente.", alert: "→ Pilar 3: Crescimento" },
  { ico: "🍽️", title: "Dificuldades na mastigação ou fala", desc: "Preferência por alimentos moles, pronúncia pouco clara, hábitos de sucção prolongados.", alert: "→ Pilar 4: Função Oral" },
];

const SinaisSection = ({ ctaHref = "#consulta" }: { ctaHref?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="sinais" className="py-20 md:py-24 bg-azul-dark">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow mb-3.5 block text-salvia">Sinais que merecem atenção</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-4">
            Reconheces algum destes sinais<br />
            <span className="italic text-ouro-light">no teu filho?</span>
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed">
            Não para assustar. Para dar clareza. Porque compreender melhor é cuidar melhor — e ver
            cedo muda sempre o caminho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {sinais.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.07 * i, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.08] hover:border-ouro/30 hover:-translate-y-1 transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
            >
              <div className="text-[26px] mb-3.5">{s.ico}</div>
              <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
              <p className="text-[13px] text-salvia font-medium mt-2.5">{s.alert}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-salvia/[0.07] border border-salvia/15 rounded-2xl px-7 py-5 text-center mb-10">
          <p className="text-[15px] text-white/75 leading-relaxed">
            <strong className="text-white font-medium">Nenhum destes sinais isolado fecha um
            diagnóstico.</strong> Mas quando aparecem em conjunto — e sobretudo quando persistem —
            merecem ser observados com critério. É exactamente isso que faço.
          </p>
        </div>

        <div className="text-center">
          <p className="text-[15px] text-white/65 mb-4">
            Se reconheceste algum destes sinais, a Consulta Respira e Cresce 360 foi criada para a
            vossa família.
          </p>
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
          >
            <Wind className="w-4 h-4" /> Marcar Consulta RC360
          </a>
        </div>
      </div>
    </section>
  );
};

export default SinaisSection;
