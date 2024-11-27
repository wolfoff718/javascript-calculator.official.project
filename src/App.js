import React from 'react';
import './App.css';
import Calculator from './components/Calculator'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First JavaScript Calculator</h1>  
        <p className="designer-credit">Designed and coded by Ambar Fontana Ferreyra</p>
        <Calculator />  
      </header>
    </div>
  );
}

export default App;