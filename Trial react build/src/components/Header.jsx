import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Dive Finder</h1>
          <p>
            Let us take you away to the most unique diving locations in the
            world
          </p>
        </div>
        <img src="freedive.jpg" alt="Diver" />
      </div>
    </header>
  )
}

export default Header
