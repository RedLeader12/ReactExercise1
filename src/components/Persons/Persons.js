import React, { Component }from 'react';
import Person from './Person/Person';

class Persons extends Component {
constructor(props){
    super(props)
    console.log('[Persons.js]')
  }

  componentWillMount(){
      console.log('[Persons.js] inside CWM')
    }
  
    componentDidMount(){
      console.log('[Persons.js] inside CWD')
    }

    componentWillReceiveProps( nextProps){
          console.log('[UPDATE] Persons.js inside CWRP ')
    }

    shouldComponentUpdate(nextProps, nextState){
          console.log('[Update] Persons.js sCU', nextProps, nextState)
          return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState){
          console.log('[Update] Persons.js cWU', nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState){
          console.log('[Update] Persons.js CDM', nextProps, nextState)
    }

render(){
 console.log('[App.js] inside renders')
    return this.props.persons.map((person,index) => {
       return <Person
       click={() => this.props.clicked(index)}
       change={(event) => this.props.changed(event, person.id)}
       name={person.name}
       age={person.age}
       key={person.id}          
                    /> 
            });
      } 
}

export default Persons; 