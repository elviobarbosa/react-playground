// context/TitleContext.tsx
import { createContext, useContext, useState } from "react";

interface TitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context)
    throw new Error("useTitle precisa estar dentro de TitleProvider");
  return context;
};
