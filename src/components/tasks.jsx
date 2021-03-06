import React, { Component } from "react";
import Task from "./task";
import Complete from "./common/complete";

class Tasks extends Component {
  state = {
    id: this.props.tasks_id,
    tasks: [
      { id: 0, title: "Eating", completed: false },
      { id: 1, title: "Sleeping", completed: true },
      { id: 2, title: "Eating", completed: false },
      { id: 3, title: "gaming", completed: true },
    ],
  };

  handleCheck = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...tasks[index] };
    tasks[index].completed = !tasks[index].completed;

    this.setState({ tasks });
  };

  renderList = () => {
    const { tasks } = this.state;
    if (tasks.length === 0) return <p>You have nothing in your list!</p>;
    return (
      <ul className="list-group list-group-flush text-center">
        {tasks.map((task) => (
          <React.Fragment>
            <Complete
              completed={task.completed}
              onClick={() => this.handleCheck(task)}
            />
            <Task title={task.title} completed={task.completed} />
          </React.Fragment>
        ))}
      </ul>
    );
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default Tasks;
