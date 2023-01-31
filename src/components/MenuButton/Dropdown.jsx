import MenuItems from './MenuItems';
import css from "./MenuButton.module.css";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? css.dropdownSubmenu : '';
  return (
    <ul
      className={`${css.dropdown} ${dropdownClass} ${
        dropdown ? css.show : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;