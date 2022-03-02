import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import Patterns from "../../Patterns";

const game = new GameOfLife(32, 70);
const gameToroid = new GameOfLifeToroid(50, 90);
const patterns = new Patterns();

patterns.rPentamino(game, [12, 30]);
patterns.rPentamino(gameToroid, [12, 30]);

export const rPentamino = {
	game,
	gameToroid
}
