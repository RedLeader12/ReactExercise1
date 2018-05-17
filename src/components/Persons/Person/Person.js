import React, {Component}from 'react';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import classes from './Person.css'

class Person extends Component {

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

    render (){
    console.log('[Persons.js] inside render')
        return (
    <Aux> 
        <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old! </p> 
        <p> {this.props.children} </p>
        <input type='text' onChange={this.props.change} value={this.props.name}/>
    </Aux> 
        )
    }
}

export default withClass(Person, classes.Person); 