import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
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
  const [checked, setChecked] = useState<boolean[]>(() => perguntas.map(() => false));
  const [loading, setLoading] = useState(false);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const respostas = perguntas.filter((_, i) => checked[i]);

    setLoading(true);
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ nome, email, respostas }),
      });
      if (!res.ok) throw new Error("falha");
      toast({
        title: "Pedido recebido!",
        description: "Vais receber o guia gratuito no teu email dentro de momentos.",
      });
      form.reset();
      setChecked(perguntas.map(() => false));
    } catch {
      toast({
        title: "Não foi possível enviar",
        description: "Tenta novamente ou escreve-nos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="checklist"
      className="py-20 px-6 border-y border-ouro/20 bg-[linear-gradient(135deg,hsl(var(--ouro-bg)),#F7EDD9)]"
    >
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center">
          {/* Checklist interativo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          >
            <p className="eyebrow mb-1">Checklist gratuito</p>
            <p className="text-[13px] text-muted-foreground mb-4">
              Assinala os que reconheces — seguem com o teu pedido.
            </p>
            {perguntas.map((q, i) => (
              <button
                type="button"
                key={q}
                onClick={() => toggle(i)}
                aria-pressed={checked[i]}
                className="flex items-start gap-2.5 py-2.5 border-b border-border/50 last:border-0 text-sm text-foreground w-full text-left group"
              >
                <span
                  className={`w-5 h-5 rounded shrink-0 mt-0.5 border-2 flex items-center justify-center transition-colors ${
                    checked[i] ? "bg-coral border-coral" : "border-ouro group-hover:border-coral"
                  }`}
                >
                  {checked[i] && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </span>
                {q}
              </button>
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
                name="nome"
                type="text"
                placeholder="O teu nome"
                className="px-4 py-3 rounded-[9px] border-[1.5px] border-border bg-white text-sm outline-none focus:border-ouro transition-colors"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="O teu email"
                className="px-4 py-3 rounded-[9px] border-[1.5px] border-border bg-white text-sm outline-none focus:border-ouro transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral disabled:opacity-60 text-white active:scale-[0.97] px-6 py-3.5 rounded-full text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
              >
                {loading ? "A enviar..." : <>Quero receber o guia gratuito <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-[13px] text-muted-foreground leading-snug mt-1">
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
