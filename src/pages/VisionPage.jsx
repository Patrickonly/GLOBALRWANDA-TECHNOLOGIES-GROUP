import React from 'react';
import VisionMission from '../components/VisionMission';

const VisionPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <VisionMission darkMode={darkMode} />
    </div>
  );
};

export default VisionPage;
