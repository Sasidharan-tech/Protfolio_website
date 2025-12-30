import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Tailwind', icon: 'fas fa-wind' }
      ]
    },
    {
      title: 'Backend / APIs',
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Django', icon: 'fas fa-leaf' },
        { name: 'FastAPI', icon: 'fas fa-bolt' },
        { name: 'Node.js', icon: 'fab fa-node-js' }
      ]
    },
    {
      title: 'Data & Tools',
      skills: [
        { name: 'Postgres', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-leaf' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' }
      ]
    }
  ];

  return (
    <section id="skills" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Technical skills organized by area — animated to highlight proficiency and focus.</p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="group-title">{group.title}</h3>
              <div className="group-list">
                {group.skills.map((s, i) => (
                  <div
                    key={s.name}
                    className={`skill-card ${inView ? 'visible' : ''}`}
                    style={{ ['--i']: i }}
                    title={s.name}
                  >
                    <div className="skill-icon" aria-hidden>
                      <i className={s.icon}></i>
                    </div>
                    <div className="skill-name">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
