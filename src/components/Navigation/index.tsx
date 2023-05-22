import { NavLink } from 'react-router-dom';
import { links } from './links';
import './styles.scss';

function Navigation() {
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
      </ul>
    </nav>
  );
}

export default Navigation;
