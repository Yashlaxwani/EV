import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          <span className="text-xl font-bold">
            MEGNUS <span className="text-purple-600">ELECTROVISION</span>
          </span>
        </Link>

        <nav className="hidden lg:flex space-x-4">
          <Link to="/" className="text-sm font-medium">Home</Link>
          <div className="relative group">
            <button className="text-sm font-medium">About Us</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg hidden group-hover:block">
              <Link to="/about/company" className="block px-4 py-2 text-sm hover:bg-gray-100">Company</Link>
              <Link to="/about/team" className="block px-4 py-2 text-sm hover:bg-gray-100">Team</Link>
              <Link to="/about/vision" className="block px-4 py-2 text-sm hover:bg-gray-100">Vision & Mission</Link>
            </div>
          </div>
          <Link to="/e-scooters" className="text-sm font-medium">E-Scooters</Link>
          <Link to="/dealership" className="text-sm font-medium">Dealership</Link>
          <Link to="/catalogue" className="text-sm font-medium">Catalogue</Link>
          <Link to="/career" className="text-sm font-medium">Career</Link>
          <Link to="/contact" className="text-sm font-medium">Contact Us</Link>
        </nav>

        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          BOOK NOW
        </button>
      </div>
    </header>
  );
}

export default Navbar;

