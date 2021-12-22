import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, color: "black" };
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  };
  decrement = () => {
    if (this.state.count > -10) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  };

  render() {
    const color = () => {
      if (Math.sign(this.state.count) === 1) {
        return "green";
      } else if (Math.sign(this.state.count) === -1) {
        return "red";
      } else {
        return "black";
      }
    };

    return (
      <div style={{ paddingTop: 30, paddingLeft: 100 }}>
        <input type="button" value="+" onClick={this.increment} />
        <label style={{ color: color() }}> {this.state.count}</label>
        <input type="button" value="-" onClick={this.decrement} />
      </div>
    );
  }
}

export default App;
