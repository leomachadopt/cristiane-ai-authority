const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-azul-dark px-6 text-center">
    <div>
      <p className="font-display text-7xl font-bold text-ouro-light mb-3">404</p>
      <h1 className="font-display text-2xl font-bold text-white mb-3">
        Esta página não existe.
      </h1>
      <p className="text-white/70 mb-8 max-w-sm mx-auto">
        O endereço que procuravas não foi encontrado — mas o caminho para uma leitura integrada
        continua aqui.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-coral hover:bg-coral text-white active:scale-[0.97] px-7 py-3.5 rounded-full text-[15px] font-semibold transition-[transform,background-color,border-color,box-shadow,color,opacity] ease-out-expo"
      >
        Voltar ao início
      </a>
    </div>
  </div>
);

export default NotFound;
