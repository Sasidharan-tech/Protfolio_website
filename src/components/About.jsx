import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

// Skills moved to dedicated Skills page for a focused presentation

  return (
    <section id="about" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I’m <strong>Sasidharan M</strong>, an aspiring Full-Stack Developer and M.Sc Computer Science student focused on building reliable, maintainable, and user-centered software. My work spans frontend interfaces, backend services, and data-driven tools.
            </p>

            <p>
              I develop production-minded web applications using modern JavaScript frameworks, Python backends, and relational/noSQL databases. I pay close attention to clean architecture, automated testing, and clear documentation to deliver solutions that are easy to maintain and scale.
            </p>

            <p>
              Areas of interest: <strong>Web Development, Machine Learning, Computer Vision,</strong> and <strong>DevOps basics</strong>. I value collaborative development, code reviews, and continuous learning through projects and research.
            </p>

            <p>
              Outside of development, I enjoy UI design, learning Japanese, and building small experiments to explore new ideas.
            </p>

            <div className="about-cta">
              <a href="#skills" className="btn btn-secondary">See My Skills</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
