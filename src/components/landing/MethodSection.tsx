import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Search, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Observação Integrada",
    description: "Avaliação completa dos 4 pilares — respiração, sono, crescimento craniofacial e função oral.",
  },
  {
    icon: Stethoscope,
    step: "02",
    title: "Análise de Padrões",
    description: "Identificação de conexões entre sinais que, isolados, poderiam passar despercebidos.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Plano Personalizado",
    description: "Orientação clara para a família com passos concretos e acompanhamento definido.",
  },
  {
    icon: Users,
    step: "04",
    title: "Acompanhamento Contínuo",
    description: "Monitorização do desenvolvimento ao longo do tempo, ajustando a abordagem conforme necessário.",
  },
];

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
            Método Respira e Cresce 360
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Uma metodologia com <span className="text-gradient">nome e estrutura</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Método Respira e Cresce 360 organiza a observação clínica numa lógica 
            integrada, preventiva e acessível para as famílias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 h-full border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <span className="text-4xl font-display font-bold text-accent/20 mb-2 block">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link to="/metodologia">Conhecer a Metodologia</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
