import React from 'react';
import './index.css';

class AllCard extends React.Component {
  render() {
    return (
      <div className="card">
      <div className="imgDiv">
        <img alt="img" src={this.props.img} />
      </div>
      <h1 className="title">{this.props.title}</h1>
      <h3 className="description">{this.props.description}</h3>
        <div className="allLink">{this.props.children}</div>
    </div>
    );
  };
};
export default AllCard;
