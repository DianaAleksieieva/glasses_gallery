import css from "./GlassesCard.module.css";

const ColorChoise = ({ colorInfo }) => {
  return (
    <ul className={css.ColorChoise}>
      {colorInfo.map((variant) => (
        <li key={variant.frame_variant.id}>
          <a href="/" style={{pointerEvents: "none"}} alt={variant.frame_variant.colour.name}>
            {variant.frame_variant.colour.media.map((media) => (
              <img
                key={media.id}
                alt="glasses"
                src={media.url}
                className={css.ColorImg}
              />
            ))}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default ColorChoise;
