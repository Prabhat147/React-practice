import React, { useState } from 'react';

const App = () => {
    const [inputList, setInputList]= useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
      setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
          return [...oldItems, inputList];
        });
    };

    return (
      <>
        <div className='main'>
            <div className='center'>
                <header>
                    <h2 style={{color:"red"}}>Todo list</h2>
                </header>
                <div>
                    <input type="text" id='newTask' placeholder='Enter your task here' onChange={itemEvent}></input>&nbsp;
                    <button onClick={listOfItems}>+</button>
                    <ol>
                      {Items.map((itemval) => {
                        return <li> {itemval} </li>
                      })}
                        
                    </ol>
                </div>
            </div>

        </div>
      </>
    );
 };

export default App;
