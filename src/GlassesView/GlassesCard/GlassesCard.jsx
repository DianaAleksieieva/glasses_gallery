import ColorChoise from './ColorChoise.jsx'
import css from "./GlassesCard.module.css"
import React, { useState } from 'react';

const GlassesCard = ({ glassesInfo }) => {
  const [filter, setFilter] = useState('Peach');
    const filterByColor = () => {
    glassesInfo.glass_variants.map((item) => {console.log(item.frame_variant.colour.name === filter)})
      // glassesInfo.glass_variants.includes(filter)
    };
    filterByColor()

  return (
    <li className={css.GlassesCard}>
      <p className={css.ProductName}>{glassesInfo.name}</p>
      {/* <p>Price: {glassesInfo.cost_breakdown.retail_price}</p> */}
      <ColorChoise key={glassesInfo.glass_variants.id} colorInfo={glassesInfo.glass_variants}/>
    </li>
  );
};
export default GlassesCard;
