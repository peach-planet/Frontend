// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage';
import CharacterSelectPage from "./CharacterSelectPage";
import MyPlacePage from "./MyPlacePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/character-select" element={<CharacterSelectPage />} />
        <Route path="/myplace" element={<MyPlacePage />} />
      </Routes>
    </Router>
  );
}

export default App;
