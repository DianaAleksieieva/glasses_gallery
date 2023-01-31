import React, { useState } from 'react';
import css from "./GlassesHead.module.css";

const ColourChoiseMenu = () => {
  const [currentColour, setCurrentColour] = useState('colored');
//   const handleColour = (colour) => {
//     setCurrentColour(colour)
//  };

  return (
    <div className={css.ColourChoiseMenu}>
      <ul className={css.ColorChoiseList}>
        <li className={css.ColorChoiseItem} >
          <button className={css.ColorButton}>
          <div
          className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_black_01.png')",
            }}
            data-v-4535a23b=""
          >
          </div>
          </button>
        </li>
        <li className={css.ColorChoiseItem}>
          <div
          className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_tortoise_02.png')",
            }}
            data-v-4535a23b=""
          >
            {" "}
          </div>
        </li>
        <li className={css.ColorChoiseItem}>
          <div
            className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_coloured_03.png')",
            }}
            data-v-4535a23b=""
          ></div>
        </li>
        <li className={css.ColorChoiseItem}>
          <div
          className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_crystal_04.png')",
            }}
            data-v-4535a23b=""
          >
          </div>
        </li>
        <li className={css.ColorChoiseItem}>
          <div
          className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_dark_05.png')",
            }}
            data-v-4535a23b=""
          >
          </div>
        </li>
        <li className={css.ColorChoiseItem}>
          <div
          className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_bright_06.png')",
            }}
            data-v-4535a23b=""
          >
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ColourChoiseMenu;
