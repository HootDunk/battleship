import React from 'react'

const styles = {
  width: "10%",
  height: "10%",
  outline: "2px solid #002c66"
}

export default function Square({children, onDragOver, onDrop, index}) {

  return (
    <div
      style={styles}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, index)}
    >
      {children}
    </div>
  )
}
