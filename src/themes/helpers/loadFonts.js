// @flow
/**    - Helvetica Now Display [display]  -    */
import FHelveticaNormal400Woff from "../../assets/fonts/Helvetica/helveticanowdisplay-regular.woff";
import FHelveticaNormal600Woff2 from "../../assets/fonts/Helvetica/helveticanowdisplay-mbold.woff2";
import FHelveticaNormal700Woff2 from "../../assets/fonts/Helvetica/helveticanowdisplay-bold.woff2";
/**    - Sharp Sans -    */
import FSharpSansNormal600Woff2 from "../../assets/fonts/SharpSans/SharpSansNo2-Semibold.woff2";
import FSharpSansNormal700Woff2 from "../../assets/fonts/SharpSans/SharpSansNo2-Bold.woff2";

// /**    - Acumin -    */
// import FAcuminNormal400Woff from "../../assets/fonts/Acumin/Acumin-RPro.woff"
// import FAcuminNormal700Woff from "../../assets/fonts/Acumin/Acumin-BdPro.woff";

// const AcuminNormal400Woff = {
//   fontFamily: "Acumin Pro",
//   fontStyle: "normal",
//   fontWeight: 400,
//   src: `url('${FAcuminNormal400Woff}') format('woff')`,
// };
// const AcuminNormal700Woff = {
//   fontFamily: "Acumin Pro",
//   fontStyle: "normal",
//   fontWeight: 400,
//   src: `url('${FFAcuminNormal700Woff}') format('woff')`,
// };


const HelveticaNormal400Woff = {
  fontFamily: "Helvetica Now Display",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url('${FHelveticaNormal400Woff}') format('woff')`,
};
const HelveticaNormal600Woff2 = {
  fontFamily: "Helvetica Now Display",
  fontStyle: "normal",
  fontWeight: 600,
  src: `url('${FHelveticaNormal600Woff2}') format('woff2')`,
};
const HelveticaNormal700Woff2 = {
  fontFamily: "Helvetica Now Display",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${FHelveticaNormal700Woff2}') format('woff2')`,
};

const SharpSansNormal600Woff2 = {
  fontFamily: "Sharp Sans No2",
  fontStyle: "normal",
  fontWeight: 600,
  src: `url('${FSharpSansNormal600Woff2}') format('woff2')`,
};
const SharpSansNormal700Woff2 = {
  fontFamily: "Sharp Sans No2",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${FSharpSansNormal700Woff2}') format('woff2')`,
};

export const FONT_LIST = [
  HelveticaNormal400Woff,
  HelveticaNormal600Woff2,
  HelveticaNormal700Woff2,
  SharpSansNormal600Woff2,
  SharpSansNormal700Woff2,
  // AcuminNormal400Woff,
  // AcuminNormal700Woff
];
