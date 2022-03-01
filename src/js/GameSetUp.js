class GameSetUp {

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

	gate(game, topLeftPair) {
		// 7x5 gate
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
		const gate = [x, y + 20];
		
		this.square(game, square);
		this.square(game, square2);
		this.smoke(game, smoke);
		this.gate(game, gate);
	}
}

export default GameSetUp;