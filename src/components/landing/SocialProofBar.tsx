import { Award, Wind, Mic, Link2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { icon: Award, strong: "25 anos", text: "de experiência clínica" },
  { icon: Wind, strong: "Metodologia RC360", text: "exclusiva e proprietária" },
  { icon: Mic, strong: "Podcast Família 360", text: "Saúde Integrada" },
  { icon: Link2, strong: "Equipa integrada", text: "multidisciplinar" },
];

const SocialProofBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white border-b border-border/60 py-9 px-6"
    >
      <div className="container max-w-5xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {items.map((item, i) => (
          <div key={item.strong} className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-ouro shrink-0" />
              <div className="text-sm text-muted-foreground leading-tight">
                <strong className="block text-[15px] font-bold text-azul">{item.strong}</strong>
                {item.text}
              </div>
            </div>
            {i < items.length - 1 && <div className="hidden md:block w-px h-9 bg-border" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialProofBar;
