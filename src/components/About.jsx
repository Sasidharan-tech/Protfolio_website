import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

 const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node-js' },

  { name: 'Python', icon: 'fab fa-python' },
  { name: 'FastAPI', icon: 'fas fa-bolt' },  // No official icon → using bolt
  { name: 'Django', icon: 'fas fa-leaf' },   // No official icon → using leaf
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-leaf' },  // Leaf icon suits MongoDB

  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'Figma', icon: 'fab fa-figma' },
  { name: 'Tailwind CSS', icon: 'fas fa-wind' }, // Tailwind-like icon
  { name: 'Cloud Basics', icon: 'fas fa-cloud' }
];

  return (
    <section id="about" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              I’m <strong>Sasidharan M</strong>, a passionate <strong>Full-Stack Developer</strong> 
              and <strong>M.Sc Computer Science</strong> student with a strong interest in building 
              clean, modern, and scalable applications. I specialize in creating real-world solutions 
              using Python, React, and backend technologies.
            </p>

            <p>
              I enjoy working across the full stack—designing intuitive user interfaces, developing 
              REST APIs, managing databases, and exploring cloud platforms. I am also deeply interested 
              in <strong>AI, Machine Learning, and Computer Vision</strong>, and I actively build projects 
              to improve my understanding in these domains.
            </p>

            <p>
              My focus is on writing high-quality code, solving meaningful problems, and learning 
              continuously. I believe in consistency, curiosity, and staying updated with new 
              technologies to grow as a developer.
            </p>

            <p>
              Outside of coding, I enjoy designing UI layouts, learning Japanese, improving my 
              communication skills, and exploring new ideas through personal projects and challenges.
            </p>

            {/* Skills */}
            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
  {skills.map((skill, index) => (
    <span key={index} className="skill-tag" style={{ '--delay': index }}>
      <i className={skill.icon}></i> {skill.name}
    </span>
  ))}
</div>

            </div>

          </div>

          <div className="about-image">
            <img src="/images/me.jpg" alt="About Image" className="about-img" />
          </div>

        </div>
      </div>
    </section>
  );
}
