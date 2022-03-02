class GameOfLife {
	constructor(rows, columns) {
		this.rows = rows || 3;
		this.columns = columns || 3;
		this.board = Array(this.rows).fill(0).map(row => {
			return Array(this.columns).fill(0);
		});
		this.neighbours = [
			[-1, -1], [-1, 0], [-1, 1],
			[0, -1], [0, 1],
			[1, -1], [1, 0], [1, 1]
		];
	}

	getBoard() {
		return this.board;
	}

	toggleLifeAndDeath(x, y) {
		this.board[x][y] = 1;
	}

	determineLifeDeath(x, y) {
		let liveNeighbours = 0;
		for (let neighbour of this.neighbours) {
			liveNeighbours += this.isAlive(x + neighbour[0], y + neighbour[1]);
		}
		if (liveNeighbours === 3) return 1;
		if (liveNeighbours === 2) return this.isAlive(x, y);
		return 0;
	}

	isAlive(x, y) {
		x = (x % this.rows + this.rows) % this.rows;
		y = (y % this.columns + this.columns) % this.columns;
		return this.board[x][y];
	}

	nextIteration() {
		let newBoard = Array(this.rows).fill(0).map(row => {
			return Array(this.columns).fill(0);
		});
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				newBoard[i][j] = this.determineLifeDeath(i, j);
			}
		}
		this.board = newBoard.slice();
	}
}

export default GameOfLife;