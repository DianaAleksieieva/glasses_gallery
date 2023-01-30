import React, { useState,useEffect } from "react";
import GlassesCard from ".././GlassesCard/GlassesCard";
import css from "./GlassesList.module.css";
import {
  getGlassesInfo,
} from '../../api/glassesViewAPI';

const GlassesList = (glasses) => {
  const [glassesInfo, setGlassesInfo] = useState('');

  useEffect(() => {
    if (!glasses) {
      return;
    }
    async function fetchData() {
      const data = await getGlassesInfo();
      setGlassesInfo(data);
    }
    fetchData();
  }, [glasses]);

  return (
    <ul className={css.GlassesList}>
      {glassesInfo ? (
        glassesInfo.glasses.map((glasses) => (
          <GlassesCard key={glasses.id} glassesInfo={glasses} />
        ))
      ) : (
        <p>Any glasses was found</p>
      )}
    </ul>
  );
};
export default GlassesList;
