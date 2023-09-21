import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>page not found</h2>
      <p>
        Go to
        <Link to="/">home page</Link>
      </p>
    </div>
  );
}
