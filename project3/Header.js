import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
const Header = ({ title, width }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 792 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
