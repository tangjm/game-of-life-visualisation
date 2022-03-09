import GameOfLife from "../../GameOfLife";
import Patterns from "../../Patterns";

const game = new GameOfLife(32, 48);
const patterns = new Patterns();

patterns.fourBoats(game, [1, 1]);

export const fourBoats = {
	game
}