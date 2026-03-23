import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, BookOpen, ArrowRight, Download, Mic, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FAQSection from "@/components/landing/FAQSection";

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

const familiasFAQ = [
  {
    question: "O meu filho respira pela boca. É grave?",
    answer: "Pode ser um sinal importante. A respiração oral altera o padrão de crescimento facial, afecta o sono e a qualidade de vida. Recomendamos uma avaliação para perceber a causa e a melhor abordagem.",
  },
  {
    question: "Com que frequência deve haver acompanhamento?",
    answer: "Depende de cada caso. Após a avaliação inicial, é definido um plano personalizado que pode incluir reavaliações periódicas para monitorizar o desenvolvimento.",
  },
  {
    question: "As ferramentas de IA substituem a consulta?",
    answer: "Não. O Orientador Inteligente e a triagem inicial são ferramentas de apoio que ajudam a organizar informação. Não substituem avaliação clínica presencial.",
  },
  {
    question: "O que devo observar em casa?",
    answer: "Respiração pela boca, ronco, sono agitado, dificuldade na mastigação ou na fala. A checklist gratuita pode ajudá-lo a organizar estas observações.",
  },
  {
    question: "A avaliação é só para crianças com problemas?",
    answer: "Não. A avaliação preventiva é ideal para qualquer criança. Muitos sinais podem ser identificados precocemente, antes de se tornarem problemas instalados.",
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

      {/* What you find here */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              O que encontra <span className="text-gradient">aqui</span>
            </h2>
            <p className="text-muted-foreground">Recursos pensados para ajudar famílias a entender e agir.</p>
          </motion.div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-10 md:py-14">
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
            {/* Orientador Inteligente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Orientador Inteligente</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Precisa de ajuda para organizar sinais e dúvidas?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                O Orientador Inteligente pode ajudá-lo a perceber melhor o próximo passo.
                Com base nas suas respostas, pode explorar os recursos recomendados.
              </p>
              <p className="text-xs text-muted-foreground italic mb-5">
                Não substitui avaliação clínica.
              </p>
              <Button variant="outline" className="rounded-full" disabled>
                Começar <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Triagem Inteligente */}
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
              <h3 className="font-display font-bold text-xl mb-2">Triagem Inteligente</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Quer organizar melhor os sinais que observa?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A triagem inicial ajuda a reunir informação antes de decidir o próximo passo.
                Responda a um questionário guiado e receba orientação personalizada.
              </p>
              <p className="text-xs text-muted-foreground italic mb-5">
                Não substitui avaliação clínica.
              </p>
              <Button variant="outline" className="rounded-full" disabled>
                Iniciar Triagem <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-warm/5 via-coral/5 to-primary/5 rounded-2xl p-8 md:p-10 border border-border/50 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-warm/10 flex items-center justify-center mx-auto mb-5">
                <Download className="w-7 h-7 text-warm" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Checklist Respira. Dorme. Cresce.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                Receba gratuitamente uma checklist com os sinais que podem merecer atenção no desenvolvimento do seu filho.
              </p>
              <Button className="rounded-full px-8" disabled>
                <Download className="w-4 h-4 mr-2" />
                Receber Checklist
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

      {/* Podcast mini */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-lavender/10 to-accent/10 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg">Família 360</h3>
                <p className="text-xs text-muted-foreground">Saúde Integrada</p>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl mb-2">Oiça o nosso podcast</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Conversas claras sobre respiração, sono, função e crescimento infantil.
                </p>
                <Button asChild variant="outline" className="rounded-full w-fit">
                  <Link to="/podcast">
                    Conhecer o Podcast <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={familiasFAQ}
        title="Perguntas frequentes"
        subtitle="As dúvidas mais comuns dos pais sobre desenvolvimento infantil."
      />

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
