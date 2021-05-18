import React, { useState } from 'react'
// import Gameboard from "./Components/Gameboard"
// import BoatMenu from "./Components/BoatMenu"
import StartMenu from "./Components/StartMenu"

const initialShips = [
  {
    name: "Battleship",
    length: 5,
    orientation: 'vertical',
    isPlaced: false,
    numHits: 0,
    isSank: false,
  },
  {
    name: "Submarine",
    length: 3,
    orientation: 'vertical',
    isPlaced: false,
    numHits: 0,
    isSank: false,
  },
  {
    name: "Patrol Boat",
    length: 2,
    orientation: 'vertical',
    isPlaced: false,
    numHits: 0,
    isSank: false,
  },
]


function App() {
  const [gameboard, setGameboard] = useState(new Array(100).fill(null));
  const [ships, setShips] = useState({
    allPlaced: false,
    allSank: false,
    arr: initialShips
  });

  const getShipDeepCopy = (id) => {
    let ship = ships.arr.find(ship => ship.name === id);
    return {...ship}
  }

  // pass in updated ship and to inserted it into the array and set the state.
  const updateShipArray = (ship) => {
    const index = ships.arr.findIndex(obj => obj.name === ship.name);
    const shipsArrCopy = [...ships.arr]
    shipsArrCopy[index] = ship;

    setShips(prevState => {
      return {
        ...prevState,
        arr: shipsArrCopy,
      }
    })
  }
  
  const changeOrientation = (id) => {
    let ship = getShipDeepCopy(id);
    ship.orientation === 'vertical'? 
      ship.orientation = 'horizontal' 
      : 
      ship.orientation = 'vertical';
    updateShipArray(ship);
  }

  const isPlacementValid = (position, board) => {
    if (position < 0 || position > 99) return false;
    if (typeof board[position] === "string") return false;
    return true;
  }

  const placeShip = (ev, dropIndex) => {
    // retrieve data about ship
    let id = ev.dataTransfer.getData("id");
    let offset = ev.dataTransfer.getData("shipSection");
    // find ship by id and create copy of it
    let ship = getShipDeepCopy(id);
    const boardCopy = [...gameboard];

    // logic to place the ship, accounting for orientation
    if (ship.orientation === "vertical"){
      const startingLoc = dropIndex - (offset * 10);
      // console.log(startingLoc)
      for (let i = 0; i < ship.length; i++){
        const currentPos = startingLoc + i * 10;
        if (!isPlacementValid(currentPos, boardCopy)) return;
        boardCopy[currentPos] = ship.name;
      }
    } else {
      const startingLoc = dropIndex - offset;
      for (let i = 0; i < ship.length; i++){
        const currentPos = startingLoc + i;
        // an additional check to prevent horizontal ships wrapping around the board
        if(currentPos % 10 < startingLoc % 10) return; 
        if (!isPlacementValid(currentPos, boardCopy)) return;
        boardCopy[currentPos] = ship.name;
      }
    }
    ship.isPlaced = true;
    updateShipArray(ship);
    setGameboard(boardCopy)
  }



  if (!ships.allPlaced){
    return (
      <div>
        <StartMenu 
          ships={ships} 
          gameboard={gameboard}
          placeShip={placeShip}
          changeOrientation={changeOrientation}
        />
      </div>
    );
  } else {
    return <h1>Start the game</h1>
  }

}

export default App;


// add checks for placing ships within proper bounds
// allow user to place ships horizontally
// review code and simplify/decouple some of the methods



// placeShip currently has a lot of logic for the drag and drop functionality
// it would be nice to seperate the logic for the drag and drop and the logic
// to change the state into seperate functions.
// The drag and drop logic could be it's own function lower down and return
// an array off coordinates for the ship to be placed.  If placement is valid,
// the placeShip function gets called with the ship coordinates passed to it. 

// We could also conditionally prevent.default this way.
// As it stands, if part of the ship is off the board but
// the mouse is in the board, the drag and drop indicator will say it's
// valid even though it won't be allowed. Might be a lot of calculations
// for every drag however.