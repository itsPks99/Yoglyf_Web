import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { FaLocationDot, FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="nav-links">
          <a href="/about">about</a>
          <a href="/contact">Contact Us</a>
          <a href="/investor">Investor Privileges</a>
          <a href="/news">News & Events</a>
        </nav>
        <div className="footerSocial-icons">
          <a className="footerSocial-icons" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a className="footerSocial-icons" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="footerSocial-icons" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a className="footerSocial-icons" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a className="footerSocial-icons" href="https://web.whatsapp.com/916205033076" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="resorts-section">
        <h3>OUR 5-STAR LUXURY BRANDED RESORT & RESIDENCES AT
          <div className="locations">
            <div className="india-locations">
              {/* <a href="/coorg">Coorg</a>
            <a href="/goa">Goa</a>
            <a href="/jaipur">Jaipur</a>
            <a href="/jawai">Jawai</a>
            <a href="/pushkar">Pushkar</a> */}
              <a href="/rishikesh"><FaLocationDot /> &nbsp;Rishikesh</a>
            </div>
            {/* <div className="separator">|</div>
          <div className="uae-locations">
            <a href="/dubai">Dubai (UAE)</a>
          </div> */}
          </div>
        </h3>

      </div>

      <div className="footer-content">
        <div className="footerLogo-section">
          <img
            src="./assets/Logo.png"
            alt="Yoglyf Logo"
            className="footerLogo"
          />
        </div>
        <div className="description-section">
          <p>
            At <strong>Yoglyf</strong>, we design, develop, and invest in world-class wellness retreats in prime
            destinations. Our expertise covers every stage of retreat development, from vision to
            completion, ensuring exceptional quality and innovation.
          </p>
        </div>
        <div className="legal-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/about">About Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

