import GlassesList from "./GlassesList/GlassesList";
import GlassesHead from "./GlassesHead/GlassesHead";
import React, { useState, useContext, createContext } from "react";

export const ClourContext = createContext("colored");
export const ShapeContext = createContext('square');

const GlassesView = ({ name }) => {
  const [currentColour, setCurrentColour] = useState("coloured");
  const [currentShape, setCurrentShape] = useState('square');

  return (
    <ClourContext.Provider value={{ currentColour, setCurrentColour }}>
      <ShapeContext.Provider value={{ currentShape, setCurrentShape }}>
      <GlassesHead name={name} />
      <GlassesList />
      </ShapeContext.Provider>
    </ClourContext.Provider>
  );
};
export default GlassesView;
