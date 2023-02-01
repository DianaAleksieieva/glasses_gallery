import React, { useState,useEffect, useContext } from "react";
import GlassesCard from ".././GlassesCard/GlassesCard";
import { useLocation } from 'react-router-dom';
import css from "./GlassesList.module.css";
import {
  getGlassesInfo,
  getByColour,
} from '../../api/glassesViewAPI';


const GlassesList = () => {
  const [glassesInfo, setGlassesInfo] = useState('');
  const [colour, setColour] = useState('coloured');
  const location = useLocation();


  useEffect(() => {
    async function fetchData() {
      const data = await getGlassesInfo(location.pathname);
      setGlassesInfo(data);
    }
    fetchData();
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      const data = await getByColour(colour);
      setGlassesInfo(data);
    }
    fetchData();
  }, [colour]);


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
