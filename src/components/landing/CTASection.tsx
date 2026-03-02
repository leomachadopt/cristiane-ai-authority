import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — will be connected to Cloud later
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto brevemente.",
      });
      (e.target as HTMLFormElement).reset();
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
              Deixe os seus dados e entraremos em contacto para esclarecer todas as suas dúvidas.
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
            <div>
              <label className="text-sm font-medium mb-1.5 block">Telefone (opcional)</label>
              <Input placeholder="+351 ..." className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
              <Textarea
                placeholder="Conte-nos um pouco sobre a sua situação ou dúvida..."
                rows={4}
                className="rounded-xl"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">
              <Send className="w-4 h-4 mr-2" />
              {loading ? "A enviar..." : "Enviar Mensagem"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
