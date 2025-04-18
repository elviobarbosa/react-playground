import { Address } from "../lib/hooks/useAddress";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

interface CardAddressProps {
  index: number;
  address: Address;
  updateField: (index: number, campo: keyof Address, valor: unknown) => void;
}

const CardAddress = ({ index, address, updateField }: CardAddressProps) => {
  return (
    <>
      <Card key={index} className="p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Endereço {index + 1}</h3>

          <Button type="button" variant="destructive" size="icon">
            <Trash2 size={16} />
          </Button>
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

          {/* <div className="grid grid-cols-2 gap-3">  
            <div>  
              <label className="block text-sm font-medium mb-1">Número</label>  
              <Input  
                value={endereco.numero}  
                onChange={(e) => atualizarCampo(index, "numero", e.target.value)}  
                placeholder="Número"  
                required  
              />  
            </div>  
            
            <div>  
              <label className="block text-sm font-medium mb-1">CEP</label>  
              <Input  
                value={endereco.cep}  
                onChange={(e) => atualizarCampo(index, "cep", e.target.value)}  
                placeholder="CEP"  
                required  
              />  
            </div>  
          </div>   */}

          {/* <div>  
            <label className="block text-sm font-medium mb-1">Bairro</label>  
            <Input  
              value={endereco.bairro}  
              onChange={(e) => atualizarCampo(index, "bairro", e.target.value)}  
              placeholder="Bairro"  
              required  
            />  
          </div>   */}
        </div>
      </Card>
    </>
  );
};

export default CardAddress;
