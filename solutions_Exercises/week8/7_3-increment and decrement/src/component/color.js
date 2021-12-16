import React from "react";
// {/*//! 22222222222222222222222222222222222222222222 */}
const Color = (props) => {
  console.log(props.myColor);
  if(props.myColor)
  return <div style={{
    background: "yellow",
    margin: "20px",
    height: "70%",
    width: "80%",
  }}></div>;
};
export default Color;







// {/*//! 1111111111111111111111111111111111111 */}
// const Color = (props) => {
//   console.log(props.children);
//   if(props.children)
//   return <div style={{
//     background: "yellow",
//     margin: "20px",
//     height: "70%",
//     width: "80%",
//   }}></div>;
// };
// export default Color;