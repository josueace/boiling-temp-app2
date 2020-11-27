import React from 'react';
import logo from './logo.svg';
import Calculator from './components/Calculator'
import './App.css';

//import BoilingVerdict from './components/BoilingVerdict';




//calculator tiene 2 children temperatureinput y boilingverdit
// then to coordinate conversations between children use the parent





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <Calculator celsius={1}/>

    </div>
  );
}

export default App;
