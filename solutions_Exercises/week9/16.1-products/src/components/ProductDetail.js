import React from "react";
import Store from "./store";
// import {Link} from 'react-router-dom';

class ProductDetail extends React.Component {
  state={item:{}};
  
  componentDidMount(){
    console.log(this.props);
    const thisId=Number(this.props.match.params.myId);
    const myFind= Store.find((el)=>{
      return el.id===thisId
    });
    if (!myFind) {
      this.props.history.goBack();
    }
    this.setState({item: myFind})
  }
  handleClick = () =>{
    this.props.history.goBack();
  }
  render(){
    return(
      <>
      <h1>{this.state.item.title}</h1>
      <h3>{`Price: ${this.state.item.price}`}</h3>
      <img src={this.state.item.imageUrl} alt='' />
      <div>
      <button onClick={this.handleClick}>back</button>
      </div>
      </>
    );
  };
};

export default ProductDetail