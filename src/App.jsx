// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JokeFetcher from './components/JokeFetcher';
import StudentEntry from './components/StudentEntry';
import GitHubUserFinder from './components/GitHubUserFinder';
import AlphabetButtons from './components/AlphabetButtons';
import EvenOddChecker from './components/EvenOddChecker';
import DynamicList from './components/DynamicList';
import SquareAndCircle from './components/SquareAndCircle';
import AddPeopleTable from './components/AddPeopleTable';
import TicTacToe from './components/TicTacToe';
import SudokuValidator from './components/SudokuValidator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joke-fetcher" element={<JokeFetcher />} />
          <Route path="/student-entry" element={<StudentEntry />} />
          <Route path="/github-user-finder" element={<GitHubUserFinder />} />
          <Route path="/alphabet-buttons" element={<AlphabetButtons />} />
          <Route path="/check-parity" element={<EvenOddChecker />} />
          <Route path="/dynamic-list" element={<DynamicList />} />
          <Route path="/square-and-circle" element={<SquareAndCircle />} />
          <Route path="/add-people" element={<AddPeopleTable />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/sudoku-validator" element={<SudokuValidator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;