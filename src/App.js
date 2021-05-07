import React, { useState } from 'react'
import {Gameboard} from "./game-logic/gameboard";
import GameboardComp from "./Components/Gameboard";
import './App.css';

function App() {
  const [humanGrid, setHumanGrid] = useState(new Gameboard().grid);
  const [computerGrid, setComputerGrid] = useState(new Gameboard().grid);

  return (
    <div className="App">
      <GameboardComp grid={humanGrid} />
      {/* <GameboardComp grid={computerGrid} /> */}
    </div>
  );
}

export default App;


// create plain objects and functions to operate on them in their own files
// create other files to test these objects and the operations on them