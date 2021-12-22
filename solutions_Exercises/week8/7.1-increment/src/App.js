// import React from 'react';
import React,{Component} from 'react';
import './App.css';

class App extends Component {
// class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     count:0
  //   }
    state={count: 0};

    // handleClick=this.handleClick.bind(this)
  // handleClick(){

  handleClick=()=>{
    // this.setState(prevState => {
    //   return{
    //     count: prevState.count+1
    //   }
    // })
  }
  render(){
    return (
      <div>
      <button onClick={this.handleClick}>increment</button>
      {this.state.count}
    </div>
    
  );
  }
}

export default App;
