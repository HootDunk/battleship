// we will have two gameboards one for player and one for AI
class Gameboard {
  constructor() {
    this.grid = Array.from(Array(10), () => new Array(10));
    // keep array of ship references to track how many have been sank
    this.ships = [];
    this.allShipsSank = false;
  }
  // add reference to ship object at each given coordinate
  placeShip(ship, coordinates){
    coordinates.forEach(obj => {
      this.grid[obj.vertical][obj.horizontal] = ship;
    })
    ship.setLocation(coordinates)
  }

  receiveAttack(vertical, horizontal){
    // see if attack hit a ship
    if (this.grid[vertical][horizontal] === undefined){
      this.grid[vertical][horizontal] = "miss";
    }
    // is not undefined, is not miss. therefore it is a ship
    // call hit function on that ship
    else if (typeof this.grid[vertical][horizontal] === 'object'){
      let shipObj = this.grid[vertical][horizontal];
      shipObj.hit(vertical, horizontal);
    }
    else console.log("move not allowed")
  }

  areAllSank(){
    for (const ship of this.ships){
      if (!ship.sank){
        // a ship is still standing
        return false;
      }
    }
    // all ships have sunk
    return true;
  }

  addShip(ship){
    this.ships.push(ship);
  }

}


export { Gameboard }