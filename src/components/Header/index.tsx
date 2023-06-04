import Navigation from '../Navigation';
import SocialMedia from '../SocialMedia';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <SocialMedia />
      </div>
    </header>
  );
}

export default Header;

// create component SocialMedia in src/components
// Path: src/components/SocialMedia/index.tsx
// import useStyles from './styles';
//
