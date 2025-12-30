import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './pages/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <div className="bg-graphics" aria-hidden />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}
