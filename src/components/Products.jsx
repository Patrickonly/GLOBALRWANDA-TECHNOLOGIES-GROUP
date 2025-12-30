import React, { useEffect, useState } from 'react';

const Products = ({ darkMode }) => {
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

  const products = [
    {
      tag: 'S-SMS',
      title: 'Smart Stock Management System',
      description: 'Comprehensive inventory management solution with real-time tracking, automated reordering, and detailed analytics to optimize your stock operations.',
      features: ['Real-time Inventory', 'Auto Reordering', 'Analytics Dashboard', 'Multi-location Support']
    },
    {
      tag: 'SR-HMS',
      title: 'Smart Restaurant & Hotel Management System',
      description: 'All-in-one hospitality management platform covering reservations, POS, room management, billing, and customer relationship management.',
      features: ['Reservation System', 'POS Integration', 'Room Management', 'Guest CRM']
    },
    {
      tag: 'SHMS',
      title: 'Smart Hospital Management System',
      description: 'Integrated healthcare management solution for patient records, appointments, billing, pharmacy, and laboratory operations.',
      features: ['EMR System', 'Appointment Scheduling', 'Pharmacy Management', 'Lab Integration']
    },
    {
      tag: 'S-MMS',
      title: 'Smart Mining Management System',
      description: 'Specialized mining operations software for production tracking, equipment management, safety compliance, and resource optimization.',
      features: ['Production Tracking', 'Equipment Management', 'Safety Compliance', 'Resource Planning']
    }
  ];

  const displayedProducts = products.slice(0, showAll ? products.length : 3);

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

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Our Products</h2>
        <div className="section-subtitle fade-in">Smart Management Systems</div>
        <p className="hero-description" style={{ textAlign: 'center', maxWidth: '800px' }}>
          Industry-specific management systems designed to streamline operations, boost productivity, and drive business growth across various sectors.
        </p>
        
        <div className="products-grid">
          {displayedProducts.map((product, index) => (
            <div key={index} className="product-card fade-in">
              <div className="product-tag">{product.tag}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="product-btn" onClick={(e) => handleNavClick(e, '#contact')}>Learn More</a>
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
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .product-card {
          background-color: var(--dark-card);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .light-mode .product-card {
          background-color: var(--light-card);
          border: 1px solid var(--light-gray);
        }

        .product-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-lg);
        }

        .product-tag {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: var(--white);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .product-title {
          font-size: 22px;
          margin-bottom: 16px;
          color: var(--white);
        }

        .light-mode .product-title {
          color: var(--primary-dark-blue);
        }

        .product-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
          margin-bottom: 24px;
        }

        .light-mode .product-description {
          color: var(--gray);
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin-bottom: 24px;
          text-align: left;
        }

        .product-features li {
          padding: 10px 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .light-mode .product-features li {
          color: var(--light-text);
          border-bottom: 1px solid var(--light-gray);
        }

        .product-features li:last-child {
          border-bottom: none;
        }

        .product-features li i {
          color: var(--primary-green);
          font-size: 16px;
        }

        .product-btn {
          display: inline-block;
          padding: 12px 30px;
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: var(--white);
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: var(--transition);
          margin-top: 10px;
        }

        .product-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
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

export default Products;