import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top" style={{ backgroundColor: '#0A1F44' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          
          <b>Ezekiel Kiprop</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcollapse"
          aria-controls="navbarcollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarcollapse">
          <div className="navbar-nav ms-auto align-items-md-center">
            <Link to="/" className="nav-link mx-2">Home</Link>
            <Link to="/about" className="nav-link mx-2">About</Link>
            <a href="/#projects" className="nav-link mx-2">Projects</a>
            <Link to="/contact" className="nav-link mx-2">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;