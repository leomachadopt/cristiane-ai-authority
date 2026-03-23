import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/familias", label: "Para Famílias" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display font-bold text-xl md:text-2xl text-gradient">
            Dra. Cristiane Martins
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4 rounded-full">
              <Link to="/contacto">Fale Connosco</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border"
            >
              <div className="container py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 rounded-full">
                  <Link to="/contacto" onClick={() => setMobileOpen(false)}>
                    Fale Connosco
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-3 text-gradient">
                Dra. Cristiane Martins
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Especialista em desenvolvimento infantil integrado.
                Respiração, sono, crescimento craniofacial e função oral.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-3">Navegação</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-3">Contacto</h4>
              <p className="text-sm text-muted-foreground">
                Entre em contacto para saber mais sobre a abordagem integrada.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                <Link to="/contacto">Enviar Mensagem</Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dra. Cristiane Martins. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
