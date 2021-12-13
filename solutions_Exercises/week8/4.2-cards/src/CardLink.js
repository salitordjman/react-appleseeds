import React from 'react';
import './index.css';

const CardLink = props => {
  return (
    <a href='#' className="link">{props.link}</a>
  );
};

export default CardLink;
