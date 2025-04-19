import { Card } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import { DadosPessoaisType } from "../services/entities/register-user.entity";
import { maskValue } from "@/shared/lib/helpers/masks.helper";

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

  const isFisica = tipoPessoa === "fisica";
  const cpfCnpjLabel = isFisica ? "CPF" : "CNPJ";
  const nomeRazaoLabel = isFisica ? "Nome completo" : "Razão social";

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
              defaultChecked
              onChange={(e) => setTipoPessoa(e.target.value)}
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
              onChange={(e) => setTipoPessoa(e.target.value)}
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
            onChange={(e) => {
              const cpfCnpj = isFisica
                ? maskCPF(e.target.value)
                : maskCNPJ(e.target.value);
              updateForm({ cpfCnpj: cpfCnpj });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            {nomeRazaoLabel}
          </label>
          <Input
            type="text"
            placeholder={nomeRazaoLabel}
            name="name"
            value={formData.nomeRazao || ""}
            onChange={(e) => updateForm({ nomeRazao: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email || ""}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
};

export default RegisterUserDadosPessoais;
