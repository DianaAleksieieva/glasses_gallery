import css from "./ShapeChoiseButtons.module.css";
import React, { useContext  } from 'react';
import {ShapeContext} from "../GlassesView"
import ShapeChoiseItems from "./ShapeChoiseItems"

const ShapeChoiseButtons = () => {
  const {currentShape, setCurrentShape} = useContext(ShapeContext);

  const handleShape = (e) => {
    setCurrentShape(e.currentTarget.id)
 };

  return (
    <div className={css.ShapeChoiseMenu}>
      <ul className={css.ShapeChoiseList}>
        <ShapeChoiseItems handleShape={handleShape}/>
      </ul>
    </div>
  );
};
export default ShapeChoiseButtons;
