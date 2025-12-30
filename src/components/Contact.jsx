import React, { useState, useEffect } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We have received your message and will contact you at ${formData.email} within 24 hours.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      content: 'KG 7 Ave, Kigali, Rwanda<br>Headquarters with global operations'
    },
    {
      icon: 'fas fa-phone',
      title: 'Contact Numbers',
      content: '+250 788 123 456<br>+250 788 987 654 (Support)'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Addresses',
      content: 'info@globalrwandatech.com<br>support@globalrwandatech.com'
    },
    {
      icon: 'fas fa-globe',
      title: 'Market Presence',
      content: 'Headquartered in Rwanda with operations across East Africa and serving international clients with world-class technology solutions tailored to local and global markets.'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="section-subtitle fade-in">Let's build something amazing together</div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item fade-in">
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-form fade-in">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="How can we help you with your digital transformation? Describe your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: rgba(37, 99, 235, 0.05);
        }

        .light-mode .contact-section {
          background-color: rgba(10, 25, 47, 0.05);
        }

        .contact-header {
          text-align: center;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 20px;
          border-radius: 12px;
          transition: var(--transition);
        }

        .contact-item:hover {
          background-color: rgba(37, 99, 235, 0.05);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background-color: rgba(37, 99, 235, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-details h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: var(--white);
        }

        .light-mode .contact-details h3 {
          color: var(--primary-dark-blue);
        }

        .contact-details p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: justify;
        }

        .light-mode .contact-details p {
          color: var(--gray);
        }

        .contact-form {
          background-color: var(--dark-card);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .light-mode .contact-form {
          background-color: var(--light-card);
          border: 1px solid var(--light-gray);
        }

        .contact-form:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--white);
        }

        .light-mode .form-label {
          color: var(--primary-dark-blue);
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--dark-text);
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          transition: var(--transition);
        }

        .light-mode .form-input, .light-mode .form-textarea {
          border: 1px solid var(--light-gray);
          background-color: var(--white);
          color: var(--light-text);
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
          transform: translateY(-2px);
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;