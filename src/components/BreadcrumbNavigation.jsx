import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNavigation = ({ darkMode }) => {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    const routes = {
      '/': 'Home',
      '/about': 'About Us',
      '/services': 'Services',
      '/vision': 'Vision & Mission',
      '/values': 'Core Values',
      '/structure': 'Company Structure',
      '/contact': 'Contact Us'
    };
    return routes[pathname] || 'Page';
  };

  const currentPage = getPageTitle(location.pathname);

  return (
    <div className="breadcrumb-nav">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="breadcrumb-separator">
              <i className="fas fa-chevron-right"></i>
            </li>
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                Website
              </Link>
            </li>
            <li className="breadcrumb-separator">
              <i className="fas fa-chevron-right"></i>
            </li>
            <li className="breadcrumb-item current">
              <span className="breadcrumb-current">{currentPage}</span>
            </li>
          </ol>
        </nav>
      </div>

      <style jsx>{`
        .breadcrumb-nav {
          padding: 20px 0 10px;
          background: transparent;
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 8px;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
        }

        .breadcrumb-link {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .light-mode .breadcrumb-link {
          color: var(--primary-blue);
        }

        .dark-mode .breadcrumb-link {
          color: #60a5fa;
        }

        .breadcrumb-link:hover {
          color: var(--accent-blue);
          text-decoration: underline;
        }

        .breadcrumb-link i {
          font-size: 12px;
        }

        .breadcrumb-separator {
          color: var(--gray);
          font-size: 12px;
          margin: 0 4px;
        }

        .light-mode .breadcrumb-separator {
          color: #64748b;
        }

        .dark-mode .breadcrumb-separator {
          color: #94a3b8;
        }

        .breadcrumb-current {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 14px;
        }

        .light-mode .breadcrumb-current {
          color: var(--dark-bg);
        }

        .dark-mode .breadcrumb-current {
          color: var(--white);
        }

        @media (max-width: 768px) {
          .breadcrumb-nav {
            padding: 15px 0 8px;
          }

          .breadcrumb-list {
            gap: 6px;
          }

          .breadcrumb-link,
          .breadcrumb-current {
            font-size: 13px;
          }

          .breadcrumb-link i {
            font-size: 11px;
          }

          .breadcrumb-separator {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .breadcrumb-nav {
            padding: 12px 0 6px;
          }

          .breadcrumb-list {
            flex-wrap: wrap;
            gap: 4px;
          }

          .breadcrumb-link,
          .breadcrumb-current {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default BreadcrumbNavigation;