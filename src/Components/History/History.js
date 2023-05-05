
import React from 'react'
import './History.css'

function History({ history, jumpTo }) {


  return (
    <div className='history'>
      <div className="history-heading">
        Time Travel Controls
      </div>

      <div className="controls">
        <ul>
          {
            history.map((squares, move) => {
              let description;
              if (move > 0) {
                description = "Go to move #" + move
              } else {
                description = "Go to start"
              }
              return (
                <li key={move}>
                  <button className="controlBtns" onClick={() => jumpTo(move)}>{description}</button>
                </li>
              )
            })}
        </ul>

      </div>

    </div>
  )
}

export default History