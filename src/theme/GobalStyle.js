import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

button, input:focus, button:focus, select:focus{
outline: 0!important;
}

`;

export default GlobalStyle;
