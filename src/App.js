import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: '30'},
      {name: 'Dania', age: '24'},
      {name: 'Hey', age: '15'},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({  
       persons: [
      {name: newName, age: '30'},
      {name: 'Dania', age: '24'},
      {name: 'Hey', age: '15'},
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  nameChangeHandler = (event) => {
    this.setState({  
      persons: [
     {name: 'Max', age: '30'},
     {name: event.target.value, age: '24'},
     {name: 'Hey', age: '15'},
   ]})
  }

  render() {
    return (
      <div className="App">
      <p> Hello </p> 
      <button onClick={this.togglePersonsHandler}> Toggle Persons </button> 
      { this.state.showPersons === true ?
        <div>        
        < Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        < Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max')} change={this.nameChangeHandler}> Hobbies: Cats </Person>  
        < Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
        </div> : null 
        }
      </div> 
    );
  }
}

export default App;
