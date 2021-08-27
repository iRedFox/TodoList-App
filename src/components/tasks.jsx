import React, { Component } from "react";
import Task from "./task";
class Tasks extends Component {
  state = {
    id: this.props.id,
    tasks: [
      { id: 0, title: "Eating", completed: false },
      { id: 1, title: "Sleeping", completed: true },
      { id: 2, title: "Eating", completed: false },
    ],
  };

  renderList() {
    if (this.state.tasks.length === 0)
      return <p>You have nothing in your list!</p>;
    return (
      <ul className="list-group">
        {this.state.tasks.map((task) => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </ul>
    );
  }
  render() {
    console.log(this.state.id);
    return <div>{this.renderList()}</div>;
  }
}

export default Tasks;
