import React, { Component } from "react";
import "./box.css";

class Box extends Component {
  state = { myColor: "" ,myClass:"box"};
  componentDidMount() {
    setInterval(() => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.setState({
        myColor: randomColor
      });
    }, 500);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ myClass:"box circleBox"});
    }, 2000);
  }
  
  render() {
    return (
      <div
      className={`${this.state.myClass}`}
      style={{ background: `#${this.state.myColor}`}}>
      </div>
    )
  }
}
export default Box