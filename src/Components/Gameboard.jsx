import React from 'react'
import Square from './Square'
import ShipSection from "./ShipSection"
const styles = {
  boardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    outline: "4px solid #002c66",
    backgroundColor: "#2389da",
  }
}



export default function Gameboard({gameboard, onDragOver, onDrop}) {
  // if
const renderSquare = (cell, i, onDragOver, onDrop) => {
  if (cell === null){
    return (
      <Square 
        key={i}
        index={i}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {i}
      </Square>
    )
  }
  else if (typeof cell === "string"){
    return (
      <Square 
      key={i}
      index={i}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <ShipSection />
    </Square>
    )
  }
}
  return (
    <div style={styles.boardWrapper}>
      {gameboard.map((cell, i) => renderSquare(cell, i, onDragOver, onDrop))}
    </div>
  )
}
