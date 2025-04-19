import { PhonesMock } from "@/features/register-user/services/mock";
import useFormArray from "./useFormArrays";

export type Phones = {
  number: string;
};

export function usePhones() {
  const {
    items: phones,
    addItem,
    updateItem,
    removeItem,
  } = useFormArray<Phones>(PhonesMock);

  const addPhone = () => {
    addItem({ number: "" });
  };

  const updatePhone = (index: number, field: keyof Phones, value: unknown) => {
    updateItem(index, field, value);
  };

  const removePhone = (index: number) => {
    console.log(index, "remove");
    removeItem(index);
  };

  return {
    phones,
    addPhone,
    updatePhone,
    removePhone,
  };
}
