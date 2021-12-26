import React, { useState } from "react";
import "./Item.css";
const TextLength = ({ newString, maxLength }) => {
  const [trueFalse, setTrueFalse] = useState(true);
  const toggleText = (id) => {
    setTrueFalse(!trueFalse);
  };
  return (
    <div>
      {trueFalse ? newString.substring(0, maxLength) : newString}
      <span onClick={toggleText} style={{ color: "blue", cursor: "pointer" }}>
        {trueFalse ? "...Read more" : "Show less"}
      </span>
    </div>
  );
};
export default TextLength;

// useState T/F &&substring
//span link onClick newString
//span link onClick &&substring
