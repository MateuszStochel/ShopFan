import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [isSideDrawer, setSideDrawer] = useState(false);
  const [isSideCart, setSideCart] = useState(false);

  const value = {
    drawerToggleClickHandler: () => setSideDrawer(!isSideDrawer),
    shoppingCartToggleClickHandler: () => setSideCart(!isSideCart),
    setSideCart,
    setSideDrawer,
    isSideDrawer,
    isSideCart,
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
