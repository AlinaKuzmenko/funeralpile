import React from 'react';
import styles from './styles.module.scss';

interface IContent {
  children: React.ReactNode;
}

function Layout({ children }: IContent) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
