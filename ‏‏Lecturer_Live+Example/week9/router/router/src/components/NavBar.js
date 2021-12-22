import { Link } from "react-router-dom";
const NavBar = (props) => {
  const styles = {
    height: "5vh",
    background: "orange",
  };
  return (
    <div style={styles}>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      {/* <a href="/">Home</a> */}
    </div>
  );
};
export default NavBar;
