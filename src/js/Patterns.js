class Patterns {
	threeInARow(game, topLeftPair) {
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y);
		game.toggleLifeAndDeath(x, y + 1);
		game.toggleLifeAndDeath(x, y + 2);
	}

	square(game, topLeftPair) {
		// if <n, m> is the top-left corner:
		// then <n, m>, <n, m + 1>, <n + 1, m>, <n + 1, m + 1>
		// together make a 2x2 square.

		let square = Array(4);
		square[0] = [...topLeftPair];
		square[1] = [topLeftPair[0], topLeftPair[1] + 1];
		square[2] = [topLeftPair[0] + 1, topLeftPair[1]];
		square[3] = [topLeftPair[0] + 1, topLeftPair[1] + 1];

		square.forEach(coord => {
			game.toggleLifeAndDeath(...coord);
		})
	}

	beacon(game, topLeftPair) {
		this.square(game, topLeftPair);
		this.square(game, [topLeftPair[0] + 2, topLeftPair[1] + 2]);
	}

	smoke(game, topLeftPair) {
		// 7x8 smoke
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y + 2);
		game.toggleLifeAndDeath(x, y + 3);
		game.toggleLifeAndDeath(x + 1, y + 1);
		game.toggleLifeAndDeath(x + 1, y + 5);
		game.toggleLifeAndDeath(x + 2, y);
		game.toggleLifeAndDeath(x + 2, y + 6);
		game.toggleLifeAndDeath(x + 3, y);
		game.toggleLifeAndDeath(x + 3, y + 4);
		game.toggleLifeAndDeath(x + 3, y + 6);
		game.toggleLifeAndDeath(x + 3, y + 7);
		game.toggleLifeAndDeath(x + 4, y);
		game.toggleLifeAndDeath(x + 4, y + 6);
		game.toggleLifeAndDeath(x + 5, y + 1);
		game.toggleLifeAndDeath(x + 5, y + 5);
		game.toggleLifeAndDeath(x + 6, y + 2);
		game.toggleLifeAndDeath(x + 6, y + 3);
	}

	queenBee(game, topLeftPair) {
		// 7x5 queenBee
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y + 4);
		game.toggleLifeAndDeath(x + 1, y + 2);
		game.toggleLifeAndDeath(x + 1, y + 4);
		game.toggleLifeAndDeath(x + 2, y);
		game.toggleLifeAndDeath(x + 2, y + 1);
		game.toggleLifeAndDeath(x + 3, y);
		game.toggleLifeAndDeath(x + 3, y + 1);
		game.toggleLifeAndDeath(x + 4, y);
		game.toggleLifeAndDeath(x + 4, y + 1);
		game.toggleLifeAndDeath(x + 5, y + 2);
		game.toggleLifeAndDeath(x + 5, y + 4);
		game.toggleLifeAndDeath(x + 6, y + 4);
	}

	gospelGlider(game, topLeftPair) {
		// 9x36 gospel glider gun
		const [x, y] = topLeftPair;
		const square = [x + 4, y];
		const square2 = [x + 2, y + 34];
		const smoke = [x + 2, y + 10];
		const queenBee = [x, y + 20];

		this.square(game, square);
		this.square(game, square2);
		this.smoke(game, smoke);
		this.queenBee(game, queenBee);
	}

	acorn(game, topLeftPair) {
		// 3x7 acorn
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y + 1);
		game.toggleLifeAndDeath(x + 1, y + 3);
		game.toggleLifeAndDeath(x + 2, y);
		game.toggleLifeAndDeath(x + 2, y + 1);
		game.toggleLifeAndDeath(x + 2, y + 4);
		game.toggleLifeAndDeath(x + 2, y + 5);
		game.toggleLifeAndDeath(x + 2, y + 6);
	}

	rPentamino(game, topLeftPair) {
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y + 1);
		game.toggleLifeAndDeath(x, y + 2);
		game.toggleLifeAndDeath(x + 1, y);
		game.toggleLifeAndDeath(x + 1, y + 1);
		game.toggleLifeAndDeath(x + 2, y + 1);
	}

	fourBoats(game, topLeftPair) {
		const [x, y] = topLeftPair;
		game.toggleLifeAndDeath(x, y + 3);
		game.toggleLifeAndDeath(x + 1, y + 2);
		game.toggleLifeAndDeath(x + 1, y + 4);
		game.toggleLifeAndDeath(x + 2, y + 1);
		game.toggleLifeAndDeath(x + 2, y +3);
		game.toggleLifeAndDeath(x + 2, y + 4);
		game.toggleLifeAndDeath(x + 3, y);
		game.toggleLifeAndDeath(x + 3, y + 2);
		game.toggleLifeAndDeath(x + 3, y + 5);
		game.toggleLifeAndDeath(x + 3, y + 6);
		game.toggleLifeAndDeath(x + 4, y + 1);
		game.toggleLifeAndDeath(x + 4, y + 2);
		game.toggleLifeAndDeath(x + 4, y + 5);
		game.toggleLifeAndDeath(x + 4, y + 7);
		game.toggleLifeAndDeath(x + 5, y + 3);
		game.toggleLifeAndDeath(x + 5, y + 4);
		game.toggleLifeAndDeath(x + 5, y + 6);
		game.toggleLifeAndDeath(x + 6, y + 3);
		game.toggleLifeAndDeath(x + 6, y + 5);
		game.toggleLifeAndDeath(x + 7, y + 4);
	}

	pufferfish(game, topLeftPair) {
		// 12 x 15
		const [x, y] = topLeftPair;
		// left half (12x7)
		const left = [
			[x, y + 3], 
			[x + 1, y + 2], [x + 1, y + 3], [x + 1, y + 4],
			[x + 2, y + 1], [x + 2, y + 2], [x + 2, y + 5],
			[x + 3, y + 3], [x + 3, y + 4], [x + 3, y + 5],
			[x + 5, y + 4], 
			[x + 6, y + 2], [x + 6, y + 5],
			[x + 7, y], [x + 7, y + 6], 
			[x + 8, y], [x + 8, y + 1], [x + 8, y + 6],
			[x + 9, y + 6], 
			[x + 10, y + 3], [x + 10, y + 3], [x + 10, y + 5],
			[x + 11, y + 4]
		];
		// right half is just [x, -y % y + y + 14] 
		// we add 14 because the last element of an array is one less than the array length
		// add y + y + 14 because % behaves abnormally with negative integers
		let upperBound = y + 14;
		let range = y + upperBound;
		const right = left.map(pair => [pair[0], -pair[1] % range + range]);

		for (let i = 0; i < left.length; i++) {
			game.toggleLifeAndDeath(...left[i]);
			game.toggleLifeAndDeath(...right[i]);
		}
	}
}

export default Patterns;