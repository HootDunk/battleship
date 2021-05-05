import ComputerPlayer from "../ComputerPlayer";
import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship"

const setUpTestGameboard = () => {
  const gameboard = new Gameboard();
  gameboard.addShip(new Ship(3, "Submarine"))
  gameboard.addShip(new Ship(2, "Patrol Boat"))
  return gameboard;
}

const playerGB = setUpTestGameboard();
const cpuGB = setUpTestGameboard();
const computerPlayer = new ComputerPlayer(false, cpuGB);

test("getRandomCoordinate() gives input from 0x0 to 9x9", ()=> {
  // test the bounds of the input
  expect(computerPlayer.possibleMoves[0].vertical).toBe(0);
  expect(computerPlayer.possibleMoves[0].horizontal).toBe(0);
  expect(computerPlayer.possibleMoves[99].vertical).toBe(9);
  expect(computerPlayer.possibleMoves[99].horizontal).toBe(9);
  // test random coordinate
  const coordinate = computerPlayer.getRandomCoordinate();
  expect(coordinate.horizontal <= 9 && coordinate.horizontal >= 0).toBe(true);
  expect(coordinate.vertical <=9 && coordinate.vertical >= 0).toBe(true);
})


// test computer player takeTurn method. Make sure array contains 'miss' somewhere
// on the board.
test("CPU attacks random coordinate on player gameboard", () => {
  computerPlayer.takeTurn(playerGB);
  // loop through the gameboard and check for 'miss'
  let missFlag = false;
  for(let i = 0; i < playerGB.grid.length; i++){
    if (playerGB.grid[i].indexOf('miss') != -1) {
      missFlag = true;
      break;
    }
  }
  expect(missFlag).toBe(true);
})

