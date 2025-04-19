import {
  validateCNPJ,
  validateCPF,
} from "@/shared/lib/helpers/validate-cpf-cpnj.helper";
import { z } from "zod";

export const dadosPessoaisSchema = z.object({
  tipo: z.string().min(1, "Este campo é obrigatório"),
  cpfCnpj: z.string().min(1, "Este campo é obrigatório"),
  nomeRazao: z
    .string()
    .min(1, "Este campo é obrigatório")
    .min(3, "Nome muito curto"),
  email: z.string().min(1, "Este campo é obrigatório").email("E-mail inválido"),
});

export type DadosPessoaisType = z.infer<typeof dadosPessoaisSchema>;

export function validateDocument(tipo: string, cpfCnpj: string): string | null {
  if (!cpfCnpj || cpfCnpj.trim() === "") {
    return "Este campo é obrigatório";
  }

  const digitsOnly = cpfCnpj.replace(/\D/g, "");

  if (digitsOnly.length === 0) {
    return "Este campo é obrigatório";
  }

  if (tipo === "fisica") {
    if (digitsOnly.length !== 11) {
      return "CPF deve ter 11 dígitos";
    }

    if (!validateCPF(cpfCnpj)) {
      return "CPF inválido";
    }
  } else {
    if (digitsOnly.length !== 14) {
      return "CNPJ deve ter 14 dígitos";
    }

    if (!validateCNPJ(cpfCnpj)) {
      return "CNPJ inválido";
    }
  }

  return null;
}

// export type DadosPessoaisType = z.infer<typeof dadosPessoaisSchema>;
