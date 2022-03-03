import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import Patterns from "../../Patterns";

const game = new GameOfLife(50, 90);
const gameToroid = new GameOfLifeToroid(50, 90);

const patterns = new Patterns();

patterns.pufferfish(game, [17, 38]);
patterns.pufferfish(gameToroid, [17, 38]);

export const pufferfish = {
	game,
	gameToroid
}