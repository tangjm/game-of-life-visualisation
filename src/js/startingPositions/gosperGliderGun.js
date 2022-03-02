import GameOfLife from '../GameOfLifeToroid';
import Patterns from '../Patterns';

const game = new GameOfLife(32, 70);
const initialPosition = new Patterns();

initialPosition.gospelGlider(game, [1, 1]);

export default game;