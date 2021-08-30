import React, { Component } from "react";
import Tasks from "./tasks";

// this class creates a list with id, title and tasks
class ItemList extends Component {
  // list of items
  state = { id: 0, title: this.props.title, tasks_id: 0 };
  render() {
    // retrieve array of lists and then map the items inside each list.
    return (
      <React.Fragment>
        <p>Title: {this.state.title}</p>
        <Tasks id={this.state.tasks_id} />
      </React.Fragment>
    );
  }
}

export default ItemList;
