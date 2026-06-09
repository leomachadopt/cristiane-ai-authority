import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

/** Drawer mobile (hambúrguer). Os links também existem em HTML estático no Header. */
const MobileMenu = ({ nav, pathname }: { nav: NavItem[]; pathname: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button className="p-2 text-azul" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-full glass border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href ? "bg-azul/10 text-azul" : "text-muted-foreground hover:text-azul"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contacto/"
                onClick={() => setOpen(false)}
                className="mt-2 bg-ouro hover:bg-ouro-light text-ouro-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center transition-[transform,background-color] duration-200 ease-out-expo active:scale-[0.97]"
              >
                Marcar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
