import React, { useEffect, useState } from 'react';

const Structure = ({ darkMode }) => {
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

  const structureItems = [
    {
      icon: 'fas fa-users-cog',
      title: 'Executive Management',
      description: 'Strategic leadership, corporate governance, business development, and overall direction of the company\'s vision and operations.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Software & Systems Development Department',
      description: 'Specialized teams for web and mobile application development, integrated systems development, and custom software solutions.'
    },
    {
      icon: 'fas fa-headset',
      title: 'IT Consultancy & Solutions Department',
      description: 'Technology advisory services, system analysis, implementation support, and strategic IT planning for diverse business needs.'
    },
    {
      icon: 'fas fa-server',
      title: 'Networking & Infrastructure Department',
      description: 'Network design, installation, maintenance, cybersecurity implementation, and infrastructure management for optimal performance.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing & E-Commerce Department',
      description: 'Online marketing strategies, e-commerce platform development, digital branding, and growth hacking for online businesses.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Operations & Support',
      description: 'Project management, quality assurance, customer support, and administrative functions ensuring smooth business operations.'
    }
  ];

  const displayedItems = structureItems.slice(0, showAll ? structureItems.length : 3);

  return (
    <section id="structure" className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
      <div className="container">
        <h2 className="section-title fade-in">Company Structure</h2>
        <div className="section-subtitle fade-in">Organized for excellence and operational efficiency</div>
        
        <div className="structure-container">
          {displayedItems.map((item, index) => (
            <div key={index} className="structure-item fade-in">
              <div className="structure-icon"><i className={item.icon}></i></div>
              <div className="structure-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
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
        .structure-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .structure-item {
          display: flex;
          margin-bottom: 30px;
          background-color: var(--dark-card);
          border-radius: 16px;
          padding: 30px;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          align-items: center;
        }

        .light-mode .structure-item {
          background-color: var(--light-card);
          border: 1px solid var(--light-gray);
        }

        .structure-item:hover {
          transform: translateX(10px) scale(1.02);
          border-color: var(--primary-blue);
        }

        .structure-icon {
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
          margin-right: 24px;
          transition: var(--transition);
        }

        .structure-item:hover .structure-icon {
          background-color: var(--primary-blue);
          color: var(--white);
          transform: rotate(15deg);
        }

        .structure-content h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--white);
        }

        .light-mode .structure-content h3 {
          color: var(--primary-dark-blue);
        }

        .structure-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: justify;
        }

        .light-mode .structure-content p {
          color: var(--gray);
        }

        @media (max-width: 768px) {
          .structure-item {
            flex-direction: column;
            text-align: center;
          }
          
          .structure-icon {
            margin-right: 0;
            margin-bottom: 20px;
          }
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

export default Structure;