function Gameboard(){
  // initial fill value gets replaced when we map over array
  this.grid = Array(10).fill(0).map(row => new Array(10).fill(null));
  //Array.from(Array(10), () => new Array(10));
  this.ships = [];
  this.allShipsSank = false;
}

// ships location is stored on gameboard through its name.
// when a ship gets hit, the hit is displayed on the gameboard.
// The ships information is updated independently from the gameboard
const placeShip =(shipName, coordinates) => {
  coordinates.forEach(obj => {
    this.grid[obj.vertical][obj.horizontal] = shipName;
  })
}

const receiveAttack = (gb, vertical, horizontal) => {
    // see if attack hit a ship
    if (gb.grid[vertical][horizontal] === undefined){
      gb.grid[vertical][horizontal] = "miss";
    }
    // objects are our references to ships, so it is a hit.
    else if (typeof gb.grid[vertical][horizontal] === 'string'){
      // let shipObj = this.grid[vertical][horizontal];
      // shipObj.hit(vertical, horizontal);
      gb.grid[vertical][horizontal] = "hit";
      
    }
    else console.log("move not allowed/already attacked here")
}

const areAllSank = (gb) => {
  for (const ship of gb.ships){
    if (!ship.sank){
      // a ship is still standing
      return false;
    }
  }
  // all ships have sunk
  return true;
}

const addShip = (gb, ship) => {
  gb.ships.push(ship);
}

export {Gameboard}