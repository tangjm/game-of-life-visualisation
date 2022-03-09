import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(35, 90);
const gameToroid = new GameOfLifeToroid(35, 90);

export const empty35x90 = {
	game,
	gameToroid
}