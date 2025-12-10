import { useInView } from 'react-intersection-observer';
import '../styles/Portfolio.css';

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      image: '/images/Cleveroad.jpg',
      title: 'E-Commerce Website',
      description: 'Full-stack web development with React and Node.js'
    },
    {
      id: 2,
      image: '/images/Game Dashboard Design.jpg',
      title: 'Mobile Banking App',
      description: 'UI/UX design and React Native development'
    },
    {
      id: 3,
      image: '/images/cp.png',
      title: 'Portfolio Website',
      description: 'Responsive design with modern animations'
    },
    {
      id: 4,
      image: '/images/Task manager app.jpg',
      title: 'Task Management Tool',
      description: 'Collaborative platform with real-time updates'
    },
    {
      id: 5,
      image: '/images/WordPress dashboard design concept.jpg',
      title: 'Data Visualization Dashboard',
      description: 'Interactive charts and analytics using D3.js'
    },
    {
      id: 6,
      image: '/images/Dashboard - Social Media Analytics.jpg',
      title: 'Social Media Platform',
      description: 'Full-featured app with user authentication'
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
                  <a href="#" className="btn">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
