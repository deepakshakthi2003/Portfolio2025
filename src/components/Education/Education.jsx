import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const educationData = [
    {
      title: "BACHELOR DEGREE OF COMPUTER SCIENCE",
      description: "Learned foundational computer science concepts including data structures, algorithms, and software development at Universal college of Engineering and Technology(2020-2024)."
    },
    {
      title: "JOSE MATRIC HIGHER SECONDARY SCHOOL",
      description: "Completed +2 Maths Computer with an emphasis on science and mathematics with 56%."
    },
    {
      title: "GOOD SHEPHERED MATRICULATION SCHOOL",
      description: "Completed 10th with 81.4%."
    }
  ];

  return (
    <div className="education-section" id='education'>
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        EDUCATION
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        EDUCATION
      </motion.h2>

      <div className="education-list">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className='education-item'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className='education-header' onClick={() => toggleAccordion(index)}>
              <p>{item.title}</p>
              <div className="plus-icon">
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
            </div>

            {activeIndex === index && (
              <motion.div
                className='education-content'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p>{item.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
