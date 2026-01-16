import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Future.css';

const Future = () => {
    const { t } = useTranslation();

    return (
        <section id="vision" className="future-section">
            <div className="future-container">
                <motion.div
                    className="future-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="future-title"
                        initial={{ y: 30 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('vision.title')}
                    </motion.h2>

                    <div className="future-grid">
                        <div className="future-item">
                            <h3>{t('vision.conv_title')}</h3>
                            <p>{t('vision.conv_desc')}</p>
                        </div>

                        <div className="future-item">
                            <h3>{t('vision.ethics_title')}</h3>
                            <p>{t('vision.ethics_desc')}</p>
                        </div>

                        <div className="future-item">
                            <h3>{t('vision.evo_title')}</h3>
                            <p>{t('vision.evo_desc')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Future;
