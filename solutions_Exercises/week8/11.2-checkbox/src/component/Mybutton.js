import React, { Component } from 'react';

class MyButton extends Component {
  MyColorFunc3 = () => {
    this.props.MyColorFunc2(this.props.name);
  };
  render() {
    return (
      <button
        style={{ backgroundColor: this.props.name }}
        onClick={this.MyColorFunc3}
      >
        {this.props.name}
      </button>
    );
  }
}

export default MyButton;