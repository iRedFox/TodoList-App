import React, { Component } from 'react';
import Task from './task';
class Tasks extends Component {
    state = { tasks: [
        {id:0, title: "Eating", completed: false},
        {id:1, title: "Sleeping", completed: true},
        {id:2, title: "Eating", completed: false}
    ] }
    render() { 
        return ( <div>
            {this.state.tasks.map(task => <Task key={task.id} title={task.title} completed={task.completed}/>)}
        </div> );
    }
}
 
export default Tasks;