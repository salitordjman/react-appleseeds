import React,{Component} from "react";


class App extends Component {
  state = {count: 0, color:"black"};
  clickUp=()=>{
    if(this.state.count<10){
      this.setState(prevState => {
        return{
          count: prevState.count+1
        }
      })
    }
  }
  clickDown=()=>{
    if(this.state.count>-10){
      this.setState(prevState => {
        return{
          count: prevState.count-1
        }
      })
    }
  }
  render() {
    const myColor=()=>{
      if(Math.sign(this.state.count)===1){
          return "green";
        }
      if(Math.sign(this.state.count)===-1){
          return "red";
        }
        return "black";
    }
    return (
      <div className="container App">
        <button onClick={this.clickUp}>+up+</button>
        <label style={{color: myColor()}}>{this.state.count}</label>
        <button onClick={this.clickDown}>-down- </button>
      </div>
      );
  }
}

export default App;