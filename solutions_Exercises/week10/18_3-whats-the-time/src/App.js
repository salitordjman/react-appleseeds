import React, { useState } from "react";
// import CheckItem from "./components/CheckItem";
import "./App.css";

const App = () => {
  const [newTime, setNewTime] = useState(60);

  return (
    <div>
      Seconds
      <input
        onChange={(sec) => setNewTime(sec.target.value)}
        type="number"
        value={newTime}
      />
      <br />
      Minutes
      <input
        onChange={(min) => setNewTime(min.target.value * 60)}
        type="number"
        value={newTime / 60}
      />
      <br />
      Hours
      <input
        onChange={(hr) => setNewTime(hr.target.value * 60 * 60)}
        type="number"
        value={newTime / (60 * 60)}
      />
      <br />
    </div>
  );
};

export default App;
