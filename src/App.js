import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let persons = null 
    let btnClass = null 

    if(this.state.showPersons === true) {

      persons = (
      <div>        
        {this.state.persons.map((person,index) => {
          return <ErrorBoundary  key={person.id}>  <Person
           click={() => this.deletePersonHandler(index)}
           change={(event) => this.nameChangeHandler(event, person.id)}
           name={person.name}
           age={person.age}
           /> </ErrorBoundary> 
        })}
      </div>
      )

      btnClass = classes.Red;

    } 

    const assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
      <p> Hello </p> 
      <p className={assignedClasses.join(' ')}> This is really working </p> 
      <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Persons </button> 
      {persons}     
      </div> 
    );
  }
}

export default App;
