import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(32, 70);
const gameToroid = new GameOfLifeToroid(32, 70);

export const empty32x70 = {
	game,
	gameToroid
}