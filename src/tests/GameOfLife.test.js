import GameOfLife from "../js/GameOfLife";
import patterns from './patterns';

describe(`test suite for GameOfLife`, () => {
	describe(`3 square patterns`, () => {
		it(`Bent 3 should turn into a 2x2 square`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();
	
			console.log("starting", startingPosition);
			console.log("endingPosition", endingPosition)
			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[4].square);
		})
	})

	describe(`4 square patterns`, () => {

		xit(`2x2 square should remain the same`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
	
			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();
	
			expect(endingPosition).toEqual(startingPosition);
		})
	})
})