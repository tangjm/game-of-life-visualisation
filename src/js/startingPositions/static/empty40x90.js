import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(40, 90);
const gameToroid = new GameOfLifeToroid(40, 90);

export const empty40x90 = {
	game,
	gameToroid
}