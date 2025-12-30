import React from 'react';
import About from '../components/About';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const AboutPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <About darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;
