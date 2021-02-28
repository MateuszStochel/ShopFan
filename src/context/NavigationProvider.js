import React, { createContext } from "react";

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const value = {};
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
