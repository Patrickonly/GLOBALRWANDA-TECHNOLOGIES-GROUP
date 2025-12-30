import React from 'react';
import CoreValues from '../components/CoreValues';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const ValuesPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <CoreValues darkMode={darkMode} />
    </div>
  );
};

export default ValuesPage;
