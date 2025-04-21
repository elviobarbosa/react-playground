import { Card } from "./ui/card";

const PromoCard = () => {
  return (
    <Card className="mx-auto overflow-hidden bg-gradient-to-t from-black/10 to-transparent md:bg-gradient-to-r mb-6">
      <div className="md:flex">
        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
            Escolha seu filme e a <span className="text-blue-600">ELO</span>{" "}
            racha com você
          </h1>

          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Aproveite 50% de desconto na compra de ingressos ao pagar com seu
            cartão ELO.
          </p>
        </div>

        <div className="md:w-1/2 flex-shrink-0">
          <div className="relative h-48 md:h-full">
            <img src="/cartao.png" alt="Cartão ELO" className="w-full" />
            <div className="absolute inset-0 "></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PromoCard;
