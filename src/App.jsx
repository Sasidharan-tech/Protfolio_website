import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}
