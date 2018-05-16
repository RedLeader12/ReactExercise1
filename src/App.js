import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: 8,
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    } 

    const  classes = []
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }


    return (
      <div className="App">
      <p> Hello </p> 
      <p className={classes.join(' ')}> This is really working </p> 
      <button onClick={this.togglePersonsHandler} style={style}> Toggle Persons </button> 
      {persons}     
      </div> 
    );
  }
}

export default Radium(App);
