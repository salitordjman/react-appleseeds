import React from 'react';
import './index.css';

class CardLink extends React.Component {
  render() {
    return (
      <a href='#' className="link">{this.props.link}</a>
    );
  };
};

export default CardLink;
