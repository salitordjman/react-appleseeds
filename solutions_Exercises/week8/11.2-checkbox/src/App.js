import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
        <form>
        <div>
          <input type="checkBox"></input>I read the terms of the app
        </div>
        <div>
          <input type="checkBox" checked={true}></input>I accept the term of the app
        </div>
        <div>
          <input type="checkBox"></input>I want to get the weekly news letter
        </div>
        <div>
          <input type="checkBox" checked={true}></input>I want to get sales and offers
        </div>
        </form>
    );
  }
}
export default App;



