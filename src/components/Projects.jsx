import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('All');

    const projectsData = [
        {
            id: 1,
            title: t('projects.p1_title'),
            category: 'ML',
            description: t('projects.p1_desc'),
            tech: ['FastAPI', 'MLflow', 'Docker', 'Scikit-learn', 'Pandas'],
            links: { github: 'https://github.com/JeffersonSNog/predictops-pipeline' }
        }
    ];

    const categories = [t('projects.cat_all'), t('projects.cat_ai'), t('projects.cat_ml'), t('projects.cat_data'), t('projects.cat_quantum')];

    // Map 'All' back to English 'All' for filtering logic if needed, or better: 
    // Simplify filtering: Use keys or fixed codes for categories in data, and translate labels for UI.
    // For now, to minimize refactor, I will keep data categories as English keys (Quantum, AI, etc) and map UI labels.
    // But wait, the filter state is comparing with project.category. 
    // So categories array should have objects { label: t(...), value: 'AI' } or similar.
    // Let's adjust:

    const filterCategories = [
        { label: t('projects.cat_all'), value: 'All' },
        { label: t('projects.cat_ai'), value: 'AI' },
        { label: t('projects.cat_ml'), value: 'ML' },
        { label: t('projects.cat_data'), value: 'Data' },
        { label: t('projects.cat_quantum'), value: 'Quantum' }
    ];

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
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="filter-container">
                    {filterCategories.map(cat => (
                        <button
                            key={cat.value}
                            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                            onClick={() => setFilter(cat.value)}
                        >
                            {cat.label}
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
                                    <div className="project-category">{t(`projects.cat_${project.category.toLowerCase()}`)}</div>
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
