import React from 'react'
import Ship from "./Ship"
const styles = {
  width: "400px",
  height: "500px",
  outline: "1px solid black",
  display: 'flex',
  flexDirection: "column",
  alignItems: "center",

}

// will recieve ships prop
// will render first unplaced ship
export default function BoatMenu({ships, onDragStart}) {
  const currentShip = ships.arr.find(ship => !ship.isPlaced);
  if (!currentShip) return <h1>All ships placed</h1>
  return (
    <div style={styles}>
      <h1>Place Your {currentShip.name}</h1>
      <Ship onDragStart={onDragStart} ship={currentShip} />
    </div>
  )
}
