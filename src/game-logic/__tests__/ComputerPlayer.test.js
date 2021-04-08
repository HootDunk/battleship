import ComputerPlayer from "../ComputerPlayer";

const computerPlayer = new ComputerPlayer(false);
// idk seems to easy a test.
test("getRandomCoordinate() gives input from 0x0 to 9x9", ()=> {
  const coordinate = computerPlayer.getRandomCoordinate();
})

// consider doing some work on the game loop and
// writing tests for the game (which also tests the two players together).
// use mocks for the human player input.  Create a condition where the
// human player wins.  Also test where the human player loses (cpu goes first),
// human player hits every spot except the ships.  Eventually cpu will win.