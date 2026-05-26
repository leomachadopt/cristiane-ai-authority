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
    question: "A partir de que idade se faz a Consulta Respira e Cresce 360?",
    answer: "A consulta RC360 pode ser feita a partir dos 3-4 anos, quando já é possível observar padrões de crescimento e função com clareza suficiente. Idealmente, a primeira avaliação acontece antes dos 7-8 anos — quando ainda há crescimento ativo e mais margem para orientar o desenvolvimento de forma simples. Mas nunca é tarde de mais para perceber o que está a acontecer.",
  },
  {
    question: "A consulta RC360 substitui a ida ao dentista habitual?",
    answer: "Não — a Consulta RC360 é uma avaliação integrada do desenvolvimento e não substitui as consultas de rotina de medicina dentária. O que faz é exactamente isso: avaliar os quatro pilares em conjunto e orientar um plano por fases. Muitas vezes complementa e informa o tratamento dentário, e pode incluir referenciação para outros profissionais quando necessário.",
  },
  {
    question: "O meu filho tem 3 anos e respira pela boca — é cedo para vir?",
    answer: "Não. Quanto mais cedo observarmos, mais margem temos para agir de forma simples e eficaz. Aos 3 anos, a respiração oral pode já estar a influenciar o desenvolvimento do palato, a posição da língua e o padrão de sono. Uma avaliação precoce não significa tratamento imediato — pode significar simplesmente acompanhar com critério e intervir no momento certo.",
  },
  {
    question: "Disseram-me que “é normal” e “passa”. Devo mesmo vir?",
    answer: "Muitas famílias chegam à minha consulta depois de ouvir exactamente isso. Alguns sinais passam com o tempo — e outros não. A diferença está em avaliar com critério e de forma integrada. Na Consulta RC360, o que fazemos não é alarmar — é dar clareza. Se estiver tudo bem, saem com essa certeza. Se houver algo a acompanhar, saem com um plano.",
  },
  {
    question: "Como é que a consulta RC360 é diferente de uma consulta normal?",
    answer: "Uma consulta de medicina dentária convencional avalia a cavidade oral — dentes, gengivas, cáries. A Consulta RC360 vai além: observa os quatro pilares em conjunto (cavidade oral, respiração, crescimento craniofacial e função oral) e procura as relações entre eles. É essa leitura integrada que nos permite ver padrões que uma especialidade isolada não consegue identificar.",
  },
  {
    question: "Aceitam seguros de saúde?",
    answer: "Para informações sobre convenções e seguros, por favor contacta-nos directamente por WhatsApp ou telefone. A nossa equipa esclarece tudo antes da marcação.",
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
    <section ref={ref} id="faq" className="py-20 md:py-24 bg-[#F4F7F9]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-3.5 block">Perguntas frequentes</span>
          <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15]">
            {title || <>Dúvidas que as famílias <span className="italic text-ouro">costumam ter.</span></>}
          </h2>
          {subtitle && <p className="text-muted-foreground max-w-xl mx-auto mt-4">{subtitle}</p>}
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
