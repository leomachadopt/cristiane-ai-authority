import Providers from "./Providers";
import Layout from "@/components/Layout";
import ConsultaSection from "@/components/landing/ConsultaSection";
import FAQSection from "@/components/landing/FAQSection";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, CalendarClock, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, LOCATION } from "@/lib/site";

const promessa = [
  { icon: ShieldCheck, t: "Não alarmamos", d: "Se estiver tudo bem, sais com essa certeza." },
  { icon: Heart, t: "Não vendemos tempo de consulta", d: "Vendemos compreensão — clareza sobre o que se passa." },
  { icon: Users, t: "Não substituímos o teu dentista", d: "Integramo-nos com ele e referenciamos quando necessário." },
];

const Consulta = () => (
  <Providers>
    <Layout pathname="/consulta/">
      {/* Oferta: para quem / o que acontece / o que leva + CTA */}
      <ConsultaSection ctaHref={WHATSAPP_LINK} />

      {/* A nossa promessa (mata o medo de marcar) */}
      <section className="py-16 md:py-20 bg-[#EDE5D5]">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <span className="eyebrow mb-3.5 block">A nossa promessa</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-azul">
              O que podes <span className="italic text-coral">esperar</span> de nós.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {promessa.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="card-soft p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-salvia/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-salvia" />
                </div>
                <h3 className="font-display text-lg font-bold text-azul mb-1.5">{p.t}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakes — a janela */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="bg-petroleo rounded-3xl p-8 md:p-10 text-center">
            <CalendarClock className="w-8 h-8 text-ouro-light mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              Há uma janela em que o crescimento ainda responde de forma simples.
            </h2>
            <p className="text-[17px] text-white/80 leading-relaxed max-w-2xl mx-auto">
              A primeira avaliação ideal acontece enquanto há crescimento ativo — tipicamente antes
              dos 7-8 anos. Não significa tratar já: muitas vezes significa apenas acompanhar com
              critério e intervir no momento certo. Mas essa janela não fica aberta para sempre.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ de objeções */}
      <FAQSection subtitle="As dúvidas mais comuns das famílias antes de marcar a Consulta RC360." />

      {/* CTA final */}
      <section className="py-16 md:py-20 px-6 text-center bg-[linear-gradient(135deg,#2C5F6F_0%,#244E5A_100%)]">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-5">
            Marcar Consulta <span className="italic text-ouro-light">Respira e Cresce 360</span>
          </h2>
          <p className="text-[17px] text-white/75 leading-relaxed max-w-lg mx-auto mb-8">
            A forma mais rápida é por WhatsApp — escreve <strong className="text-white">RESPIRA</strong> e
            a equipa trata do resto. Disponível em {LOCATION}.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="w-5 h-5" /> Escrever RESPIRA por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  </Providers>
);

export default Consulta;
