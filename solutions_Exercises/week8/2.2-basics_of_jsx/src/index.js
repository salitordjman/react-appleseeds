// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}
// Create a react component
const App = () => {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 =6;
  const string = 'I love React!';
  return (<div>
    {/* {data[0][0].toUpperCase()} {data[1][0].toUpperCase()} */}
  {/* {data.join(" ")} */}
  {data[0]} {data[1]}
  <h1>{number1+number2}</h1>
  <p>"The string’s length is:"{string.length}</p>

  </div>);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
