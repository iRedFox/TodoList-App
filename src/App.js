import React, { Component } from 'react';
import Tasks from './components/tasks';
import './App.css';


class App extends Component {
  render() {
    return <div className="d-flex gap-5 justify-content-center">
      <main className="container">
        < Tasks/>
      </main>
    </div>
  }
}

export default App;