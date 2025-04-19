export const transform = <T>(value: T) => {
  const chain = {
    _value: value,

    cpf() {
      if (typeof this._value === "string") {
        (this._value as string) = (this._value as string)
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
      return this;
    },

    cnpj() {
      if (typeof this._value === "string") {
        (this._value as string) = (this._value as string)
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
      }
      return this;
    },

    uppercase() {
      if (typeof this._value === "string") {
        (this._value as string) = this._value.toUpperCase();
      }
      return this;
    },

    value() {
      return this._value;
    },
  };

  return chain;
};
