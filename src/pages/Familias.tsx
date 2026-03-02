import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const educationalContent = [
  {
    title: "Respiração bucal: o que os pais devem saber",
    summary: "A respiração pela boca não é apenas um hábito — é um sinal clínico que pode afectar o sono, o crescimento facial e o desenvolvimento global da criança.",
  },
  {
    title: "Sinais de alerta no sono infantil",
    summary: "Ronco, sono agitado e transpiração excessiva podem indicar distúrbios respiratórios do sono que merecem atenção clínica.",
  },
  {
    title: "O papel da amamentação no desenvolvimento facial",
    summary: "A amamentação natural estimula o crescimento harmonioso dos maxilares e estabelece padrões funcionais saudáveis.",
  },
];

const Familias = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-warm/10 text-warm mb-4">
              Para Famílias
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Informação clara para pais{" "}
              <span className="text-gradient">atentos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aqui encontra conteúdo educativo, ferramentas inteligentes e respostas às dúvidas 
              mais comuns sobre o desenvolvimento do seu filho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ferramentas <span className="text-gradient">inteligentes</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tecnologia ao serviço das famílias, com o conhecimento e o tom clínico da Dra. Cristiane.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Assistente IA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Tire dúvidas sobre respiração, sono e desenvolvimento infantil com o nosso assistente 
                inteligente. Respostas baseadas no conhecimento clínico da Dra. Cristiane, com 
                tom sereno e acessível.
              </p>
              <Button variant="outline" className="rounded-full" disabled>
                Em breve <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <ClipboardCheck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Triagem Inteligente</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Responda a um questionário guiado e descubra se o seu filho apresenta sinais que 
                merecem avaliação clínica. A IA analisa as respostas e fornece orientação personalizada.
              </p>
              <Button variant="outline" className="rounded-full" disabled>
                Em breve <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Conteúdo <span className="text-gradient">educativo</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {educationalContent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <BookOpen className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
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
              Tem dúvidas sobre o desenvolvimento do seu filho?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contacto. Teremos todo o gosto em ajudar.
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

export default Familias;
