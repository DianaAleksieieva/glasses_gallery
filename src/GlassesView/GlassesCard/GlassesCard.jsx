import ColorChoise from './ColorChoise.jsx'
import GlassesItem from './GlassesItem.jsx'
import css from "./GlassesCard.module.css"

const GlassesCard = ({ glassesInfo }) => {
  
  return (
    <li className={css.GlassesCard}>
      <p className={css.ProductName}>{glassesInfo.name}</p>
      <GlassesItem key={glassesInfo.glass_variants.id} colorInfo={glassesInfo.glass_variants}/>
      <ColorChoise key={glassesInfo.glass_variants.id} colorInfo={glassesInfo.glass_variants}/>
    </li>
  );
};
export default GlassesCard;
