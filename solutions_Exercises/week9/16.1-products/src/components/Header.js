import React from "react";
import { Link } from 'react-router-dom';
const styles = {
  height: "5vh",
  fontSize: "25px",
  background: "gray",
};
const styles1 = {
  margin:"2vh",
};
const Header =()=>{
  return(
  <div style={styles}>
      <Link style={styles1} to="/"> Home </Link>
      <Link style={styles1} to="/products"> Products </Link>
  </div>
  );
};

export default Header