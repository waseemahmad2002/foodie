import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter, BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div className="footer-icons">
          <BsTwitter />
          <BsFacebook />
          <BsYoutube />
          <BsInstagram />
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-column">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-columns">
          <span>757-9584-407</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
      </div>

      <div className="footer-right">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer;
