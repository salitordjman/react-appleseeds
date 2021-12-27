import React, { useState } from "react";
import Starting from "./components/Starting";
import "./App.css";

const App = () => {
  const myGreatArr = ["one", "two", "three", "four", "five"];
  const [arrNumbers, setArrNumbers] = useState([...myGreatArr]);
  const [checkednumbers, setCheckednumbers] = useState([]);
  const deleteFunc = () => {
    const newArray = arrNumbers.filter((item) => {
      if (!checkednumbers.includes(item)) {
        return item;
      }
    });
    setArrNumbers(newArray);
    setCheckednumbers([]);
  };
  const resetFunc = () => {
    setArrNumbers(myGreatArr);
  };
  const checkedFunc = (e, num) => {
    console.log(e);
    e.target.checked === true
      ? setCheckednumbers([num, ...checkednumbers])
      : setCheckednumbers(checkednumbers.filter((el) => el !== num));
  };

  return (
    <div className="all">
      <button onClick={() => deleteFunc()}>Delete</button>
      <button onClick={() => resetFunc()}>Reset</button>
      <ul>
        <Starting arrNumbers={arrNumbers} checkCheck={checkedFunc} />
      </ul>
    </div>
  );
};

export default App;
