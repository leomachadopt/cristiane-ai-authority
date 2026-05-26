import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Headphones, Wind } from "lucide-react";
import { PODCAST_LINK, WHATSAPP_LINK } from "@/lib/site";

const hosts = [
  { name: "Dra. Cristiane Martins", role: "Odontopediatria Integrativa", initials: "CM", bg: "hsl(var(--azul))", color: "hsl(var(--ouro-light))" },
  { name: "Leonardo", role: "Co-apresentador", initials: "Le", bg: "#185FA5", color: "#fff" },
  { name: "Dra. Vânia", role: "Saúde Integrativa Pediátrica", initials: "V", bg: "#1A7A50", color: "#fff" },
];

const topics = [
  "Respiração oral infantil",
  "Sono e desenvolvimento",
  "Crescimento craniofacial",
  "Função oral e amamentação",
  "Sinais precoces de alerta",
  "Prevenção integrada",
];

const episodes = [
  { ico: "🌬️", title: "Respiração oral — o que nenhum pai te explicou", desc: "Por que a boca aberta não é um hábito — é um sinal clínico." },
  { ico: "😴", title: "Quando o sono do teu filho não descansa", desc: "Ronco, sono agitado e comportamento — como a via aérea influencia o dia." },
  { ico: "📈", title: "A face em crescimento — e agora?", desc: "O timing da intervenção e por que avaliar cedo faz a diferença." },
  { ico: "🦷", title: "Mastigação, língua e deglutição — o trio esquecido", desc: "Como a função oral influencia tudo o resto." },
  { ico: "🌿", title: "Saúde integrativa pediátrica", desc: "Com a Dra. Vânia — observar a criança como sistema, não por sintomas." },
];

const Podcast = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="🎙️ Podcast"
        title={<>Família 360 — <span className="italic text-ouro-light">Saúde Integrada.</span></>}
        subtitle="Um podcast criado para pais que querem perceber melhor o que acontece com os seus filhos — respiração, sono, crescimento, função oral e desenvolvimento."
      />

      {/* Sobre + hosts */}
      <section className="py-20 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
              <span className="eyebrow mb-3.5 block">Porque nasceu</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-azul leading-tight mb-5">
                Conhecimento clínico para além das paredes do consultório.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Muitas famílias chegam à consulta com dúvidas que podiam ter sido respondidas antes.
                Este podcast nasce da vontade de levar clareza a mais pais — sobre respiração, sono,
                crescimento e função oral.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-7">
                Cada episódio é uma conversa entre profissionais que acreditam na prevenção e em olhar
                para a criança como um todo. Porque compreender melhor é cuidar melhor.
              </p>
              <a
                href={PODCAST_LINK}
                className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
              >
                <Headphones className="w-4 h-4" /> Ouvir o Podcast
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }} className="flex flex-col gap-3">
              {hosts.map((h) => (
                <div key={h.name} className="flex items-center gap-3.5 bg-white rounded-2xl p-4 border border-border/70">
                  <span className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: h.bg, color: h.color }}>
                    {h.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-azul leading-tight">{h.name}</p>
                    <p className="text-xs text-muted-foreground">{h.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episódios */}
      <section className="py-20 md:py-24 bg-azul-dark">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3.5 block text-teal">Episódios em destaque</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Conversas que dão <span className="italic text-ouro-light">clareza.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/12 text-teal flex items-center justify-center text-lg shrink-0">{ep.ico}</div>
                <div>
                  <h3 className="font-semibold text-white leading-snug mb-0.5">{ep.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{ep.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temas + CTA */}
      <section className="py-20 md:py-24">
        <div className="container max-w-3xl text-center">
          <span className="eyebrow mb-3.5 block">Temas abordados</span>
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {topics.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border/70 text-azul">{t}</span>
            ))}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-azul mb-6 leading-snug">
            Tens dúvidas sobre o desenvolvimento do teu filho?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
          >
            <Wind className="w-4 h-4" /> Marcar Consulta RC360
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;
