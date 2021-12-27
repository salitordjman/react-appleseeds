import React, { useState } from "react";

const ShowText = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);

   if (text.length <= maxLength) {
    return <p>{text}</p>;
  }
  const handleClick = () => {
    setHidden((hidden) => !hidden);
  };

 
  const renderShortenText = () => {
    const shortenText = text.substr(0, maxLength);
    if (hidden) {
      return (
        <p>
          {shortenText}...
          <span
            onClick={handleClick}
            style={{ color: "blue", cursor: "pointer" }}
          >
            read more
          </span>
        </p>
      );
    } else {
      return (
        <p>
          {text}
          <span
           role="button"
            onClick={handleClick}
            style={{ color: "blue", cursor: "pointer" }}
          >
            show less
          </span>
        </p>
      );
    }
  };

  return <div>{renderShortenText()}</div>;
};

export default ShowText;
