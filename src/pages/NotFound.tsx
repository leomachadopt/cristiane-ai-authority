import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-azul-dark px-6 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-ouro-light mb-3">404</p>
        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Esta página não existe.
        </h1>
        <p className="text-white/55 mb-8 max-w-sm mx-auto">
          O endereço que procuravas não foi encontrado — mas o caminho para uma leitura integrada
          continua aqui.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-ouro hover:bg-ouro-light text-ouro-foreground px-7 py-3.5 rounded-[10px] text-[15px] font-semibold transition-all"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
