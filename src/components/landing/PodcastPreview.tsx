import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones } from "lucide-react";
import { PODCAST_LINK } from "@/lib/site";

const hosts = [
  { initials: "CM", name: "Dra. Cristiane", bg: "hsl(var(--azul))", color: "hsl(var(--ouro-light))" },
  { initials: "Le", name: "Leonardo", bg: "hsl(var(--terracota))", color: "#fff" },
  { initials: "V", name: "Dra. Vânia", bg: "hsl(var(--salvia))", color: "#fff" },
];

const episodes = [
  { ico: "🌬️", title: "Respiração oral — o que nenhum pai te explicou", desc: "Por que a boca aberta não é um hábito — é um sinal clínico." },
  { ico: "😴", title: "Quando o sono do teu filho não descansa", desc: "Ronco, sono agitado e comportamento — como a via aérea influencia o dia." },
  { ico: "📈", title: "A face em crescimento — e agora?", desc: "O timing da intervenção e por que avaliar cedo faz a diferença." },
  { ico: "🦷", title: "Mastigação, língua e deglutição — o trio esquecido", desc: "Como a função oral influencia tudo o resto." },
  { ico: "🌿", title: "Saúde integrativa pediátrica", desc: "Com a Dra. Vânia — observar a criança como sistema, não por sintomas." },
];

const PodcastPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="podcast" className="py-20 md:py-24 bg-azul-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-salvia mb-3.5">🎙️ Podcast</p>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">
              Família 360<br />Saúde Integrada
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-7 max-w-md">
              Um podcast criado para pais que querem perceber melhor o que acontece com os seus
              filhos — respiração, sono, crescimento, função oral e desenvolvimento. Porque
              compreender melhor é cuidar melhor.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {hosts.map((h) => (
                <div key={h.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold"
                    style={{ background: h.bg, color: h.color }}
                  >
                    {h.initials}
                  </span>
                  <span className="text-[15px] text-white font-medium">{h.name}</span>
                </div>
              ))}
            </div>
            <a
              href={PODCAST_LINK}
              className="inline-flex items-center gap-2 border-2 border-white/35 text-white hover:bg-white/10 active:scale-[0.97] px-6 py-3 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
            >
              <Headphones className="w-4 h-4" /> Ouvir o Podcast
            </a>
          </motion.div>

          {/* Episódios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7"
          >
            <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-ouro-light mb-4">
              Episódios em destaque
            </p>
            {episodes.map((ep, i) => (
              <div
                key={ep.title}
                className={`flex gap-3.5 py-3.5 ${i < episodes.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <div className="w-9 h-9 rounded-[9px] bg-salvia/15 text-salvia flex items-center justify-center text-sm shrink-0">
                  {ep.ico}
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-0.5 leading-snug">{ep.title}</p>
                  <p className="text-[15px] text-white/55 leading-relaxed">{ep.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPreview;
