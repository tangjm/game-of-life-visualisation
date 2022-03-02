// import game from './js/startingPositions/gosperGliderGun';
// import game from './js/startingPositions/4boats';
// import game from './js/startingPositions/rPentamino';
// import game from './js/startingPositions/beacon'
// import game from './js/startingPositions/acorn';
// import game from './js/startingPositions/empty3x3';
// import game from './js/startingPositions/threeInARow';

import GameOfLife from './js/GameOfLife';
import GameOfLifeToroid from './js/GameOfLifeToroid';
import Patterns from './Patterns';

const gameNormal = GameOfLife();
const gameToroid = GameOfLifeToroid();
const patterns = new Patterns();


patterns.gospelGlider(gameNormal, [1, 1]);
