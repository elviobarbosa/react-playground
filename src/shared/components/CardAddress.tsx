import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Plus, Trash2 } from "lucide-react";

const CardAddress = () => {
  return <>
  <Card key={index} className="p-4 mb-4">  
    <div className="flex justify-between items-center mb-3">  
      <h3 className="text-lg font-medium">Endereço {index + 1}</h3>  
      {enderecos.length > 1 && (  
        <Button   
          type="button"   
          variant="destructive"   
          size="icon"  
          onClick={() => removerEndereco(index)}  
        >  
          <Trash2 size={16} />  
        </Button>  
      )}  
    </div>  
    
    
  </Card>
  </>;
};

export default CardAddress;
