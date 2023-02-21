import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducers";
import { ACTIONS } from "./constants";
const ROICalcContext = createContext(null);

const ROICalcContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ROICalcContext.Provider value={value}>{children}</ROICalcContext.Provider>
  );
};

export { ROICalcContextProvider, ROICalcContext, ACTIONS };
