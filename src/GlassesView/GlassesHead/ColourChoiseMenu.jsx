import React, { useContext  } from 'react';
import css from "./GlassesHead.module.css";
import ColourChoiseButtons from "./ColourChoiseButtons"
import {ClourContext} from "../GlassesView"

const ColourChoiseMenu = () => {
  const {currentColour, setCurrentColour} = useContext(ClourContext);

  const handleColour = (e) => {
    setCurrentColour(e.currentTarget.id)
 };

  return (
    <div className={css.ColourChoiseMenu}>
      <ul className={css.ColorChoiseList}>
        <ColourChoiseButtons handleColour={handleColour}/>
      </ul>
    </div>
  );
};
export default ColourChoiseMenu;
