import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(8, 8);
const gameToroid = new GameOfLifeToroid(8, 8);

export const empty8x8 = {
	game,
	gameToroid
}