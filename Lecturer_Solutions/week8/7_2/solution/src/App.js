import React from "react";
import "./App.css";
import Box from "./Box.component";

class App extends React.Component {
  state = { isHidden: true };
  handleToggle = () => {
    this.setState((state) => ({
      isHidden: !this.state.isHidden,
    }));
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <button onClick={this.handleToggle}>Hide and seek </button>
        {this.state.isHidden ? <Box></Box> : null}
      </div>
    );
  }
}

export default App;
