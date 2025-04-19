export type MaskType = "cpf" | "cnpj" | "cep" | "phone";

export const maskValue = (value: string, type: MaskType): string => {
  const cleanValue = value.replace(/\D/g, "");
  return applyMask(cleanValue, type);
};

const applyMask = (value: string, type: MaskType): string => {
  switch (type) {
    case "cpf":
      return maskCpf(value);
    case "cnpj":
      return maskCnpj(value);
    case "cep":
      return maskCep(value);
    case "phone":
      return maskPhone(value);
    default:
      return value;
  }
};

const maskCpf = (value: string): string => {
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
};

const maskCnpj = (value: string): string => {
  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  return value;
};

const maskCep = (value: string): string => {
  return value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
};

const maskPhone = (value: string): string => {
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  return value;
};
