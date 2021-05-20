

const createShip = (name, length) => {
  return {
    name,
    length,
    orientation: 'vertical',
    isPlaced: false,
    numHits: 0,
    isSank: false,
  }
}

const generateShips = () => {
  const ships = []
  ships.push(createShip("Carrier", 5))
  ships.push(createShip("Battleship", 4))
  ships.push(createShip("Submarine", 3))
  ships.push(createShip("Destroyer", 3))
  ships.push(createShip("Patrol Boat", 2))
  return ships;
}

const randomOrientation = (ships) => {
  ships.forEach(ship => {
    Math.random() < 0.5? ship.orientation = "vertical" : ship.orientation = "horizontal"
  })
  return ships;
}



// const gameboardWithShips = (ships) => {

//   const gameboard = new Array(100).fill(null)
//   // create array with numbers 0-99
//   let placementOptions = new Array(100).fill(null).map((item, index) => item = index);
  

//   ships.forEach((ship) =>{
//     const startingLoc = placementOptions[Math.floor(Math.random() * placementOptions.length)];
//     // remove item from array so it isn't picked again
//     placementOptions = placementOptions.filter(item => item !== startingLoc);
//     if (ship.orientation === "vertical"){
//       for (let i = 0; i < ship.length; i++){
//         gameboard[startingLoc * (i * 10)] = ship.name;
//         placementOptions = placementOptions.filter(item => item !== startingLoc * (i * 10));
//       }
//     }
//     else if (ship.orientation === "horizontal"){
//       for (let i = 0; i < ship.length; i++){
//         gameboard[startingLoc * i] = ship.name;
//         placementOptions = placementOptions.filter(item => item !== startingLoc * i);
//       }
//     }
//   })
//   console.log(gameboard)
// }



export {
  generateShips,
}