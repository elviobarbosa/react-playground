import { Phones } from "../lib/hooks/usePhones";

export type CardPhonesProps = {
  index: number;
  phone: Phones;
  total: number;
  updateField: (index: number, campo: keyof Phones, valor: unknown) => void;
  removeItem: (index: number) => void;
};
