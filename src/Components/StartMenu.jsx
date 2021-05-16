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

  const onDragOver = (ev) => {
    // default is to not allow the drop event, prevent default on all droppable areas
    ev.preventDefault();
  }

  const onDragStart = (ev, id) => {
    // every draggable element has a dataTransfer object which has the setData method to store our properties/parameters
    // When a drop event happens we can use the getData method (in this case the id) to identify and change state based on the items id.
    ev.dataTransfer.setData("id", id);
  }
  // I don't like this...
  const onDrop = (ev, target) => {
    let id = ev.dataTransfer.getData("id");
    props.placeShip(id, target)
  }

  const onDrop1 = (ev, target, cb) => {
    let id = ev.dataTransfer.getData("id");
    cb(id, target);
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <BoatMenu onDragStart={onDragStart} ships={props.ships} />
        <div style={styles.boardWrapper}>
          <Gameboard onDrop={onDrop} onDragOver={onDragOver} gameboard={props.gameboard}/>
        </div>
      </div>
    </div>

  )
}
