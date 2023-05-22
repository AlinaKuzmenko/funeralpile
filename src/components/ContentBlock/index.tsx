import React from 'react';
import './styles.scss';

interface IContentBlock {
  className?: string;
  children: React.ReactNode;
}
function ContentBlock({ className, children }: IContentBlock) {
  return (
    <div className={`contentBlock ${className}`}>
      {children}
    </div>
  );
}

export default ContentBlock;
