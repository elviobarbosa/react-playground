import { useTitle } from "../lib/context/TitleContext";

const Header = () => {
  const { title } = useTitle();
  return (
    <header className="bg-blue-600 text-white p-4 sticky w-full top-0">
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
};

export default Header;
