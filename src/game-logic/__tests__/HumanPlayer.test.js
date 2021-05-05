import HumanPlayer from "../HumanPlayer.js"
import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship"

const humanGB = new Gameboard();
const humanPlayer = new HumanPlayer(true, humanGB);
const humanSub = new Ship(3, "Submarine");
const humanPatrolBoat = new Ship(2, "Patrol Boat");
humanGB.addShip(humanSub);
humanGB.addShip(humanPatrolBoat);

humanGB.placeShip(humanSub, [
  {vertical: 0, horizontal: 0,},
  {vertical: 1, horizontal: 0,},
  {vertical: 2, horizontal: 0,},
])

humanGB.placeShip(humanPatrolBoat, [
  {vertical: 0, horizontal: 1,},
  {vertical: 1, horizontal: 1,},
])

test("Human player constructor function creates gameboard instance with 2 ships", ()=> {
  expect(humanPlayer.gameboard.ships.length).toBe(2);
})
