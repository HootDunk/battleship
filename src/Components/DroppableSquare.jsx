import React from 'react'

import Square from "./Square"


const styles = {
  width: "100%",
  height: "100%",
}

export default function DroppableSquare({children, onDragOver, onDrop, dropIndex}) {
  return (
    <div
      style={styles}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, dropIndex)}
    >
      <Square>
        {children}
      </Square>
      
    </div>
  )
}
