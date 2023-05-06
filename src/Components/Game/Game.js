import React, { useState } from 'react'
import './Game.css'
import Board from '../Board/Board'
import Status from '../Status/Status'
import History from '../History/History'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  let isDraw = false;
  if (history.length === 10) {
    isDraw = true;
  }

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  let winner = calculateWinner(currentSquares);

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className='game'>
      <div className="board-container">
        <Status winner={winner} xIsNext={xIsNext} isDraw={isDraw} />
        <div className="board-wrapper">
          <Board xIsNext={xIsNext} onPlay={handlePlay} squares={currentSquares}
            calculateWinner={calculateWinner} />
        </div>{
          (isDraw || winner) &&
          (<div className="play-again-btn-container">
            <button className='play-again-btn' onClick={resetGame}>Play Again!</button>
          </div>)
        }

      </div>
      <div className="history-container">
        <History history={history} jumpTo={jumpTo} />
      </div>
    </div>

  )
}

export default Game


