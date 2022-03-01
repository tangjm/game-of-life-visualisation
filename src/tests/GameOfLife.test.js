import GameOfLife from "../js/GameOfLife";
import patterns from './patterns';

describe(`test suite for GameOfLife`, () => {
	describe(`1 square patterns`, () => {
		it(`Single square dies`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			
			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[0].dead);
		})
	})
	
	describe(`2 square patterns`, () => {
		it(`Rectangular 2 should die`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[0].dead);
		})
	})
	describe(`3 square patterns`, () => {
		it(`Bent 3 should turn into a 2x2 square`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[4].square);
		})

		it(`Diagonal 3 should turn into a single square`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 2);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[1].singleSquare);
		})

		it(`Vertical 3 should turn into a horizontal 3`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 1);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[3].horizontal3);
		})

		it(`Horizontal 3 should turn into a vertical 3`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[3].vertical3);
		})

		it(`Large knight 3 should turn into a rectangular 2`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(1, 0);
			game.toggleLifeAndDeath(0, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[2].rectangle2);
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