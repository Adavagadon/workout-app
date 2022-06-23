import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Home from './components/Home/Home.js';
import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
