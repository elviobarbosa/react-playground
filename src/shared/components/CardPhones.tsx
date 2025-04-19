import { useEffect } from "react";
import { maskValue } from "../lib/helpers/masks.helper";
import { Phones } from "../lib/hooks/usePhones";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

interface CardPhonesProps {
  index: number;
  phone: Phones;
  updateField: (index: number, campo: keyof Phones, valor: unknown) => void;
}
const maskPhone = (value: string) => maskValue(value, "phone");

const CardPhones = ({ index, phone, updateField }: CardPhonesProps) => {
  useEffect(() => {
    if (phone.number && phone.number !== maskPhone(phone.number)) {
      updateField(index, "number", maskPhone(phone.number));
    }
  }, [phone.number, index, updateField]);

  return (
    <>
      <Card key={index} className="p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Telefones {index + 1}</h3>

          <Button type="button" variant="destructive" size="icon">
            <Trash2 size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <Input
              value={phone.number}
              onChange={(e) => {
                const maskValue = maskPhone(e.target.value);
                updateField(index, "number", maskValue);
              }}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardPhones;
