import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav style={{ display: 'flex' }}>
          <h3>Nav Bar</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
