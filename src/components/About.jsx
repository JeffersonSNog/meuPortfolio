import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
                    <h2 className="section-title">About Me</h2>
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
                        <p>
                            I am a technology enthusiast driven by scientific curiosity and a relentless desire to solve complex problems.
                            My journey is defined by a deep focus on innovation and continuous learning, exploring the frontiers of what's possible with code and data.
                        </p>
                        <p>
                            From architecting scalable software to training neural networks, I believe in the power of technology to improve lives and shape the future.
                            I approach every challenge with a strategic mindset, blending creativity with engineering precision.
                        </p>
                        <div className="about-tags">
                            <span>Innovation</span>
                            <span>Problem Solving</span>
                            <span>Continuous Learning</span>
                            <span>Future Tech</span>
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
