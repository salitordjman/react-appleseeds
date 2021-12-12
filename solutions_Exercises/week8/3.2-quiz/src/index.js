// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Quiz from "./Quiz";

if (module.hot) {
  module.hot.accept();
}
// Create a react component
const App = () => {
  return <Quiz />;
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

