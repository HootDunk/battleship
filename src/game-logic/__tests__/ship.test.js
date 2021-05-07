import { Ship, deepCopyShip, isSunk, giveHit, setLocation, markAsSunk } from "../ship";

const ship = new Ship(3, "Submarine");

test("Make sure ship length matches constructor call (4)", () => {
  expect(ship.length).toBe(3);
})

test("After placeing ship, all coordinate objects have isHit value of false", () => {
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
  setLocation(ship, coordinates);
  ship.location.forEach(obj => {
    expect(obj.isHit).toBe(false);
  })
})

test("Ship takes a hit at vertical: 0, horizontal: 0 and isHit at that location is now true", () => {
  giveHit(ship, 0, 0);
  expect(ship.location[0].isHit).toBe(true);
})

test("Ship takes hit at all spots. all isHit values = true", () => {
  giveHit(ship, 1, 0);
  giveHit(ship, 2, 0);
  for(const obj of ship.location){
    expect(obj.isHit).toBe(true);
  }
})

test("Ship takes hit in all spots, isSank should be true", () => {
  expect(isSunk(ship)).toBe(true);
  markAsSunk(ship);
  expect(ship.sank).toBe(true);
})

test("ShipDeepCopy accurately produces a deep copy from original ship", () => {
  const shipCopy = deepCopyShip(ship);
  // ships reference different objects
  expect(shipCopy === ship).toBe(false);
  // however both ships have identical attributes
  expect(shipCopy).toEqual(    {
    length: 3,
    name: 'Submarine',
    location: [
      { vertical: 0, horizontal: 0, isHit: true },
      { vertical: 1, horizontal: 0, isHit: true },
      { vertical: 2, horizontal: 0, isHit: true }
    ],
    sank: true
  })
})