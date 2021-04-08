import { setUpGameboard } from "./Gameboard"


const generatePossibleMoves = () => {
  const moves = [];
  for(let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
      moves.push({vertical: i, horizontal: j,})
    }
  }
  return moves;
}


class ComputerPlayer{
  // type is either human or computer. Or will make a HumanPlayer and ComputerPlayer class. 
  // computer class will store array of potential moves and information about prior moves to make informed decisions.
  constructor(isTurn) {
    this.isTurn = isTurn;
    this.gameboard = setUpGameboard();
    // create array of possible move objects
    this.possibleMoves = generatePossibleMoves();
  }

  getRandomCoordinate() {
    // get random coordinate from the possibleMoves array
    const index = Math.floor(Math.random() * this.possibleMoves.length);
    // create coordinate variable using index
    const coordinate = this.possibleMoves[index];
    // remove coordinate from possible moves
    this.possibleMoves = this.possibleMoves.splice(index, 1);
    
    return coordinate;
  }

  // computer player takes turn by selecting random element from possible moves
  takeTurn (enemyGB) {
    const coordinate = this.getRandomCoordinate();
    // attack enemy gameboard with coordinate given
    enemyGB.recieveAttack(coordinate.vertical, coordinate.horizontal);

    this.isTurn = !this.isTurn;
  }
}

export default ComputerPlayer;


// need to add tests to computer player, and test human player
  // may be easier to test the two together since the attack method
  // relies on their being another player in the game.


// will need to add some class fields and methods to create a smarter AI
  // track last attack, twice prior attack, could be searching or attacking
  // 