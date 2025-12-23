import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Atom } from 'lucide-react';
import './Interests.css';

const interests = [
    {
        icon: <Brain size={40} />,
        title: 'Artificial Intelligence',
        desc: 'Creating intelligent systems that adapt, learn, and evolve to solve real-world challenges.',
        color: 'var(--primary)'
    },
    {
        icon: <Database size={40} />,
        title: 'Data Science',
        desc: 'Extracting meaningful insights from complex datasets to drive strategic decision making.',
        color: 'var(--secondary)'
    },
    {
        icon: <Cpu size={40} />,
        title: 'Machine Learning',
        desc: 'Building robust models and algorithms that uncover patterns often invisible to the human eye.',
        color: 'var(--accent-green)'
    },
    {
        icon: <Atom size={40} />,
        title: 'Quantum Computing',
        desc: 'Exploring the future of computation with qubits and superposition for exponential power.',
        color: '#ff0055'
    }
];

const Interests = () => {
    return (
        <section id="interests" className="interests-section">
            <div className="interests-container">
                <motion.div
                    className="interests-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Areas of Interest</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="interests-grid">
                    {interests.map((item, index) => (
                        <motion.div
                            key={index}
                            className="interest-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: `0 10px 30px -10px ${item.color}` }}
                        >
                            <div className="card-icon" style={{ color: item.color }}>
                                {item.icon}
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
