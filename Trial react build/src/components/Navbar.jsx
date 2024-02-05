import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">Diver</a>
        </div>
        <ul className="nav">
          <li className="nav-button">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
