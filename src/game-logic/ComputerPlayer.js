import { setUpGameboard } from "./Gameboard"

// create list of all possible moves based on gameboard dimensions
const listPossibleMoves = (gbLength, gbWidth) => {
  const moves = [];
  for(let i = 0; i < gbLength; i++){
    for (let j = 0; j < gbWidth; j++){
      moves.push({vertical: i, horizontal: j,})
    }
  }
  return moves;
}


class ComputerPlayer{
  // computer class will store array of potential moves and information about prior moves to make informed decisions.
  constructor(isTurn, gameboard) {
    this.isTurn = isTurn;
    this.gameboard = gameboard;
    // create array of possible move objects
    this.possibleMoves = listPossibleMoves(gameboard.grid.length, gameboard.grid[0].length);
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
    enemyGB.receiveAttack(coordinate.vertical, coordinate.horizontal);

    this.isTurn = !this.isTurn;
  }
}

export default ComputerPlayer;

