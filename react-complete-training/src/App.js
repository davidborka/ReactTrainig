import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'
/*
he reason for this being that in the Rules of Hooks ESLint plugin, there is a check to see if a component or function name is valid: Checks if the node is a React component name. 
React component names must always start with a non-lowercase letter.
*/
const App = props =>{
 const [personsState, setPersonsState] =  useState({
    persons: [
      {name: 'David', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  });

const switchNameHandler = ()=>{// console.log('Was clicked!');
// DON'T USE THIS!! : this.state.persons[0].name = "Maximilian";
setPersonsState({persons: [
  {name: 'David', age: 25},
  {name: 'Maximilian', age: 29},
  {name: 'Stephanie', age:30}
]})};

  return(
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is a paragraph from the same root element.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age= {personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age= {personsState.persons[1].age}>My Hobbies: racing</Person>
      <Person name= {personsState.persons[2].name} age= {personsState.persons[2].age}/>
    </div>
    );
}


export default App;

// class App extends Component{
  // state = {
  //   persons: [
  //     {name: 'David', age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Stephanie', age:26}
  //   ],
  //   otherState: 'some other value'
  // }
  
//   switchNameHandler = ()=>{
  // console.log('Was clicked!');
  // DON'T USE THIS!! : this.state.persons[0].name = "Maximilian";
  // this.setState({persons: [
  //   {name: 'David', age: 25},
  //   {name: 'Maximilian', age: 29},
  //   {name: 'Stephanie', age:30}
  // ]})
//   }

//   render(){
//     return(
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is a paragraph from the same root element.</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name= {personsState.persons[0].name} age= {personsState.persons[0].age}/>
//         <Person name= {personsState.persons[1].name} age= {personsState.persons[1].age}>My Hobbies: racing</Person>
//         <Person name= {personsState.persons[2].name} age= {personsState.persons[2].age}/>
//       </div>
//       );
//   }
// }
