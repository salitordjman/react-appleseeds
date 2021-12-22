import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3/:id/" component={Page3} />
      </Router>
    </div>
  );
}

export default App;
