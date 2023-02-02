import GlassesList from "./GlassesList/GlassesList"
import GlassesHead from "./GlassesHead/GlassesHead"
import React, { useState, useContext, createContext } from "react";

export const ClourContext = createContext('colored');

const GlassesView = ({name}) => {
      const [currentColour, setCurrentColour] = useState('coloured');
    
    
    return (<ClourContext.Provider value={{currentColour,setCurrentColour}}>
        <GlassesHead name={name} />
        <GlassesList />
        </ClourContext.Provider>)
}
export default GlassesView