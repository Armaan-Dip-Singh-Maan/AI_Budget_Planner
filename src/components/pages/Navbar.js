// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">AI Budget Planner</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/auth">Login / Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/expense">Add Expense</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
