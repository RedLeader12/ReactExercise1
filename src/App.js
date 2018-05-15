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

  deletePersonHandler =  (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render() {

    let persons = null 

    if(this.state.showPersons === true) {

      persons = (
      <div>        
        {this.state.persons.map((person,index) => {
          return <Person
           click={() => this.deletePersonHandler(index)}
           name={person.name}
           age={person.age}/> 
        })}
      </div>
      )
    } 

    return (
      <div className="App">
      <p> Hello </p> 
      <button onClick={this.togglePersonsHandler}> Toggle Persons </button> 
      {persons}     
      </div> 
    );
  }
}

export default App;
