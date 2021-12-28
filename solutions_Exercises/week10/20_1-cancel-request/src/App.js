import { useState } from "react";
import "./App.css";
import Starting from "./components/Starting";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show && "Display Data"}
        {show && "Hide Data"}
      </button>
      {show && <Starting />}
    </div>
  );
};

export default App;
