import GameOfLife from "../../GameOfLife";
import Patterns from "../../Patterns";

const game = new GameOfLife(10, 10);
const patterns = new Patterns();

patterns.beacon(game, [1, 1]);

export const beacon = {
	game
}