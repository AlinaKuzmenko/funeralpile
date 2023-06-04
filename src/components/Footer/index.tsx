import Text from '../Text';
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <Text
          variant="caption2"
          className="text"
        >
          © 2023, All rights reserved
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
