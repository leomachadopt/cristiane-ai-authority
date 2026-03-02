import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Wind, Moon, Brain, Smile, ArrowRight, AlertTriangle } from "lucide-react";

const domains = [
  {
    icon: Wind,
    title: "Respiração",
    color: "primary",
    description: "A respiração nasal é a base do desenvolvimento saudável. Quando comprometida, afecta o sono, o crescimento facial e a função oral.",
    signs: [
      "Respiração pela boca durante o dia ou à noite",
      "Ronco ou ruído respiratório ao dormir",
      "Lábios frequentemente secos ou gretados",
      "Olheiras ou face alongada",
    ],
  },
  {
    icon: Moon,
    title: "Sono",
    color: "lavender",
    description: "O sono é o momento em que o crescimento e a reparação acontecem. Perturbações do sono na infância têm consequências profundas.",
    signs: [
      "Dificuldade em adormecer ou sono agitado",
      "Ronco ou pausas respiratórias",
      "Suar excessivamente durante a noite",
      "Cansaço diurno ou dificuldade de concentração",
    ],
  },
  {
    icon: Brain,
    title: "Crescimento Craniofacial",
    color: "accent",
    description: "A forma como a face e os maxilares crescem é influenciada pela respiração e pelas funções orais. É um espelho do desenvolvimento global.",
    signs: [
      "Maxilares estreitos ou mordida cruzada",
      "Face alongada ou retro-posicionada",
      "Assimetrias faciais visíveis",
      "Erupção dentária atípica",
    ],
  },
  {
    icon: Smile,
    title: "Função Oral",
    color: "coral",
    description: "Amamentação, mastigação, deglutição e fala são funções que moldam o crescimento e revelam sinais clínicos importantes.",
    signs: [
      "Dificuldade na amamentação",
      "Mastigação preferencial de um lado",
      "Deglutição atípica (língua entre os dentes)",
      "Dificuldades na articulação da fala",
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  lavender: "bg-lavender/10 text-lavender border-lavender/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  coral: "bg-coral/10 text-coral border-coral/20",
};

const iconBg: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  lavender: "bg-lavender/10 text-lavender",
  accent: "bg-accent/10 text-accent",
  coral: "bg-coral/10 text-coral",
};

const Abordagem = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              Abordagem Clínica
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Quatro domínios, um{" "}
              <span className="text-gradient">olhar integrado</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada domínio é uma lente através da qual observamos o desenvolvimento infantil.
              Nenhum funciona isoladamente — as conexões entre eles são a chave para uma intervenção eficaz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl space-y-12">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${iconBg[d.color]} flex items-center justify-center shrink-0`}>
                  <d.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl">{d.title}</h2>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{d.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-warm" />
                  <h3 className="font-display font-semibold text-sm">Sinais a observar</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {d.signs.map((sign) => (
                    <div key={sign} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-1 text-primary shrink-0" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connections */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              As <span className="text-gradient">conexões</span> são a chave
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Uma criança que respira pela boca tende a dormir mal. Dormir mal compromete o crescimento.
              O crescimento facial alterado afecta a função oral. E a função oral comprometida
              perpetua a respiração bucal. É um ciclo — e quebrá-lo é a nossa missão.
            </p>
            <div className="inline-flex items-center gap-3 flex-wrap justify-center">
              {domains.map((d, i) => (
                <span key={d.title} className="flex items-center gap-1.5">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${colorMap[d.color]}`}>
                    {d.title}
                  </span>
                  {i < domains.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Abordagem;
