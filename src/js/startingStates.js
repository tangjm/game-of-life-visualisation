import { glider } from './startingPositions/dynamic/glider';
import { beacon } from './startingPositions/oscillating/beacon';
import { threeInARow } from './startingPositions/oscillating/threeInARow';
import { fourBoats } from './startingPositions/oscillating/4boats';
import { acorn } from './startingPositions/dynamic/acorn';
import { gospelGlider } from './startingPositions/dynamic/gosperGliderGun';
import { rPentamino } from './startingPositions/dynamic/rPentamino';
import { pufferfish } from './startingPositions/dynamic/pufferfish';

import { empty3x3 } from './startingPositions/static/empty3x3';
import { empty8x8 } from './startingPositions/static/empty8x8';
import { empty32x70 } from './startingPositions/static/empty32x70';
import { empty35x90 } from './startingPositions/static/empty35x90';
import { defaultBoard } from './startingPositions/static/defaultBoard';

const startingStates = {
	defaultBoard,
	// empty3x3,
	// empty8x8,
	empty32x70,
	empty35x90,
	glider,
	acorn,
	gospelGlider,
	rPentamino,
	fourBoats,
	threeInARow,
	beacon,
	pufferfish
}

export default startingStates;
