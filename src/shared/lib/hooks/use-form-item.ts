import { useState } from "react";
function useFormItem<T>(initialItems: T) {
  const [items, setItems] = useState<T>(initialItems);

  const updateItem = <K extends keyof T>(field: K, value: unknown) => {
    if (typeof value === "string") {
      const newItems = { ...items };
      newItems[field] = value as unknown as T[K];
      setItems(newItems);
    } else {
      console.error(`Valor inválido ${typeof value}`);
    }
  };

  return {
    items,
    updateItem,
  };
}

export default useFormItem;
