import React, { Component } from "react";
import "./box.css";

class Box extends Component {
  state = { myClass: "" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
         myClass:"box inOut"});
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ myClass:""});
    }, 4000);
  }
  
  render() {
    return (
      <div
      className={`${this.state.myClass}`}
      style={{ width: `${this.props.width}`, height: `${this.props.height}` }}>
      </div>
    )
  }
}
export default Box