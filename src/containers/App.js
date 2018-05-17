import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('[App.js]')
    this.state = {
      persons: [
        {id: 'asdfa', name: 'Max', age: 28},
        {id: '1232', name: 'Dania', age: 24 },
        {id: '1245', name: 'Hey', age: 15},
      ],
      showPersons: false,
      toggleClicked: 0 
    }
  }

  componentWillMount(){
    console.log('[App.js] inside CWM')
  }

  componentDidMount(){
    console.log('[App.js] inside CWD')
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update] App.js cWU', nextProps, nextState)
  }

  componentDidUpdate(nextProps, nextState){
    console.log('[Update] App.js CDM', nextProps, nextState)
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
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
      <Aux> 
      <button onClick={() => {this.setState({showPersons: true})}}> Show Persons </button> 
      <Cockpit
      appTitle={this.props.appTitle}
      showPersons={this.state.showPersons} 
      persons={this.state.persons}
      toggle={this.togglePersonsHandler}
      /> 
      {persons}     
      </Aux> 
    );
  }
}

export default withClass(App, classes.App);
