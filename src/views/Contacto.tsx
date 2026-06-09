import Layout from "@/components/Layout";
import Providers from "@/views/Providers";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Clock, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  WHATSAPP_LINK,
  PHONE_LINK,
  PHONE_DISPLAY,
  LOCATION,
  SCHEDULE,
} from "@/lib/site";

const motivoOptions = [
  "Marcar Consulta Respira e Cresce 360",
  "Dúvida sobre respiração, sono ou crescimento",
  "Informações sobre a metodologia RC360",
  "Seguros e convenções",
  "Outro",
];

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceita a política de privacidade para enviar a mensagem.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Obrigada pelo teu contacto.",
        description: "Vou responder assim que possível.",
      });
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    }, 800);
  };

  return (
    <Providers>
    <Layout pathname="/contacto/">
      <PageHero
        eyebrow="Marcar consulta"
        title={<>O teu filho merece uma <span className="italic text-ouro-light">leitura integrada.</span></>}
        subtitle="A forma mais rápida de marcar é por WhatsApp — escreve RESPIRA e a nossa equipa trata do resto. Também podes ligar ou enviar mensagem pelo formulário."
      />

      {/* Vias rápidas de contacto */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-azul-dark text-white rounded-2xl p-6 flex flex-col gap-2 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 transition-transform duration-200 ease-out-expo"
            >
              <MessageCircle className="w-6 h-6 text-ouro-light" />
              <span className="font-semibold mt-1">WhatsApp</span>
              <span className="text-sm text-white/70">Escreve RESPIRA — resposta rápida</span>
            </a>
            <a
              href={PHONE_LINK}
              className="bg-white border border-border/70 rounded-2xl p-6 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 transition-[transform,background-color,border-color,box-shadow] ease-out-expo"
            >
              <Phone className="w-6 h-6 text-ouro" />
              <span className="font-semibold text-azul mt-1">Telefone</span>
              <span className="text-sm text-muted-foreground">{PHONE_DISPLAY}</span>
            </a>
            <div className="bg-white border border-border/70 rounded-2xl p-6 flex flex-col gap-2">
              <MapPin className="w-6 h-6 text-salvia" />
              <span className="font-semibold text-azul mt-1">Localização</span>
              <span className="text-sm text-muted-foreground">{LOCATION}</span>
            </div>
            <div className="bg-white border border-border/70 rounded-2xl p-6 flex flex-col gap-2">
              <Clock className="w-6 h-6 text-salvia" />
              <span className="font-semibold text-azul mt-1">Horário</span>
              <span className="text-sm text-muted-foreground">{SCHEDULE}</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="eyebrow mb-3.5 block">Prefere escrever?</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-azul mb-4 leading-snug">
                Conta-me o que te preocupa.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Preenche os teus dados e descreve brevemente a situação. Isso ajuda-me a orientar
                melhor a resposta e a preparar a consulta.
              </p>
              <div className="bg-ouro-bg rounded-xl p-4 border-l-4 border-ouro">
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Este contacto não substitui avaliação clínica. Vou responder assim que possível.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-border/70 shadow-sm space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Nome</label>
                    <Input placeholder="O teu nome" required className="rounded-xl" />
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
                    <Input placeholder="Ex: 5 anos" className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Motivo do contacto</label>
                  <select
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Seleciona um motivo</option>
                    {motivoOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Mensagem</label>
                  <Textarea
                    placeholder="Conta-me um pouco sobre a situação ou a tua dúvida..."
                    rows={5}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="consent" className="text-[13px] text-muted-foreground leading-relaxed cursor-pointer">
                    Autorizo o tratamento dos meus dados pessoais para efeitos de resposta ao contacto,
                    de acordo com a política de privacidade. Os dados não serão partilhados com terceiros.
                  </label>
                </div>

                <Button type="submit" disabled={loading} className="w-full rounded-xl bg-azul-dark hover:bg-azul" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "A enviar..." : "Enviar mensagem"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
    </Providers>
  );
};

export default Contacto;
