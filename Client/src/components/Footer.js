import React from "react";
import "../styles/Footer.css";
import logo from "../logo/care-logo.svg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Moneytor Care Logo" />
        <p>Moneytor Care helps you to get debt free</p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">about Us</a>
            </li>
            <li>
              <a href="#">solutions</a>
            </li>
            <li>
              <a href="#">clients</a>
            </li>
            <li>
              <a href="#">media</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Branches</h3>
          <ul>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Assam</li>
            <li>Visakhapatnam</li>
            <li>Pondicherry</li>
            <li>Mangalore</li>
            <li>Noida</li>
            <li>Gurgaon</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="mailto:help@moneytor.care">
                <i className="fas fa-envelope"></i> help@moneytor.care
              </a>
            </li>
            <li>
              <a href="tel:+919987676717">
                <i className="fas fa-phone"></i> +91 9987676717
              </a>
            </li>
            <li>
              <a href="https://wa.me/918655531539">
                <i className="fab fa-whatsapp"></i> +91 8655531539
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Bootstart Cowork,
              Colaba, Mumbai
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        <div className="text123">
          <p>made with love by </p>
        </div>
        <div className="text12">
          <p>Aggra Technologies Pvt. Ltd.</p>
        </div>
        <div className="text1">
          <p>All Rights Reserved</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© Copyright 2024 Moneytor Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
