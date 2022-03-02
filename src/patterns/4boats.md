import GameOfLife from "../src/js/GameOfLife";

const game = new GameOfLife();

game.toggleLifeAndDeath(0, 3);
game.toggleLifeAndDeath(1, 2);
game.toggleLifeAndDeath(1, 4);
game.toggleLifeAndDeath(2, 1);
game.toggleLifeAndDeath(2, 3);
game.toggleLifeAndDeath(2, 4);
game.toggleLifeAndDeath(3, 0);
game.toggleLifeAndDeath(3, 2);
game.toggleLifeAndDeath(3, 5);
game.toggleLifeAndDeath(3, 6);
game.toggleLifeAndDeath(4, 1);
game.toggleLifeAndDeath(4, 2);
game.toggleLifeAndDeath(4, 5);
game.toggleLifeAndDeath(4, 7);
game.toggleLifeAndDeath(5, 3);
game.toggleLifeAndDeath(5, 4);
game.toggleLifeAndDeath(5, 6);
game.toggleLifeAndDeath(6, 3);
game.toggleLifeAndDeath(6, 5);
game.toggleLifeAndDeath(7, 4);