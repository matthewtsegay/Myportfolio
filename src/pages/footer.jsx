import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://matthewtsegay.com" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://@matthewtsegay.com" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
