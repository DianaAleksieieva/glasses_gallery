import React, { useState,useEffect, useContext } from "react";
import GlassesCard from ".././GlassesCard/GlassesCard";
import { useLocation } from 'react-router-dom';
import css from "./GlassesList.module.css";
import {
  getGlassesInfo,
  getByColour,
  getByShape
} from '../../api/glassesViewAPI';
import {ClourContext} from ".././GlassesView"
import {ShapeContext} from ".././GlassesView"

const GlassesList = () => {
  const [glassesInfo, setGlassesInfo] = useState('');
  const location = useLocation();
  const {currentColour, setCurrentColour} = useContext(ClourContext);
  const {currentShape, setCurrentShape} = useContext(ShapeContext);

  
  useEffect(() => {
    async function fetchData() {
      const data = await getGlassesInfo(location.pathname);
      setGlassesInfo(data);
    }
    fetchData();
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      const data = await getByColour(currentColour);
      setGlassesInfo(data);
    }
    fetchData();
  }, [currentColour]);

  useEffect(() => {
    async function fetchData() {
      const data = await getByShape(currentShape);
      setGlassesInfo(data);
    }
    fetchData();
  }, [currentShape]);


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
