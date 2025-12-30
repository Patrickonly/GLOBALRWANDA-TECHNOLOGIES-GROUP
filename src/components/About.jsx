import React, { useEffect, useRef } from 'react';

const About = ({ darkMode }) => {
  const aboutRef = useRef(null);

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
    <section id="about" className="section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title fade-in">About Our Company</h2>
        <div className="section-subtitle fade-in">Transforming businesses through technology innovation</div>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <p>GLOBALRWANDA TECHNOLOGIES GROUP is a premier technology-driven company specializing in innovative IT and digital solutions for businesses, organizations, and institutions. Headquartered in Kigali, Rwanda and operating with global reach, we deliver reliable, scalable, and future-ready technology services designed to enhance efficiency, productivity, and digital transformation across industries.</p>
            <p>Our team combines deep technical expertise with industry knowledge and a client-focused approach to develop solutions that meet both local and international standards. We serve clients across Africa and beyond, providing global-standard solutions for businesses of all sizes—from startups and SMEs to large enterprises and government institutions.</p>
            <p>With over a decade of experience in the tech industry, we have established ourselves as a trusted partner for digital transformation, helping organizations leverage technology to achieve their strategic objectives and gain competitive advantage in today's rapidly evolving digital landscape.</p>
          </div>
          
          <div className="about-images-grid fade-in">
            <div className="about-image-container main-image">
              <img 
                src="/image3.jpeg" 
                alt="Digital Innovation" 
                className="about-image"
              />
            </div>
            <div className="about-image-container secondary-image">
              <img 
                src="/image1.jpeg" 
                alt="Technology Solutions" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
        }

        .light-mode .about-text p {
          color: var(--gray);
        }

        .about-images-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .about-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: var(--transition);
        }

        .main-image {
          grid-column: 1;
        }

        .secondary-image {
          grid-column: 1;
        }

        .about-image-container:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.3);
        }

        .about-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .main-image .about-image {
          height: 400px;
        }

        .about-image-container:hover .about-image {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;