import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Boxes from './components/Boxes'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="style">
      <Navbar />
      <Header />
      <Boxes />
      <Footer />
    </div>
  )
}

export default App
