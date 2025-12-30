import React from 'react';
import Contact from '../components/Contact';

const ContactPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default ContactPage;
