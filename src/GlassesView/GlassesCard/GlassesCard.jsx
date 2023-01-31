import ColorChoise from './ColorChoise.jsx'
import css from "./GlassesCard.module.css"

const GlassesCard = ({ glassesInfo }) => {

  return (
    <li className={css.GlassesCard}>
      <p className={css.ProductName}>{glassesInfo.name}</p>
      {/* <p>Price: {glassesInfo.cost_breakdown.retail_price}</p> */}
      <ColorChoise key={glassesInfo.glass_variants.id} colorInfo={glassesInfo.glass_variants}/>
    </li>
  );
};
export default GlassesCard;
