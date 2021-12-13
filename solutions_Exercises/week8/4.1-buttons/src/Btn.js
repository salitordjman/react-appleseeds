import React from "react";
import './index.css';

const TextBtn = props => {
  return (
    <button className="btn">
      {props.children}
    </button>
  );
};

export default TextBtn;
