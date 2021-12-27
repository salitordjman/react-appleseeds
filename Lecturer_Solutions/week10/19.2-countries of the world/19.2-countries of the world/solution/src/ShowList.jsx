import React from "react";

const ShowList = ({item}) => {
  return (
    <ul>
      {item.map((country, i) => (
        <li key={i}>{country.name}</li>
      ))}
    </ul>
  );
};

export default ShowList;
