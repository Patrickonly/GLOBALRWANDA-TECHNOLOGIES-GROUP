import React from 'react';
import Products from '../components/Products';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

const ProductsPage = ({ darkMode }) => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <BreadcrumbNavigation darkMode={darkMode} />
      <Products darkMode={darkMode} />
    </div>
  );
};

export default ProductsPage;
