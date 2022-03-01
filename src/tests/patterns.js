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
		tub4: [
			[0, 1, 0],
			[1, 0, 1],
			[0, 1, 0]
		],
		zigzag4: [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
		],
		yShaped4: [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
	},
	5: {
		boat5: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
		]
	},
	6: {
		rectangleVertical: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
		rectangleHorizontal: [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
		],
		doubleArrow6: [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
		beehive6: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[1, 0, 0, 1, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
		angleBrackets6: [
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
		]
	},
	7: {
		arrow7: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 1, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 0, 0, 0],
		],
		jellyfish7: [
			[0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0],
			[0, 1, 0, 1, 1],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
		loaf7: [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0],
			[1, 0, 0, 1, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 1, 0, 0],
		]
	},
	8: {
		hollow8: [
			[0, 0, 1, 1, 0],
			[0, 1, 0, 0, 1],
			[0, 1, 0, 0, 1],
			[0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0],
		],
		diagonalSquares8: [
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
		]
	}
}

export default patterns;