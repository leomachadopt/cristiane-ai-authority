import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wind, MessageCircle, MapPin, Phone, Instagram } from "lucide-react";
import {
  WHATSAPP_LINK,
  PHONE_LINK,
  PHONE_DISPLAY,
  LOCATION,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  CLINIC_INSTAGRAM,
  WEBSITE,
} from "@/lib/site";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/familias", label: "Sinais a Observar" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contacto", label: "Contacto" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de urgência suave */}
      <div className="bg-azul text-white text-[13px] py-2.5 px-4 flex items-center justify-center gap-2 text-center">
        <Wind className="w-4 h-4 text-ouro-light shrink-0" />
        <span className="text-white/80">
          Consulta <strong className="text-ouro-light font-semibold">Respira e Cresce 360</strong> disponível em {LOCATION}
        </span>
        <Link to="/contacto" className="hidden sm:inline text-ouro-light font-semibold border-b border-ouro/40 hover:opacity-80 transition">
          Ver como funciona →
        </Link>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 glass transition-[box-shadow] duration-200 ease-out-expo ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-[68px]">
          <Link to="/" className="leading-tight">
            <span className="block font-display text-base md:text-lg font-semibold text-azul">
              Dra. Cristiane Martins
            </span>
            <span className="block text-[10px] md:text-[11px] text-muted-foreground tracking-wide">
              Odontopediatria Integrativa · RC360
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? "text-azul"
                    : "text-muted-foreground hover:text-azul"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-ouro hover:bg-ouro-light text-ouro-foreground active:scale-[0.97] px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo hover:-translate-y-0.5"
            >
              Marcar Consulta
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-azul"
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
              className="lg:hidden glass border-t border-border"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-azul/10 text-azul"
                        : "text-muted-foreground hover:text-azul"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 bg-ouro hover:bg-ouro-light text-ouro-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center transition-[transform,background-color] duration-200 ease-out-expo active:scale-[0.97]"
                >
                  Marcar Consulta
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#060E16] text-white pt-14 pb-7 px-6">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-10 md:gap-12 mb-10">
            <div>
              <h3 className="font-display font-semibold text-lg text-white">Dra. Cristiane Martins</h3>
              <p className="text-[11px] text-white/30 tracking-wide mb-4">
                Odontopediatria Integrativa · RC360
              </p>
              <p className="text-sm text-white/35 leading-relaxed max-w-xs">
                Especialista em Odontopediatria Integrativa, Ortopedia Funcional dos Maxilares e
                Medicina do Sono. Criadora da Metodologia Respira e Cresce 360.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 transition"
              >
                <Instagram className="w-4 h-4 text-teal" />
                <span className="text-sm text-white">{INSTAGRAM_HANDLE}</span>
              </a>
            </div>

            <div>
              <h4 className="eyebrow mb-4">Navegação</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-white/35 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="eyebrow mb-4">Contactos</h4>
              <div className="flex flex-col gap-2.5">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/35 hover:text-white/80 transition-colors">
                  <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp — escreve RESPIRA
                </a>
                <a href={PHONE_LINK} className="flex items-center gap-2 text-sm text-white/35 hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> {PHONE_DISPLAY}
                </a>
                <span className="flex items-center gap-2 text-sm text-white/35">
                  <MapPin className="w-4 h-4 shrink-0" /> {LOCATION}
                </span>
              </div>
              <div className="mt-4 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5">
                <p className="text-[11px] text-teal font-semibold">Clínica</p>
                <p className="text-sm text-white">{CLINIC_INSTAGRAM}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
            <span className="text-xs text-white/20">
              © {new Date().getFullYear()} Dra. Cristiane Martins · Todos os direitos reservados
            </span>
            <span className="text-xs text-white/15">
              Criadora da <strong className="text-white/30 font-semibold">Metodologia Respira e Cresce 360</strong>
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
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
    </div>
  );
};

export default Layout;
