import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              A Especialista Integradora
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Uma visão que une o que outros{" "}
              <span className="text-gradient">tratam em separado</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Dra. Cristiane Martins é odontopediatra com uma abordagem clínica que vai muito além dos dentes. 
              Ela observa como a respiração, o sono, o crescimento craniofacial e a função oral se conectam 
              e influenciam mutuamente no desenvolvimento infantil.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A sua missão é antecipar problemas, integrar observações e orientar famílias 
              com clareza e rigor científico — transformando a consulta num momento de compreensão real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-lavender/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary">CM</span>
                </div>
                <p className="font-display font-semibold text-lg">Dra. Cristiane Martins</p>
                <p className="text-sm text-muted-foreground mt-1">Odontopediatria Integrativa</p>
              </div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
