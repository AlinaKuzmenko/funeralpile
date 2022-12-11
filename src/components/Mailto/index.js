import React from 'react';
import './styles.scss';


const Mailto = ({ text, email }) => {
  return (
    <div className="mailto">
      <span className="text">
        {text}:
      </span>
      <a
        href={`mailto:${email}`}
        className="link"
      >
        {email}
      </a>
    </div>
  )
};

export default Mailto;
