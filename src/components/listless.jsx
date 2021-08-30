import React, { Component } from "react";
import ItemList from "./itemlist";

// this class will store lists of itemlist
class Listless extends Component {
  state = {
    lists: [
      { id: 0, title: "Today", show: false },
      { id: 1, title: "Tomorrow", show: false },
    ],
  };

  // Show a specific list depends on the boolean
  showList = (list) => {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    lists[index] = { ...lists[index] };
    lists[index].show = !lists[index].show;
    this.setState({ lists });
  };

  // Depends on a boolean it will show a list or button
  listOrBox = (list) => {
    if (list.show) {
      return <ItemList title={list.title} />;
    }
    return (
      <button
        onClick={() => {
          this.showList(list);
        }}
      >
        {list.title}
      </button>
    );
  };

  // This function will render the items depends on listOrBox method
  renderItems = () => {
    const { lists } = this.state;
    // if it's empty then inform that needs to create a list
    if (lists.length === 0) return <h1>Please create a list</h1>;
    // create a list of buttons or ItemList depends on state. clicked always FALSE
    else {
      return (
        <ul className="list-group">
          {lists.map((list) => (
            <div key={list.id}>{this.listOrBox(list)}</div>
          ))}
        </ul>
      );
    }
  };

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Listless;
