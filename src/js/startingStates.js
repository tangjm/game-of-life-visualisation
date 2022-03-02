// import game from './js/startingPositions/4boats';
// import game from './js/startingPositions/beacon'
// import game from './js/startingPositions/empty3x3';
// import game from './js/startingPositions/threeInARow';
import { acorn } from './startingPositions/dynamic/acorn';
import { gospelGlider } from './startingPositions/dynamic/gosperGliderGun';
import { rPentamino } from './startingPositions/dynamic/rPentamino';

const startingStates = {
	acorn,
	gospelGlider,
	rPentamino
}

export default startingStates;
