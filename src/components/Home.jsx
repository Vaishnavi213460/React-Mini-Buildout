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
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/student-entry" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Student Entry Form</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/github-user-finder" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Github user finder</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/alphabet-buttons" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Alphabet Buttons</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/check-parity" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Check Parity</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/dynamic-list" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Dynamic List</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/square-and-circle" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Square & Circle</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/add-people" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Add People</Link>
        </li>
        <li style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '5px' }}>
            <Link to="/tic-tac-toe" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>📝 Tic Tac Toe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;