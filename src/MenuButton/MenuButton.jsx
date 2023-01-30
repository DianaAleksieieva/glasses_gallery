import css from "./MenuButton.module.css";
import basicCSS from ".././App.module.css";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import Menu from "./FirstMenu.jsx";

const MenuButton = () => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); 
  
    return (
      <div >
          <div >
            <div ref={dropdownRef}>
              <button
                className={basicCSS.Button}
                onMouseOver={() => setMenuDropDownOpen(true)} 
              >
                MENU
              </button>
  
              {isMenuDropDownOpen && <Menu />} 
            </div>
          </div>
        </div>
    );
  }

export default MenuButton;
