import { useInView } from 'react-intersection-observer';
import '../styles/Portfolio.css';

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      image: '/images/bh.png',
      title: 'Book Heaven',
      description: 'Book Heaven is a web-based application for exploring and managing book collections, built using Python, Flask, and PostgreSQL. It features a simple, responsive interface with database-driven content management.',
      link: 'https://github.com/Sasidharan-tech/Book-Heaven.git'
    },
    {
      id: 2,
      image: '/images/hg.png',
      title: 'Handless Gestures',
      description: 'Handless Gestures is a machine learning–based human–computer interaction project that allows users to control computer operations without using a physical mouse or keyboard.',
      link: 'https://github.com/Sasidharan-tech/control_pc.git'
    },
    {
      id: 3,
      image: '/images/pf.png',
      title: 'Portfolio Website',
      description: 'Responsive design with modern animations',
      link: 'https://github.com/Sasidharan-tech/sasi-tech.git'
    },
    {
      id: 4,
      image: '/images/Todo.png',
      title: 'Real-time Collaborative Todo App',
      description: 'Built with MERN stack application enabling multiple users to manage tasks together',
      link: 'https://github.com/Sasidharan-tech/Fullstack-ArttifaiTech_batch_8.git'
    },
    {
      id: 5,
      image: '/images/vt.png',
      title: 'VisionTagger',
      description: 'AI-powered image labeling system using Google Gemini with terminal aesthetics',
      link: 'https://github.com/Sasidharan-tech/VisionTagger.git'
    },
    {
      id: 6,
      image: '/images/Dashboard - Social Media Analytics.jpg',
      title: 'Social Media Platform',
      description: 'Full-featured app with user authentication',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="portfolio-item" style={{ '--delay': index }}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
