import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --red: #EC755D;
  --lightRed: #FF9B86;
  --cyan: #76B5BC;
  --lightCyan: #B4E0E5;
  --darkBrown: #382314;
  --brown: #92857A;
  --cream: #F8E9DD;
  --cardWhite: #FFFBF6;
  --white: #FFFFFF;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,html {
  background-color: var(--cream);
  font-family: 'DM Sans', sans-serif;
  height: 100%;
  width: 100%;
}
`;
