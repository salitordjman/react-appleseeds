import React from "react";
import "./Item.css";
const CheckItem = ({ newObj, changeItem1 }) => {
  return (
    <>
      {newObj.map((item) => {
        console.log(item);
        return (
          <div key={item.name}>
            <span
              style={{
                textDecorationLine: item.completed ? "line-through" : "",
              }}
            >
              {item.name}
            </span>
            <span
              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              onClick={() => {
                changeItem1(item);
              }}
            >
              {item.completed ? "V" : "X"}
            </span>
          </div>
        );
      })}
    </>
  );
};
export default CheckItem;

//array -string(css,js.....)
//send component with arr
//span onClick FuncStyle
// useState trueFalse&&=>FuncStyle=>text-decoration-line: line-through:"";
//useState trueFalse&&span V/X
//map all item
