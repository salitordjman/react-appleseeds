import React, { Component } from 'react';
import './App.css';
import MyButton from "./component/Mybutton";

class App extends Component {
  state = { myColor: "" };
  colorsArr = ["red", "blue", "yellow"];
  MyColorFunc1 = (val) => {
    this.setState({ myColor: val });
  };
  render() {
    return (
      <div>
        {console.log(this)}
        {this.colorsArr.map((color) => (
          <MyButton MyColorFunc2={this.MyColorFunc1} name={color} />
        ))}
        <h1>the color selected is: {this.state.myColor} </h1>
      </div>
    );
  }
}
export default App;



