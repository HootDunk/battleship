import React from 'react'
import BoatMenu from "./BoatMenu"
import Gameboard from "./Gameboard"

const styles = {
  wrapper: {
    width: '100%',
    minHeight: "100vh",
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    height: "600px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  boardWrapper: {
    width: "500px",
    height: "500px",
  }
  
}

export default function StartMenu(props) {

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <BoatMenu ships={props.ships} changeOrientation={props.changeOrientation} />
        <div style={styles.boardWrapper}>
          <Gameboard placeShip={props.placeShip} gameboard={props.gameboard}/>
        </div>
      </div>
    </div>

  )
}
