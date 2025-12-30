import React from 'react';
import CoreValues from '../components/CoreValues';

const ValuesPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <CoreValues darkMode={darkMode} />
    </div>
  );
};

export default ValuesPage;
