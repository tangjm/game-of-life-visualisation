import React from 'react'
import { Square } from './Square';
import PropTypes from 'prop-types';

export const Board = ({ gameboard, toggleSquare }) => {
	const createBoard = () => {
		let board = [];
		for (let i = 0; i < gameboard.length; i++) {
			let rows = [];
			for (let j = 0; j < gameboard[i].length; j++) {
				const squarePosition = [i, j];
				rows = [
					...rows,
					<Square
						value={gameboard[i][j]}
						key={`<${squarePosition.join(",")}>`}
						toggleSquare={toggleSquare}
						position={squarePosition} />
				];
			}
			board[i] = rows;
		}
		return board;
	}

	const renderBoard = board => {
		return board.map((rowArray, index) => {
			return <div key={index}>{rowArray}</div>;
		});
	}
	return (
		<>
			{renderBoard(createBoard())}
		</>
	)
}

Board.propTypes = {
	gameboard: PropTypes.array.isRequired,
	toggleSquare: PropTypes.func.isRequired,
}