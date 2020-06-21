import { createGlobalStyle } from "@xstyled/styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    body {
        background-color: bg;
    }

    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color:text;
    }
    
    div#root{
        width: 100%;
        min-height: 100vh;
        display: grid;
    }
`;

export default GlobalStyle;
