import React, { useState } from 'react'
import './Navbar.css'
import Img from '../../assets/Deepak.jpg'
import Heart from '../../assets/heart.png'
import Menu_icon from '../../assets/list.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="Navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={Menu_icon} alt="Menu Icon" />
      </div>
      <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <div className="img-container">
          <div className="image">
            <img src={Img} alt="picture" />
          </div>
          <h1>V. Deepak</h1>
          <span className='position'><a href="#">Frontend Developer </a>in Tamilnadu, India.</span>
        </div>
        <div className={`collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="nav-footer">
          <p>© Copyright 2025 All rights reserved.</p>
          <p>Made with by <img src={Heart} alt="Heart Icon" /> Deepak.V</p>
        </div>
      </div>
    </div>

  )
}

export default Navbar
