import { beacon } from './startingPositions/oscillating/beacon';
import { threeInARow } from './startingPositions/oscillating/threeInARow';
import { fourBoats } from './startingPositions/oscillating/4boats';
import { acorn } from './startingPositions/dynamic/acorn';
import { gospelGlider } from './startingPositions/dynamic/gosperGliderGun';
import { rPentamino } from './startingPositions/dynamic/rPentamino';

import { empty3x3 } from './startingPositions/static/empty3x3';
import { empty8x8 } from './startingPositions/static/empty8x8';

const startingStates = {
	acorn,
	gospelGlider,
	rPentamino,
	fourBoats,
	threeInARow,
	beacon,
	empty3x3,
	empty8x8
}

export default startingStates;
