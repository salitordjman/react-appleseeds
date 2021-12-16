import React, { Component } from 'react';
import './App.css';
import Box from "./component/box";

const App = () => {

    return (
      <div>
        <Box width="160px" height="160px" />
        <Box width="250px" height="200px" />
        <Box width="70px" height="70px" />
      </div>
    )
}
// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Box width="160px" height="160px" />
//         <Box width="250px" height="200px" />
//         <Box width="70px" height="70px" />
//       </div>
//     )
//   }
// }
export default App;