import React, { useState } from "react";
import CheckItem from "./components/CheckItem";
import "./App.css";

const App = () => {
  const [item, setItem] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const changeItem = (itemChange) => {
    const newArr = item.map((it) => {
      if (it.name === itemChange.name) {
        it.completed = !it.completed;
      }
      return it;
    });
    setItem(newArr);
  };

  return (
    <>
      <CheckItem newObj={item} changeItem1={changeItem} />
    </>
  );
};

export default App;

// <>&#1002;</>
// צורות בג'ווה סקריפט
