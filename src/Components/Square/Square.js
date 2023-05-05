import React from 'react'
import './Square.css'

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}
      style={value === 'X' ? { color: "rgb(20, 146, 206) " } : { color: " rgb(247, 180, 32)" }}>
      {value}
    </button>
  )
}

export default Square