import React from 'react';
import './styles.scss';


const Section = ({ children, className }) => {
  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  )
};

export default Section;
