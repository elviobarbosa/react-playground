import { Button } from "@/shared/components/ui/button";
import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { Plus } from "lucide-react";
import CardAddress from "@/shared/components/card-address";
import CardPhones from "@/shared/components/card-phones";
import { useAddresses } from "@/shared/lib/hooks/useAddress";
import { usePhones } from "@/shared/lib/hooks/usePhones";
import RegisterUserDadosPessoaisComponent from "../components/register-user-dados-pessoais";
import React, { useState } from "react";
import { DadosPessoaisType } from "../services/entities/register-user.entity";
import { transform } from "@/shared/lib/helpers/transform.helper";
import { RegisterUserDadosPessoaisMapper } from "../services/mappers/register-user-dados-pessoais.mapper";
import {
  validateCpfCnpj,
  validateEmail,
  validateNomeRazao,
} from "../services/validators/register-user-dados-pessoais.validator";
import { toast } from "sonner";

const RegisterUserNewComponent = () => {
  usePageTitle("Novo usuário");

  const { addresses, addAddress, updateAddress, removeAddress } =
    useAddresses();
  const { phones, addPhone, updatePhone, removePhone } = usePhones();
  const [dadosPessoais, setDadosPessoais] = useState<DadosPessoaisType>({
    tipo: "fisica",
    cpfCnpj: transform("12345678901").cpf().value(),
    nomeRazao: "",
    email: "elviobarbosa@gmail.com",
    isValid: true,
  });

  const updateDadosPessoais = (newData: Partial<DadosPessoaisType>) => {
    setDadosPessoais((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidCpfCnpj = validateCpfCnpj(dadosPessoais, dadosPessoais.tipo);

    const isValidEmail = validateEmail(dadosPessoais);
    const isValidNomeRazao = validateNomeRazao(dadosPessoais);
    const isValid = !isValidCpfCnpj && !isValidEmail && !isValidNomeRazao;
    setDadosPessoais(() => ({
      ...dadosPessoais,
      isValid,
    }));
    if (isValid) {
      toast("Formulário enviado com sucesso", {
        icon: "✅",
      });
    } else {
      toast("Formulário não pode ser enviado", {
        description:
          "Há erros no seu formulário, corrija-os e tente novamente.",
        icon: "🚨",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-3 py-12">
        <RegisterUserDadosPessoaisComponent
          formData={dadosPessoais}
          updateForm={updateDadosPessoais}
        />

        {addresses.map((address, index) => (
          <CardAddress
            key={index}
            index={index}
            address={{
              ...address,
              cep: transform(address.cep).cep().value(),
            }}
            total={addresses.length}
            updateField={updateAddress}
            removeItem={removeAddress}
          />
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addAddress}
          className="flex items-center mb-5"
        >
          <Plus size={16} className="mr-1" /> Adicionar Endereço
        </Button>

        {phones.map((phone, index) => (
          <CardPhones
            key={index}
            index={index}
            phone={{
              ...phone,
              number: transform(phone.number).phone().value(),
            }}
            total={phones.length}
            updateField={updatePhone}
            removeItem={removePhone}
          />
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addPhone}
          className="flex items-center"
        >
          <Plus size={16} className="mr-1" /> Adicionar telefone
        </Button>

        <div className="flex gap-3 mt-4">
          <Button type="submit" className="ml-auto">
            Salvar
          </Button>
        </div>
      </form>
      <pre>
        {JSON.stringify(
          RegisterUserDadosPessoaisMapper.toCreate(
            dadosPessoais,
            addresses,
            phones
          ),
          null,
          2
        )}
      </pre>
    </div>
  );
};
export default RegisterUserNewComponent;
