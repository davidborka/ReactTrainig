import React from 'react';

const UserInput = (props)=>{
    return(
    <div>
        <label for="userInput">Type your input here:</label>
        <input id="userInput" type="text" name="userInput" onChange={props.onInputChanging} value={props.name}></input>
    </div>
    )
};

export default UserInput;