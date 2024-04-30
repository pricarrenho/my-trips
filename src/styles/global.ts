import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --background: #04070e;
    }

    * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body,
    h1,
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
    }

    html,
    body,
    #__next {
      height: 100%;
      background: var(--background);
      color: ${theme.colors.white};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a {
      text-decoration: none;
    }

    .leaflet-bottom {
      display: none;
    }
  `}
`;
