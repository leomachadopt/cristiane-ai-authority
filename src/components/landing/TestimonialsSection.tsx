import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const depoimentos = [
  {
    text: "O meu filho tinha 5 anos quando fui pela primeira vez. Disseram-nos que era normal respirar pela boca. A Dra. Cristiane foi a única que nos explicou exactamente o que estava a acontecer e porquê. Um ano depois, a diferença é enorme.",
    iniciais: "MA",
    nome: "Mãe do António, 6 anos",
    detalhe: "Tratamento de respiração oral e ortopedia funcional",
  },
  {
    text: "Fui a vários especialistas antes. A Dra. Cristiane foi a única que ligou os pontos — o sono, a respiração, a arcada estreita. Percebemos finalmente o que estava a acontecer com a nossa filha. A consulta RC360 mudou o rumo do tratamento dela.",
    iniciais: "RI",
    nome: "Pai da Rita, 8 anos",
    detalhe: "Consulta Respira e Cresce 360",
  },
  {
    text: "Saímos da consulta com um plano claro — pela primeira vez. Não com mais dúvidas. A Dra. Cristiane explicou tudo de forma simples, com clareza e sem nos assustar. Sentimos que estávamos com alguém que realmente percebe de crianças.",
    iniciais: "SC",
    nome: "Mãe do Santiago, 7 anos",
    detalhe: "Avaliação integrada RC360",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="depoimentos" className="py-20 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow mb-3.5 block">O que dizem as famílias</span>
          <h2 className="font-display text-3xl md:text-[40px] font-bold text-azul leading-[1.15]">
            Famílias que <span className="italic text-ouro">encontraram</span><br />o que procuravam.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.nome}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
              className="relative bg-background rounded-2xl p-7 border border-border/70"
            >
              <span className="absolute top-3 left-5 font-display text-6xl text-ouro/40 leading-none select-none">&ldquo;</span>
              <p className="relative text-[15px] text-muted-foreground leading-relaxed italic pt-6">
                {d.text}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/70">
                <div className="w-10 h-10 rounded-full bg-salvia/15 flex items-center justify-center text-sm font-bold text-[#3C5E46] shrink-0">
                  {d.iniciais}
                </div>
                <div>
                  <p className="text-sm font-semibold text-azul leading-tight">{d.nome}</p>
                  <p className="text-[13px] text-muted-foreground">{d.detalhe}</p>
                  <p className="text-sm text-ouro mt-0.5">★★★★★</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[13px] text-muted-foreground/70 mt-8 max-w-lg mx-auto">
          Depoimentos ilustrativos — substituir por testemunhos reais de famílias acompanhadas.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
