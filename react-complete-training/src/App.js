import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons: [
      {name: 'David', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = ()=>{
  // console.log('Was clicked!');
  // DON'T USE THIS!! : this.state.persons[0].name = "Maximilian";
  this.setState({persons: [
    {name: 'David', age: 25},
    {name: 'Maximilian', age: 29},
    {name: 'Stephanie', age:30}
  ]})
  }

  render(){
    return(
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is a paragraph from the same root element.</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
