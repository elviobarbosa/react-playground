import { z } from "zod";
import {
  DadosPessoaisType,
  validateDocument,
} from "./dados-pessoais-schema.validate";
/**
 * Valida o campo cpfCnpj do formulario de dados pessoais,
 * verificando se o campo esta preenchido e se tem o formato correto
 * para o tipo de pessoa informado (fisica ou juridica).
 *
 * Se o campo estiver preenchido e tiver um formato invalido,
 * uma mensagem de erro sera adicionada ao objeto de erros.
 * Caso contrario, a chave cpfCnpj sera removida do objeto de erros.
 *
 * @param formData - Dados do formulario de dados pessoais
 * @param tipoPessoa - Tipo de pessoa (fisica ou juridica)
 * @param setErrors - Funcao para atualizar o estado de erros
 * @param tipoOverride - Tipo de pessoa para ser usado em vez de tipoPessoa (opcional)
 */
export const validateCpfCnpj = (
  formData: Partial<DadosPessoaisType>,
  tipoPessoa: string,
  tipoOverride?: string
) => {
  if (!formData.cpfCnpj) return;

  const tipoToUse = tipoOverride || tipoPessoa;
  const errorMessage = validateDocument(
    tipoToUse as "fisica" | "juridica",
    formData.cpfCnpj
  );
  return errorMessage ? { cpfCnpj: errorMessage } : undefined;
  // if (errorMessage) {
  //   setErrors((prev) => ({
  //     ...prev,
  //     cpfCnpj: errorMessage,
  //   }));
  // } else {
  //   setErrors((prev) => {
  //     const newErrors = { ...prev };
  //     delete newErrors.cpfCnpj;
  //     return newErrors;
  //   });
  // }
};

/**
 * Valida o campo email do formulario de dados pessoais,
 * verificando se o campo esta preenchido e se tem o formato de um email.
 * @param formData Os dados do formulario.
 * @param setErrors Funcao para atualizar os erros do formulario.
 */
export const validateEmail = (
  formData: Partial<DadosPessoaisType>
): Record<string, string> | undefined => {
  try {
    z.string().email("E-mail inválido").parse(formData.email);
    return undefined;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { email: error.errors[0].message };
    }
  }
};

/**
 * Valida o campo nomeRazao do formulario de dados pessoais,
 * verificando se o campo esta preenchido e se tem ao menos 3 caracteres.
 * @param formData Os dados do formulario.
 * @param setErrors Funcao para atualizar os erros do formulario.
 */
export const validateNomeRazao = (
  formData: Partial<DadosPessoaisType>
): Record<string, string> | undefined => {
  try {
    z.string()
      .min(1, "Este campo é obrigatório")
      .min(3, "Nome muito curto")
      .parse(formData.nomeRazao);
    return undefined;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { nomeRazao: error.errors[0].message };
    }
  }
};
