import React from 'react'
import PropTypes from 'prop-types';
import './square.css';

export const Square = ({value}) => {
  return (
	<div className='square'>
		{value}
	</div>
  )
}

Square.propTypes = {
	value: PropTypes.number.isRequired,
}