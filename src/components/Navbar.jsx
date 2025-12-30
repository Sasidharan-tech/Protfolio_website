import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Sasi</span>Dharan
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            onClick={handleClick}
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={handleClick}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={handleClick}
            className={activeLink === 'portfolio' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={handleClick}
            className={activeLink === 'resume' ? 'active' : ''}
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={handleClick}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
