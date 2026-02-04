import React, { useState } from 'react';

const DynamicList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = (e) => {
    if (e) e.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        width: '100%', maxWidth: '500px', padding: '30px', 
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', 
        backgroundColor: '#fff' 
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Add Items to List</h1>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ 
              flex: 1, padding: '10px', borderRadius: '6px', 
              border: '1px solid #ddd', boxSizing: 'border-box' 
            }}
          />
          <button 
            onClick={handleAdd}
            style={{ 
              padding: '10px 20px', backgroundColor: '#7194e1', 
              color: 'white', border: 'none', borderRadius: '6px', 
              cursor: 'pointer', fontWeight: 'bold' 
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '10px'
              }}
            >
              <span>{item}</span>
              <button 
                onClick={() => handleRemove(index)}
                style={{ 
                  padding: '5px 12px', backgroundColor: '#fee2e2', 
                  color: '#991b1b', border: 'none', borderRadius: '6px', 
                  cursor: 'pointer', fontWeight: 'bold'
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicList;