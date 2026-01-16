import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">{t('about.title')}</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                        <p>{t('about.p3')}</p>
                        <div className="about-tags">
                            <span>{t('about.tag_innovation')}</span>
                            <span>{t('about.tag_problem_solving')}</span>
                            <span>{t('about.tag_learning')}</span>
                            <span>{t('about.tag_future')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Abstract Tech Visual */}
                        <div className="tech-cube">
                            <div className="cube-face front"></div>
                            <div className="cube-face back"></div>
                            <div className="cube-face right"></div>
                            <div className="cube-face left"></div>
                            <div className="cube-face top"></div>
                            <div className="cube-face bottom"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
