// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JokeFetcher from './components/JokeFetcher';
import StudentEntry from './components/StudentEntry';
import GitHubUserFinder from './components/GitHubUserFinder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joke-fetcher" element={<JokeFetcher />} />
          <Route path="/student-entry" element={<StudentEntry />} />
          <Route path="/github-user-finder" element={<GitHubUserFinder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;