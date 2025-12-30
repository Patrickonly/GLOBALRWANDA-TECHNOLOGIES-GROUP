import React from 'react';
import Structure from '../components/Structure';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const StructurePage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <Structure darkMode={darkMode} />
    </div>
  );
};

export default StructurePage;
