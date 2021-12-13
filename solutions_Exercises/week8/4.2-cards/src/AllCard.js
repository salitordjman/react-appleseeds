import React from 'react';
import './index.css';

const AllCard = props => {
  return (
    <div className="card">
    <div className="imgDiv">
      <img alt="img" src={props.img} />
    </div>
    <h1 className="title">{props.title}</h1>
    <h3 className="description">{props.description}</h3>
      <div className="allLink">{props.children}</div>
  </div>
  );
};

export default AllCard;
