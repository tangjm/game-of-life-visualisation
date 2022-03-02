import GameOfLife from '../js/GameOfLife';
import Patterns from '../js/Patterns';

const game = new GameOfLife(32, 70);
const initialPosition = new Patterns();

initialPosition.gospelGlider(game, [1, 1]);

export default game;