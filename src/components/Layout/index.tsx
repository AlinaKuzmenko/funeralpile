import React from 'react';
import './styles.scss';

interface IContent {
  className?: string;
  children: React.ReactNode;
}

function Layout({ children, className = '' }: IContent) {
  return (
    <div className="layout">
      <div className={`content ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
