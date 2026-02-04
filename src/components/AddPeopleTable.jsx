import React, { useState } from 'react';

const AddPeopleTable = () => {
  const [people, setPeople] = useState([]);
  const [formData, setFormData] = useState({ place: '', name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (formData.place && formData.name && formData.age) {
      setPeople([...people, formData]);
      handleClear();
    }
  };

  const handleClear = () => {
    setFormData({ place: '', name: '', age: '' });
  };

  const handleRemove = (indexToRemove) => {
    setPeople(people.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '900px', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', margin: '0' }}>Add People to Table</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Enter Place, Name, and Age, then click Add.</p>

        {/* Form Section */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Place</label>
            <input style={inputStyle} name="place" placeholder="e.g. Mumbai" value={formData.place} onChange={handleChange} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} name="name" placeholder="e.g. Akash" value={formData.name} onChange={handleChange} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Age</label>
            <input style={inputStyle} name="age" placeholder="e.g. 24" value={formData.age} onChange={handleChange} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <button onClick={handleAdd} style={addBtnStyle}>Add</button>
          <button onClick={handleClear} style={clearBtnStyle}>Clear</button>
        </div>

        {/* Table Section */}
        <div style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#f9f9f9' }}>
              <tr>
                <th style={thStyle}>Place</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}></th>
              </tr>
            </thead>
            <tbody>
              {people.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No data added yet.</td>
                </tr>
              ) : (
                people.map((person, index) => (
                  <tr key={index} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td style={tdStyle}>{person.place}</td>
                    <td style={tdStyle}>{person.name}</td>
                    <td style={tdStyle}>{person.age}</td>
                    <td style={tdStyle}>
                      <button onClick={() => handleRemove(index)} style={removeBtnStyle}>Remove</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Styles
const labelStyle = { display: 'block', marginBottom: '5px', fontSize: '14px', color: '#555' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' };
const thStyle = { padding: '15px', fontSize: '15px', color: '#333', borderBottom: '2px solid #f0f0f0' };
const tdStyle = { padding: '15px', fontSize: '14px' };
const addBtnStyle = { padding: '10px 25px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const clearBtnStyle = { padding: '10px 25px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' };
const removeBtnStyle = { padding: '6px 15px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', borderRadius: '6px', cursor: 'pointer' };

export default AddPeopleTable;