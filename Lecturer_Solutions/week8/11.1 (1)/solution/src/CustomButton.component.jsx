import React from "react";

const CustomButton = ({ color, onChildClick }) => {
  const handleClick = (clickedColor) => {
    onChildClick(clickedColor);
  };
  return (
    <button onClick={() => handleClick(color)} style={{ background: color }}>
      {color}
    </button>
  );
};
export default CustomButton;
