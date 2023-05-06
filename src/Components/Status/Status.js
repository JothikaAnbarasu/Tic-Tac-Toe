import React from 'react'
import './Status.css'

function Status({ winner, xIsNext, isDraw }) {

  let winnerStyle = {
    color: winner === 'X' ? "rgb(20, 146, 206) " : " rgb(247, 180, 32)",
    fontWeight: "bolder"
  }

  let turnStyle = {
    color: xIsNext ? "rgb(20, 146, 206) " : " rgb(247, 180, 32)",
    fontWeight: "bolder"

  }
  return (
    <div className="status">{

      winner ? (<p style={{ color: "#32cd32" }}> <span style={winnerStyle} >{winner}</span> won the game!</p>) :
        (
          isDraw ? (<p className='draw'>It's a draw!</p>) :
            (<p>It's <span style={turnStyle} > {xIsNext ? 'X' : 'O'}</span>'s turn!</p>)
        )
    }
    </div >
  )
}

export default Status
