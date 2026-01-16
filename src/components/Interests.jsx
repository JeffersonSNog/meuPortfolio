import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Atom } from 'lucide-react';
import './Interests.css';

const Interests = () => {
    const { t } = useTranslation();

    const interests = [
        {
            icon: <Brain size={40} />,
            title: t('interests.ai_title'),
            desc: t('interests.ai_desc'),
            color: 'var(--primary)'
        },
        {
            icon: <Database size={40} />,
            title: t('interests.data_title'),
            desc: t('interests.data_desc'),
            color: 'var(--secondary)'
        },
        {
            icon: <Cpu size={40} />,
            title: t('interests.ml_title'),
            desc: t('interests.ml_desc'),
            color: 'var(--accent-green)'
        },
        {
            icon: <Atom size={40} />,
            title: t('interests.quantum_title'),
            desc: t('interests.quantum_desc'),
            color: '#ff0055'
        }
    ];

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
                    <h2 className="section-title">{t('interests.title')}</h2>
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
