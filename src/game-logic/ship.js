
function Ship(length, name) {
  this.length = length;
  this.name = name;
  this.location = new Array(length).fill(null);
  // likely don't need to keep track of the ship location.
  // Just need to record the number of times it's been hit and compare that to it's length to tell if it has been sunk.
  // this will greatly simplify the code. 
  // array will be filled with location objects (example below)
      /*
        locationObj = {
          vertical: y,
          horizontal: x,
          isHit: true/false
        }
      */
  this.sank = false;
}

// deep copy all values of ship
const deepCopyShip = (ship) =>{
  const locationCopy = ship.location.map(obj => {
    return {
      vertical: obj.vertical,
      horizontal: obj.horizontal,
      isHit: obj.isHit,
    }
  })
  return{
    length: ship.length,
    name: ship.name,
    location: locationCopy,
    sank: ship.sank,
  };
}

// create copy of ship, use methods to mutate it. Then update the state with the new ship.

const isSunk = (ship) => {
  for (const obj of ship.location){
    if (obj.isHit === false){
      return false;
    }
  }
  return true;
}

const markAsSunk = (ship) => {
  ship.sank = true;
}

const giveHit = (ship, vertical, horizontal) => {
  for (const obj of ship.location){
    if (obj.vertical === vertical && obj.horizontal === horizontal){
      obj.isHit = true;
      break;
    }
  }
}

const setLocation = (ship, coordinates) => {
    // create array of objects from given coordinates. Initialize isHit value to false.
    let newLocation = coordinates.map(obj => {
      return obj = {...obj, isHit: false}
    })
    ship.location = newLocation;
}

export { Ship, deepCopyShip, isSunk, giveHit, setLocation, markAsSunk }