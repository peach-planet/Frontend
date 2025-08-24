// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage';
import CharacterSelectPage from "./CharacterSelectPage";
import MyPlacePage from "./MyPlacePage";
import WritePage from "./WritePage";
import ExpressionSelectPage from "./ExpressionSelectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/character-select" element={<CharacterSelectPage />} />
        <Route path="/myplace" element={<MyPlacePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/expression-select" element={<ExpressionSelectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
