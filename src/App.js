import React, { Component } from 'react';
import './App.sass';
import Todolist from './components/TodoList'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Todolist />

      </div>
    );
  }
}

export default App;
