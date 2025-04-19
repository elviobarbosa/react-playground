import { useState, ChangeEvent } from "react";
import { maskValue, MaskType } from "../helpers/masks.helper";

// export function useMaskedInput(type: MaskType, initialValue: string = "") {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const newValue = maskValue(e.target.value, type);
//     setValue(newValue);
//   };

//   return { value, onChange: handleChange, setValue };
// }

export function useMaskedInput(
  type: MaskType,
  initialValue: string = "",
  onValueChange?: (value: string) => void
) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = maskValue(e.target.value, type);
    setValue(newValue);

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return { value, onChange: handleChange, setValue };
}
