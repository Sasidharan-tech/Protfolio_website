import { useEffect, useState, useRef } from 'react';
import '../styles/Hero.css';

export default function Hero() {

  // Updated professions
  const professions = [' Full-Stack Developer', ' Python Developer', ' Cloud Enthusiast'];
  
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentProfession = professions[professionIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentProfession.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayText(currentProfession.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentProfession.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setProfessionIndex((professionIndex + 1) % professions.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, professionIndex, professions]);

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mouse tilt for profile image (subtle). Respects reduced-motion: we won't enable heavy motion if user prefers reduced.
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const x = (px - 0.5) * 12; // rotateY degrees
    const y = (py - 0.5) * -10; // rotateX degrees
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="hero" id="home" ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero-left">
        <div
          className="profile-wrap"
          style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        >
          <img src="/images/sasi.jpg" alt="Profile" className="profile-img" />
          <div className="img-glow" aria-hidden />
        </div>
        <div className="decor-blobs" aria-hidden>
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
      </div>

      <div className="hero-right">

        <p className="intro">
          Hi I'm 
          <span className="typing-container">
            <span id="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </span>
        </p>

        <h1 className="hero-name">Sasidharan M</h1>

        <p className="hero-description">
          I’m a passionate Full-Stack Developer specializing in Python, React, and modern web technologies.
          I focus on building clean, scalable, and user-friendly applications that solve real-world problems.
          I enjoy turning ideas into functional products using efficient code and thoughtful design.
          <br />
          I’m currently pursuing my M.Sc. in Computer Science, exploring web development, AI, machine learning,
          data analytics, cloud technologies, and system design. I constantly work on projects to expand my
          skills and gain real-world experience.
          <br />
          I’m actively seeking opportunities to contribute, learn, and grow as a developer while building
          meaningful and impactful solutions.
        </p>

       <div className="hero-buttons">
  <a
    href="https://drive.google.com/uc?export=download&id=1_Cm2Gtha6GXhyP24rfX4Fn1k7ZEmpaI7"
    className="btn"
  >
    Download CV
  </a>

  <a
    href="#contact"
    className="btn"
    onClick={(e) => handleSmoothScroll(e, '#contact')}
  >
    Contact
  </a>
</div>


        <div className="social-links">
          <a href="https://www.linkedin.com/in/sasidharan-m" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/sasidharan-tech" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>

      </div>
    </section>
  );
}
