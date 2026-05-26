import { motion } from "framer-motion";
import { Wind, Check } from "lucide-react";

const leitura = [
  "Cavidade oral e função",
  "Padrão respiratório",
  "Crescimento craniofacial",
  "Função oral integrada",
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative bg-azul-dark overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* anéis decorativos */}
      <div className="pointer-events-none absolute right-[-120px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden md:block">
        <div className="absolute inset-0 rounded-full border border-ouro/[0.06]" />
        <div className="absolute inset-[60px] rounded-full border border-teal/[0.07]" />
        <div className="absolute inset-[120px] rounded-full border border-ouro/[0.08]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_50%,hsl(var(--teal)/0.07),transparent_70%)]" />

      <div className="container relative z-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-ouro/10 border border-ouro/20 text-ouro-light text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-ouro breathing" />
              Odontopediatria Integrativa · Oliveira de Azeméis
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6">
              Eu não olho<br />só para dentes.<br />Eu observo{" "}
              <span className="italic text-ouro-light">desenvolvimento.</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-9">
              Se o teu filho respira pela boca, ronca, tem sono agitado ou a mordida não parece
              certa — <strong className="text-white/85 font-medium">esses sinais estão ligados.</strong>{" "}
              Há 25 anos que ajudo famílias a ver o que outros não vêem.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-11">
              <a
                href="#consulta"
                className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
              >
                <Wind className="w-4 h-4" /> Marcar Consulta RC360
              </a>
              <a
                href="#sinais"
                className="inline-flex items-center gap-2 border-2 border-white/35 text-white hover:bg-white/10 active:scale-[0.97] px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
              >
                Ver os sinais a observar
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 border-t border-white/[0.08] text-[13px] text-white/45">
              <span><strong className="text-white/70 font-medium">25 anos</strong> de experiência</span>
              <span className="text-white/15">·</span>
              <span>Metodologia <strong className="text-white/70 font-medium">exclusiva RC360</strong></span>
              <span className="text-white/15">·</span>
              <span>Avaliação <strong className="text-white/70 font-medium">integrada e sistémica</strong></span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden bg-white/[0.04] border border-white/[0.08] aspect-[4/5] flex items-center justify-center">
              {/* SUBSTITUIR pela foto da Dra. Cristiane (cenário podcast ou clínica) */}
              <div className="text-center px-8">
                <div className="text-5xl opacity-20">👩‍⚕️</div>
                <p className="text-xs text-white/30 mt-3 leading-relaxed">
                  Foto da Dra. Cristiane<br />(cenário podcast ou clínica)
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl p-5 shadow-[0_16px_48px_rgba(0,0,0,0.25)] max-w-[240px]">
              <p className="eyebrow mb-2.5">A minha leitura clínica</p>
              {leitura.map((item) => (
                <div key={item} className="flex items-center gap-2 py-1 text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-teal shrink-0" strokeWidth={3} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
