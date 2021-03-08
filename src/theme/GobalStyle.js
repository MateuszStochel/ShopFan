import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

input, button, input:focus, button:focus, select:focus{
outline: none!important;
}


button:hover{
    cursor: pointer;
}

`;

export default GlobalStyle;
