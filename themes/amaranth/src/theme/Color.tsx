import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary-100: #e88896;
    --color-primary-200: #e47485;
    --color-primary-300: #e06073;
    --color-primary-400: #dc4c62;
    --color-primary: #d83850;
    --color-primary-600: #c23248;
    --color-primary-700: #ad2d40;
    --color-primary-800: #972738;
    --color-primary-900: #822230;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-red-primary: #C41E3A;
    --color-red-dark: #641128;
    --color-red-light: #FF3355;
 
    --color-black-dark:#1D1D1D;
    --color-black-light:#333333;

    --color-infernal-orange: #FF6F00;
    --color-crimson: #990000;
    --color-deepyellow: #FFCC00;

    --color-text: #ffffff;
    --color-inverted-text: #000000;
    --color-background: #333333;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
