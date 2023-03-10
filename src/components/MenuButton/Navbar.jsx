import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import css from "./MenuButton.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul className={css.NavMenu}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;