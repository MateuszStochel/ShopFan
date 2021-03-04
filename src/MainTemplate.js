import React from "react";

import { theme } from "./theme/MainTheme";
import { ThemeProvider } from "styled-components";
import NavigationProvider from "./context/NavigationProvider";
import GlobalStyle from "./theme/GobalStyle";

import Backdrop from "./navigation/Backdrop";
import Navigation from "./navigation/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationProvider>
        <Backdrop />
        <Navigation />
      </NavigationProvider>
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
