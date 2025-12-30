import React from 'react';
import Services from '../components/Services';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const ServicesPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <Services darkMode={darkMode} />
    </div>
  );
};

export default ServicesPage;
