import GameOfLife from "../../GameOfLife";
import GameOfLifeToroid from "../../GameOfLifeToroid";

const game = new GameOfLife(32, 48);
const gameToroid = new GameOfLifeToroid(32, 48);

export const defaultBoard = {
	game,
	gameToroid
}