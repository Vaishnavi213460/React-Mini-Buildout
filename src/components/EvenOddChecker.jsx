import React, { useState } from 'react';

const EvenOddChecker = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [isEven, setIsEven] = useState(null);

  const checkParity = () => {
    const num = parseInt(inputValue);

    if (isNaN(num)) {
      setResultMessage('Please enter a valid number');
      setIsEven(null);
      return;
    }

    if (num % 2 === 0) {
      setResultMessage(`The number ${num} is even!`);
      setIsEven(true);
    } else {
      setResultMessage(`Oops, ${num} is odd!`);
      setIsEven(false);
    }
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        width: '100%', maxWidth: '400px', padding: '30px', 
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', 
        backgroundColor: '#fff', textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Even or Odd Checker</h1>

        <input
          type="text"
          name="number"
          placeholder="Enter a number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ 
            width: '100%', padding: '12px', borderRadius: '6px', 
            border: '1px solid #ccc', boxSizing: 'border-box', marginBottom: '15px' 
          }}
        />

        <button 
          onClick={checkParity}
          style={{ 
            width: '100%', padding: '12px', backgroundColor: '#2563eb', 
            color: 'white', border: 'none', borderRadius: '6px', 
            cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' 
          }}
        >
          Check
        </button>

        {resultMessage && (
          <p style={{ 
            fontWeight: 'bold', 
            color: isEven === true ? '#28a745' : '#0000ff', // Green for even, Blue for odd
            marginTop: '10px' 
          }}>
            {resultMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default EvenOddChecker;