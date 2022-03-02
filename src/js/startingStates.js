// import game from './js/startingPositions/4boats';
// import game from './js/startingPositions/beacon'
// import game from './js/startingPositions/empty3x3';
// import game from './js/startingPositions/threeInARow';
import { beacon } from './startingPositions/oscillating/beacon';
import { threeInARow } from './startingPositions/oscillating/threeInARow';
import { fourBoats } from './startingPositions/oscillating/4boats';
import { acorn } from './startingPositions/dynamic/acorn';
import { gospelGlider } from './startingPositions/dynamic/gosperGliderGun';
import { rPentamino } from './startingPositions/dynamic/rPentamino';

const startingStates = {
	acorn,
	gospelGlider,
	rPentamino,
	fourBoats,
	threeInARow,
	beacon
}

export default startingStates;
