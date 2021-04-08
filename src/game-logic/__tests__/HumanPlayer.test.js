import HumanPlayer from "../HumanPlayer.js"


const humanPlayer = new HumanPlayer(false);
test("Human player constructor function creates gameboard instance with 5 ships", ()=> {
  expect(humanPlayer.gameboard.ships.length).toBe(5);
})