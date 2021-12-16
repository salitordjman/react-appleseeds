import React from "react";
import "./App.css";
import Box from "./component/box";
import Color from "./component/color";

class App extends React.Component {
  state = { isHidden: false };
  handleToggle = () => {
    this.setState((state) => ({
      isHidden: !this.state.isHidden,
    }));
  };

  render() {
    const myColor=()=>{
      if(this.state.isHidden){
        return "red";
      }
      return "transparent";
    }

    return (
      <div className="container App">
        <button onClick={this.handleToggle} style={{background: myColor()}}>Hide and seek </button>
        {/* {this.state.isHidden ? <Box></Box> : null} */}
        {this.state.isHidden ? <Box /> : null}


        {/*//! 1111111111111111111111111111111111111 */}
        {/* {this.state.isHidden ? <Color>{this.state.isHidden}</Color> : null} */}
        {/*//! 22222222222222222222222222222222222222222222 */}
        {/* {this.state.isHidden ? <Color myColor={this.state.isHidden} /> : null} */}
      </div>
    );
  }
}

export default App;





// import React from "react";
// import "./App.css";
// import Box from "./component/box";

// class App extends React.Component {
//   state = { isHidden: false };
//   handleToggle = () => {
//     this.setState((state) => ({
//       isHidden: !this.state.isHidden,
//     }));
//   };
//   render() {
//     return (
//       <div className="container App">
//         <button onClick={this.handleToggle}>Hide and seek </button>
//         {/* {this.state.isHidden ? <Box></Box> : null} */}
//         {this.state.isHidden ? <Box /> : null}
//       </div>
//     );
//   }
// }

// export default App;