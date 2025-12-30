import React, { useEffect, useState } from 'react';

const CoreValues = ({ darkMode }) => {
  const [showAll, setShowAll] = useState(false);

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

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We embrace creativity, curiosity, and modern technologies to solve real-world problems and pioneer new approaches in the digital landscape.'
    },
    {
      icon: 'fas fa-award',
      title: 'Quality & Reliability',
      description: 'We deliver solutions that are secure, scalable, dependable, and built to the highest standards of excellence and performance.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Client-Centered',
      description: 'We prioritize our clients\' needs, challenges, and long-term goals, building partnerships based on trust, understanding, and mutual success.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity & Transparency',
      description: 'We operate with honesty, accountability, and professionalism in all our interactions, maintaining clear communication and ethical practices.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Continuous Improvement',
      description: 'We invest in learning, growth, and technological advancement, constantly refining our skills and solutions to stay ahead of industry trends.'
    }
  ];

  const displayedValues = values.slice(0, showAll ? values.length : 3);

  return (
    <section id="values" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Our Core Values</h2>
        <div className="section-subtitle fade-in">The foundation of everything we do</div>
        
        <div className="values-grid">
          {displayedValues.map((value, index) => (
            <div key={index} className="value-card fade-in">
              <div className="value-icon"><i className={value.icon}></i></div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-text">{value.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={() => setShowAll(!showAll)} className="view-more-btn">
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          background-color: var(--dark-card);
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .light-mode .value-card {
          background-color: var(--light-card);
          border: 1px solid var(--light-gray);
        }

        .value-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-lg);
        }

        .value-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 24px;
          background-color: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          font-size: 28px;
          transition: var(--transition);
        }

        .value-card:hover .value-icon {
          background-color: var(--primary-blue);
          color: var(--white);
          transform: rotate(360deg);
        }

        .value-title {
          font-size: 20px;
          margin-bottom: 16px;
          color: var(--white);
        }

        .light-mode .value-title {
          color: var(--primary-dark-blue);
        }

        .value-text {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
        }

        .light-mode .value-text {
          color: var(--gray);
        }

        .view-more-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: var(--white);
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          font-size: 16px;
        }

        .view-more-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
        }
      `}</style>
    </section>
  );
};

export default CoreValues;