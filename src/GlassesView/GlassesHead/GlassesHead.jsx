import React, { useState } from "react";
import basicCSS from "../.././App.module.css";
import css from "./GlassesHead.module.css";
import ColourChoiseMenu from "../ColourChoiseButtons/ColourChoiseMenu.jsx";
import ShapeChoiseMenu from "../ShapeChoiseButtons/ShapeChoiseMenu.jsx";

const GlassesHead = ({ name }) => {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isShapeMenuOpen, setIsShapeMenuOpen] = useState(false);

  const openColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
  };
  const openShapeMenu = () => {
    setIsShapeMenuOpen(!isShapeMenuOpen);
  };

  return (
    <div className={css.GlassesHead}>
      <p className={css.pageName}> {name} </p>
      <button type="button" className={basicCSS.Button} onClick={openColorMenu}>
        COLOUR
      </button>

      {isColorMenuOpen && <ColourChoiseMenu />}
      <button
        type="button"
        className={basicCSS.Button}
        onClick={openShapeMenu}
      >
        SHAPE
      </button>
      {isShapeMenuOpen && <ShapeChoiseMenu />}
    </div>
  );
};
export default GlassesHead;

// style={{cursor: 'default'}} disabled
