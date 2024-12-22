import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
          >
            <path
              d="M16 2L2 9L16 16L30 9L16 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="fs-4 fw-bold">
            BHILWARA <span className="text-primary">EV</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/about"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/about/company" className="dropdown-item">
                    Company
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="dropdown-item">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/about/vision" className="dropdown-item">
                    Vision & Mission
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/e-scooters" className="nav-link">
                E-Scooters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dealership" className="nav-link">
                Dealership
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalogue" className="nav-link">
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/career" className="nav-link">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary">BOOK NOW</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
