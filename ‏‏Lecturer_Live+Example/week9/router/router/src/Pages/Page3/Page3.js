import React from "react";

class Page3 extends React.Component {
  state = {
    items: [
      { id: 1, name: "apples" },
      { id: 2, name: "oranges" },
      { id: 3, name: "bananas" },
    ],
    currentItem: null,
  };
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const findItem = this.state.items.find((item) => {
      return id === item.id;
    });

    this.setState({ currentItem: findItem });
  }
  render() {
    const { currentItem } = this.state;
    return <div>{currentItem && currentItem.name}</div>;
  }
}
export default Page3;
