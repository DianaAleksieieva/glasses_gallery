import React, { useState } from 'react';
import GlassesCard from ".././GlassesCard/GlassesCard";
import Api from "../../collectionExample.json"
import css from "./GlassesList.module.css"

const GlassesList = () => {
    const [glassesInfo, setGlassesInfo] = useState(Api);
    
    return (
      <ul className={css.GlassesList}>
        {glassesInfo ? glassesInfo.glasses.map((glasses) =>
    <GlassesCard key={glasses.id} glassesInfo={glasses}/>
    )
    : <p>Any glasses was found</p>}
    </ul>
  );
};
export default GlassesList;
