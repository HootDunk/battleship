import  { Ship } from "../Ship.js";

const ship = new Ship(3, "Submarine");

test("Make sure ship length matches constructor call (4)", () => {
  expect(ship.length).toBe(3);
})

test("All ship coordinate objects have isHit value of false", () => {
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
  ship.setLocation(coordinates);
  ship.location.forEach(obj => {
    expect(obj.isHit).toBe(false);
  })
})

test("Ship takes a hit at vertical: 0, horizontal: 0 and isHit at that location is now true", () => {
  ship.hit(0, 0);
  expect(ship.location[0].isHit).toBe(true);
})

test("Ship takes hit at all spots. all isHit values = false", () => {
  ship.hit(1, 0)
  ship.hit(2, 0)
  for(const obj of ship.location){
    expect(obj.isHit).toBe(true);
  }
})

test("Ship takes hit in all spots, isSank should be true", () => {
  expect(ship.isSunk()).toBe(true);
})