import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";
import GameOfLife2Arrays from "../../GameOfLife2Arrays";
import GameOfLifeInPlace from "../../GameOfLifeInPlace";
import Patterns from "../../Patterns";

const game = new GameOfLife(32, 48);
const gameToroid = new GameOfLifeToroid(32, 48);
const game2Arrays = new GameOfLife2Arrays(32, 48);
const gameInPlace = new GameOfLifeInPlace(32, 48);

const patterns = new Patterns();

patterns.gospelGlider(game, [1, 1]);
patterns.gospelGlider(gameToroid, [1, 1]);
patterns.gospelGlider(game2Arrays, [1, 1]);
patterns.gospelGlider(gameInPlace, [1, 1]);

export const gospelGlider = {
	game,
	gameToroid,
	game2Arrays,
	gameInPlace
}