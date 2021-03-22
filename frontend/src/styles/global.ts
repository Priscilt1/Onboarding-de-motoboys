import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #9b4dee;
    --indigo: #6610f2;
    --orange: #fd7e14;
    --yellow-dark: #ffc107;
    --background: #fff;
    --gray: #868e96;
    --gray-dark: #343a40;
    --secondary: #868e96;
    --white: #f8f9fa;
    --dark: #343a40;
    --green: #43a047;
    --yellow: #f7ea48;
    --pink: #e0457b;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    @media (max-width: 1080px) {
      font-size: 93,75%; 
    }
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 87.5%; 
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: aglet-sans, sans-serif;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-family: aglet sans;
    font-weight: 700;
    font-style: normal;
    color: #000;
    line-height: 1.2;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed; 
  }

`
