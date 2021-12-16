import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PurpleBox from "./PurpleBox";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="green">
      <div className="blue">  
        <div className="pink">
        <PurpleBox />
        <PurpleBox />
        
        </div>  
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
