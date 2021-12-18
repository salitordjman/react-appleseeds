import React from "react";

class Timer extends React.Component {
  state = { value: 5 };
  fff1=(val)=>{
    console.log(val);
    console.log(this);
    // this.props({ value: this.state.value - 1 })
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer invoked");
      if(this.state.value>0){
      this.setState({ value: this.state.value - 1 });
    }
    }, 1000);
  }
    componentWillUnmount() {
      console.log("clearing timer");
    clearInterval(this.timer);
  }
  render() {
    return <div>{this.state.value}</div>;
  }
}
export default Timer;
