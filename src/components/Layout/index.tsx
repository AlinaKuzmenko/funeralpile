import React from 'react';
import styles from './styles.module.scss';

interface IContent {
  className?: string;
  children: React.ReactNode;
}

function Layout({ children, className = '' }: IContent) {
  return (
    <div className={styles.layout}>
      <div className={`${styles.content} ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
