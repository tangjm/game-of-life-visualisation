import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import Patterns from "../../Patterns";

const game = new GameOfLife(32, 70);
const gameToroid = new GameOfLifeToroid(32, 70);

const patterns = new Patterns();

patterns.acorn(game, [15, 20]);
patterns.acorn(gameToroid, [15, 20]);

export const acorn = {
	game,
	gameToroid
}