import React, {Component} from 'react';
import './App.css';
import './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    uNameOne: 'David',
    uNameTwo: 'Maximilian'
  }
onInputChangingHandler = (event)=>{
  this.setState({
    uNameOne: event.target.value,
    uNameTwo: event.target.value
  });
}
 render(){ return (
    <div className="App">
      <UserInput name={this.state.uNameOne} onInputChanging = {this.onInputChangingHandler.bind(this, )}/>
      <UserOutput userName={this.state.uNameTwo} />
      <UserInput name={this.state.uNameTwo} onInputChanging = {this.onInputChangingHandler}/>
      <UserOutput userName={this.state.uNameOne} />

    </div>
  );}
}

export default App;
