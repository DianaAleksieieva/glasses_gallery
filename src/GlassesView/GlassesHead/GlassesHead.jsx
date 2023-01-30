import React, { useState } from 'react';
import basicCSS from "../.././App.module.css";
import css from "./GlassesHead.module.css"

const GlassesHead = () => {
    const [name, setName] = useState('SPECTACLES WOMEN');
    
  return (
    <div className={css.GlassesHead}>
      <p className={css.pageName}> {name} </p>
      <a type="botton" className={basicCSS.Button} href="/">
        COLOUR
      </a>
      <a type="botton" className={basicCSS.Button} href="/"> SHAPE </a>
    </div>
  );
};
export default GlassesHead