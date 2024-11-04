import './App.css';
import React, { useState } from 'react';

import Card from './components/Card'
import Background from './components/Background'
import Chai from "./chai";
import Password from "./components/Password"

function App() {

  const[counter, setCounter] = useState(5)

  const username = 'chai aur ankur' //jspart
  //let counter = 5;
  const addValue = () =>{
    if(counter <20){
      setCounter(counter + 1);
    }
    else{
      console.log("rukk ja bhai")
    }
    

    console.log("added", counter)
  }
  const decValue = () =>{
    if(!counter<=0){
      setCounter(counter - 1);
    }
    else{
      console.log("kyaa bhaiii")
    }
    
    console.log("decreased", counter)
  }

  return (
    <>                  
    {/*<h1 className="bg-green-400 text-black rounded"> Ankur Baijal {username}</h1>
    <h2>Counter value: {counter}</h2><br></br>
    <button onClick={addValue}>Add Value</button>
    <button onClick={decValue}>Decrease Value</button>
    <Chai/>
    <Card name="Ankur Baijal" price="1000" company="Startup"/>
    <Card name="Kanishk Shrivastava" price="100" company="Varroc"/>
    <Background />*/}
    <Password />

    
    </>
  );
}

export default App;
