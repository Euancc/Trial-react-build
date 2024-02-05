import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import './App.css'

function App() {
  return (
    <>
      <div className="style">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
