import React from 'react'
import ShipSection from "./ShipSection"

const styles = {
  boxSizing: "border-box",
  width: '50px',
  height: '50px',
  border: '4px solid #464646',
  backgroundColor: 'grey',
}


// could make the first square green to indicate where to grab
export default function Ship({onDragStart, ship}) {

  const shipParts = [];
  for (let i = 0; i < ship.length; i++){
    shipParts.push(<ShipSection key={i} />);
  }
  // if !ship.isPlaced return draggable ship, else return ship without draggable stuff
  return (
    <div
      draggable
      onDragStart = {(e) => onDragStart(e, ship.name)}
    >
      {shipParts}
    </div>
  )
}
