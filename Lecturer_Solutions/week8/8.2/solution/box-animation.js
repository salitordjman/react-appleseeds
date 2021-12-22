class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRender: true });
    }, 1000);
  }

  render() {
    const style = {
      width: this.props.size + "px",
      height: this.props.size + "px",
    };
    return this.state.shouldRender ? (
      <div className="box pop-in" style={style}></div>
    ) : null;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRemoveBox: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRemoveBox: true });
    }, 4000);
  }

  render() {
    return (
      <div>
        {this.state.shouldRemoveBox ? null : (
          <div>
            <Box />
            <Box size={150} />
            <Box size={50} />
          </div>
        )}
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
