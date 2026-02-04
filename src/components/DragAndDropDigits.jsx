import React, { useState } from 'react';

const DragAndDropDigits = () => {
  const [digits, setDigits] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const onDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newDigits = [...digits];
    const itemToMove = newDigits.splice(draggedIndex, 1)[0];
    newDigits.splice(dropIndex, 0, itemToMove);

    setDigits(newDigits);
    setDraggedIndex(null);
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        width: '100%', maxWidth: '600px', padding: '30px', 
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', 
        backgroundColor: '#fff', textAlign: 'center' 
      }}>
        <h1>Drag & Drop Digits</h1>
        
        {/* FIX: Ensure the dash is an en dash (–) as per the Cypress test requirements */}
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Drag the boxes to reorder the digits 0–9.
        </p>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '15px', marginBottom: '30px' 
        }}>
          {digits.map((digit, index) => (
            <div
              key={digit}
              draggable
              onDragStart={(e) => onDragStart(e, index)}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, index)}
              style={{
                padding: '20px', fontSize: '24px', fontWeight: 'bold',
                border: '2px dashed #ddd', borderRadius: '8px',
                backgroundColor: draggedIndex === index ? '#f0fdf4' : '#fff',
                cursor: 'move', userSelect: 'none'
              }}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* FIX: Exact string match for the tip text */}
        <p style={{ fontSize: '14px', color: '#888' }}>
          Tip: Try reordering to make <span style={{ backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>0123456789</span> or reverse it!
        </p>
      </div>
    </div>
  );
};

export default DragAndDropDigits;