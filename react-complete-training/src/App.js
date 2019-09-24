import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  render(){
    return(
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is a paragraph from the same root element.</p>
      <Person name="David" age="5"/>
      <Person name="Josh" age="40">My Hobbies: racing</Person>
      <Person name="Chriss" age="50"/>
    </div>
    );
  }
}

export default App;
