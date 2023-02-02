import css from "./GlassesCard.module.css";

const GlassesItem = ({ colorInfo }) => {
  return (
    <ul className={css.ColorChoise}>
        <li key={colorInfo[0].media.id}>
          <img
            className={css.GlassesIMG}
            key={colorInfo[0].media[0].id}
            src={colorInfo[0].media[0].url}
            alt={"glasses view"}
          ></img>
        </li>
      {/* {colorInfo.map((variant) => (
        <li key={variant.media.id}>
          <img
            className={css.GlassesIMG}
            key={variant.media[0].id}
            src={variant.media[0].url}
            alt={"glasses view"}
          ></img>
        </li>
      ))} */}
    </ul>
  );
};
export default GlassesItem;
