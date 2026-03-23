import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Wind, Moon, Brain, Smile, ArrowRight, AlertTriangle, Stethoscope, Search, FileText, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const steps = [
  { icon: Search, title: "Observação Integrada", text: "Avaliação completa dos 4 pilares — sem olhar para sintomas isolados." },
  { icon: Stethoscope, title: "Análise de Padrões", text: "Cruzamento de informações para identificar conexões entre sinais." },
  { icon: FileText, title: "Plano Personalizado", text: "Orientação clara com passos concretos para a família." },
  { icon: Users, title: "Acompanhamento", text: "Monitorização contínua do desenvolvimento ao longo do tempo." },
];

const familyReceives = [
  "Avaliação detalhada dos 4 pilares do desenvolvimento",
  "Explicação clara e acessível do que foi observado",
  "Plano de acompanhamento personalizado quando necessário",
  "Orientação sobre sinais a monitorizar em casa",
  "Relatório clínico para partilhar com outros profissionais",
];

const Metodologia = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              Método Respira e Cresce 360
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Uma metodologia com{" "}
              <span className="text-gradient">visão integrada</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Método Respira e Cresce 360 organiza a observação clínica numa lógica estruturada,
              preventiva e acessível — porque o desenvolvimento infantil é um sistema, não partes isoladas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              O que é o <span className="text-gradient">Método Respira e Cresce 360</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              É uma abordagem clínica que observa o desenvolvimento infantil através de 4 pilares 
              interligados: respiração, sono, crescimento craniofacial e função oral. Em vez de 
              tratar cada sinal isoladamente, o método procura padrões e conexões que permitem 
              intervir de forma mais eficaz e preventiva.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvido pela Dra. Cristiane Martins, este método nasceu da constatação de que 
              os problemas mais frequentes no desenvolvimento infantil raramente têm uma causa 
              única — são sempre parte de um sistema maior.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Os 4 <span className="text-gradient">pilares</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {domains.map((d) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${iconBg[d.color]} flex items-center justify-center shrink-0`}>
                    <d.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl">{d.title}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{d.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-warm" />
                    <h4 className="font-display font-semibold text-sm">Sinais a observar</h4>
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
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Como funciona a <span className="text-gradient">observação clínica</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center"
              >
                <span className="text-3xl font-display font-bold text-accent/20 block mb-2">0{i + 1}</span>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What the family receives */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-warm" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                O que a família <span className="text-gradient">recebe</span>
              </h2>
            </div>
            <div className="space-y-3">
              {familyReceives.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50"
                >
                  <ArrowRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connections */}
      <section className="py-20 md:py-28">
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

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contacto">Fale Connosco</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
