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

		it(`Chevron 3 turns into rectangular 2`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 0);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[2].rectangle2);
		})
	})

	describe(`4 square patterns`, () => {
		it(`2x2 square should remain the same`, () => {
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

		it(`Bent 4 turns into Zigzag 4`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[4].zigzag4);
		})

		it(`Zigzag 4 turns into Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 1);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[6].rectangleVertical);
		})

		it(`Vertical Straight 4 turns into a horizontal Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 2);
			game.toggleLifeAndDeath(4, 2);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[6].rectangleHorizontal);
		})

		it(`Horizontal Straight 4 turns into a vertical Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(2, 3);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[6].rectangleVertical);
		})

		it(`Y-shaped 4 turns into Double Arrow 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 3);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 2);

			const startingPosition = game.getBoard();
			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).not.toEqual(startingPosition);
			expect(endingPosition).toEqual(patterns[6].doubleArrow6);
		})
	})

	describe(`6 square tests`, () => {
		
	})
})