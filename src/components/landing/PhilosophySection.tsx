import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Shield, Eye, HeartHandshake } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Integração",
    description: "Não há sistemas isolados. Respiração, sono, crescimento e função oral são peças do mesmo puzzle.",
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Observar cedo para intervir antes. A prevenção é o ato clínico mais poderoso.",
  },
  {
    icon: Eye,
    title: "Clareza",
    description: "Cada família merece entender o que está a acontecer e porquê. Comunicação sem jargão.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento",
    description: "O desenvolvimento é um processo contínuo. Cada consulta é um ponto numa linha de cuidado.",
  },
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-lavender/10 text-lavender mb-4">
            Filosofia Clínica
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Princípios que guiam a <span className="text-gradient">prática clínica</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
