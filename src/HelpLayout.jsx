import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function () {
  return (
    <div>
      <h1>HELP LAYOUT</h1>

      <nav>
        <NavLink to="faq">FAQS</NavLink>
        <NavLink to="contact">Contact up by phone</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
