import React, { useEffect, useState } from 'react';

const Services = ({ darkMode }) => {
  const [showAll, setShowAll] = useState(true);

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

  const services = [
    {
      icon: 'fas fa-code',
      title: 'Website & Web App Development',
      description: 'Responsive corporate websites, custom web applications, progressive web apps (PWAs), content management systems, and API development with cutting-edge frameworks.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Integrated Systems Development',
      description: 'Customized enterprise management systems including Hotel Management, Stock & Inventory, Medical & Health Systems, Logistics & Fleet Management, and ERP solutions.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'IT Consultancy Services',
      description: 'Digital transformation strategy, system analysis and technology planning, IT infrastructure advisory, cybersecurity assessment, and technology roadmapping.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing Services',
      description: 'Search Engine Optimization (SEO), social media marketing, content marketing, online advertising campaigns, branding strategy, and digital growth consulting.'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Networking & Infrastructure',
      description: 'Network design and installation, LAN/WAN configuration, network security solutions, cloud infrastructure setup, maintenance and 24/7 technical support.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Development',
      description: 'Custom online stores and marketplaces, secure payment gateway integration, inventory and order management systems, and scalable e-commerce platforms.'
    }
  ];

  const displayedServices = services.slice(0, showAll ? services.length : 6);

  return (
    <section id="services" className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
      <div className="container">
        <h2 className="section-title fade-in">Our Services</h2>
        <div className="section-subtitle fade-in">Comprehensive digital solutions for modern businesses</div>
        
        <div className="services-grid">
          {displayedServices.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-icon"><i className={service.icon}></i></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          background-color: var(--dark-card);
          border-radius: 16px;
          padding: 40px 30px;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .light-mode .service-card {
          background-color: var(--light-card);
          border: 1px solid var(--light-gray);
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-lg);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-blue);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--white);
          font-size: 24px;
          transition: var(--transition);
        }

        .service-card:hover .service-icon {
          transform: rotateY(180deg);
        }

        .service-title {
          font-size: 22px;
          margin-bottom: 16px;
          color: var(--white);
          text-align: center;
        }

        .light-mode .service-title {
          color: var(--primary-dark-blue);
        }

        .service-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
        }

        .light-mode .service-description {
          color: var(--gray);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
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

export default Services;