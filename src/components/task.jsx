import React, { Component } from 'react';

class Task extends Component {
    state = { title: this.props.title, completed: this.props.completed }

    // renderList() {
    //     if (this.state.list.length === 0) return <p>You have nothing in your list!</p>
    //     return <ul className="list-group">
    //         {this.state.list.map(items => <li key={items} className="list-group-item">{items}</li>)}
    //     </ul>
    // }

    render() {
        // return (<React.Fragment>
        //     <button className="btn btn-primary">To-Do List
        //         <span className="badge bg-secondary">{this.state.list.length}</span>
        //     </button>
        //     {this.renderList()}
        // </React.Fragment>);
        return <div>
            <p>{this.state.title} - {this.state.completed.toString()}</p>
        </div>
    }

}

export default Task;