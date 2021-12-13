import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Btn";
import TextBtn from "./TextBtn";

const App = () => {
  return (
    <div className="container">
      <Btn>
          <b>Important</b>
      </Btn>

      <Btn>
        <TextBtn
          text="Not Important"
        />
      </Btn>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));