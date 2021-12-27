import React, { useState } from "react";
import "./Item.css";
const Starting = ({ arrNumbers, checkCheck }) => {
  const [toggleTF, setToggleTF] = useState(false);

  const resetTFFunc = (e, num) => {
    checkCheck(e, num);
    return setToggleTF(!toggleTF);
  };

  return (
    <>
      {arrNumbers.map((num, index) => {
        return (
          <li key={num}>
            <input
              type="checkbox"
              checked={num.toggleTF}
              onChange={(e) => {
                resetTFFunc(e, num);
              }}
            />
            {num}
          </li>
        );
      })}
    </>
  );
};
export default Starting;

//array -string(css,js.....)
//send component with arr
//span onClick FuncStyle
// useState trueFalse&&=>FuncStyle=>text-decoration-line: line-through:"";
//useState trueFalse&&span V/X
//map all item
