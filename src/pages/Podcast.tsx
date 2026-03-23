import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mic, Play, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const hosts = [
  {
    name: "Dra. Cristiane Martins",
    role: "Odontopediatria Integrativa",
    initials: "CM",
    color: "primary",
  },
  {
    name: "Leonardo",
    role: "Co-apresentador",
    initials: "LM",
    color: "accent",
  },
  {
    name: "Dra. Vânia",
    role: "Co-apresentadora",
    initials: "VS",
    color: "lavender",
  },
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
  {
    title: "Episódio 1 — O que é a abordagem integrada?",
    description: "Introdução ao conceito de observação integrada do desenvolvimento infantil.",
    duration: "Em breve",
  },
  {
    title: "Episódio 2 — Respiração oral: mitos e realidades",
    description: "O que sabemos sobre respiração oral e como afecta o desenvolvimento da criança.",
    duration: "Em breve",
  },
  {
    title: "Episódio 3 — Quando procurar ajuda?",
    description: "Sinais que os pais devem observar e quando faz sentido procurar avaliação.",
    duration: "Em breve",
  },
];

const colorBg: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  lavender: "bg-lavender/10 text-lavender",
};

const PodcastPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              Podcast
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Família 360{" "}
              <span className="text-gradient">Saúde Integrada</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conversas claras sobre respiração, sono, função e crescimento.
              Um podcast que transforma conhecimento clínico em orientação acessível para famílias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the podcast */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                Porque <span className="text-gradient">nasceu</span> este podcast
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Muitas famílias chegam à consulta com dúvidas que podiam ter sido respondidas antes.
                Este podcast nasce da vontade de levar o conhecimento clínico para além das paredes do consultório.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada episódio é uma conversa entre profissionais que acreditam na prevenção, 
                na clareza e na importância de olhar para a criança como um todo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 via-lavender/10 to-accent/10 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Mic className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-1">Família 360</h3>
              <p className="text-sm text-muted-foreground">Saúde Integrada</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hosts */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Quem <span className="text-gradient">participa</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {hosts.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className={`w-16 h-16 rounded-full ${colorBg[h.color]} flex items-center justify-center mx-auto mb-4`}>
                  <span className="font-display font-bold text-lg">{h.initials}</span>
                </div>
                <h3 className="font-display font-bold">{h.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{h.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Temas <span className="text-gradient">abordados</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border/50"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Episódios em <span className="text-gradient">destaque</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-sm mb-1">{ep.title}</h3>
                  <p className="text-xs text-muted-foreground">{ep.description}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{ep.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">
              Este conteúdo ajuda famílias a entenderem melhor o desenvolvimento dos seus filhos
            </h2>
            <p className="text-muted-foreground mb-6">
              Se tem dúvidas ou quer saber mais, estamos aqui para ajudar.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contacto">Fale Connosco</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PodcastPage;
