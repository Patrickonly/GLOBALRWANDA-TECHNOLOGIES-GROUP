import React, { useState, useEffect } from 'react';

const Hero = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    { id: 1, class: 'slide-1', title: 'Innovation & Technology' },
    { id: 2, class: 'slide-2', title: 'Cybersecurity Solutions' },
    { id: 3, class: 'slide-3', title: 'Digital Transformation' },
    { id: 4, class: 'slide-4', title: 'Data Analytics' },
    { id: 5, class: 'slide-5', title: 'Connected Solutions' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

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
    <section id="home" className="hero">
      <div className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${slide.class} ${index === currentSlide ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-subtitle">Rwanda's Leading Tech Innovation Company</div>
          <h1 className="hero-title">Building Technology <span>Without Limits</span></h1>
          <p className="hero-description">
            GLOBALRWANDA TECHNOLOGIES GROUP delivers cutting-edge digital solutions from Rwanda to the world. 
            We transform businesses through innovative software, web development, AI integration, and comprehensive 
            IT consulting services for the modern digital era.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
              <i className="fas fa-rocket"></i> Start Your Project
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => handleNavClick(e, '#services')}>
              <i className="fas fa-play-circle"></i> Explore Services
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-text">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">75+</div>
              <div className="stat-text">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-text">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-text">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding: 180px 0 100px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.1);
          animation: zoomInOut 20s infinite alternate;
        }

        .slide.active {
          opacity: 0.5;
          transform: scale(1);
        }

        .slide-1 {
          background-image: url('/image1.jpeg');
        }

        .slide-2 {
          background-image: url('/image2.jpeg');
          animation-delay: -4s;
        }

        .slide-3 {
          background-image: url('/image3.jpeg');
          animation-delay: -8s;
        }

        .slide-4 {
          background-image: url('/image4.jpeg');
          animation-delay: -12s;
        }

        .slide-5 {
          background-image: url('/image5.jpeg');
          animation-delay: -16s;
        }

        .slider-controls {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 5;
        }

        .slider-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .slider-dot:hover {
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .slider-dot.active {
          background-color: var(--primary-blue);
          border-color: var(--primary-blue);
          transform: scale(1.4);
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.8), 0 0 25px rgba(37, 99, 235, 0.4);
        }

        .slider-dot.active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border: 2px solid var(--primary-blue);
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse-ring 2s ease-out infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 25, 47, 0.7);
          z-index: 1;
        }

        .light-mode .hero::before {
          background: rgba(255, 255, 255, 0.7);
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
          text-align: center;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-subtitle {
          font-size: 18px;
          color: var(--primary-blue);
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 64px;
          margin-bottom: 24px;
          color: var(--white);
          line-height: 1.1;
        }

        .light-mode .hero-title {
          color: var(--light-text);
        }

        .hero-title span {
          color: var(--primary-blue);
          position: relative;
          display: inline-block;
        }

        .hero-title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(37, 99, 235, 0.2);
          z-index: -1;
          border-radius: 4px;
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
        }

        .light-mode .hero-description {
          color: var(--gray);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
          justify-content: center;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 80px;
        }

        .stat-card {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: pulseGlow 3s ease-in-out 2s infinite;
        }

        .light-mode .stat-card {
          background-color: rgba(10, 25, 47, 0.05);
          border: 1px solid rgba(10, 25, 47, 0.1);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-lg);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(to right, var(--primary-blue), #1d4ed8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
          line-height: 1;
        }

        .light-mode .stat-number {
          background: linear-gradient(to right, var(--accent-blue), var(--primary-blue));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-text {
          font-size: 16px;
          font-weight: 500;
          color: var(--dark-text);
        }

        .light-mode .stat-text {
          color: var(--light-text);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 48px;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 140px 0 60px;
          }
          
          .hero-title {
            font-size: 42px;
          }
          
          .hero-description {
            font-size: 18px;
            text-align: center;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .slide.active {
            opacity: 0.6;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 36px;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
          }
          
          .slider-controls {
            bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;