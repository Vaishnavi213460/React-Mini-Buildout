import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '', username: '', college: '', email: '', password: '', address: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required"; //
    if (!formData.college) newErrors.college = "College is required";
    if (!formData.address) newErrors.address = "Address is required";
    
    // Username lowercase check
    if (formData.username !== formData.username.toLowerCase()) {
      newErrors.username = "Username must be all lowercase";
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password length check
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Student Registration Form</h2>
        
        {/* Name input */}
        <div style={inputGroup}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        {/* Username input */}
        <div style={inputGroup}>
          <label>Username</label>
          <input name="username" value={formData.username} onChange={handleChange} style={inputStyle} />
          {errors.username && <p style={errorStyle}>{errors.username}</p>}
        </div>

        {/* College input */}
        <div style={inputGroup}>
          <label>College</label>
          <input name="college" value={formData.college} onChange={handleChange} style={inputStyle} />
          {errors.college && <p style={errorStyle}>{errors.college}</p>}
        </div>

        {/* Email input */}
        <div style={inputGroup}>
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Password input */}
        <div style={inputGroup}>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        {/* Address input */}
        <div style={inputGroup}>
          <label>Address</label>
          <input name="address" value={formData.address} onChange={handleChange} style={inputStyle} />
          {errors.address && <p style={errorStyle}>{errors.address}</p>}
        </div>

        <button type="submit" style={btnStyle}>Register</button>
      </form>
    </div>
  );
};

// Styles for visual alignment
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '20px' };
const formStyle = { width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' };
const inputGroup = { marginBottom: '15px' };
const inputStyle = { width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' };
const errorStyle = { color: 'red', fontSize: '12px', margin: '5px 0 0 0' };
const btnStyle = { width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default StudentForm;