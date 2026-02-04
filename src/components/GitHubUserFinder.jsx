import React, { useState } from 'react';

const GitHubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      setUserData(null);
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Please enter a Github username.');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError('Please enter a Github username.');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        width: '100%', maxWidth: '800px', padding: '30px', 
        borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', backgroundColor: '#fff' 
      }}>
        <h1 style={{ textAlign: 'center', margin: '0 0 10px 0' }}>GitHub User Finder</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Search a GitHub username to see profile details.</p>

        {/* Search Bar */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            style={{ 
              flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #333', 
              backgroundColor: '#333', color: '#fff', fontSize: '16px' 
            }}
            name="username"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button 
            onClick={fetchUser}
            style={{ 
              padding: '0 25px', backgroundColor: '#2563eb', color: 'white', 
              border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' 
            }}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Validation Error Message */}
        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}

        {/* User Card */}
        {userData && (
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <img 
              src={userData.avatar_url} 
              alt="avatar" 
              style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #f0f0f0' }} 
            />
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <h2 style={{ margin: 0 }}>{userData.name || 'No Name Provided'}</h2>
                <span style={{ color: '#666' }}>@{userData.login}</span>
              </div>

              {/* Stats Bar */}
              <div style={{ display: 'flex', gap: '15px', margin: '15px 0' }}>
                <div style={statBox}><strong>{userData.public_repos}</strong> Repos</div>
                <div style={statBox}><strong>{userData.followers}</strong> Followers</div>
                <div style={statBox}><strong>{userData.following}</strong> Following</div>
              </div>

              {/* Links/Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#555', fontSize: '14px' }}>
                <div>📍 {userData.location || 'Not Available'}</div>
                <div>🏢 {userData.company || 'Not Available'}</div>
                <div>🔗 <a href={userData.blog} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>{userData.blog || 'No Website'}</a></div>
                <div>🐙 <a href={userData.html_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 'bold' }}>View on GitHub</a></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const statBox = {
  padding: '8px 12px',
  backgroundColor: '#f8f9fa',
  borderRadius: '6px',
  border: '1px solid #eee',
  fontSize: '14px'
};

export default GitHubUserFinder;