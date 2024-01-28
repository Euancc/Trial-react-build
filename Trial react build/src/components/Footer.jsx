import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="footer-item">
          <h3>Contact us</h3>

          <p>divewithus@gmail.com</p>
          <p>0800 838383</p>
          <p>Postal address:</p>
          <p>Dive Finder</p>
          <p>PO Box 975</p>
          <p>Panatina Ridge</p>
          <p>Guadalcanal</p>
        </div>
        <div className="footer-item">
          <h3>Sign up to our newsletter</h3>
          <div className="email-sect">
            <p>Get updated with the latest offers!</p>
            <form>
              <label for="email">Enter your email: </label>
              <input type="email"></input>
            </form>
          </div>
        </div>
        <div className="footer-item">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
