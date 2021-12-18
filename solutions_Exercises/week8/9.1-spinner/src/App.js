import React, { Component } from 'react';
import './App.css';
import Timer from "./component/Timer";
import Spinner from "./component/Spinner";

class App extends Component {

  state = {isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false });
      console.log(this);
    }, 5000);
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Timer />}
        {this.state.isLoading && <Spinner />}
        {this.state.data}
      </div>
    );
  }
}
export default App;



