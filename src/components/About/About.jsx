import React from 'react'
import './About.css'
import { motion } from "framer-motion";
import front_end_icon from '../../assets/front-end.png'
import api_icon from '../../assets/api-integration.png'
import database_icon from '../../assets/database.png'
import design_icon from '../../assets/ui-ux-design.png'

const About = () => {
  return (
    <div className="container" id='about'>
        <motion.div
        className="text-container"
        initial={{ opacity: 0, x: -100 }} // Starts from the left
        whileInView={{ opacity: 1, x: 0 }} // Moves to the center
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Runs animation only once when in view
      >
            <h3>About us</h3>
            <h2>Who Am I?</h2>
            <p>Hi, I'm V.Deepak, a  highly motivated React.js developer with experience in building scalable and responsive web applications. Proficient in JavaScript, Firebase, Stripe integration, and Material UI, with a strong focus on user authentication, API integration, and performance optimization.</p>
            <p>Passionate about crafting seamless user experiences and solving complex problems. Adept at working with modern front-end technologies and continuously learning to stay ahead in the ever-evolving tech landscape.</p>
         </motion.div>
         <motion.div
        className="image-container"
        initial={{ opacity: 0, x: -100 }} // Starts from left
        whileInView={{ opacity: 1, x: 0 }} // Moves to center
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container-1">
            <img src={front_end_icon} alt="" />
            <h3>Front-End Development</h3>
        </div>
        <div className="container-2">
            <img src={api_icon} alt="" />
            <h3>API Integration</h3>
        </div>
        <div className="container-3">
            <img src={database_icon} alt="" />
            <h3>Firebase Authentication & Database</h3>
        </div>
        <div className="container-4">
            <img src={design_icon} alt="" />
            <h3>UI/UX Development</h3>
        </div>
        </motion.div>
      </div>
  )
}

export default About
