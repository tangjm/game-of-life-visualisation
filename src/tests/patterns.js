const patterns = {
	1: {
		singleSquare: [
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0]
		]
	},
	3: {
		bent3: [
			[0, 0, 0],
			[0, 1, 1],
			[0, 1, 0]
		],
		diagonal3: [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1]
		]
	},
	4: {
		square: [
			[0, 0, 0],
			[0, 1, 1],
			[0, 1, 1]
		]
	}
}

export default patterns;