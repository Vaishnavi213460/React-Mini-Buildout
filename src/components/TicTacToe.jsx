import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ x: 0, o: 0, draws: 0 });
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const checkWinner = (currentBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line: pattern };
      }
    }
    if (!currentBoard.includes(null)) return { winner: 'Draw', line: [] };
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      if (result.winner === 'X') setScores(s => ({ ...s, x: s.x + 1 }));
      else if (result.winner === 'O') setScores(s => ({ ...s, o: s.o + 1 }));
      else setScores(s => ({ ...s, draws: s.draws + 1 }));
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine([]);
    setIsXNext(true);
  };

  const resetAll = () => {
    resetGame();
    setScores({ x: 0, o: 0, draws: 0 });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', backgroundColor: '#e57373', minHeight: '100vh' }}>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', width: '400px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 15px 0' }}>Tic-Tac-Toe</h1>
        
        {/* Score Board */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <span style={{ color: '#ff5252' }}>X: {scores.x}</span>
          <span style={{ backgroundColor: '#f0f0f0', padding: '2px 10px', borderRadius: '15px' }}>Draws: {scores.draws}</span>
          <span style={{ color: '#40c4ff' }}>O: {scores.o}</span>
        </div>

        {winner && <h3 style={{ marginBottom: '20px' }}>Winner: {winner}</h3>}

        {/* Board Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
          {board.map((cell, i) => (
            <div 
              key={i} 
              onClick={() => handleClick(i)}
              style={{
                height: '100px', border: '1px solid #eee', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', fontWeight: 'bold', cursor: 'pointer',
                borderColor: winningLine.includes(i) ? '#4caf50' : '#eee',
                color: cell === 'X' ? '#4caf50' : '#333'
              }}
            >
              {cell}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={resetGame} style={primaryBtn}>Restart Round</button>
          <button onClick={resetAll} style={secondaryBtn}>Reset All</button>
        </div>
      </div>
    </div>
  );
};

const primaryBtn = { padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const secondaryBtn = { padding: '10px 20px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '6px', cursor: 'pointer' };

export default TicTacToe;