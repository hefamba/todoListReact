import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
