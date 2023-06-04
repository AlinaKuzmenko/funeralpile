import styles from './styles.module.scss';

interface ISpinner {
  size?: number;
}

function Spinner({ size = 40 }: ISpinner) {
  return (
    <div className={styles.spinner} style={{ width: size, height: size }} />
  );
}

export default Spinner;
