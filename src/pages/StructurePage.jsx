import React from 'react';
import Structure from '../components/Structure';

const StructurePage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Structure darkMode={darkMode} />
    </div>
  );
};

export default StructurePage;
