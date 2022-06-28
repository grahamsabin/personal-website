import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Takes">My Takes</Link>
      </div>
    </nav>
  )
}