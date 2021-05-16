
// we will have two gameboards one for player and one for AI
class Gameboard {
  constructor() {
    // the actual gameboard, keeps track of ship locations and missed attacks
    this.grid = Array.from(Array(10), () => new Array(10));
    this.ships = [];
    this.allShipsSank = false;
  }

  // get a deep copy of grid (doesn't deep copy the inner objects...)
  get grid(){
    const copy = [];
    for (let i = 0; i < this.grid.length; i++){
      const innerArray = [];
      for (let j = 0; j < this.grid[i].length; j++){
        innerArray.push(this.grid[i][j]);
      }
      copy.push(innerArray);
    }
  }

  
  // add reference to ship object at each given coordinate
  placeShip(ship, coordinates){
    coordinates.forEach(obj => {
      this.grid[obj.vertical][obj.horizontal] = ship;
    })
    // consider pulling this out.
    // have each segment of the ship record it's own location
    ship.setLocation(coordinates)
  }


  receiveAttack = (vertical, horizontal) =>{
    // see if attack hit a ship
    if (this.grid[vertical][horizontal] === undefined){
      this.grid[vertical][horizontal] = "miss";
    }
    // objects are our references to ships, so it is a hit.
    else if (typeof this.grid[vertical][horizontal] === 'object'){
      let shipObj = this.grid[vertical][horizontal];
      shipObj.hit(vertical, horizontal);
    }
    // return true/false from here to confirm if move was valid?
    // need some way to properly alternate turns only when move was valid
    else console.log("move not allowed/already attacked here")
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


// create instance of gameboard with standard number of ships used to play
const setUpGameboard = () => {
  const gameboard = new Gameboard();
  gameboard.addShip(new Ship(5, "Carrier"))
  gameboard.addShip(new Ship(4, "Battleship"))
  gameboard.addShip(new Ship(3, "Destroyer"))
  gameboard.addShip(new Ship(3, "Submarine"))
  gameboard.addShip(new Ship(2, "Patrol Boat"))
  return gameboard;
}






export { Gameboard, setUpGameboard }