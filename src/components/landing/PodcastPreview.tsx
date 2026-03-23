import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PodcastPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Visual */}
              <div className="bg-gradient-to-br from-primary/10 via-lavender/10 to-accent/10 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mic className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Família 360</h3>
                <p className="text-sm text-muted-foreground">Saúde Integrada</p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4 w-fit">
                  Podcast
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                  Conversas claras sobre respiração, sono, função e crescimento
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A Dra. Cristiane Martins, em conversa com o Leonardo e a Dra. Vânia, 
                  explora os temas que mais importam para o desenvolvimento infantil.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-full">
                    <Link to="/podcast">
                      Ouvir Episódios <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPreview;
