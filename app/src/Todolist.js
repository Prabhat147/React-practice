import React from 'react';

const Todolist = () => {
    return (
    <div>
        <header>
            <h2 style={{color:"red"}}>Todo list</h2>
        </header>
        <div>
            <input type="text" id='newTask' placeholder='Enter your task here'></input>
        </div>
    </div>
    );
}

export default Todolist;
