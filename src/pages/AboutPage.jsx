import React from 'react';
import About from '../components/About';

const AboutPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <About darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;
