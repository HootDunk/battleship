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
