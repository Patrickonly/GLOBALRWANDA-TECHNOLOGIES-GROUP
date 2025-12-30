import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import Products from '../components/Products';
import Structure from '../components/Structure';
import Contact from '../components/Contact';

const HomePage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <VisionMission darkMode={darkMode} />
      <CoreValues darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <Structure darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
