import React from 'react';
import './HeroSection.css';
import homeImg from '../../assets/homeImg.png';
import download_icon from '../../assets/download-icon.png';
import { motion } from 'framer-motion';

const Herosection = () => {
  const openResume = () => {
    const resumePath = require('../../../public/D-Resume.pdf').default;
    fetch(resumePath)
      .then((response) => {
        if (response.ok) {
          window.open(resumePath, '_blank');
        } else {
          alert('Resume file not found.');
        }
      })
      .catch(() => {
        alert('An error occurred while trying to open the resume.');
      });
  };

  return (
    <section className='hero-section' id='home'>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1>
            I am a <br />
            <span className='highlight'>Front-End Developer</span>
          </h1>
          <p>
            You can view my resume by clicking on the below <span className='highlight'>Download CV</span> button or<br />
            visit my portfolio to know My Skills and My Projects.
          </p>
          <button
            className='resume-btn'
            onClick={openResume}
            aria-label="Download my resume"
          >
            Download CV <img src={download_icon} alt="Download icon" />
          </button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={homeImg} alt="A representation of the hero section" />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
