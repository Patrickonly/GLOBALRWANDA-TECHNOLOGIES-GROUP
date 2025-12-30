import React from 'react';
import VisionMission from '../components/VisionMission';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const VisionPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <VisionMission darkMode={darkMode} />
    </div>
  );
};

export default VisionPage;
