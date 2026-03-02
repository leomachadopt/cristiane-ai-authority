import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              Contacto
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vamos <span className="text-gradient">conversar</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tem dúvidas sobre o desenvolvimento do seu filho? Quer saber mais sobre a abordagem integrada?
              Envie-nos uma mensagem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-2xl mb-6">Informações de contacto</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">contacto@dracristianemartins.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Telefone</p>
                      <p className="text-sm text-muted-foreground">+351 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-lavender/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-lavender" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Localização</p>
                      <p className="text-sm text-muted-foreground">Lisboa, Portugal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <form
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
                  <label className="text-sm font-medium mb-1.5 block">Assunto</label>
                  <Input placeholder="Sobre o que gostaria de falar?" className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
                  <Textarea
                    placeholder="Conte-nos um pouco sobre a sua situação ou dúvida..."
                    rows={5}
                    required
                    className="rounded-xl"
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full rounded-xl" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "A enviar..." : "Enviar Mensagem"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
