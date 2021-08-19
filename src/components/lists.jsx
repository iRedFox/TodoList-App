import React, { Component } from 'react';
import List from './list';

class Lists extends Component {
    state = { lists: [
        {id:0, items:[]},
        {id:1, items:[]} ]}
    render() { 
        return ( <div>{this.state.lists.map(list => <List key={list.id} />)}</div> );
    }
}
 
export default Lists;