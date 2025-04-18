export function updateFormItem<T, K extends keyof T>(
  items: T[],
  setItems: (items: T[]) => void,
  index: number,
  field: K,
  value: unknown
): void {
  if (typeof value === "string") {
    const newItems = [...items];
    newItems[index][field] = value as unknown as T[K];
    setItems(newItems);
  } else {
    console.error(`Valor inválido ${typeof value}`);
  }
}
