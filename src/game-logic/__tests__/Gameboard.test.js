import { Gameboard } from "../Gameboard"
import { Ship } from "../Ship"

const sub = new Ship(3, "Submarine");
const gameboard = new Gameboard();
gameboard.addShip(sub);

const coordinates = [
  {
    vertical: 0,
    horizontal: 0,
  },
  {
    vertical: 1,
    horizontal: 0,
  },
  {
    vertical: 2,
    horizontal: 0,
  },
]


test("Gameboard constructor creates 2d array 10x10", () => {
  expect(gameboard.grid.length).toBe(10)
  expect(gameboard.grid[0].length).toBe(10)
})

test("placeShip method records reference to ship object on gameboard", () => {
  gameboard.placeShip(sub, coordinates);
  expect(gameboard.grid[0][0]).toEqual({"length": 3, "location": [{"horizontal": 0, "isHit": false, "vertical": 0}, {"horizontal": 0, "isHit": false, "vertical": 1}, {"horizontal": 0, "isHit": 
  false, "vertical": 2}], "name": "Submarine", "sank": false});
  expect(gameboard.grid[1][0]).toEqual({"length": 3, "location": [{"horizontal": 0, "isHit": false, "vertical": 0}, {"horizontal": 0, "isHit": false, "vertical": 1}, {"horizontal": 0, "isHit": 
  false, "vertical": 2}], "name": "Submarine", "sank": false});
  expect(gameboard.grid[2][0]).toEqual({"length": 3, "location": [{"horizontal": 0, "isHit": false, "vertical": 0}, {"horizontal": 0, "isHit": false, "vertical": 1}, {"horizontal": 0, "isHit": 
  false, "vertical": 2}], "name": "Submarine", "sank": false});
})

test("recieveAttack records a missed shot", () => {
  gameboard.receiveAttack(1, 1);
  expect(gameboard.grid[1][1]).toBe("miss");
})

test("recieveAttack records a hit on submarine at 0, 0", () => {
  gameboard.receiveAttack(0, 0);
  // expect the submarine to be hit at 0, 0 position
  expect(sub.location[0].isHit).toBe(true);
})


test("areAllSank returns false first and then true after we hit the other spots", () => {
  expect(gameboard.areAllSank()).toBe(false)
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  expect(gameboard.areAllSank()).toBe(true)
})