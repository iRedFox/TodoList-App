import React, { Component } from "react";
import ItemGroup from "./common/itemgroup";

// this class creates a task for a list
class Task extends Component {
  state = {
    title: this.props.title,
    completed: this.props.completed,
    edit: true,
  };

  onTaskClick = () => {
    this.setState({ edit: false });
  };

  onTaskChange = (newTitle) => {
    console.log("Updated input from " + this.state.title + " to: " + newTitle);
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <ItemGroup
        title={this.state.title}
        completed={this.state.completed.toString()}
        edit={this.state.edit}
        onClick={this.onTaskClick}
        onChange={this.onTaskChange}
      />
    );
  }
}

export default Task;
