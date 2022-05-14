import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background:white;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
