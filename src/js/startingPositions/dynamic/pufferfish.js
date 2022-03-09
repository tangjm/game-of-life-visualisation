import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import Patterns from "../../Patterns";

const game = new GameOfLife(48, 48);
const gameToroid = new GameOfLifeToroid(32, 48);

const patterns = new Patterns();

patterns.pufferfish(game, [30, 14]);
patterns.pufferfish(gameToroid, [12, 20]);

export const pufferfish = {
	game,
	gameToroid
}