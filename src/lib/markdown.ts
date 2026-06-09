import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Converte o corpo Markdown de um artigo em HTML (para renderização com set:html). */
export function renderMarkdown(md: string): string {
  return marked.parse(md ?? "", { async: false }) as string;
}
