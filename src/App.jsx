import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Future from './components/Future';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { t } = useTranslation();

  // Update document title when language changes
  useEffect(() => {
    document.title = t('meta.title');
  }, [t]);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Interests />
        <Projects />
        <Future />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
