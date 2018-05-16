import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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


    if(this.state.showPersons === true) {

      persons =       
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      
    } 

    return (
      <div className={classes.App}>
      <Cockpit
      appTitle={this.props.appTitle}
      showPersons={this.state.showPersons} 
      persons={this.state.persons}
      toggle={this.togglePersonsHandler}
      /> 
      {persons}     
      </div> 
    );
  }
}

export default App;
