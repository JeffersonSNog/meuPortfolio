import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {t('hero.greeting')} <span className="highlight">Jefferson</span>
                    </motion.h2>

                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {t('hero.headline_1')} <br /> {t('hero.headline_2')} <span className="text-gradient">{t('hero.headline_3')}</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            {t('hero.cta_projects')} <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            {t('hero.cta_contact')}
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <div className="stat-item">
                            <Brain className="stat-icon" />
                            <span>{t('hero.stat_ai')}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <Code className="stat-icon" />
                            <span>{t('hero.stat_data')}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <Zap className="stat-icon" />
                            <span>{t('hero.stat_quantum')}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
