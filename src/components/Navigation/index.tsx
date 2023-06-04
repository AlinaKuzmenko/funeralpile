import { NavLink } from 'react-router-dom';
import { links } from './links';
import styles from './styles.module.scss';

function Navigation() {
  return (
    <nav className={styles.nav}>
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
