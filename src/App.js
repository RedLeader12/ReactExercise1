import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p> Hello </p> 
        < Person /> 
        < Person /> 
        < Person /> 
      </div>
    );
  }
}

export default App;
