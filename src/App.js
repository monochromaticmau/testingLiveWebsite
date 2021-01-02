import logo from './logo.svg';
import './App.css';
import Data from './Requests'
import React, { useState } from 'react';
 

function App() {
  
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
 
  
  const handleClick = event => Data.getTest().then(message =>{
    setGreeting(message);
  }) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Testing FetCH</button>
        <input type="text" value = {greeting}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
