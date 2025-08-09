import React from 'react';
import './Projects.css';
import Netflix_Clone from '../../assets/netflix-clone.png';
import Edusity from '../../assets/Edusity.png';
import FoodDelivery from '../../assets/food-delivery.png';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Netflix Clone",
        description: "A responsive movie streaming platform built with ReactJS and Firebase for authentication and Firestore database.",
        image: Netflix_Clone,
        link: "cineflix001.vercel.app"
    },
    {
        title: "Edusity",
        description: "An educational web platform built using HTML, CSS, and JavaScript. It features course listing, user login, and progress tracking.",
        image: Edusity,
        link: "https://edusity-sandy-ten.vercel.app/"
    },
    {
        title: "Food Delivery App",
        description: "A food delivery web app with real-time cart updates, secure login, and tracking functionality. Built with React and Firebase.",
        image: FoodDelivery,
        link: "https://food-delivery-delta-one.vercel.app/"
    }
];

const Projects = () => {
    return (
        <div className="projects-section" id='projects'>
            <motion.h3
                className="section-title-text"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h3>
            <motion.h2
                className="section-subtitle-text"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                My Recent Work
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
