import React from "react";
import CustomButton from "./CustomButton.component";

class App extends React.Component {
  state = { color: null };

  handleChildClick = (childColor) => {
    this.setState({ color: childColor });
  };
  render() {
    const colors = ["blue", "red", "yellow"];
    return (
      <div>
        {colors.map((color) => {
          return (
            <div>
              <CustomButton
                color={color}
                onChildClick={this.handleChildClick}
              />
            </div>
          );
        })}
        <h3>The color selected is: {this.state.color}</h3>
      </div>
    );
  }
}

export default App;
