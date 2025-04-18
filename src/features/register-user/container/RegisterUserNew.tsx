import { Button } from "@/shared/components/ui/button";
import { usePageTitle } from "@/shared/lib/hooks/usePageTitle";
import { Plus } from "lucide-react";
import CardAddress from "@/shared/components/CardAddress";
import { Input } from "@/shared/components/ui/input";
import CardPhones from "@/shared/components/CardPhones";
import { useAddresses } from "@/shared/lib/hooks/useAddress";
import { usePhones } from "@/shared/lib/hooks/usePhones";

const RegisterUserNew = () => {
  usePageTitle("Novo usuário");

  const { addresses, addAddress, updateAddress } = useAddresses();
  const { phones, addPhone, updatePhone } = usePhones();

  return (
    <>
      <pre>{JSON.stringify(addresses, null, 2)}</pre>
      <pre>{JSON.stringify(phones, null, 2)}</pre>
      <h2>Novo usuário</h2>
      <p>Formulario de cadastro de novo usuário</p>
      <form>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />

        <h2>Endereço do cliente</h2>
        {addresses.map((address, index) => (
          <CardAddress
            key={index}
            index={index}
            address={address}
            updateField={updateAddress}
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
    </>
  );
};
export default RegisterUserNew;
