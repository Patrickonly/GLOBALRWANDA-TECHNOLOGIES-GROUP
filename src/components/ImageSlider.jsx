import React, { useState, useEffect } from 'react';

const ImageSlider = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
      title: 'Web Development Excellence',
      description: 'Building modern, responsive websites and web applications'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
      title: 'Integrated Systems',
      description: 'Custom enterprise solutions tailored to your business needs'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      title: 'Digital Marketing',
      description: 'Grow your online presence with strategic digital marketing'
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
      title: 'IT Consultancy',
      description: 'Expert guidance for your digital transformation journey'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="image-slider-section">
      <div className="slider-container">
        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next slide">
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .image-slider-section {
          width: 100%;
          margin-top: 80px;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 0;
        }

        .slides-wrapper {
          display: flex;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide {
          min-width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(59, 130, 246, 0.6));
        }

        .slide-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: var(--white);
          max-width: 800px;
          padding: 0 20px;
          animation: slideInUp 0.8s ease-out;
        }

        .slide-title {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .slide-description {
          font-size: 24px;
          font-weight: 400;
          opacity: 0.95;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: var(--white);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          font-size: 24px;
        }

        .slider-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .prev-btn {
          left: 30px;
        }

        .next-btn {
          right: 30px;
        }

        .slider-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        .dot.active {
          background: var(--white);
          width: 40px;
          border-radius: 7px;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .slider-container {
            height: 450px;
          }

          .slide-title {
            font-size: 36px;
          }

          .slide-description {
            font-size: 18px;
          }

          .slider-btn {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .prev-btn {
            left: 15px;
          }

          .next-btn {
            right: 15px;
          }
        }

        @media (max-width: 480px) {
          .slider-container {
            height: 350px;
          }

          .slide-title {
            font-size: 28px;
          }

          .slide-description {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;
