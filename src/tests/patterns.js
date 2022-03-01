const patterns = {
	0: {
		dead: [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		]
	},
	1: {
		singleSquare: [
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0]
		]
	},
	2: {
		rectangle2: [
			[0, 0, 0],
			[1, 1, 0],
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
		],
		vertical3: [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 0]
		],
		horizontal3: [
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 0]
		],
	},
	4: {
		square: [
			[0, 0, 0],
			[0, 1, 1],
			[0, 1, 1]
		],
		zigzag4: [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]
	},
	6: {
		rectangle6: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
		]
	}
}

export default patterns;