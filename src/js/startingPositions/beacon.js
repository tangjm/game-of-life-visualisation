import GameOfLife from "../GameOfLife";
import Patterns from "../Patterns"

const game = new GameOfLife(32, 70);
const initialPosition = new Patterns();

initialPosition.beacon(game, [1, 1]);

export default game;