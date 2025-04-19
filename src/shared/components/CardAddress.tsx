import { useEffect } from "react";
import { maskValue } from "../lib/helpers/masks.helper";
import { Address } from "../lib/hooks/useAddress";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

interface CardAddressProps {
  index: number;
  address: Address;
  total: number;
  updateField: (index: number, campo: keyof Address, valor: unknown) => void;
  removeItem: (index: number) => void;
}

const CardAddress = ({
  index,
  address,
  total,
  updateField,
  removeItem,
}: CardAddressProps) => {
  const maskCep = (value: string) => maskValue(value, "cep");

  useEffect(() => {
    if (address.cep && address.cep !== maskCep(address.cep)) {
      updateField(index, "cep", maskCep(address.cep));
    }
  }, [address.cep, index, updateField]);

  return (
    <>
      <Card key={index} className="p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Endereço {index + 1}</h3>
          {total > 1 && (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => removeItem(index)}
            >
              <Trash2 size={16} />
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Rua</label>
            <Input
              value={address.rua}
              onChange={(e) => updateField(index, "rua", e.target.value)}
              placeholder="Rua"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Número</label>
              <Input
                value={address.numero}
                onChange={(e) => updateField(index, "numero", e.target.value)}
                placeholder="Número"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">CEP</label>
              <Input
                value={address.cep}
                maxLength={9}
                onChange={(e) => {
                  const maskedValue = maskCep(e.target.value);
                  updateField(index, "cep", maskedValue);
                }}
                placeholder="CEP"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bairro</label>
            <Input
              value={address.bairro}
              onChange={(e) => updateField(index, "bairro", e.target.value)}
              placeholder="Bairro"
              required
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardAddress;
