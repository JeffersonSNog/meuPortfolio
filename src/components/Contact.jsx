import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:jeffersonsnpro@outlook.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        alert(t('contact.alert_success'));
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>{t('contact.connect_title')}</h3>
                        <p>{t('contact.connect_desc')}</p>

                        <div className="contact-links">
                            <a href="mailto:jeffersonsnpro@outlook.com" className="contact-link">
                                <Mail size={24} />
                                <span>jeffersonsnpro@outlook.com</span>
                            </a>
                            <a href="https://github.com/JeffersonSNog" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <Github size={24} />
                                <span>github.com/JeffersonSNog</span>
                            </a>
                            <a href="https://www.linkedin.com/in/jeffersonsnogueira" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={24} />
                                <span>linkedin.com/in/jeffersonsnogueira</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('contact.form_name')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={t('contact.form_email')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder={t('contact.form_message')}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            {t('contact.form_send')} <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
