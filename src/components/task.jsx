import React, { Component } from "react";
import ItemGroup from "./common/itemgroup";

// this class creates a task for a list
class Task extends Component {
  state = {
    title: this.props.title,
    edit: true,
  };
  // Handling editing a task (Changing element)
  onTaskClick = () => {
    this.setState({ edit: false });
  };

  onTaskChange = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    const { title, edit } = this.state;
    return (
      <React.Fragment>
        <ItemGroup
          title={title}
          completed={this.props.completed}
          edit={edit}
          onClick={this.onTaskClick}
          onChange={this.onTaskChange}
        />
      </React.Fragment>
    );
  }
}

export default Task;
