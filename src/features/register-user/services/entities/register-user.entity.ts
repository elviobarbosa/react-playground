import { Address } from "@/shared/lib/hooks/useAddress";
import { Phones } from "@/shared/lib/hooks/usePhones";

export type RegisterUser = {
  email: string;
  tipo: string;
  cpfCnpj: string;
  nomeRazao: string;
  enderecos: Address[];
  telefones: Phones[];
};

export type RegisterUserRequest = {
  email: string;
  tipo: string;
  cpfCnpj: string;
  nomeRazao: string;
  enderecos: Address[];
  telefones: string[];
};

export type DadosPessoaisType = Omit<RegisterUser, "enderecos" | "telefones">;
