import { useState } from 'react';
import './style.css';

function Game({ p1, p2 }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  const [winner, setWinner] = useState(null);
  const [player1Positions, setPlayer1Positions] = useState([]);
  const [player2Positions, setPlayer2Positions] = useState([]);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (updatedBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return true;
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return; // Prevent overwriting cells or playing after win

    const updatedBoard = [...board];
    const currentPlayerEmoji = currentPlayer === 'Player 1' ? p1 : p2;

    if (currentPlayer === 'Player 1' && player1Positions.length === 3) {
      const oldestPosition = player1Positions.shift();
      updatedBoard[oldestPosition] = null;
    }
    if (currentPlayer === 'Player 2' && player2Positions.length === 3) {
      const oldestPosition = player2Positions.shift();
      updatedBoard[oldestPosition] = null;
    }

    updatedBoard[index] = currentPlayerEmoji;

    if (currentPlayer === 'Player 1') {
      setPlayer1Positions([...player1Positions, index]);
    } else {
      setPlayer2Positions([...player2Positions, index]);
    }

    setBoard(updatedBoard);

    if (checkWinner(updatedBoard)) {
      setWinner(currentPlayer);
      return;
    }

    setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('Player 1');
    setWinner(null);
    setPlayer1Positions([]);
    setPlayer2Positions([]);
  };

  return (
    <div className="container">
      <div className="board-container">
        {winner ? (
          <p className="turn-indicator winner">
            {winner} {winner === 'Player 1' ? p1 : p2} Wins!
          </p>
        ) : (
          <p className="turn-indicator">
            {currentPlayer}'s {currentPlayer === 'Player 1' ? p1 : p2} Turn
          </p>
        )}
        <div className="game-board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`tile ${cell ? 'filled' : ''}`}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Game;
