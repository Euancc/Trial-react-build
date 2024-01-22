import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Diver</div>
        <ul className="nav">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
