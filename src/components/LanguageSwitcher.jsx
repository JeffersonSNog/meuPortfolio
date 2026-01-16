import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.resolvedLanguage === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            className="language-switcher"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Switch Language"
        >
            <Globe size={20} />
            <span className="lang-text">{i18n.resolvedLanguage === 'en' ? 'PT' : 'EN'}</span>
        </motion.button>
    );
};

export default LanguageSwitcher;
