import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <CssBaseline />
      <h1></h1>
      <TodoList />
    </>
  );
}

export default App;
