import { useState, useEffect } from "react";
import { Wind } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

/** Botão flutuante de WhatsApp que aparece após scroll. Island leve (client:idle). */
const FloatingCTA = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[60] bg-ouro hover:bg-ouro-light text-ouro-foreground pl-4 pr-5 py-3.5 rounded-full text-sm font-semibold shadow-[0_8px_32px_rgba(191,164,104,0.45)] flex items-center gap-2 transition-[transform,background-color,box-shadow,opacity] ease-out-expo duration-300 hover:-translate-y-0.5 active:scale-[0.97] ${
        scrolled ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <Wind className="w-4 h-4" />
      Marcar Consulta RC360
    </a>
  );
};

export default FloatingCTA;
