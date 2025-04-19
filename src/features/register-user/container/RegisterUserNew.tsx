import { Button } from "@/shared/components/ui/button";
import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { Plus } from "lucide-react";
import CardAddress from "@/shared/components/CardAddress";
import { Input } from "@/shared/components/ui/input";
import CardPhones from "@/shared/components/CardPhones";
import { useAddresses } from "@/shared/lib/hooks/useAddress";
import { usePhones } from "@/shared/lib/hooks/usePhones";
import { Card } from "@/shared/components/ui/card";
import { useState } from "react";
import { useMaskedInput } from "@/shared/lib/hooks/use-mask-input";

const RegisterUserNew = () => {
  usePageTitle("Novo usuário");

  const cpfInput = useMaskedInput("cpf");
  const cnpjInput = useMaskedInput("cnpj");
  const { addresses, addAddress, updateAddress, removeAddress } =
    useAddresses();
  const { phones, addPhone, updatePhone } = usePhones();

  const [tipoPessoa, setTipoPessoa] = useState("fisica");
  const isFisica = tipoPessoa === "fisica";

  return (
    <>
      <form>
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
            <Input
              type="text"
              placeholder={isFisica ? "CPF" : "CNPJ"}
              maxLength={isFisica ? 14 : 18}
              value={isFisica ? cpfInput.value : cnpjInput.value}
              onChange={isFisica ? cpfInput.onChange : cnpjInput.onChange}
            />
            <Input
              type="text"
              placeholder={isFisica ? "Nome completo" : "Razão social"}
            />
            <Input type="email" placeholder="Email" />
          </div>
        </Card>

        <h2>Endereço do cliente</h2>
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
          className="flex items-center"
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
      <pre>{JSON.stringify(addresses, null, 2)}</pre>
      <pre>{JSON.stringify(phones, null, 2)}</pre>
    </>
  );
};
export default RegisterUserNew;
