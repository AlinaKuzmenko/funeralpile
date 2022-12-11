import React from 'react';
import { NavLink } from 'react-router-dom';
import { links, socialLinks } from './links';
import * as Icon  from '@fortawesome/fontawesome-free';
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
          {socialLinks.map(({ to, className }) => (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noreferrer"
            >
              add img
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
