import Patterns from "../../Patterns";
import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(32, 48);
const gameToroid = new GameOfLifeToroid(32, 48);
const patterns = new Patterns();

patterns.glider(game, [3, 3]);
patterns.glider(gameToroid, [3, 3]);

export const glider = {
	game,
	gameToroid
}