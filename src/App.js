import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App () {
  return (
    <div>
      <header className="App-header">
        <Counter value={0}/>
      </header>
    </div>
  );
}

export default App;
