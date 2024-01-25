import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">Diver</a>
        </div>
        <ul className="nav">
          <li className="nav-button">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
