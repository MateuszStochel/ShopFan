import React from "react";
import { ThemeProvider } from "styled-components";
import NavigationProvider from "./context/NavigationProvider";
import Navigation from "./navigation/Navigation";
import GlobalStyle from "./theme/GobalStyle";
import { theme } from "./theme/MainTheme";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationProvider>
        <Navigation />
        {children}
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default MainTemplate;
