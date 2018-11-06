import React from 'react';
import Counter from './components/Counter';
import './App.css';
import Particle from './components/Particle';

function App () {
  return (
    <div>
      <header className="App-header">
        <Particle size={40}/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
