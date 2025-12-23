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
