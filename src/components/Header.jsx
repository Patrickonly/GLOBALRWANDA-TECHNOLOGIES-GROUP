import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="container header-content">
        <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.jpg" alt="GlobalRwanda Technologies Group" style={{ height: '50px', width: '50px', borderRadius: '6px', objectFit: 'cover' }} />
          <div>
            <div className="logo-text">GLOBALRWANDA</div>
            <div className="logo-subtitle">TECHNOLOGIES GROUP</div>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="mainNav">
          <ul>
            <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
            <li><Link to="/services" onClick={handleNavClick}>Services</Link></li>
            <li><Link to="/vision" onClick={handleNavClick}>Vision</Link></li>
            <li><Link to="/values" onClick={handleNavClick}>Values</Link></li>
            <li><Link to="/structure" onClick={handleNavClick}>Structure</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <Link to="/contact" className="btn btn-primary header-btn" onClick={handleNavClick}>Get Started</Link>
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 18px 0;
          z-index: 1000;
          background-color: rgba(10, 25, 47, 0.95);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(37, 99, 235, 0.1);
          transition: var(--transition);
          transform: translateY(0);
        }

        .light-mode .header {
          background-color: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .header.scrolled {
          padding: 12px 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          transition: var(--transition);
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 22px;
          font-weight: 800;
          box-shadow: var(--shadow);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .light-mode .logo-icon {
          background: linear-gradient(135deg, var(--primary-blue), #1d4ed8);
          color: var(--white);
          border: 2px solid var(--primary-blue);
        }

        .logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: var(--white);
          letter-spacing: 0.5px;
        }

        .light-mode .logo-text {
          background: linear-gradient(to right, var(--accent-blue), var(--primary-blue));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .logo-subtitle {
          font-size: 11px;
          color: #34d399;
          letter-spacing: 1.5px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .light-mode .logo-subtitle {
          color: #34d399;
        }

        .nav ul {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav a {
          text-decoration: none;
          color: var(--white);
          font-weight: 600;
          font-size: 15px;
          position: relative;
          padding: 8px 0;
          transition: var(--transition);
          letter-spacing: 0.3px;
        }

        .light-mode .nav a {
          color: var(--primary-blue);
        }

        .nav a:hover {
          color: var(--primary-blue);
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--primary-blue);
          transition: var(--transition);
          border-radius: 2px;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 22px;
          color: var(--white);
          transition: var(--transition);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(37, 99, 235, 0.1);
        }

        .light-mode .theme-toggle {
          color: var(--primary-blue);
          background-color: rgba(37, 99, 235, 0.15);
        }

        .theme-toggle:hover {
          background-color: rgba(37, 99, 235, 0.2);
          transform: rotate(15deg);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 24px;
          color: var(--white);
          transition: var(--transition);
        }

        .light-mode .mobile-menu-btn {
          color: var(--primary-blue);
        }

        @media (max-width: 768px) {
          .logo .logo-text,
          .logo .logo-subtitle {
            display: none;
          }
          
          .nav {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: var(--dark-bg);
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            z-index: 999;
          }
          
          .light-mode .nav {
            background-color: var(--white);
          }
          
          .nav.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav ul {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;