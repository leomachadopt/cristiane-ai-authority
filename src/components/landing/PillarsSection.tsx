import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Moon, Brain, Smile } from "lucide-react";

const pillars = [
  {
    icon: Wind,
    title: "Respiração",
    description: "A base de tudo. Uma respiração nasal adequada influencia o sono, o crescimento facial e o desenvolvimento global.",
    color: "primary",
  },
  {
    icon: Moon,
    title: "Sono",
    description: "Qualidade do sono impacta diretamente o crescimento, o comportamento e a capacidade de aprendizagem da criança.",
    color: "lavender",
  },
  {
    icon: Brain,
    title: "Crescimento Craniofacial",
    description: "O desenvolvimento da face e maxilares é um indicador crucial que reflecte e influencia todos os outros sistemas.",
    color: "accent",
  },
  {
    icon: Smile,
    title: "Função Oral",
    description: "Amamentação, mastigação, deglutição e fala — funções que moldam o desenvolvimento e revelam sinais precoces.",
    color: "coral",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  lavender: "bg-lavender/10 text-lavender",
  accent: "bg-accent/10 text-accent",
  coral: "bg-coral/10 text-coral",
};

const PillarsSection = () => {
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
            Os 4 Pilares
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Quatro sistemas, uma <span className="text-gradient">visão integrada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada pilar influencia os outros. A abordagem integrada permite identificar
            padrões precoces e intervir de forma preventiva.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${colorMap[pillar.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection lines visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            "Tudo está ligado. Quando olhamos para cada pilar isoladamente, perdemos o sistema."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
