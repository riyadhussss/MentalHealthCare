/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/css/style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm" id="navbar" style={{ transition: '0.3s ease-in-out' }}>
      <div className="container">
        <a className="navbar-brand font-sen" style={{ color: '#28363e' }}>
          <strong>MentalHealthCare</strong>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to={'/'}>
              <button className="nav-link active font-sen">Home</button>
            </Link>
            <Link to={'/about'}>
              <button className="nav-link font-sen">About us</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
