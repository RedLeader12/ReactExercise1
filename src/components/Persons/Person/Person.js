import React, {Component}from 'react';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Aux';
import classes from './Person.css'

class Person extends Component {

constructor(props){
    super(props)
    console.log('[Persons.js]')
    this.inputElement = React.createRef();
  }

  componentWillMount(){
      console.log('[Persons.js] inside CWM')
    }
  
    componentDidMount(){
        console.log('[Persons.js] inside CWD')
        if(this.props.position === 0){
        this.inputElement.current.focus()
        }
    }
    
    render (){
    console.log('[Persons.js] inside render')
        return (
    <Aux> 
        <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old! </p> 
        <p> {this.props.children} </p>
        <input
        ref={this.inputElement}
        type='text' 
        onChange={this.props.change} 
        value={this.props.name}/>
    </Aux> 
        )
    }
}

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func, 
};

export default withClass(Person, classes.Person); 