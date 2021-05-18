import React from 'react'
// import Square from './Square'
import ShipSection from "./ShipSection"
import DroppableSquare from "./DroppableSquare"
const styles = {
  boardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    outline: "4px solid #002c66",
    backgroundColor: "#2389da",
  }
}

// function BaseGB({gameboard}) {

// }


export default function Gameboard({gameboard, placeShip}) {
  // if
const renderSquare = (cell, i) => {
  if (cell === null){
    return (
      <div key={i} style={{width: '50px', height: '50px'}}>
        <DroppableSquare 
          dropIndex={i}
          placeShip={placeShip}
        >
          {i}
        </DroppableSquare>
      </div>

    )
  }
  else if (typeof cell === "string"){
    return (
      <div key={i} style={{width: '50px', height: '50px'}}>
        <ShipSection />
      </div>

    )
  }
}
  return (
    <div style={styles.boardWrapper}>
      {gameboard.map((cell, i) => renderSquare(cell, i))}
    </div>
  )
}
