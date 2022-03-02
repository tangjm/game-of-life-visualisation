import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import Patterns from "../../Patterns";

const game = new GameOfLife(32, 70);
const gameToroid = new GameOfLifeToroid(32, 70);
const patterns = new Patterns();

patterns.gospelGlider(game, [1, 1]);
patterns.gospelGlider(gameToroid, [1, 1]);

export const gospelGlider = {
	game,
	gameToroid
}