import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    not: "Tratar sintomas isolados",
    is: "Integrar observações clínicas num sistema coerente",
  },
  {
    not: "Esperar o problema aparecer",
    is: "Antecipar e prevenir com observação precoce",
  },
  {
    not: "Comunicação técnica e confusa",
    is: "Clareza que transforma a consulta em compreensão",
  },
  {
    not: "Consulta pontual sem seguimento",
    is: "Acompanhamento contínuo do desenvolvimento",
  },
];

const DifferentialSection = () => {
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-coral/10 text-coral mb-4">
            O Diferencial
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O que torna esta abordagem <span className="text-gradient">diferente</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item.not}</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm font-medium">{item.is}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
