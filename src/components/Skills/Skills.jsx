import React from 'react';
import './Skills.css';
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", percentage: 85, color: "orange" },
  { name: "CSS", percentage: 90, color: "purple" },
  { name: "JavaScript", percentage: 75, color: "green" },
  { name: "C", percentage: 80, color: "blue" },
  { name: "C++", percentage: 85, color: "darkred" },
  { name: "React", percentage: 70, color: "cyan" },
];

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <motion.div
              className="skill-title"
              initial={{ opacity: 0, x: -100 }} // Starts from the left
              whileInView={{ opacity: 1, x: 0 }} // Moves to the center
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }} // Runs animation only once when in view
            >
        <h3>My Specialty</h3>
        <h2>My Skills</h2>
      </motion.div>
      <motion.div
              className="skill-text"
              initial={{ opacity: 0, x: -100 }} // Starts from the left
              whileInView={{ opacity: 1, x: 0 }} // Moves to the center
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }} // Runs animation only once when in view
            >
        <p>
          I am a Front-End Developer with expertise in HTML, CSS, and JavaScript, 
          creating responsive and visually appealing web applications. I have a strong 
          understanding of UI/UX principles, ensuring seamless user experiences. Additionally, 
          I have experience in C and C++, which enhances my problem-solving skills and 
          logic-building capabilities. With a keen eye for detail and a passion for clean code, 
          I strive to develop efficient and scalable solutions.
        </p>
      </motion.div>
      <motion.div
              className="skill-sets"
              initial={{ opacity: 0, x: -100 }} // Starts from the left
              whileInView={{ opacity: 1, x: 0 }} // Moves to the center
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }} // Runs animation only once when in view
            >
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-label">
              <p>{skill.name}</p>
              <p className="percentage">{skill.percentage}%</p>
            </div>
            <div className="progress">
              <div 
                className="progress-bar" 
                style={{ width: `${skill.percentage}%`, backgroundColor: skill.color}}>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
