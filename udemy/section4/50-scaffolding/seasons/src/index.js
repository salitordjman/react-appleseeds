import React from 'react';

const SeasonDisplay = () => {
  return <div>Season Display</div>;
};

export default SeasonDisplay;

import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
