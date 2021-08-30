import React, { Component } from "react";
import ItemList from "./itemlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// this class will store lists of itemlist
class Listless extends Component {
  state = {
    lists: [
      { id: 0, title: "Today", show: false },
      { id: 1, title: "Tomorrow", show: false },
    ],
  };

  createList = (title) => {
    let newList = {
      id: this.state.lists.length + 1,
      title: title,
      show: false,
    };
    this.state.lists.push(newList);
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
      return (
        <React.Fragment>
          <FontAwesomeIcon
            onClick={() => this.showList(list)}
            icon={["fa", "eye-slash"]}
            transform="grow-8"
            pull="left"
            className="m-2 color:blue"
          />
          <ItemList title={list.title} />
        </React.Fragment>
      );
    }
    return (
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
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
    // create a list of buttons or ItemList depends on state. clicked always FALSE
    return (
      <React.Fragment>
        <button className="btn btn-success m-1">
          Create a new list{" "}
          <span className="badge bg-info">
            You have {this.state.lists.length} lists
          </span>
        </button>
        {lists.map((list) => (
          <div key={list.id} className="m-1">
            {this.listOrBox(list)}
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Listless;
