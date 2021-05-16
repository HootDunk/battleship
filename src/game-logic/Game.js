import ComputerPlayer from "./ComputerPlayer";
import HumanPlayer from "./HumanPlayer";
import { Gameboard, setUpGameboard } from "./Gameboard";
import { Ship } from "./Ship"


/*
  When not testing, call the setup gameboard factory instead of the new Gameboard constructor so
  that we setup a gameboard with all necessary ships.
*/
const human = new HumanPlayer(true, new Gameboard());
const cpu = new ComputerPlayer(false, new Gameboard());

human.gameboard.addShip(new Ship(3, "Submarine"));
cpu.gameboard.addShip(new Ship(3, "Submarine"));


