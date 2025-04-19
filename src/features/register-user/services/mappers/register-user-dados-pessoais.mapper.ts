import { Address } from "@/shared/lib/hooks/useAddress";
import {
  DadosPessoaisType,
  RegisterUserRequest,
} from "../entities/register-user.entity";
import { Phones } from "@/shared/lib/hooks/usePhones";

export class RegisterUserDadosPessoaisMapper {
  static toCreate(
    dadosPessoaisRaw: DadosPessoaisType,
    enderecosRaw: Address[],
    telefonesRaw: Phones[]
  ): RegisterUserRequest {
    const dadosPessoais = {
      ...dadosPessoaisRaw,
      cpfCnpj: dadosPessoaisRaw.cpfCnpj.replace(/[^\d]+/g, ""),
    };
    const enderecos = enderecosRaw.map((endereco) => {
      return {
        ...endereco,
        cep: endereco.cep.replace(/[^\d]+/g, ""),
      };
    });

    const telefones = telefonesRaw.map((telefone) =>
      telefone.number.replace(/[^\d]+/g, "")
    );
    return {
      ...dadosPessoais,
      enderecos,
      telefones,
    };
  }
}
