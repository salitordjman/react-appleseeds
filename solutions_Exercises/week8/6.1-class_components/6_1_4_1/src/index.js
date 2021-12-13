import ReactDOM from "react-dom";
import Btn from "./Btn";
import TextBtn from "./TextBtn";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Btn>
          <b>Important</b>
      </Btn>

      <Btn>
        <TextBtn
          text="Not Important"
        />
      </Btn>
    </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector("#root"));