import { setUpGameboard } from "./Gameboard"

class HumanPlayer{
  // type is either human or computer. Or will make a HumanPlayer and ComputerPlayer class. 
  // computer class will store array of potential moves and information about prior moves to make informed decisions.
  constructor(isTurn) {
    this.isTurn = isTurn;
    // would be better to add conditionals in gameboard constructor
    this.gameboard = setUpGameboard();
  }

  // players take turns by attacking enemy gameboard.
  takeTurn (vertical, horizontal, enemyGB){
    enemyGB.recieveAttack(vertical, horizontal);
    this.isTurn = !this.isTurn;
  }
}



// Player stores reference to it's own gameboard, game progresses by attacking the other players gameboard.
  // player1.isTurn? player1.gameboard.recieveAttack(coordinate) : computerPlayer.gameboard.recieveAttack(coordinate)
// a function 


// Classes
  // Ship
  // Gameboard
  // Player and maybe CPU?
  // Game?

// Other modules
  // DOM Interaction

// display both players boards and render them using information from
// the Gameboard class

// Gameboard should have info for most of the UI state it seems
// who

export default HumanPlayer;