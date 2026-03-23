import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite a política de privacidade para enviar a mensagem.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Obrigado pelo seu contacto.",
        description: "Entraremos em resposta assim que possível.",
      });
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    }, 800);
  };

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-warm/10 text-warm mb-4">
              Contacte-nos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Quer saber mais sobre a{" "}
              <span className="text-gradient">abordagem integrada</span>?
            </h2>
            <p className="text-muted-foreground">
              Preencha os seus dados e descreva brevemente a situação. 
              Entraremos em contacto assim que possível.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nome</label>
                <Input placeholder="O seu nome" required className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input type="email" placeholder="email@exemplo.com" required className="rounded-xl" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Telefone (opcional)</label>
                <Input placeholder="+351 ..." className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Idade da criança (opcional)</label>
                <Input placeholder="Ex: 3 anos" className="rounded-xl" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
              <Textarea
                placeholder="Conte-nos um pouco sobre a sua situação ou dúvida..."
                rows={4}
                className="rounded-xl"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="cta-consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                className="mt-0.5"
              />
              <label htmlFor="cta-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                Autorizo o tratamento dos meus dados pessoais para efeitos de resposta ao contacto, 
                de acordo com a política de privacidade.
              </label>
            </div>

            <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">
              <Send className="w-4 h-4 mr-2" />
              {loading ? "A enviar..." : "Enviar Pedido"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
