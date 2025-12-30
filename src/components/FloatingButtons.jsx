import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [message, setMessage] = useState('');

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

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setShowWhatsAppPopup(!showWhatsAppPopup);
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = '250786485989';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowWhatsAppPopup(false);
    setMessage('');
  };

  return (
    <div className="floating-buttons">
      {showWhatsAppPopup && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h4>Send WhatsApp Message</h4>
            <button className="close-btn" onClick={() => setShowWhatsAppPopup(false)}>×</button>
          </div>
          <textarea
            className="message-input"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
          <button className="send-btn" onClick={sendWhatsAppMessage}>
            <i className="fab fa-whatsapp"></i> Send Message
          </button>
        </div>
      )}
      
      <a href="#" className="whatsapp-float" onClick={handleWhatsAppClick}>
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

        .whatsapp-popup {
          position: fixed;
          bottom: 150px;
          left: 30px;
          width: 300px;
          background: var(--white);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }

        .light-mode .whatsapp-popup {
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .dark-mode .whatsapp-popup {
          background: #1a1a2e;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .popup-header h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .light-mode .popup-header h4 {
          color: var(--dark-bg);
        }

        .dark-mode .popup-header h4 {
          color: var(--white);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: var(--gray);
          line-height: 1;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .close-btn:hover {
          color: var(--primary-blue);
        }

        .message-input {
          width: 100%;
          padding: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          resize: vertical;
          margin-bottom: 12px;
          transition: var(--transition);
        }

        .light-mode .message-input {
          background: var(--white);
          color: var(--dark-bg);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .dark-mode .message-input {
          background: #0f0f1e;
          color: var(--white);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .message-input:focus {
          outline: none;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .send-btn {
          width: 100%;
          padding: 12px;
          background: #25d366;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }

        .send-btn:hover {
          background: #1fb855;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
        }

        .send-btn i {
          font-size: 18px;
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
          .whatsapp-popup {
            left: 15px;
            bottom: 110px;
            width: calc(100% - 30px);
            max-width: 300px;
          }
          
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