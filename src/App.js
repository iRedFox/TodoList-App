import React, { Component } from 'react';
import Listless from './components/listless';
import './App.css';


class App extends Component {
  render() {
    return <div className="d-flex gap-5 justify-content-center">
      <main >
        < Listless/>
      </main>
    </div>
  }
}

export default App;