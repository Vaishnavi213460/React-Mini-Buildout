import React, { useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(false);
    setJoke(null); // Clear previous joke on new fetch

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
        {/* <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        ← Back to List
        </button> */}
      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '30px', 
        border: '1px solid #eee', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
      }}>
        <h1>Random Joke</h1>
        
        {/* Initial and Fetching States */}
        {!joke && !error && !loading && <p>Click the button to fetch a fresh one.</p>}

        {/* Display Joke */}
        {joke && (
          <div style={{ marginBottom: '20px' }}>
            <p><strong>{joke.setup}</strong></p>
            <p><em>{joke.punchline}</em></p>
          </div>
        )}

        {/* Display Error */}
        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            <p>Could not fetch a joke. Try again.</p>
            <button 
                onClick={fetchJoke} 
                style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
                Try again
            </button>
          </div>
        )}

        <button 
          onClick={fetchJoke} 
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Fetching...' : 'Fetch joke'}
        </button>
      </div>
    </div>
  );
};

export default JokeFetcher;