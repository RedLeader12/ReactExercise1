import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('[App.js]')
    this.state = {
      persons: [
        {id: 'asdfa', name: 'Max', age: '30'},
        {id: '1232', name: 'Dania', age: '24'},
        {id: '1245', name: 'Hey', age: '15'},
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] inside CWM')
  }

  componentDidMount(){
    console.log('[App.js] inside CWD')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Update] App.js sCU', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update] App.js cWU', nextProps, nextState)
  }

  componentDidUpdate(nextProps, nextState){
    console.log('[Update] App.js CDM', nextProps, nextState)
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
    console.log('[App.js] inside renders')
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
      <WithClass classes={classes.App}> 
      <button onClick={() => {this.setState({showPersons: true})}}> Show Persons </button> 
      <Cockpit
      appTitle={this.props.appTitle}
      showPersons={this.state.showPersons} 
      persons={this.state.persons}
      toggle={this.togglePersonsHandler}
      /> 
      {persons}     
      </WithClass> 
    );
  }
}

export default App;
