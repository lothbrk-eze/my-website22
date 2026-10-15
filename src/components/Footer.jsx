import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-white py-5" style={{ backgroundColor: '#0A1F44' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4><FaCode className="me-2" />Ezekiel Kiprop</h4>
            <p>
              Full-stack developer building mobile and web products —
              React Native/Expo on the frontend, Flask and MySQL on the backend.
            </p>
            <div className="mt-4">
              <a href="https://github.com/" className="social-icon text-white me-3"><FaGithub /></a>
              <a href="https://www.linkedin.com/" className="social-icon text-white me-3"><FaLinkedin /></a>
              <a href="https://x.com/" className="social-icon text-white me-3"><FaTwitter /></a>
            </div>
          </div>

          <div className="col-lg-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><a href="/#projects" className="text-white text-decoration-none">Projects</a></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h4>Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><FaMapMarkerAlt className="me-2" /> Nairobi, Kenya</li>
              <li className="mb-2"><FaPhone className="me-2" /> +254 734454222</li>
              <li className="mb-2"><FaEnvelope className="me-2" /> ezekielkiprop101@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 bg-light" />

        <div className="text-center pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Ezekiel Kiprop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;