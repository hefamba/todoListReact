import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import {
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import RootLayout from './RootLayout';
import HelpLayout from './HelpLayout';
import Faq from './Faq';
import Contact from './Contact';
import NotFound from './NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
