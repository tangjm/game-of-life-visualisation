import GameOfLife from "./GameOfLife";

const game = new GameOfLife();

game.toggleLifeAndDeath(1, 2);
game.toggleLifeAndDeath(1, 3);
game.toggleLifeAndDeath(2, 1);
game.toggleLifeAndDeath(2, 2);
game.toggleLifeAndDeath(3, 2);