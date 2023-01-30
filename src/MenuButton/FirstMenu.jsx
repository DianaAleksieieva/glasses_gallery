import css from "./MenuButton.module.css";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../hooks/useOnHoverOutside";
import SecondMenu from "./SecondMenu.jsx";

const Menu = () => {
  const dropdownSecondRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [hasChild, sethasChild] = useState(false);
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownSecondRef, closeHoverMenu);

  return (
    <>
      <ul className={css.DropDownMenu}>
        <li
          ref={dropdownSecondRef}
          className={css.MenuItem}
          onMouseOver={() => setMenuDropDownOpen(true)}
        >
          <botton className={css.ItemButton} href="/">
            Spectacles
          </botton>
          {isMenuDropDownOpen && <SecondMenu />}
        </li>
        <li
          className={css.MenuItem}
          onMouseOver={() => setMenuDropDownOpen(true)}
        >
          <botton className={css.ItemButton} href="/">
            Sunglasses
          </botton>
        </li>
        <li className={css.MenuItem}>
          <botton className={css.ItemButton} href="/">
            HOME TRY ON
          </botton>
        </li>
      </ul>
      {isMenuDropDownOpen && <SecondMenu />}
    </>
  );
};
export default Menu;
