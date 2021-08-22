import React, { Component } from 'react';
import Listless from './components/listless';
import './App.css';
import ItemList from './components/itemlist';


class App extends Component {
  render() {
    return <div className="d-flex gap-5 justify-content-center">
      <main className="container">
        < Listless/>
      </main>
    </div>
  }
}

export default App;