import React from 'react'
import Ship from "./Ship"
const styles = {
  container: {
    width: "400px",
    height: "500px",
    outline: "1px solid black",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonDiv: {
    width: '100%',
  },
  span: {
    fontSize: "30px"
  }
}

// will recieve ships prop
// will render first unplaced ship
export default function BoatMenu({ships, changeOrientation}) {
  const currentShip = ships.arr.find(ship => !ship.isPlaced);
  if (!currentShip) return <h1>All ships placed</h1>
  return (
    <div style={styles.container}>
      <h1>Place Your {currentShip.name}</h1>
      <Ship ship={currentShip} />
      <div style={styles.buttonDiv}>
        <button
          onClick={() => changeOrientation(currentShip.name)}
        >
          Rotate Ship
        </button>
      </div>
    </div>
  )
}
