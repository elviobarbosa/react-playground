import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { useEffect, useState } from "react";
import { DadosPessoaisType } from "../services/entities/register-user.entity";
import { maskValue } from "@/shared/lib/helpers/masks.helper";
import {
  validateCpfCnpj,
  validateEmail,
  validateNomeRazao,
} from "../services/validators/register-user-dados-pessoais.validator";

interface DadosPessoaisProps {
  formData: Partial<DadosPessoaisType>;
  updateForm: (data: Partial<DadosPessoaisType>) => void;
}

const RegisterUserDadosPessoais = ({
  formData,
  updateForm,
}: DadosPessoaisProps) => {
  const maskCPF = (value: string) => maskValue(value, "cpf");
  const maskCNPJ = (value: string) => maskValue(value, "cnpj");

  const [tipoPessoa, setTipoPessoa] = useState("fisica");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFisica = tipoPessoa === "fisica";
  const cpfCnpjLabel = isFisica ? "CPF" : "CNPJ";
  const nomeRazaoLabel = isFisica ? "Nome completo" : "Razão social";

  const tipoPessoaHandler = (value: string) => {
    updateForm({ tipo: value });
    setTipoPessoa(value);
  };

  const validateHandler = () => {
    const errors = {
      ...validateEmail(formData),
      ...validateCpfCnpj(formData, tipoPessoa),
      ...validateNomeRazao(formData),
    };
    setErrors(errors);
  };

  useEffect(() => {
    if (formData.isValid) return;
    validateHandler();
  }, [formData.isValid]);

  return (
    <Card className="p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">Dados pessoais</h3>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipoPessoa"
              value="fisica"
              checked={tipoPessoa === "fisica"}
              onChange={(e) => tipoPessoaHandler(e.target.value)}
              className="radio radio-primary"
            />
            <span>Pessoa Física</span>
          </label>
        </div>

        <div className="flex-1 flex flex-col">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipoPessoa"
              value="juridica"
              checked={tipoPessoa === "juridica"}
              onChange={(e) => tipoPessoaHandler(e.target.value)}
              className="radio radio-primary"
            />
            <span>Pessoa Jurídica</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {cpfCnpjLabel}
          </label>
          <Input
            type="text"
            placeholder={cpfCnpjLabel}
            maxLength={isFisica ? 14 : 18}
            value={formData.cpfCnpj || ""}
            onBlur={validateHandler}
            required={true}
            onChange={(e) => {
              const cpfCnpj = isFisica
                ? maskCPF(e.target.value)
                : maskCNPJ(e.target.value);
              updateForm({ cpfCnpj: cpfCnpj });
            }}
          />
          {errors.cpfCnpj && (
            <span className="text-xs text-red-600">{errors.cpfCnpj}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            {nomeRazaoLabel}
          </label>
          <Input
            type="text"
            placeholder={nomeRazaoLabel}
            name="nomeRazo"
            onBlur={validateHandler}
            value={formData.nomeRazao || ""}
            onChange={(e) => updateForm({ nomeRazao: e.target.value })}
          />
          {errors.nomeRazao && (
            <span className="text-xs text-red-600">{errors.nomeRazao}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onBlur={validateHandler}
            value={formData.email || ""}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email}</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RegisterUserDadosPessoais;
