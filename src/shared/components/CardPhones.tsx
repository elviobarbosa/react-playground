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

const CardPhones = ({ index, phone, updateField }: CardPhonesProps) => {
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
              onChange={(e) => updateField(index, "number", e.target.value)}
              placeholder="+55 (00) 00000-0000"
              required
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardPhones;
