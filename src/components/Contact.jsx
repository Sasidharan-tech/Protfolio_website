import { useInView } from 'react-intersection-observer';
import '../styles/Contact.css';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section id="contact" className={`section ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>sasidharan.m2004@gmail.com</p>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91 63823 79827</p>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Mettur, Salem, Tamil Nadu, India</p>
            </div>

            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <p>Available: Mon–Sat, 9 AM – 7 PM</p>
            </div>

            {/* Social Links */}
            <div className="social-links-contact">
              <a href="https://www.linkedin.com/in/sasidharan-m" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/sasidharan-tech" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/916382379827" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}
