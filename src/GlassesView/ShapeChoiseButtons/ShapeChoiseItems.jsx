import React from "react";
import css from "./ShapeChoiseButtons.module.css";

const ShapeChoiseItems = ({ handleShape }) => {
  return (
    <>
      <li className={css.ShapeChoiseItem}>
        <button id="square" className={css.ShapeButton} onClick={handleShape}>
          <p className={css.ShapeName}>Square</p>
        </button>
      </li>
      <li className={css.ShapeChoiseItem}>
        <button
          id="rectangle"
          className={css.ShapeButton}
          onClick={handleShape}
        >
          <p className={css.ShapeName}>Rectangle</p>
        </button>
      </li>
      <li className={css.ShapeChoiseItem}>
        <button id="round" className={css.ShapeButton} onClick={handleShape}>
          <p className={css.ShapeName}> Round</p>
        </button>
      </li>
      <li className={css.ShapeChoiseItem}>
        <button id="cat-eye" className={css.ShapeButton} onClick={handleShape}>
          <p className={css.ShapeName}> Cat-Eye</p>
        </button>
      </li>
    </>
  );
};
export default ShapeChoiseItems;
