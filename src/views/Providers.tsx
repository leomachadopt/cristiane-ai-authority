import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";

/**
 * Providers partilhados por cada island de página (substitui o antigo App.tsx).
 * Inclui MotionConfig (respeita prefers-reduced-motion) e os Toasters para os
 * formulários. Montado uma vez por página, dentro do island React.
 */
const Providers = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
      {children}
      <Toaster />
      <Sonner />
    </MotionConfig>
  </TooltipProvider>
);

export default Providers;
