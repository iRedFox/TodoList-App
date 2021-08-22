import React, { Component } from 'react';
import ItemGroup from './common/itemgroup';

// this class creates a task for a list
class Task extends Component {
    state = { title: this.props.title, completed: this.props.completed }

    render() {

        return (<ItemGroup title={this.state.title} completed={this.state.title}/>);
    }

}

export default Task;