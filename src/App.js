import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: '30'},
      {name: 'Dania', age: '24'},
      {name: 'Hey', age: '15'},
    ]
  }

  switchNameHandler = () => {
    console.log('clicked!')
    this.setState({  
       persons: [
      {name: 'Maximmilian', age: '30'},
      {name: 'Dania', age: '24'},
      {name: 'Hey', age: '15'},
    ]})
  }

  render() {
    return (
      <div className="App">
      <p> Hello </p> 
      <button onClick={this.switchNameHandler}> Switch Name </button> 
        < Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        < Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: Cats </Person>  
        < Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
  }
}

export default App;
