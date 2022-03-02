import GameOfLife from "../GameOfLife";
import Patterns from "../Patterns";

const game = new GameOfLife(32, 70);
const initialPosition = new Patterns();

initialPosition.rPentamino(game, [12, 30]);

export default game;