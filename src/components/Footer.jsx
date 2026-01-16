import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} {t('footer.text')}</p>
                <div className="footer-links">
                    <a href="#home">{t('navbar.home')}</a>
                    <a href="#projects">{t('navbar.projects')}</a>
                    <a href="#contact">{t('navbar.contact')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
