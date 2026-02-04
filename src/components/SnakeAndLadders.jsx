import React, { useState } from 'react';

const SnakeAndLadders = () => {
  const [p1Pos, setP1Pos] = useState(1);
  const [p2Pos, setP2Pos] = useState(1);
  const [isP1Turn, setIsP1Turn] = useState(true);
  const [diceRoll, setDiceRoll] = useState(0);
  const [winner, setWinner] = useState(null);

  const snakes = { 99: 78, 95: 75, 93: 73, 87: 24, 62: 19, 64: 60, 54: 34, 17: 7 };
  const ladders = { 4: 14, 9: 31, 20: 38, 28: 84, 40: 59, 63: 81, 71: 91 };

  const rollDice = () => {
    if (winner) return;
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    
    let currentPos = isP1Turn ? p1Pos : p2Pos;
    let nextPos = currentPos + roll;

    // Exact 100 rule
    if (nextPos <= 100) {
      if (snakes[nextPos]) nextPos = snakes[nextPos];
      else if (ladders[nextPos]) nextPos = ladders[nextPos];

      if (isP1Turn) setP1Pos(nextPos);
      else setP2Pos(nextPos);

      if (nextPos === 100) setWinner(isP1Turn ? 'Player 1' : 'Player 2');
    }

    if (!winner && nextPos !== 100) setIsP1Turn(!isP1Turn);
  };

  const resetGame = () => {
    setP1Pos(1);
    setP2Pos(1);
    setIsP1Turn(true);
    setWinner(null);
    setDiceRoll(0);
  };

  const renderCells = () => {
    let cells = [];
    for (let i = 100; i >= 1; i--) {
      cells.push(
        <div key={i} style={cellStyle}>
          <span style={{ fontSize: '10px', color: '#999' }}>{i}</span>
          <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
            {p1Pos === i && <div style={{ ...tokenStyle, backgroundColor: 'red' }}>P1</div>}
            {p2Pos === i && <div style={{ ...tokenStyle, backgroundColor: '#40c4ff' }}>P2</div>}
          </div>
          {ladders[i] && <span style={{ fontSize: '8px', color: 'green' }}>L→{ladders[i]}</span>}
          {snakes[i] && <span style={{ fontSize: '8px', color: 'red' }}>S→{snakes[i]}</span>}
        </div>
      );
    }
    return cells;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Snake & Ladders</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
        <div style={{ color: isP1Turn ? 'green' : 'black', fontWeight: isP1Turn ? 'bold' : 'normal' }}>
          {winner === 'Player 1' ? '🏆 Player 1 wins!' : 'P1'}
        </div>
        <div>Turn: {isP1Turn ? 'P1' : 'P2'}</div>
        <div style={{ color: !isP1Turn ? 'green' : 'black', fontWeight: !isP1Turn ? 'bold' : 'normal' }}>
          {winner === 'Player 2' ? '🏆 Player 2 wins!' : 'P2'}
        </div>
      </div>

      <div style={boardStyle}>{renderCells()}</div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={rollDice} style={btnStyle}>Roll Dice {diceRoll > 0 && `(${diceRoll})`}</button>
        <button onClick={resetGame} style={{ ...btnStyle, backgroundColor: '#eee', color: '#333' }}>Reset</button>
        <p style={{ fontSize: '12px', marginTop: '10px', maxWidth: '400px' }}>
          Exact 100 is required to win. Land on a ladder to climb up, a snake to slide down.
        </p>
      </div>
    </div>
  );
};

// Styles
const boardStyle = { display: 'grid', gridTemplateColumns: 'repeat(10, 50px)', border: '2px solid #ddd' };
const cellStyle = { width: '50px', height: '50px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '2px', boxSizing: 'border-box' };
const tokenStyle = { width: '20px', height: '20px', borderRadius: '50%', color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const btnStyle = { padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginRight: '10px' };

export default SnakeAndLadders;