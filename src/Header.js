import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
const Header = ({ title }) => {
  const { width } = useWindowSize();
  console.log("Header");
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
