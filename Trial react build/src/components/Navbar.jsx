import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setclick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Diver</Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-button">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-button">
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-button">
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  )
}

export default Navbar
