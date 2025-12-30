import React, { useEffect } from 'react';

const VisionMission = ({ darkMode }) => {
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

  return (
    <section id="vision" className="section vision-mission">
      <div className="container">
        <h2 className="section-title fade-in">Vision & Mission</h2>
        <div className="section-subtitle fade-in">Our guiding principles for technological excellence</div>
        
        <div className="vm-content">
          <div className="vm-card fade-in">
            <div className="vm-icon"><i className="fas fa-eye"></i></div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">
              To become a leading African technology group with a strong global presence, delivering innovative, 
              secure, and impactful digital solutions that drive sustainable growth for businesses and communities. 
              We envision a future where African technology solutions set global standards for excellence, innovation, 
              and social impact.
            </p>
          </div>
          
          <div className="vm-card fade-in">
            <div className="vm-icon"><i className="fas fa-bullseye"></i></div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">
              To empower organizations across Africa and beyond through transformative technology by providing 
              high-quality IT services, customized software solutions, and strategic digital support that enhance 
              operational efficiency, competitiveness, and long-term success in the digital economy.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vision-mission {
          background-color: rgba(37, 99, 235, 0.05);
          position: relative;
          overflow: hidden;
        }

        .light-mode .vision-mission {
          background-color: rgba(10, 25, 47, 0.05);
        }

        .vm-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .vm-card {
          background-color: var(--dark-bg);
          border-radius: 16px;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(37, 99, 235, 0.2);
          transition: var(--transition);
        }

        .light-mode .vm-card {
          background-color: var(--white);
          border: 1px solid rgba(10, 25, 47, 0.1);
        }

        .vm-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: var(--shadow-lg);
        }

        .vm-icon {
          font-size: 48px;
          margin: 0 auto 24px;
          color: var(--primary-blue);
          transition: var(--transition);
          display: block;
          text-align: center;
        }

        .vm-card:hover .vm-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .vm-title {
          font-size: 28px;
          margin-bottom: 20px;
          color: var(--white);
          text-align: center;
        }

        .light-mode .vm-title {
          color: var(--primary-dark-blue);
        }

        .vm-text {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          text-align: left;
        }

        .light-mode .vm-text {
          color: var(--gray);
        }

        @media (max-width: 1024px) {
          .vm-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;