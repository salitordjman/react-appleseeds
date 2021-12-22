import React from "react";
import {Link} from 'react-router-dom';
import Store from '../store';


class Products extends React.Component {
  state={data:[]};
  componentDidMount(){
    this.setState({
      data: Store.map((myItem)=>{
        // return <Link key={myItem.id} to={`/productdetail/${myItem.id}`}>{` ${myItem.title} `}</Link>        
        return <Link 
        key={myItem.id} 
        to={`${this.props.location.pathname}/${myItem.id}`}
        >
        {/* {` ${myItem.title} `} */}
        {myItem.title}
        </Link>
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.data}
      </div>
    );
  };
};
export default Products




