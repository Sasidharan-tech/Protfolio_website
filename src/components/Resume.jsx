import { useInView } from 'react-intersection-observer';
import '../styles/Resume.css';

export default function Resume() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="resume" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          
          {/* Left Section */}
          <div className="resume-left">
            <h3>Experience</h3>

            <div className="experience-item">
              <h4>Full Stack Developer Intern</h4>
              <p className="company">ArtifAI Tech</p>
              <p className="date">2024</p>
              <p>
                Worked on building interactive user interfaces, backend APIs, database
                management, and automation features. Gained hands-on experience with 
                Python, FastAPI, React, MongoDB, and cloud-based development workflows.
              </p>
            </div>

            <div className="experience-item">
              <h4>Freelance Web Developer</h4>
              <p className="company">Self-employed</p>
              <p className="date">2023 – Present</p>
              <p>
                Designing and developing responsive, modern, and animated websites using 
                HTML, CSS, JavaScript, and React. Focused on clean UI/UX, accessibility,
                and performance.
              </p>
            </div>

            <h3>Certifications</h3>
            <ul className="certifications">
              <li>The Joy of Computing using Python – NPTEL </li>
              <li>Full Stack Development  – Intern Certification</li>
              <li>Certificate of Appreciation – National Science Day 2025</li>
              <li>Hands-On Training in Internet of Things - IoT </li>
              <li>Git & GitHub Essentials</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="resume-right">
            <h3>Education</h3>

            <div className="education-item">
              <h4>M.Sc Computer Science</h4>
              <p className="university">Periyar University, Salem</p>
              <p className="date">2024 – Present</p>
              <p>
                Currently pursuing Master’s degree with focus on algorithms, 
                full-stack development, networking, AI/ML, and cloud technologies.
              </p>
            </div>

            <div className="education-item">
              <h4>B.Sc Computer Science</h4>
              <p className="university">Govt arts & Science clg, Mettur</p>
              <p className="date">2021 – 2024</p>
              <p>
                Completed undergraduate studies with strong foundations in programming,
                databases, software engineering, and mathematics.
              </p>
            </div>

            <div className="education-item">
              <h4>Higher Secondary Education</h4>
              <p className="university">Vaidheeswara Higher Secondary School</p>
              <p className="date">2020 – 2021</p>
              <p>
                Completed HSC in Computer Science stream with excellent performance 
                in mathematics and computer fundamentals.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
