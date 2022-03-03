class GameOfLife {
	constructor(rows, columns) {
		this.visibleRows = rows || 3;
		this.visibleColumns = columns || 3;
		this.rows = this.visibleRows + 6;
		this.columns = this.visibleColumns + 6;

		this.boardA = Array(this.rows).fill(0).map(row => {
			return Array(this.columns).fill(0);
		});
		this.boardB = Array(this.rows).fill(0).map(row => {
			return Array(this.columns).fill(0);
		});
		this.displayBoard = this.boardA;

		this.neighbours = [
			[-1, -1], [-1, 0], [-1, 1],
			[0, -1], [0, 1],
			[1, -1], [1, 0], [1, 1]
		];
	}

	getBoard() {
		let board = Array(this.visibleRows).fill(0).map(row => {
			return Array(this.visibleColumns).fill(0);
		});
		for (let i = 0; i < this.visibleRows; i++) {
			for (let j = 0; j < this.visibleColumns; j++) {
				board[i][j] = this.displayBoard[i + 3][j + 3];
			}
		}
		return board;
	}

	toggleLifeAndDeath(x, y) {
		x += 3;
		y += 3;
		this.displayBoard[x][y] = 1;
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
		if (x < 0 || y < 0 || x > this.rows - 1 || y > this.columns - 1) {
			return 0;
		}
		return this.compareArrays(this.displayBoard, this.boardA) ?
			this.boardB[x][y] : this.boardA[x][y];
	}

	compareArrays(x, y) {
		return JSON.stringify(x) === JSON.stringify(y);
	}

	nextIteration() {
		this.swapBoards();
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.displayBoard[i][j] = this.determineLifeDeath(i, j);
			}
		}
	}

	swapBoards() {
		if (this.compareArrays(this.displayBoard, this.boardA)) {
			this.displayBoard = this.boardB;
		} else {
			this.displayBoard = this.boardA;
		}
	}
}

export default GameOfLife;