import React, { useState, useEffect } from 'react';

const AlphabetButtons = () => {
  const [outputText, setOutputText] = useState('');
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleKeyClick = (letter) => {
    setOutputText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setOutputText((prev) => prev.slice(0, -1));
  };

  // Optional: Keyboard Support (matches "or use your keyboard" in subtitle)
  useEffect(() => {
    const handlePhysicalKeyboard = (e) => {
      const key = e.key.toUpperCase();
      if (alphabets.includes(key)) {
        handleKeyClick(key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, []);

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        width: '100%', maxWidth: '800px', padding: '30px', 
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', backgroundColor: '#fff' 
      }}>
        <h1 style={{ textAlign: 'center', margin: '0 0 10px 0' }}>Alphabet Buttons</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          Click letters (or use your keyboard) to build text.
        </p>

        {/* Output Display */}
        <div 
          className="output" 
          style={{ 
            minHeight: '50px', padding: '15px', border: '1px solid #ddd', 
            borderRadius: '8px', marginBottom: '20px', fontSize: '20px', 
            letterSpacing: '2px', wordBreak: 'break-all' 
          }}
        >
          {outputText}
        </div>

        {/* Backspace Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button 
            onClick={handleBackspace}
            style={{ 
              padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd', 
              backgroundColor: '#fff', cursor: 'pointer', fontWeight: 'bold' 
            }}
          >
            Backspace
          </button>
        </div>

        {/* Alphabet Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))', 
          gap: '10px' 
        }}>
          {alphabets.map((char) => (
            <button
              key={char}
              className="key"
              onClick={() => handleKeyClick(char)}
              style={{
                height: '50px', fontSize: '18px', fontWeight: 'bold',
                borderRadius: '8px', border: '1px solid #ddd',
                backgroundColor: '#fff', cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseDown={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseUp={(e) => e.target.style.backgroundColor = '#fff'}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlphabetButtons;