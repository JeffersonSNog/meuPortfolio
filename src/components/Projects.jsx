import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Quantum Key Simulator',
        category: 'Quantum',
        description: 'A visual simulator for BB84 quantum key distribution protocol showing qubit polarization states.',
        tech: ['Python', 'Qiskit', 'React', 'WebSockets'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 2,
        title: 'Neural Style Transfer API',
        category: 'AI',
        description: 'REST API that applies artistic styles to images using deep convolutional neural networks.',
        tech: ['TensorFlow', 'FastAPI', 'Docker', 'AWS'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 3,
        title: 'Predictive Market Analytics',
        category: 'Data',
        description: 'Time-series forecasting platform for financial markets using LSTM networks.',
        tech: ['Pandas', 'PyTorch', 'D3.js', 'Flask'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 4,
        title: 'Autonomous Drone Nav',
        category: 'AI',
        description: 'Reinforcement learning environment for training drones to navigate complex obstacle courses.',
        tech: ['Unity', 'C#', 'ML-Agents', 'Python'],
        links: { github: '#', video: '#' }
    },
    {
        id: 5,
        title: 'Customer Churn AI',
        category: 'ML',
        description: 'End-to-end machine learning pipeline for predicting user churn with 94% accuracy.',
        tech: ['Scikit-learn', 'XGBoost', 'Streamlit'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 6,
        title: 'Grover Search Visualizer',
        category: 'Quantum',
        description: 'Interactive educational tool demonstrating Grover\'s search algorithm on a quantum computer.',
        tech: ['React', 'D3.js', 'Quantumjs'],
        links: { github: '#', demo: '#' }
    }
];

const categories = ['All', 'AI', 'ML', 'Data', 'Quantum'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="project-card"
                            >
                                <div className="project-content">
                                    <div className="project-category">{project.category}</div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.links.github && (
                                            <a href={project.links.github} className="icon-link"><Github size={20} /></a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} className="icon-link"><ExternalLink size={20} /></a>
                                        )}
                                        {project.links.video && (
                                            <a href={project.links.video} className="icon-link"><Play size={20} /></a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
