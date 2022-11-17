import React from 'react';
import { NavLink } from 'react-router-dom';
import { links, socialLinks } from './links';
import './styles.scss';


const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        {links.map(({ to, text }) => (
          <li key={text}>
            <NavLink to={to}>
              {text}
            </NavLink>
          </li>
        ))}
        <li className="social">
          {socialLinks.map(({ to, text }) => (
            <a
              key={text}
              href={to}
            >
              {text}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
