import React, { useEffect } from 'react';

const Footer = ({ darkMode }) => {
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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = {
    quickLinks: [
      { text: 'Home', href: '#home' },
      { text: 'About Company', href: '#about' },
      { text: 'Our Services', href: '#services' },
      { text: 'Vision & Mission', href: '#vision' },
      { text: 'Company Structure', href: '#structure' }
    ],
    services: [
      { text: 'Web Development', href: '#services' },
      { text: 'IT Consultancy', href: '#services' },
      { text: 'Digital Marketing', href: '#services' },
      { text: 'E-Commerce', href: '#services' },
      { text: 'Networking Services', href: '#services' }
    ],
    contact: [
      { text: 'Get In Touch', href: '#contact' },
      { text: 'Technical Support', href: '#contact' },
      { text: 'Career Opportunities', href: '#contact' },
      { text: 'Partnership Inquiries', href: '#contact' },
      { text: 'Request Quote', href: '#contact' }
    ]
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.jpg" alt="GlobalRwanda Technologies Group" style={{ height: '64px', width: '64px', borderRadius: '6px', objectFit: 'cover' }} />
              <div>
                <div className="footer-logo-text">GLOBALRWANDA</div>
                <div className="footer-logo-subtitle">TECHNOLOGIES GROUP</div>
              </div>
            </div>

            <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
              Delivering cutting-edge digital solutions from Rwanda to the world. Empowering businesses through technology innovation, strategic consulting, and transformative digital solutions.
            </p>
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '10px', color: 'var(--white)' }}>Connect With Us</h4>
              <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><i className="fab fa-linkedin"></i></a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><i className="fab fa-facebook"></i></a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><i className="fab fa-instagram"></i></a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.text}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.text}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                {footerLinks.contact.map((link, index) => (
                  <li key={index}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GLOBALRWANDA TECHNOLOGIES GROUP. All rights reserved.</p>
          <p style={{ marginTop: '10px', fontSize: '12px' }}>Designed and Developed with ❤️ by GLOBALRWANDA TECHNOLOGIES GROUP</p>
        </div>
      </div>

      <style jsx>{`
        footer {
          background: var(--primary-dark-blue);
          color: var(--white);
          padding: 60px 0 30px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--primary-blue);
        }

        .footer-logo-subtitle {
          font-size: 14px;
          color: var(--primary-blue);
          letter-spacing: 1px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-column h3 {
          font-size: 18px;
          margin-bottom: 24px;
          color: var(--white);
          position: relative;
          display: inline-block;
        }

        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(to right, var(--primary-blue), #1d4ed8);
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column li {
          margin-bottom: 12px;
        }

        .footer-column a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: var(--transition);
          display: inline-block;
        }

        .footer-column a:hover {
          color: var(--primary-blue);
          transform: translateX(5px);
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;