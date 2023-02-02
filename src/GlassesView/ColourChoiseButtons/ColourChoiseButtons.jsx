import React from "react";
import css from "./ColourChoise.module.css";

const ColourChoiseButtons = ({handleColour}) => {
  return (
    <>
      <li className={css.ColorChoiseItem}>
        <button id="black" className={css.ColorButton} onClick={handleColour}>
          <div
            className={css.ColorChoiseIco}
            style={{
              backgroundImage:
                "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_black_01.png')",
            }}
            data-v-4535a23b=""
          ></div>
        </button>
      </li>
      <li className={css.ColorChoiseItem}>
      <button id="tortoise" className={css.ColorButton} onClick={handleColour}>
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
        </button>
      </li>
      <li className={css.ColorChoiseItem}>
      <button id="coloured" className={css.ColorButton} onClick={handleColour}>
        <div
          className={css.ColorChoiseIco}
          style={{
            backgroundImage:
              "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_coloured_03.png')",
          }}
          data-v-4535a23b=""
        ></div>
        </button>
      </li>
      <li className={css.ColorChoiseItem}>
      <button id="crystal" className={css.ColorButton} onClick={handleColour}>
        <div
          className={css.ColorChoiseIco}
          style={{
            backgroundImage:
              "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_crystal_04.png')",
          }}
          data-v-4535a23b=""
        ></div>
        </button>
      </li>
      <li className={css.ColorChoiseItem}>
      <button id="dark" className={css.ColorButton} onClick={handleColour}>
        <div
          className={css.ColorChoiseIco}
          style={{
            backgroundImage:
              "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_dark_05.png')",
          }}
          data-v-4535a23b=""
        ></div>
        </button>
      </li>
      <li className={css.ColorChoiseItem}>
      <button id="bright" className={css.ColorButton} onClick={handleColour}>
        <div
          className={css.ColorChoiseIco}
          style={{
            backgroundImage:
              "url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_bright_06.png')",
          }}
          data-v-4535a23b=""
        ></div>
        </button>
      </li>
    </>
  );
};
export default ColourChoiseButtons;
