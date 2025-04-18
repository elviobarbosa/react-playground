import { AddressesMock } from "@/features/register-user/services/mock";
import useFormArray from "./useFormArrays";

export type Address = {
  rua: string;
  numero: string;
  cep: string;
  bairro: string;
};

export function useAddresses() {
  const {
    items: addresses,
    addItem,
    updateItem,
    removeItem,
  } = useFormArray<Address>(AddressesMock);

  const addAddress = () => {
    addItem({ rua: "", numero: "", cep: "", bairro: "" });
  };

  const updateAddress = (
    index: number,
    field: keyof Address,
    value: unknown
  ) => {
    updateItem(index, field, value);
  };

  const removeAddress = (index: number) => {
    removeItem(index);
  };

  return {
    addresses,
    addAddress,
    updateAddress,
    removeAddress,
  };
}
