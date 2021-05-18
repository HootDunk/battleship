import React from 'react'

// make squares
const styles = {
  width: "100%",
  height: "100%",
  outline: "2px solid #002c66"
}

export default function Square({children}) {

  return (
    <div style={styles}>
      {children}
    </div>
  )
}


// or add a droppable prop to the square to make it droppable or not.


// There simply has to be a way to re-work the square, gameboard, ships, etc... to work better.  Definitely search for improvements before continuing.
// https://reactjs.org/docs/composition-vs-inheritance.html