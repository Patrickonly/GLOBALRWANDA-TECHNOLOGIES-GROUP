import React from 'react';
import Contact from '../components/Contact';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const ContactPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default ContactPage;
