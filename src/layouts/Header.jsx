import { HeaderTop } from "../components/HeaderTop";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router";

const Header = ({ navItems }) => {
  return (
    <header>
      <HeaderTop />
      <NavBar navItems={navItems} />
    </header>
  );
};
export default Header;
