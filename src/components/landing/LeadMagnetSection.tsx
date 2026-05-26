import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const perguntas = [
  "O meu filho respira pela boca com frequência?",
  "Tem ronco ou sono agitado?",
  "Tem lábios frequentemente secos ou gretados?",
  "A mordida parece não encaixar bem?",
  "Tem dificuldades de atenção ou comportamento?",
  "Noto alguma assimetria no rosto?",
  "Tem dificuldades na mastigação ou fala?",
];

const LeadMagnetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Pedido recebido!",
      description: "Vais receber o guia gratuito no teu email dentro de momentos.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      ref={ref}
      id="checklist"
      className="py-20 px-6 border-y border-ouro/20 bg-[linear-gradient(135deg,hsl(var(--ouro-bg)),#FFF6E8)]"
    >
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center">
          {/* Checklist visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          >
            <p className="eyebrow mb-4">Checklist gratuito</p>
            {perguntas.map((q) => (
              <div key={q} className="flex items-start gap-2.5 py-2.5 border-b border-border/50 last:border-0 text-sm text-foreground">
                <span className="w-5 h-5 border-2 border-ouro rounded shrink-0 mt-0.5" />
                {q}
              </div>
            ))}
          </motion.div>

          {/* CTA + form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="eyebrow mb-3 block">Para ti, de graça</span>
            <h3 className="font-display text-2xl md:text-[28px] font-bold text-azul leading-snug mb-3">
              Os 7 sinais que merecem atenção — e o que fazer se os reconheces
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
              Recebe o guia completo com os 7 sinais, o que significa cada um, quando procurar ajuda
              e como funciona a avaliação integrada RC360.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <input
                required
                type="text"
                placeholder="O teu nome"
                className="px-4 py-3 rounded-[9px] border-[1.5px] border-border bg-white text-sm outline-none focus:border-ouro transition-colors"
              />
              <input
                required
                type="email"
                placeholder="O teu email"
                className="px-4 py-3 rounded-[9px] border-[1.5px] border-border bg-white text-sm outline-none focus:border-ouro transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-6 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
              >
                Quero receber o guia gratuito <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-muted-foreground leading-snug mt-1">
                Sem spam. Apenas conteúdo que importa para a saúde do teu filho. Podes cancelar a
                qualquer momento.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
