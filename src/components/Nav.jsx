import { Menubar } from "radix-ui";
import { MenuItem } from "./MenuItem";

export const Nav = ({ navItems = [] }) => {
  return (
    <Menubar.Root className="flex items-center justify-between">
      <Menubar.Menu>
        {navItems?.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Menubar.Menu>
    </Menubar.Root>
  );
};
