import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, MapPin, Clock, Wind } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, LOCATION, SCHEDULE } from "@/lib/site";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="marcar"
      className="relative py-24 md:py-28 px-6 text-center overflow-hidden bg-[linear-gradient(135deg,#2C5F6F_0%,#244E5A_100%)]"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-ouro/[0.07]" />
      <div className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-salvia/[0.06]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="container max-w-2xl relative z-10"
      >
        <span className="inline-block bg-ouro/12 border border-ouro/20 text-ouro-light text-[13px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6">
          Pronto para dar o próximo passo?
        </span>
        <h2 className="font-display text-4xl md:text-[46px] font-bold text-white leading-[1.1] mb-5">
          O teu filho merece<br />uma leitura <span className="italic text-ouro-light">integrada.</span>
        </h2>
        <p className="text-[17px] text-white/75 leading-relaxed max-w-lg mx-auto mb-10">
          Não precisas de ter a certeza. Precisas apenas de ter uma dúvida. A Consulta Respira e
          Cresce 360 existe exactamente para isso — para dar clareza onde há dúvidas.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center mb-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral text-white active:scale-[0.97] px-8 py-4 rounded-full text-base font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" /> Escrever RESPIRA por WhatsApp
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 border-2 border-white/35 text-white hover:bg-white/10 active:scale-[0.97] px-8 py-4 rounded-full text-base font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
          >
            <Phone className="w-5 h-5" /> Ligar para a Clínica
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/65">
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {LOCATION}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {SCHEDULE}</span>
          <span className="flex items-center gap-1.5"><Wind className="w-4 h-4" /> Escreve RESPIRA por mensagem</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
