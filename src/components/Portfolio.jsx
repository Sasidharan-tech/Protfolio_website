import { useInView } from 'react-intersection-observer';
import '../styles/Portfolio.css';

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.06 });

  const projects = [
    {
      id: 1,
      image: '/images/bh.png',
      title: 'Book Heaven',
      description: 'A book collection manager with search, tagging and user accounts.',
      tech: ['Flask', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/Sasidharan-tech/Book-Heaven.git'
    },
    {
      id: 2,
      image: '/images/hg.png',
      title: 'Handless Gestures',
      description: 'ML-based HCI project enabling control without mouse or keyboard.',
      tech: ['Python', 'OpenCV', 'TensorFlow'],
      link: 'https://github.com/Sasidharan-tech/control_pc.git'
    },
    {
      id: 3,
      image: '/images/pf.png',
      title: 'Personal Portfolio',
      description: 'Responsive portfolio site showcasing projects and resume.',
      tech: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/Sasidharan-tech/sasi-tech.git'
    },
    {
      id: 4,
      image: '/images/Todo.png',
      title: 'Collaborative Todo',
      description: 'Real-time task app with presence and sync between users.',
      tech: ['MongoDB', 'Express', 'Socket.io'],
      link: 'https://github.com/Sasidharan-tech/Fullstack-ArttifaiTech_batch_8.git'
    },
    {
      id: 5,
      image: '/images/vt.png',
      title: 'VisionTagger',
      description: 'AI-assisted image labeling and dataset tooling.',
      tech: ['ML', 'API', 'CLI'],
      link: 'https://github.com/Sasidharan-tech/VisionTagger.git'
    },
    {
      id: 6,
      image: '/images/e-com.png',
      title: 'E-Commerce Dashboard',
      description: 'Analytics dashboard for sales and inventory insights.',
      tech: ['Django', 'Chart.js', 'Postgres'],
      link: 'https://github.com/Sasidharan-tech/E-Commerce-Dashboard.git'
    }
  ];

  return (
    <section id="portfolio" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-sub">Academic and personal projects highlighting full-stack, ML and tooling work.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="portfolio-item" style={{ ['--delay']: index }}>
              <figure className="portfolio-figure">
                <img src={project.image} alt={project.title} className="portfolio-thumb" />
                <figcaption className="portfolio-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="tech-list">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                    <div className="overlay-actions">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
