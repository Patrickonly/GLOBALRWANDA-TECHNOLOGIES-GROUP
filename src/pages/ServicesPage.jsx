import React from 'react';
import Services from '../components/Services';

const ServicesPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Services darkMode={darkMode} />
    </div>
  );
};

export default ServicesPage;
