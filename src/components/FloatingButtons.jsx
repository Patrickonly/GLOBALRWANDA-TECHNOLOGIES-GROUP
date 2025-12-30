import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/250788123456" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
        <span>Back to Top</span>
      </div>

      <style jsx>{`
        .floating-buttons {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          gap: 15px;
          z-index: 999;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 80px;
          right: 30px;
          width: auto;
          min-width: 55px;
          height: 55px;
          padding: 0 20px;
          border-radius: 30px;
          background: linear-gradient(135deg, var(--primary-blue), #1d4ed8);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          box-shadow: var(--shadow);
          transform: translateY(20px);
        }
        
        .scroll-to-top i {
          font-size: 18px;
        }
        
        .scroll-to-top span {
          white-space: nowrap;
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          animation: pulse 1s infinite;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 80px;
          left: 30px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #25d366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: var(--shadow);
          z-index: 999;
          transition: var(--transition);
          text-decoration: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
        }

        @media (max-width: 576px) {
          .scroll-to-top {
            bottom: 50px;
            right: 15px;
            width: auto;
            min-width: 44px;
            height: 44px;
            padding: 0 15px;
            font-size: 13px;
          }
          
          .scroll-to-top i {
            font-size: 16px;
          }
          
          .whatsapp-float {
            left: 15px;
            bottom: 50px;
            width: 44px;
            height: 44px;
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;