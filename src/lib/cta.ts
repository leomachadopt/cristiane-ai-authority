import { WHATSAPP_LINK } from "@/lib/site";

export interface CtaBlock {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  button: string;
  external: boolean;
}

const CTAS: Record<string, CtaBlock> = {
  "agendar-consulta": {
    eyebrow: "Próximo passo",
    title: "O teu filho merece uma leitura integrada.",
    text: "A Consulta Respira e Cresce 360 observa os quatro pilares em conjunto e dá-te clareza — não mais dúvidas. Escreve RESPIRA por WhatsApp.",
    href: WHATSAPP_LINK,
    button: "Marcar Consulta RC360",
    external: true,
  },
  checklist: {
    eyebrow: "Para ti, de graça",
    title: "Os 7 sinais que merecem atenção.",
    text: "Recebe o guia gratuito com os sinais a observar no desenvolvimento do teu filho — e o que fazer se os reconheces.",
    href: "/familias/#checklist",
    button: "Quero o guia gratuito",
    external: false,
  },
  podcast: {
    eyebrow: "Família 360",
    title: "Ouve o podcast Saúde Integrada.",
    text: "Conversas claras sobre respiração, sono, crescimento e função oral — para pais que querem perceber melhor.",
    href: "/podcast/",
    button: "Conhecer o Podcast",
    external: false,
  },
};

export function getCta(key?: string | null): CtaBlock {
  return CTAS[key ?? ""] ?? CTAS["agendar-consulta"];
}

/** Etiquetas legíveis dos pilares RC360 (para badges e breadcrumb). */
export const PILAR_LABELS: Record<string, string> = {
  "cavidade-oral": "Cavidade Oral",
  respiracao: "Respiração",
  "crescimento-craniofacial": "Crescimento Craniofacial",
  "funcao-oral": "Função Oral",
  sono: "Sono",
  "desenvolvimento-integrado": "Desenvolvimento Integrado",
};

export const pilarLabel = (p?: string | null): string =>
  (p && PILAR_LABELS[p]) || "Artigo";
