// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JokeFetcher from './components/JokeFetcher';
import StudentEntry from './components/StudentEntry';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Only the component matching the path will render inside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joke-fetcher" element={<JokeFetcher />} />
          <Route path="/student-entry" element={<StudentEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;