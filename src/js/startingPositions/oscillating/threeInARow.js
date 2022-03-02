import GameOfLife from '../GameOfLife';
import Patterns from '../Patterns';

const game = new GameOfLife(6, 6);
const initialPosition = new Patterns();

initialPosition.threeInARow(game, [1, 1]);

export default game;
