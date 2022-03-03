import GameOfLife from "../js/GameOfLifeInPlace";
import patterns from './testPatterns';

describe(`test suite for GameOfLifeInPlace`, () => {
	describe(`1 square patterns`, () => {
		it(`Single square dies`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[0].dead);
		})
	})

	describe(`2 square patterns`, () => {
		it(`Rectangular 2 should die`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[0].dead);
		})
	})

	describe(`3 square patterns`, () => {
		it(`Bent 3 should turn into a 2x2 square`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[4].square);
		})

		it(`Diagonal 3 should turn into a single square`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[1].singleSquare);
		})

		it(`Vertical 3 should turn into a horizontal 3`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 1);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[3].horizontal3);
		})

		it(`Horizontal 3 should turn into a vertical 3`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(1, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[3].vertical3);
		})

		it(`Large knight 3 should turn into a rectangular 2`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(1, 0);
			game.toggleLifeAndDeath(0, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[2].rectangle2);
		})

		it(`Chevron 3 turns into rectangular 2`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 0);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(2, 0);

			game.nextIteration();
			const endingPosition = game.getBoard();

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

			game.nextIteration();
			const endingPosition = game.getBoard();
})

		it(`Tub 4 doesn't change`, () => {
			const game = new GameOfLife(3, 3);
			game.toggleLifeAndDeath(0, 1);
			game.toggleLifeAndDeath(1, 0);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();
expect(endingPosition).toEqual(patterns[4].tub4);
		})

		it(`Bent 4 turns into Zigzag 4`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[4].zigzag4);
		})

		it(`Zigzag 4 turns into Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 1);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[6].rectangleVertical);
		})

		it(`Vertical Straight 4 turns into a horizontal Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 2);
			game.toggleLifeAndDeath(4, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[6].rectangleHorizontal);
		})

		it(`Horizontal Straight 4 turns into a vertical Rectangular 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(2, 3);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[6].rectangleVertical);
		})

		it(`Y-shaped 4 turns into Double Arrow 6`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 3);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(3, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[6].doubleArrow6);
		})
	})

	describe(`5 square patterns`, () => {
		it(`Boat 5 should remain the same`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();
expect(endingPosition).toEqual(patterns[5].boat5);
		})
	})

	describe(`6 square patterns`, () => {
		it(`Double Arrow 6 turns into Arrow 7`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);
			game.toggleLifeAndDeath(3, 2);


			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[7].arrow7);
		})

		it(`Beehive 6 doesn't change`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);
			game.toggleLifeAndDeath(3, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();
expect(endingPosition).toEqual(patterns[6].beehive6);
		})

		it(`Angle Brackets 6 turns into Diagonal Squares 8`, () => {
			const game = new GameOfLife(6, 6);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);

			game.toggleLifeAndDeath(3, 4);
			game.toggleLifeAndDeath(4, 3);
			game.toggleLifeAndDeath(4, 4);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[8].diagonalSquares8);
		})
	})

	describe(`7 square patterns`, () => {
		it(`Arrow 7 turns into Jellyfish 7`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(1, 3);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);
			game.toggleLifeAndDeath(3, 3);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[7].jellyfish7);
		})

		it(`Jellyfish 7 turns into Hollow 8`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(0, 2);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(1, 3);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(2, 4);
			game.toggleLifeAndDeath(3, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[8].hollow8);
		})

		it(`Loaf 7 should not change`, () => {
			const game = new GameOfLife(5, 5);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 0);
			game.toggleLifeAndDeath(2, 3);
			game.toggleLifeAndDeath(3, 1);
			game.toggleLifeAndDeath(3, 3);
			game.toggleLifeAndDeath(4, 2);

			game.nextIteration();
			const endingPosition = game.getBoard();
expect(endingPosition).toEqual(patterns[7].loaf7);
		})
	})

	describe(`8 square patterns`, () => {
		it(`Diagonal Squares 8 turns into Angle Brackets 6`, () => {
			const game = new GameOfLife(6, 6);
			game.toggleLifeAndDeath(1, 1);
			game.toggleLifeAndDeath(1, 2);
			game.toggleLifeAndDeath(2, 1);
			game.toggleLifeAndDeath(2, 2);

			game.toggleLifeAndDeath(3, 4);
			game.toggleLifeAndDeath(4, 3);
			game.toggleLifeAndDeath(4, 4);
			game.toggleLifeAndDeath(3, 3);

			game.nextIteration();
			const endingPosition = game.getBoard();

			expect(endingPosition).toEqual(patterns[6].angleBrackets6);
		})
	})
})