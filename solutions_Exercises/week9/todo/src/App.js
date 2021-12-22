import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import NewInput from "./components/NewInput";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Homework" },
      { id: 2, name: "Clean" },
    ],
  };

  handleCreate = (value) => {
    const id = uuidv4();
    console.log(this);
    console.log(value);
    const newItem = {
      id,
      name: value.Create,
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  handleDelete = (id) => {
    const filteredList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: filteredList });
  };

  handleUpdate = (value, id) => {
    const items = this.state.items;
    const item = items.find((item) => item.id === id);
    // const index = items.findIndex((item) => item.id === id);

    const editedItem = {
      ...item,
      name: value.update,
    };
    //* first solution
    // const newItems = [...items];
    // newItems[index] = editedItem;
    // this.setState({ items: newItems });

    //*second solution
    this.setState({
      items: this.state.items.map((item) => {
        return item.id === id ? editedItem : item;
      }),
    });
  };

  displayItems = () => {
    return this.state.items.map((item, i) => {
      return (
        <div key={i}>
          {item.name}
          <NewInput
            type="update"
            placeholder="Update"
            handleCallback={this.handleUpdate}
            id={item.id}
          />
          <button onClick={() => this.handleDelete(item.id)}>Delete</button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List!!!</h1>
        {this.displayItems()}
        <NewInput type="Create" placeholder="New task" handleCallback={this.handleCreate} />
      </div>
    );
  }
}

export default App;

