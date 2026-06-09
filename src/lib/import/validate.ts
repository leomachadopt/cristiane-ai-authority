import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";

import schema from "./modelo-artigo.schema.json";

export interface ArticleModel {
  title: string;
  slug?: string;
  pilar: string;
  tema_clinico: string;
  pergunta_alvo?: string;
  autor: string;
  mercado?: string;
  resumo: string;
  resposta_direta?: string;
  corpo_markdown: string;
  faq?: { pergunta: string; resposta: string }[];
  referencias?: { citacao: string; pmid?: string; doi?: string; url?: string; estado_verificacao: string }[];
  imagem_capa?: { alt: string; legenda?: string; asset_ref?: string; prompt_geracao?: string };
  related?: string[];
  cta?: string;
  seo?: { meta_titulo?: string; meta_descricao?: string };
  data_publicacao?: string;
  data_atualizacao?: string;
  noindex?: boolean;
  draft?: boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  data?: ArticleModel;
}

// strict:false — o contrato usa `description` dentro de if/then (não-padrão mas inofensivo).
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validateFn = ajv.compile(schema);

const wordCount = (md: string): number =>
  md.replace(/[#>*_`~\-[\]()]/g, " ").split(/\s+/).filter(Boolean).length;

/** Valida o JSON contra o contrato. Gate anti-alucinação está no schema (allOf/if/then). */
export function validateArticleModel(input: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!validateFn(input)) {
    for (const e of validateFn.errors ?? []) {
      const path = e.instancePath || "(raiz)";
      errors.push(`${path} ${e.message ?? "inválido"}`.trim());
    }
    return { valid: false, errors, warnings };
  }

  const data = input as ArticleModel;

  const wc = wordCount(data.corpo_markdown);
  if (wc < 1000) warnings.push(`Corpo com ~${wc} palavras (recomendado ≥ 1000).`);

  const aVerificar = (data.referencias ?? []).filter((r) => r.estado_verificacao === "a-verificar").length;
  if (aVerificar > 0) {
    warnings.push(`${aVerificar} referência(s) "a-verificar" — confirmar antes de publicar.`);
  }

  return { valid: true, errors, warnings, data };
}
