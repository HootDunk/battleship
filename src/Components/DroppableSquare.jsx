import React from 'react'
import Square from "./Square"


const styles = {
  width: "100%",
  height: "100%",
}

export default function DroppableSquare({children, placeShip, dropIndex}) {

  const handleDragOver = (ev) => {
    // default is to not allow the drop event, prevent default on all droppable areas
    ev.preventDefault();
  }

  return (
    <div
      style={styles}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => placeShip(e, dropIndex)}
    >
      <Square>
        {children}
      </Square>
    </div>
  )
}
