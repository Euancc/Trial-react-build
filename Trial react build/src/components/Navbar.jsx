import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Diver</Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {/* <ul className="nav">
          <li className="nav-button">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default Navbar
