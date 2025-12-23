import { motion } from 'framer-motion';
import './Future.css';

const Future = () => {
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
                        Vision of the Future
                    </motion.h2>

                    <div className="future-grid">
                        <div className="future-item">
                            <h3>The Convergence</h3>
                            <p>
                                I believe the next leap in human evolution will come from the convergence of Quantum Computing and Artificial Intelligence.
                                Quantum algorithms will unlock the computational power needed to train the next generation of AI models.
                            </p>
                        </div>

                        <div className="future-item">
                            <h3>Ethical Innovation</h3>
                            <p>
                                As we build more powerful systems, our responsibility grows. My goal is to develop technologies that are not only
                                efficient but also transparent, fair, and beneficial to humanity as a whole.
                            </p>
                        </div>

                        <div className="future-item">
                            <h3>Continuous Evolution</h3>
                            <p>
                                Technology is a river that never stops. I am committed to staying at the bleeding edge,
                                constantly learning and adapting to shape the digital landscape of tomorrow.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Future;
