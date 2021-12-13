import React from "react";
import './index.css';

class TextBtn extends React.Component {
  render() {
  return (
    <button className="btn">
      {this.props.children}
    </button>
  );
};
}
export default TextBtn;
