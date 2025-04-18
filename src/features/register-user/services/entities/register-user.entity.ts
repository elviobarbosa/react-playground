import { Address } from "@/shared/lib/hooks/useAddress";

export type RegisterUser = {
  name: string;
  email: string;
  tipo: string;
  cpfCnpj: string;
  enderecos: Address[];
  telefone: string[];
};
