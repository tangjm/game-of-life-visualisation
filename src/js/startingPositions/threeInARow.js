import GameOfLife from "../js/GameOfLife";
import Patterns from '../js/Patterns';

const game = new GameOfLife();
const initialPosition = new Patterns();

initialPosition.threeInARow(game, [1, 1]);

export default game;
