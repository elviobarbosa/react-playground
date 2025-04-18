import { useState } from "react";
function useFormArray<T>(initialItems: T[]) {
  const [items, setItems] = useState<T[]>(initialItems);

  const addItem = (newItem: T) => {
    setItems([...items, newItem]);
  };

  const updateItem = <K extends keyof T>(
    index: number,
    field: K,
    value: unknown
  ) => {
    if (typeof value === "string") {
      const newItems = [...items];
      newItems[index][field] = value as unknown as T[K];
      setItems(newItems);
    } else {
      console.error(`Valor inválido ${typeof value}`);
    }
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return {
    items,
    addItem,
    updateItem,
    removeItem,
  };
}

export default useFormArray;
