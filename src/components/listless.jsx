import React, { Component } from 'react';
import ItemList from './itemlist';
// this class will store lists of itemlist
class Listless extends Component {
    state = { items: [] }
    render() {
        return (<ItemList />);
    }
}

export default Listless;