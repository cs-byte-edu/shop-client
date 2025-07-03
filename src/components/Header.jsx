import { HeaderTop } from "./HeaderTop";
import { NavBar } from "./NavBar";

export const Header = ({ navItems }) => {
  return (
    <header>
      <HeaderTop />
      <NavBar navItems={navItems} />
    </header>
  );
};
