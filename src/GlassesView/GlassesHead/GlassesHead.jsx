import React, { useState } from 'react';
import basicCSS from "../.././App.module.css";
import css from "./GlassesHead.module.css"
import ColourChoiseMenu from "./ColourChoiseMenu.jsx"

const GlassesHead = ({name}) => {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  
  const openColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
 };


  return (
    <div className={css.GlassesHead}>
      <p className={css.pageName}> {name} </p>
      <button type="button" className={basicCSS.Button} onClick={openColorMenu}>
        COLOUR
      </button>

      {isColorMenuOpen && <ColourChoiseMenu/>}
      <button type="button" style={{cursor: 'default'}} disabled className={basicCSS.Button} href="/"> SHAPE </button>
    </div>
  );
};
export default GlassesHead