import { setUpGameboard } from "./Gameboard"

class HumanPlayer{
  constructor(isTurn, gameboard) {
    this.isTurn = isTurn;
    // would be better to add conditionals in gameboard constructor
    this.gameboard = gameboard;
  }

  // players take turns by attacking enemy gameboard.
  takeTurn = (vertical, horizontal, enemyGB) =>{
    enemyGB.receiveAttack(vertical, horizontal);
    this.isTurn = !this.isTurn;
  }
}


// Other modules
  // DOM Interaction (GameUI and supporting components)

// Create class functions that retrieve copys of object state. 
// game loop will use functions that wrap around object mutation.  We will
// update the state by getting copys of the objects and updating state.

// TO DO
  // Add in functions to retrive a deep copy of objects.
  

export default HumanPlayer;