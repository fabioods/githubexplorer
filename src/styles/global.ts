import { createGlobalStyle } from 'styled-components';

import Github from '../assets/Github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F2F2FA url(${Github}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    padding: 40px 20px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

`;
