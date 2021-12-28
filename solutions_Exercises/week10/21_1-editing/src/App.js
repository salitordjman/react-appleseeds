import { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    show && inputRef.current.focus();
  }, [show]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show && "Edit"}
        {show && "save"}
      </button>
      {show && <input ref={inputRef} type="text" />}
    </div>
  );
};

export default App;
