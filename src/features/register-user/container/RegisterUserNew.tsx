import { Button } from "@/shared/components/ui/button";
import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { Plus } from "lucide-react";
import CardAddress from "@/shared/components/CardAddress";
import CardPhones from "@/shared/components/CardPhones";
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

const RegisterUserNew = () => {
  usePageTitle("Novo usuário");

  const { addresses, addAddress, updateAddress, removeAddress } =
    useAddresses();
  const { phones, addPhone, updatePhone } = usePhones();
  const [dadosPessoais, setDadosPessoais] = useState<DadosPessoaisType>({
    tipo: "fisica",
    cpfCnpj: transform("12345678901").cpf().value(),
    nomeRazao: "Elvio Barbosa",
    email: "elviobarbosa@gmail.com",
    isValid: false,
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
    if (isValid) {
      console.log("OK para enviar");
    } else {
      console.log("Nao pode enviar");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RegisterUserDadosPessoaisComponent
          formData={dadosPessoais}
          updateForm={updateDadosPessoais}
        />

        {addresses.map((address, index) => (
          <CardAddress
            key={index}
            index={index}
            address={address}
            updateField={updateAddress}
            removeAddress={removeAddress}
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
            phone={phone}
            updateField={updatePhone}
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
    </>
  );
};
export default RegisterUserNew;
