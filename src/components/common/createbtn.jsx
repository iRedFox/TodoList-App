import React, { Component } from 'react';

class createbtn extends Component {
    state = { lists: [] }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-success">Create a new list <span className="badge bg-info">You have {this.state.lists.length} lists</span></button>
            </React.Fragment>);
    }
}

export default List;