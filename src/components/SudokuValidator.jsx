import React, { useState } from 'react';
import '../SudokuValidator.css';

const SudokuValidator = () => {
  const [grid, setGrid] = useState(Array(81).fill(''));
  const [status, setStatus] = useState('');

  const handleChange = (index, value) => {
    // Only allow numbers 1-9 or empty string
    if (value === '' || /^[1-9]$/.test(value)) {
      const newGrid = [...grid];
      newGrid[index] = value;
      setGrid(newGrid);
    }
  };

  const validateSudoku = () => {
    const isValidGroup = (arr) => {
      const nums = arr.filter(n => n !== '');
      return new Set(nums).size === nums.size;
    };

    // Check rows and columns
    for (let i = 0; i < 9; i++) {
      const row = grid.slice(i * 9, i * 9 + 9);
      const col = [];
      for (let j = 0; j < 9; j++) col.push(grid[i + j * 9]);
      if (!isValidGroup(row) || !isValidGroup(col)) {
        setStatus('❌ Invalid Sudoku! Conflicts found.');
        return;
      }
    }

    // Check 3x3 sub-grids
    for (let r = 0; r < 9; r += 3) {
      for (let c = 0; c < 9; c += 3) {
        const box = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            box.push(grid[(r + i) * 9 + (c + j)]);
          }
        }
        if (!isValidGroup(box)) {
          setStatus('❌ Invalid Sudoku! Conflicts found.');
          return;
        }
      }
    }
    setStatus('✅ Valid Sudoku!');
  };

  const clearBoard = () => {
    setGrid(Array(81).fill(''));
    setStatus('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Test Case 1: Title */}
      <h1>Sudoku Validator</h1>
      
      {/* Test Case 2: Description */}
      <p>Enter numbers 1-9 and validate the board.</p>

      {/* Test Case 3: Board and Cells */}
      <div className="board">
        {grid.map((val, i) => (
          <input
            key={i}
            className="cell"
            type="text"
            maxLength="1"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}
      </div>

      {/* Test Case 4: Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={validateSudoku} style={btnStyle}>Validate</button>
        <button onClick={clearBoard} style={{ ...btnStyle, backgroundColor: '#f44336' }}>Clear</button>
      </div>

      {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
};

const btnStyle = { margin: '0 10px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' };

export default SudokuValidator;