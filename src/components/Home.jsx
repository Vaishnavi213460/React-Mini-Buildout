// src/components/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Mini Buildouts</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
          <Link to="/joke-fetcher" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
            🚀 Random Joke Fetcher
          </Link>
        </li>
        {/* Add more projects here later */}
      </ul>
    </div>
  );
};

export default Home;