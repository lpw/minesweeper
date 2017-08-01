import React from 'react';
import Header from '../connectors/Header';
import Board from '../connectors/Board';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
    </div>
  );
}

export default App;
