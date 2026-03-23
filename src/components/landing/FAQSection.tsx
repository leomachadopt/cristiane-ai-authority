import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a abordagem integrada do desenvolvimento infantil?",
    answer: "É uma forma de observar o desenvolvimento da criança que não olha para sintomas isolados, mas para as conexões entre respiração, sono, crescimento craniofacial e função oral. Quando um destes pilares está comprometido, influencia todos os outros.",
  },
  {
    question: "A partir de que idade devo procurar avaliação?",
    answer: "Quanto mais cedo, melhor. Muitos sinais podem ser observados desde os primeiros meses de vida — na amamentação, na respiração, no padrão de sono. A avaliação precoce permite intervir antes que padrões se instalem.",
  },
  {
    question: "O que acontece numa primeira consulta?",
    answer: "É uma avaliação completa que observa os 4 pilares do desenvolvimento. A família recebe uma explicação clara do que foi observado e, se necessário, um plano de acompanhamento personalizado.",
  },
  {
    question: "Quais os sinais de alerta mais comuns?",
    answer: "Respiração pela boca, ronco, sono agitado, dificuldade na amamentação, mastigação de um lado só, face alongada ou maxilares estreitos. Estes sinais podem parecer isolados mas frequentemente estão interligados.",
  },
];

interface FAQSectionProps {
  items?: typeof faqs;
  title?: string;
  subtitle?: string;
}

const FAQSection = ({ items = faqs, title, subtitle }: FAQSectionProps) => {
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-warm/10 text-warm mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title || <>Dúvidas <span className="text-gradient">comuns</span></>}
          </h2>
          {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
