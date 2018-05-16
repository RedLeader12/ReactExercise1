import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {id: 'asdfa', name: 'Max', age: '30'},
      {id: '1232', name: 'Dania', age: '24'},
      {id: '1245', name: 'Hey', age: '15'},
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id 
    })
    
    const personName = {...this.state.persons[personIndex]}
    personName.name = event.target.value 
    const persons = [...this.state.persons]
    persons[personIndex] = personName

    this.setState({  
      persons: persons})
  }

  deletePersonHandler =  (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8,
      cursor: 'pointer',
      outline: 'none'
    }

    let persons = null 

    if(this.state.showPersons === true) {

      persons = (
      <div>        
        {this.state.persons.map((person,index) => {
          return <Person
           click={() => this.deletePersonHandler(index)}
           change={(event) => this.nameChangeHandler(event, person.id)}
           name={person.name}
           age={person.age}
           key={person.id}
           /> 
        })}
      </div>
      )
    } 

    return (
      <div className="App">
      <p> Hello </p> 
      <button onClick={this.togglePersonsHandler} style={style}> Toggle Persons </button> 
      {persons}     
      </div> 
    );
  }
}

export default App;
