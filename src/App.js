import React, { useState } from 'react'
import Gameboard from "./Components/Gameboard"
import BoatMenu from "./Components/BoatMenu"
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

  const placeShip = (ev, dropIndex) => {
    // console.log(ev)
    let id = ev.dataTransfer.getData("id");
    console.log(id);
    console.log(dropIndex);
    const ship = ships.arr.find(ship => ship.name === id);
    const boardCopy = [...gameboard]
    for(let i = 0; i < ship.length; i++){
      if (i === 0) boardCopy[dropIndex] = ship.name;
      else {
        ship.orientation === 'vertical'? 
          boardCopy[dropIndex + i * 10] = ship.name
          :
          boardCopy[dropIndex + i] = ship.name;
      }
    }
    const shipCopy = {...ship}
    shipCopy.isPlaced = true;

    const index = ships.arr.findIndex(obj => obj.name === ship.name);
    const shipsArrCopy = [...ships.arr]
    shipsArrCopy[index] = shipCopy;

    setGameboard(boardCopy)
    setShips(prevState => {
      return {
        ...prevState,
        arr: shipsArrCopy,
      }
    })
  }

  // const placeShip = (shipName, location) => {
    // const ship = ships.arr.find(ship => ship.name === shipName);
    // const boardCopy = [...gameboard]
    // for(let i = 0; i < ship.length; i++){
    //   if (i === 0) boardCopy[location] = ship.name;
    //   else {
    //     ship.orientation === 'vertical'? 
    //       boardCopy[location + i * 10] = ship.name
    //       :
    //       boardCopy[location + i] = ship.name;
    //   }
    // }
    // const shipCopy = {...ship}
    // shipCopy.isPlaced = true;

    // const index = ships.arr.findIndex(obj => obj.name === ship.name);
    // const shipsArrCopy = [...ships.arr]
    // shipsArrCopy[index] = shipCopy;

    // setGameboard(boardCopy)
    // setShips(prevState => {
    //   return {
    //     ...prevState,
    //     arr: shipsArrCopy,
    //   }
    // })
  // }


  if (!ships.allPlaced){
    return (
      <div>
        <StartMenu 
          ships={ships} 
          gameboard={gameboard}
          placeShip={placeShip}
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
