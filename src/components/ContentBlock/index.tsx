import React from 'react';
import styles from './styles.module.scss';

interface IContentBlock {
  className?: string;
  children: React.ReactNode;
}
function ContentBlock({ className, children }: IContentBlock) {
  return (
    <div className={`${styles.contentBlock} ${className}`}>
      {children}
    </div>
  );
}

export default ContentBlock;
