import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full fixed">
      <nav className="flex flex-col p-4">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register-user" className="hover:text-blue-400">
              New user
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400">
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
