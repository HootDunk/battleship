import React from 'react'
import BoatMenu from "./BoatMenu"
import Gameboard from "./Gameboard"
import Card from "./Card"
const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
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
  },
  boardWrapper: {
    width: "500px",
    height: "500px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  }
  
}

export default function StartMenu(props) {

  return (
    <div style={styles.wrapper}>
      <Card styles={styles.card}>
        <BoatMenu ships={props.ships} changeOrientation={props.changeOrientation} />
        <div style={styles.boardWrapper}>
          <Gameboard placeShip={props.placeShip} gameboard={props.gameboard}/>
        </div>
      </Card>
    </div>
  )
}
