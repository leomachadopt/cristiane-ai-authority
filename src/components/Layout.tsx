/**
 * Pass-through. O header, footer e o botão flutuante passaram para o BaseLayout
 * (Astro, HTML estático). Mantém-se a assinatura para as views não mudarem.
 */
const Layout = ({ children }: { children: React.ReactNode; pathname?: string }) => <>{children}</>;

export default Layout;
