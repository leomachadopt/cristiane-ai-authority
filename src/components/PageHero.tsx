import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

/** Hero compacto e escuro, partilhado pelas páginas internas. */
const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative bg-azul-dark overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border border-ouro/[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_30%,hsl(var(--salvia)/0.06),transparent_70%)]" />
      <div className="container max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
          <span className="eyebrow mb-4 block text-ouro">{eyebrow}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.12] mb-5">
            {title}
          </h1>
          {subtitle && <p className="text-lg text-white/75 leading-relaxed max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
