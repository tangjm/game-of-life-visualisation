import GameOfLife from "../GameOfLife";
import Patterns from "../Patterns"

const game = new GameOfLife(32, 70);
const initialPosition = new Patterns();

initialPosition.acorn(game, [15, 20]);

export default game;