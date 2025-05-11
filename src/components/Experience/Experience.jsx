import React from 'react'
import './Experience.css'
import { motion } from 'framer-motion' 

const Experience = () => {
    return (
        <section id="experience">
            <motion.h3 
                className="section-title"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                EXPERIENCE
            </motion.h3>

            <motion.h2 
                className="section-subtitle"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                PROFESSIONAL EXPERIENCE
            </motion.h2>

            <div className="experience-container">
                <motion.div 
                    className="experience-card"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3>Front-End Developer</h3>
                    <p className="company">CDS Technologies</p>
                    <p className="duration">Sept 2024 – Nov 2024</p>
                    <ul>
                        <li>Built responsive and interactive web interfaces using HTML, CSS, and JavaScript.</li>
                        <li>Developed dynamic UI components using React.js.</li>
                        <li>Collaborated with senior developers to improve website performance and accessibility.</li>
                    </ul>
                </motion.div>

                <motion.div 
                    className="experience-card"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3>Full Stack Developer Intern</h3>
                    <p className="company">Pantech Prolabs</p>
                    <p className="duration">Jul 2024 – Dec 2024</p>
                    <ul>
                        <li>Created clean and reusable UI components using HTML, CSS, and JavaScript.</li>
                        <li>Implemented animations and transitions to enhance user experience.</li>
                        <li>Assisted in debugging UI issues and refining cross-browser compatibility.</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
