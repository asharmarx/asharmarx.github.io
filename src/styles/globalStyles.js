import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    width: 100%; // same as not setting it or the default value
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 1.5rem;
  }

  #root {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.text};

    :hover {
     color: ${({ theme }) => theme.hover};
    }
  }
  `;
