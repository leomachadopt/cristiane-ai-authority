import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Eye, Layers, HeartHandshake, Star } from "lucide-react";

const values = [
  { icon: Shield, title: "Rigor", text: "Cada observação clínica é fundamentada. Sem suposições, sem modas." },
  { icon: Eye, title: "Clareza", text: "Comunicação que as famílias entendem. Sem jargão desnecessário." },
  { icon: Layers, title: "Prevenção", text: "Identificar sinais precoces antes que se tornem problemas instalados." },
  { icon: HeartHandshake, title: "Integração", text: "Olhar para o todo — respiração, sono, face e função oral como um sistema." },
  { icon: Star, title: "Confiança", text: "Construída através de resultados consistentes e transparência total." },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              Sobre
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              De odontopediatra a{" "}
              <span className="text-gradient">Especialista Integradora</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A Dra. Cristiane Martins começou a sua carreira na odontopediatria clássica. Ao longo dos anos,
              percebeu que muitos dos problemas que tratava na boca tinham raízes mais profundas:
              na respiração, no sono, no crescimento facial.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Essa percepção transformou a sua prática. Hoje, a Dra. Cristiane não olha apenas para dentes — 
              ela observa o sistema completo. Cada criança é avaliada através de quatro domínios interligados,
              com foco na prevenção e na detecção precoce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Arquétipos */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">A Especialista Integradora</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Enquanto outros profissionais tratam sintomas isolados, a Dra. Cristiane conecta os pontos.
                Ela vê padrões onde outros veem problemas separados, integrando respiração, sono, crescimento
                e função oral numa visão clínica unificada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">A Orientadora Preventiva</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A prevenção é o ato clínico mais poderoso. A Dra. Cristiane orienta famílias a identificar
                sinais precoces, antes que se tornem problemas instalados, transformando cada consulta
                num momento de aprendizagem e prevenção ativa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Valores <span className="text-gradient">profissionais</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <v.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
