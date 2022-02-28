import React from 'react'
import PropTypes from 'prop-types';
import './square.css';

export const Square = ({value, toggleSquare, position }) => {
	const handleClick = () => {
		console.log("clicked")
		toggleSquare(...position);
	}

  return (
	<button className={"square " + (value ? "alive" : "dead")} onClick={handleClick}>
	</button>
  )
}

Square.propTypes = {
	value: PropTypes.number.isRequired,
	toggleSquare: PropTypes.func.isRequired,
	position: PropTypes.array.isRequired,
}