import React, { useState } from 'react'
import Gameboard from "./Components/Gameboard"
// import BoatMenu from "./Components/BoatMenu"
import StartMenu from "./Components/StartMenu"
import Background from "./Components/Background"
import Game from "./Components/Game"

import {generateShips} from "./game-logic/game-logic"
// create object constructor and create factor that produces initialShips.  move to other file.
const initialShips = [
  {
    name: "Carrier",
    length: 5,
    orientation: "vertical",
    isPlaced: false,
    numHits: 0,
    isSank: false,
  },
  {
    name: "Battleship",
    length: 4,
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
    name: "Destroyer",
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
  // may move this down into game component
  const [computerGB, setComputerGB] = useState(new Array(100).fill(null));
  const [ships, setShips] = useState({
    allPlaced: false,
    allSank: false,
    arr: generateShips(),
  });

  const getShipDeepCopy = (id) => {
    let ship = ships.arr.find(ship => ship.name === id);
    return {...ship}
  }

  // pass in updated ship and to inserted it into the array and set the state.
  const updateShipArray = (ship, allPlaced) => {
    const index = ships.arr.findIndex(obj => obj.name === ship.name);
    const shipsArrCopy = [...ships.arr]
    shipsArrCopy[index] = ship;
    if (!allPlaced){
      setShips(prevState => {
        return {
          ...prevState,
          arr: shipsArrCopy,
        }
      })
    } else {
      setShips(prevState => {
        return {
          ...prevState,
          allPlaced: true,
          arr: shipsArrCopy,
        }
      })
    }

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
    // last boat is patrol boat, once it is placed all boats are placed
    ship.name === "Patrol Boat"? updateShipArray(ship, true) : updateShipArray(ship);
    setGameboard(boardCopy);
  }



  if (!ships.allPlaced){
    return (
      <Background>
        <StartMenu 
          ships={ships} 
          gameboard={gameboard}
          placeShip={placeShip}
          changeOrientation={changeOrientation}
        />
      </Background>
    );
  } else {
    return (
      <Background>
         <Game 
            leftGB={
              <Gameboard gameboard={gameboard}/>
            }
            rightGB={
              <Gameboard gameboard={computerGB}/>
            }
          />
      </Background>
    )
  }

}

export default App;

