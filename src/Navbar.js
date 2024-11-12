import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <ul className="flex justify-between">
      <li><Link to="/" className="text-white font-bold">Home</Link></li>
      <li><Link to="/cart" className="text-white font-bold">Cart</Link></li>
    </ul>
  </nav>
);

export default Navbar;
