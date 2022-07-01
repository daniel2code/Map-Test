import React, { createContext, useContext, useReducer } from "react";
import { colorRdeucer } from "../reducer/colorToggleReducer";
import { initialState } from "../state/colorValues";

const ColorContext = createContext();

const Index = ({ children }) => {
  const [state, dispatch] = useReducer(colorRdeucer, initialState);

  return (
    <ColorContext.Provider value={{ isLight: state.isLight, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export default Index;

export const UseColorContext = () => useContext(ColorContext);

export const GetColor = () => {
  const { isLight } = UseColorContext();

  const primaryColor = isLight ? "#fff" : "#464646";
  const secondaryColor = isLight ? "#000" : "#fff";

  return {
    primaryColor,
    secondaryColor,
  };
};
