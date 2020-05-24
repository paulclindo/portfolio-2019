import { FONT_LIST } from './helpers/loadFonts';
import { createGlobalStyle } from 'styled-components';

//fonts
import FHelveticaNormal400Woff from '../assets/fonts/Helvetica/helveticanowdisplay-regular.woff';
import FHelveticaNormal600Woff2 from '../assets/fonts/Helvetica/helveticanowdisplay-mbold.woff2';
import FHelveticaNormal700Woff2 from '../assets/fonts/Helvetica/helveticanowdisplay-bold.woff2';
/**    - Sharp Sans -    */
import FSharpSansNormal600Woff2 from '../assets/fonts/SharpSans/SharpSansNo2-Semibold.woff2';
import FSharpSansNormal700Woff2 from '../assets/fonts/SharpSans/SharpSansNo2-Bold.woff2';

const FONT_FAMILY = {
  normal: ["'Helvetica Now Display'", 'sans-serif'].join(', '),
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    fontFamily: "Helvetica Now Display";
    font-style: "normal";
    font-weight: 400;
    src: url('${FHelveticaNormal400Woff}') format('woff');
  }
  @font-face {
    font-family: "Helvetica Now Display";
    font-style: "normal";
    font-weight: 600;
    src: url('${FHelveticaNormal600Woff2}') format('woff2');
  }
  @font-face {
    font-family: "Helvetica Now Display";
    font-style: "normal";
    font-weight: 700;
    src: url('${FHelveticaNormal700Woff2}') format('woff2');
  }
  @font-face {
    font-family: "Sharp Sans No2";
    font-style: "normal";
    font-weight: 600;
    src: url('${FSharpSansNormal600Woff2}') format('woff2');
  }
  @font-face {
     font-family: "Sharp Sans No2";
    font-style: "normal";
    font-weight: 700;
    src: url('${FSharpSansNormal700Woff2}') format('woff2');
  }
  *, *:after, *:before{
  box-sizing: inherit;
  }
  html {
    -webkit-text-size-adjust: 100%;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${FONT_FAMILY.normal};
    background-color: ${(props) => props.theme.color.body};
    overflow: hidden; 

  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  .container {
    width: 1280px;
    min-width:1280px;
    margin: 0 auto;
  }
  .wrapper {
    padding: 0 48px;
  }
`;
export default GlobalStyles;
