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


// There simply has to be a way to re-work the square, gameboard, ships, etc... to work better.  Definitely search for improvements before continuing.
// https://reactjs.org/docs/composition-vs-inheritance.html