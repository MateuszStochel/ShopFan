import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [sideCartOpen, setSideCartOpen] = useState(false);

  const value = {
    drawerToggleClickHandler: () => setSideDrawerOpen(!sideDrawerOpen),
    shoppingCartToggleClickHandler: () => setSideCartOpen(!sideCartOpen),
    sideDrawerOpen,
    sideCartOpen,
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
