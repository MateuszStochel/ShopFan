import React from "react";
import { ThemeProvider } from "styled-components";
import NavigationProvider from "./context/NavigationProvider";
import Backdrop from "./navigation/Backdrop";
import Navigation from "./navigation/Navigation";
import GlobalStyle from "./theme/GobalStyle";
import { theme } from "./theme/MainTheme";

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
